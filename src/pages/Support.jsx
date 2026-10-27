export default function Support() {
  return (
    <main id="main" className="wrap document-page">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"We’re here to help"}
        </div>
        <h1>{"Contact & Support"}</h1>
        <p>
          {
            "Questions about your app, your account or your data? Let’s get you back on track."
          }
        </p>
      </header>
      <div className="pagecontent">
        <div className="support-grid">
          <article>
            <div className="eyebrow">{"Say hello"}</div>
            <h2>{"Contact support"}</h2>
            <p>
              {
                "Email us with a short description of the issue, your Android version and your ScrollSnooze app version."
              }
            </p>
            <a
              className="email"
              href="mailto:siddiqkolimi.dev@gmail.com?subject=ScrollSnooze%20support"
            >
              {"siddiqkolimi.dev@gmail.com ↗"}
            </a>
          </article>
          <article>
            <div className="eyebrow">{"Your account"}</div>
            <h2>{"Privacy & deletion"}</h2>
            <p>
              {
                "You can request account deletion without reinstalling the app. We verify ownership before taking action."
              }
            </p>
            <a className="textlink" href="/delete-account/">
              {"Request account deletion ↗"}
            </a>
          </article>
        </div>
        <div className="faq">
          <h2 style={{ textAlign: "left", fontSize: "30px" }}>
            {"Common questions"}
          </h2>
          <details>
            <summary>{"Counting stopped or shows no data."}</summary>
            <p>
              {
                "Check whether Accessibility access is enabled for ScrollSnooze and whether Android is running the service. Usage Access is a separate permission for app minutes. Counts depend on supported app versions; no data is different from a real zero. Some device security settings can prevent the service from running."
              }
            </p>
          </details>
          <details>
            <summary>{"Google sign-in isn’t working."}</summary>
            <p>
              {
                "Check your connection and that Google Play services are available. Update the app and try again. Contact support with the error message and app version. Never send your Google password, security codes or identity tokens."
              }
            </p>
          </details>
          <details>
            <summary>{"Will signing out delete my data?"}</summary>
            <p>
              {
                "No. Signing out stops the current session’s account backup. To delete cloud data, use account deletion. Local-device reset is separate."
              }
            </p>
          </details>
          <details>
            <summary>{"How do I switch off permissions?"}</summary>
            <p>
              {
                "Open Android settings and disable ScrollSnooze under Accessibility and Usage Access. The app also provides links to these settings. Disabling permissions affects tracking and protection."
              }
            </p>
          </details>
          <details>
            <summary>{"Where can I download ScrollSnooze?"}</summary>
            <p>
              {
                "ScrollSnooze is preparing for its first Android release. A public download link will be added when the Play Store listing is available."
              }
            </p>
          </details>
        </div>
        <div className="callout" style={{ marginTop: "32px" }}>
          <strong>{"Share only what’s needed."}</strong>
          <p>
            {
              "Crop or redact private information from screenshots. Avoid sending viewing history, passwords or account tokens. We’ll ask if more diagnostic information is needed."
            }
          </p>
        </div>
        <p className="note">{"ScrollSnooze is developed by Siddiq Kolimi."}</p>
      </div>
    </main>
  );
}
