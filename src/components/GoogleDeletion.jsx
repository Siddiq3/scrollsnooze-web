import { useEffect, useRef, useState } from "react";
import { deleteAccount, failureMessage, findAccount, GOOGLE_CLIENT_ID, readIdentity } from "../deletion-client.mjs";

function loadGoogle() {
  if (window.google?.accounts?.id) return Promise.resolve(window.google);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => (window.google?.accounts?.id ? resolve(window.google) : reject(new Error("unavailable")));
    script.onerror = () => reject(new Error("unavailable"));
    document.head.appendChild(script);
  });
}

// The Google token stays in memory only, and is dropped as soon as it isn't needed.
export default function GoogleDeletion() {
  const [stage, setStage] = useState("start");
  const [session, setSession] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");
  const buttonSlot = useRef(null);
  const submitting = useRef(false);

  useEffect(() => {
    if (stage === "google") window.google.accounts.id.renderButton(buttonSlot.current, { theme: "outline", size: "large", text: "continue_with" });
  }, [stage]);

  function reset(nextMessage = "") {
    setSession(null);
    setAgreed(false);
    setStage("start");
    setMessage(nextMessage);
  }

  async function signedIn({ credential }) {
    setStage("checking");
    setMessage("");
    try {
      const account = await findAccount(credential);
      if (account.kind === "found") {
        setSession({ credential, incarnation: account.incarnation, ...readIdentity(credential) });
        setStage("confirm");
      } else {
        setStage("start");
        setMessage(account.kind === "already-deleted"
          ? "This Google account’s ScrollSnooze account has already been deleted."
          : "We didn’t find a ScrollSnooze account for this Google account. Nothing was deleted.");
      }
    } catch (error) {
      reset(failureMessage(error.kind));
    }
  }

  async function begin() {
    setMessage("");
    setStage("loading");
    try {
      const google = await loadGoogle();
      google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: signedIn, auto_select: false });
      setStage("google");
    } catch {
      reset("Google sign-in couldn’t load. Check your connection, or request deletion by email below.");
    }
  }

  async function confirmDeletion() {
    if (submitting.current || !session || !agreed) return;
    submitting.current = true;
    setStage("deleting");
    setMessage("");
    try {
      const outcome = await deleteAccount(session.credential, session.incarnation);
      if (outcome === "deleted") {
        setSession(null);
        setStage("done");
      } else {
        setStage("confirm");
        setMessage("Deletion has started but hasn’t finished. Please press Delete again to finish it.");
      }
    } catch (error) {
      if (error.kind === "signin" || error.kind === "changed") reset(failureMessage(error.kind));
      else {
        setStage("confirm");
        setMessage(failureMessage(error.kind));
      }
    } finally {
      submitting.current = false;
    }
  }

  if (stage === "done")
    return <p className="status" role="status">Your ScrollSnooze account has been deleted. If the app is on a phone, it will sign out by itself. Your Google account hasn’t been deleted.</p>;

  if (stage === "confirm" || stage === "deleting")
    return <div className="google-delete">
      <p>You’re signed in as <strong>{session.name || "this Google account"}</strong>{session.email ? ` (${session.email})` : ""}.</p>
      <p>This permanently deletes this ScrollSnooze account, its backed-up history, goals and friends. It can’t be undone.</p>
      <label className="google-delete-agree"><input type="checkbox" checked={agreed} disabled={stage === "deleting"} onChange={(event) => setAgreed(event.target.checked)} /> I understand this can’t be undone</label>
      <div className="draft-actions">
        <button className="button" type="button" disabled={!agreed || stage === "deleting"} onClick={confirmDeletion}>{stage === "deleting" ? "Deleting…" : "Delete my account permanently"}</button>
        <button className="button secondary" type="button" disabled={stage === "deleting"} onClick={() => reset("Cancelled. Your account hasn’t been changed.")}>Cancel</button>
      </div>
      <p className="status" role="status" aria-live="polite">{message}</p>
    </div>;

  return <div className="google-delete">
    {stage === "google"
      ? <div ref={buttonSlot} />
      : <button className="button" type="button" disabled={stage !== "start"} onClick={begin}>{stage === "start" ? "Sign in with Google to continue" : "One moment…"}</button>}
    <p className="note">You’ll see which account you’re deleting and confirm before anything happens. Signing in loads Google’s sign-in service on this page.</p>
    <p className="status" role="status" aria-live="polite">{message}</p>
  </div>;
}
