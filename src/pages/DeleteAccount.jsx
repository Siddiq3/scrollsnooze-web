import DeletionForm from "../components/DeletionForm";
export default function DeleteAccount() {
  return (
    <main id="main" className="wrap document-page">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"Account & data deletion"}
        </div>
        <h1>{"Account & Data Deletion"}</h1>
        <p>
          {
            "You’re in control. Request deletion of your ScrollSnooze account and associated data here—even if you no longer have the app."
          }
        </p>
      </header>
      <div className="pagecontent">
        <div className="request">
          <span className="badge">{"Request by email · no app installation needed"}</span>
          <h2 style={{ marginTop: "18px" }}>{"Request account deletion"}</h2>
          <p>
            {"Email "}
            <a
              className="email"
              href="mailto:siddiqkolimi.dev@gmail.com?subject=ScrollSnooze%20account%20deletion"
            >
              {"siddiqkolimi.dev@gmail.com"}
            </a>
            {" with the subject "}
            <strong>{"ScrollSnooze account deletion"}</strong>
            {
              ". Include the Google account email you used to sign in and your display name or handle, if known."
            }
          </p>
          <DeletionForm />
        </div>
        <h2>{"What happens next"}</h2>
        <div className="steps">
          <article className="step">
            <b>{"1"}</b>
            <h3>{"Send your request."}</h3>
            <p>
              {
                "Prepare the message above, then send it through your email app or webmail. You can also email us directly. No reinstall or app sign-in is required to make a request."
              }
            </p>
          </article>
          <article className="step">
            <b>{"2"}</b>
            <h3>{"Confirm it’s you."}</h3>
            <p>
              {
                "We may ask for reasonable verification of account ownership. An email address alone does not authorize deletion."
              }
            </p>
          </article>
          <article className="step">
            <b>{"3"}</b>
            <h3>{"We process deletion."}</h3>
            <p>
              {
                "After verification, we process your request and confirm the outcome. We’ll contact you if more information is needed."
              }
            </p>
          </article>
        </div>
        <article className="legal">
          <section>
            <h2>{"What is deleted"}</h2>
            <p>
              {
                "The deletion process removes the ScrollSnooze account profile, backed-up usage history, saved cloud goals, device registrations, friend relationships and challenge participation associated with the account."
              }
            </p>
            <h2>{"What may remain"}</h2>
            <p>
              {
                "Deleted data may persist in protected point-in-time recovery backups until expiry, for up to 35 days. Application operational logs have a 30-day retention configuration. Limited information may need to remain for a necessary legal or security reason; if applicable, we will explain this when responding to your request. See our "
              }
              <a href="/privacy/#retention">{"retention policy"}</a>
              {"."}
            </p>
            <h2>{"What happens on your phone"}</h2>
            <p>
              {
                "Cloud deletion does not erase files already stored on your device. Use "
              }
              <strong>{"Privacy & data → Reset local history"}</strong>
              {
                " in the app, or uninstall it to remove the app’s private device storage. Uninstalling alone does not request cloud account deletion."
              }
            </p>
            <h2>{"Prefer doing it in the app?"}</h2>
            <p>
              {"Sign in to the account you want to delete, open "}
              <strong>{"Privacy & data → Delete my account"}</strong>
              {
                ", and confirm. A recent Google sign-in may be required. If deletion was interrupted, follow the app’s recovery option."
              }
            </p>
            <div className="callout">
              <strong>{"Keep your credentials private."}</strong>
              <p>
                {
                  "Never send passwords, verification codes or authentication tokens. Deleting ScrollSnooze does not delete your Google account."
                }
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
