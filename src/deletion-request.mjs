export const SUPPORT_EMAIL = "siddiqkolimi.dev@gmail.com";

export function buildDeletionRequest(email, name = "") {
  const accountEmail = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(accountEmail) || accountEmail.length > 254) {
    throw new Error("Enter the Google account email you used for ScrollSnooze.");
  }
  const subject = "ScrollSnooze account deletion";
  const body = `Hello ScrollSnooze support,\n\nI request deletion of my ScrollSnooze account and associated cloud data.\n\nGoogle account email: ${accountEmail}\nDisplay name or handle: ${name.trim().slice(0, 100) || "Not provided"}\n\nPlease explain the steps needed to verify ownership and confirm when deletion is complete.\n\nThank you.`;
  return {
    body,
    text: `To: ${SUPPORT_EMAIL}\nSubject: ${subject}\n\n${body}`,
    href: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
