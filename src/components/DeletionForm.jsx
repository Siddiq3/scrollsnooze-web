import { useState } from "react";
import { buildDeletionRequest, SUPPORT_EMAIL } from "../deletion-request.mjs";

export default function DeletionForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState("");
  function prepareEmail(event) {
    event.preventDefault();
    try {
      setDraft(buildDeletionRequest(email, name));
      setStatus("Draft prepared. Your deletion request has not been sent yet. Open your email app, review the draft and press Send, or copy the message and email it yourself.");
    } catch (error) { setStatus(error.message); }
  }
  function change(setValue, value) { setValue(value); setDraft(null); setStatus(""); }
  async function copyMessage() {
    try { await navigator.clipboard.writeText(draft.text); setStatus(`Message copied. Paste it into an email to ${SUPPORT_EMAIL} and press Send. Your request has not been sent by this website.`); }
    catch { setStatus("Copy is unavailable in this browser. Select and copy the message below, then send it using your email service."); }
  }
  return <form onSubmit={prepareEmail}>
    <label htmlFor="account-email">Google account email used for ScrollSnooze</label>
    <input id="account-email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} value={email} onChange={event => change(setEmail, event.target.value)} />
    <label htmlFor="display-name">Display name or handle <span className="optional">(optional)</span></label>
    <input id="display-name" type="text" autoComplete="nickname" placeholder="Your name or handle" maxLength={100} value={name} onChange={event => change(setName, event.target.value)} />
    <button className="button" type="submit">Prepare deletion request <span aria-hidden="true">↗</span></button>
    <p className="note">This form prepares a message on your device. It does not send email, submit a request to a server or delete your account.</p>
    <p className="status" role="status" aria-live="polite">{status}</p>
    {draft && <div className="deletion-draft">
      <div className="draft-actions"><a className="button" href={draft.href}>Open email app ↗</a><button type="button" className="button secondary" onClick={copyMessage}>Copy message</button></div>
      <label htmlFor="deletion-message">Your request — send to {SUPPORT_EMAIL}</label>
      <textarea id="deletion-message" readOnly value={draft.text} rows={11} />
      <p className="note">If no email app opens, use your webmail and paste this message. We verify ownership before processing deletion.</p>
    </div>}
  </form>;
}
