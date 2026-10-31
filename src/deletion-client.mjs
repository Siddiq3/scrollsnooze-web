// The client ID and API address are public values, already shipped in the app.
export const GOOGLE_CLIENT_ID = "642376879468-jr70kvap8q8ml33hac4to9aqctla1kce.apps.googleusercontent.com";
export const API_URL = "https://pwi8tdewmb.execute-api.us-east-1.amazonaws.com";

const fail = (kind) => Object.assign(new Error(kind), { kind });

/** For showing who is signed in only. The server verifies the token itself. */
export function readIdentity(credential) {
  try {
    const part = credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(part), (c) => c.charCodeAt(0));
    const claims = JSON.parse(new TextDecoder().decode(bytes));
    return { name: claims.name ?? "", email: claims.email ?? "" };
  } catch {
    return { name: "", email: "" };
  }
}

async function request(path, method, credential, fetcher, extraHeaders = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  let response;
  try {
    response = await fetcher(`${API_URL}${path}`, {
      method,
      signal: controller.signal,
      credentials: "omit",
      headers: { authorization: `Bearer ${credential}`, ...extraHeaders },
    });
  } catch {
    throw fail("network");
  } finally {
    clearTimeout(timer);
  }
  if (response.status === 401 || response.status === 403) throw fail("signin");
  if (response.status === 409) throw fail("changed");
  if (!response.ok) throw fail("server");
  try {
    return await response.json();
  } catch {
    throw fail("server");
  }
}

export async function findAccount(credential, fetcher = fetch) {
  const { state, incarnation } = await request("/v1/account", "GET", credential, fetcher);
  if (state === "active" || state === "deleting") return { kind: "found", incarnation };
  return { kind: state === "deleted" ? "already-deleted" : "none" };
}

/** Safe to repeat: the server resumes an interrupted deletion and never deletes twice. */
export async function deleteAccount(credential, incarnation, fetcher = fetch) {
  const { state } = await request("/v1/account/delete", "POST", credential, fetcher, {
    "x-account-incarnation": incarnation,
  });
  return state === "completed" ? "deleted" : "in-progress";
}

export function failureMessage(kind) {
  if (kind === "signin") return "Your Google sign-in has expired or wasn’t accepted. Nothing was deleted. Please sign in again.";
  if (kind === "changed") return "This account changed since you signed in. Nothing was deleted by this request. Please sign in again.";
  if (kind === "network") return "We couldn’t reach ScrollSnooze, or your Google sign-in has expired. Check your connection and try again, or cancel and sign in again. We can’t confirm the account was deleted.";
  return "Something went wrong on our side. We can’t confirm the account was deleted. Please try again, or request deletion by email below.";
}
