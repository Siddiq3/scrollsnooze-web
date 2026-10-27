export default function Terms() {
  return (
    <main id="main" className="wrap document-page">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"The ground rules"}
        </div>
        <h1>{"Terms of Use"}</h1>
        <p>{"ScrollSnooze terms of use · Last updated October 27, 2026"}</p>
      </header>
      <div className="legal-grid">
        <aside className="toc" aria-label="On this page">
          <strong>{"On this page"}</strong>
          <a href="#purpose">{"Using ScrollSnooze"}</a>
          <a href="#limits">{"Tracking & protection limits"}</a>
          <a href="#accounts">{"Accounts & responsible use"}</a>
          <a href="#ownership">{"Content & third-party services"}</a>
          <a href="#changes">{"Availability & changes"}</a>
          <a href="#privacy">{"Privacy & ending use"}</a>
        </aside>
        <article className="legal">
          <section id="purpose">
            <h2>{"Using ScrollSnooze"}</h2>
            <p>
              {
                "ScrollSnooze is developed by Siddiq Kolimi to help you understand scrolling habits, set goals and configure optional app pauses. These terms cover the app and this website. By using them, you agree to use them lawfully and respect other people’s privacy."
              }
            </p>
          </section>
          <section id="limits">
            <h2>{"Tracking & protection limits"}</h2>
            <p>
              {
                "Tracking and pause features depend on Android permissions, device behavior and supported third-party app versions. Measurements can be incomplete, experimental or unavailable. Features are not guaranteed to prevent all use, and permissions can be revoked. ScrollSnooze is not a medical service, emergency service or substitute for professional care."
              }
            </p>
          </section>
          <section id="accounts">
            <h2>{"Accounts & responsible use"}</h2>
            <p>
              {
                "You are responsible for the account you use to sign in. Do not impersonate someone, attempt to access another person’s data, or use the service for unauthorized monitoring. Friend and battle sharing should be voluntary. Do not attempt to bypass access controls or disrupt the service."
              }
            </p>
          </section>
          <section id="ownership">
            <h2>{"Content & third-party services"}</h2>
            <p>
              {
                "The ScrollSnooze name, interface and original artwork belong to their respective rights holders. Third-party app names are used to describe compatibility; ScrollSnooze is not affiliated with or endorsed by Instagram, YouTube or other tracked apps. Google authentication, Android permissions and app distribution are subject to those providers’ applicable terms."
              }
            </p>
          </section>
          <section id="changes">
            <h2>{"Availability & changes"}</h2>
            <p>
              {
                "Features may change as the app develops. We may restrict misuse or discontinue features. We do not promise uninterrupted availability, exact measurements or a particular outcome. Nothing in these terms excludes rights or remedies that applicable law does not allow us to exclude."
              }
            </p>
          </section>
          <section id="privacy">
            <h2>{"Privacy & ending use"}</h2>
            <p>
              {"Your data is handled as explained in our "}
              <a href="/privacy/">{"privacy policy"}</a>
              {". You can stop using the app, revoke its permissions and "}
              <a href="/delete-account/">{"request account deletion"}</a>
              {
                ". These actions have different effects on local and cloud data, explained on the deletion page."
              }
            </p>
            <p>
              {"For questions about these terms, contact "}
              <a href="mailto:siddiqkolimi.dev@gmail.com">
                {"siddiqkolimi.dev@gmail.com"}
              </a>
              {"."}
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
