export default function Privacy() {
  return (
    <main id="main" className="wrap document-page">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"Your privacy"}
        </div>
        <h1>{"Privacy Policy"}</h1>
        <p>{"ScrollSnooze privacy policy · Last updated October 27, 2026"}</p>
      </header>
      <div className="legal-grid">
        <aside className="toc" aria-label="On this page">
          <strong>{"On this page"}</strong>
          <a href="#overview">{"The short version"}</a>
          <a href="#device">{"What stays on your device"}</a>
          <a href="#account">{"Google sign-in & account backup"}</a>
          <a href="#sharing">{"Friends, challenges & notifications"}</a>
          <a href="#providers">{"Service providers & website data"}</a>
          <a href="#retention">{"Retention & security"}</a>
          <a href="#choices">{"Your choices & deletion"}</a>
          <a href="#updates">{"Children, changes & contact"}</a>
        </aside>
        <article className="legal">
          <section id="overview">
            <h2>{"The short version"}</h2>
            <div className="callout">
              <strong>{"Your choices come first."}</strong>
              <p>
                {
                  "Use local tracking as a guest. Signing in with Google enables account backup. Sharing totals with friends is a separate choice. You can request account deletion inside or outside the app."
                }
              </p>
            </div>
            <p>
              {
                "This policy describes ScrollSnooze, developed by Siddiq Kolimi. Contact "
              }
              <a href="mailto:siddiqkolimi.dev@gmail.com">
                {"siddiqkolimi.dev@gmail.com"}
              </a>
              {
                " with privacy questions. It covers the Android app and this website."
              }
            </p>
          </section>
          <section id="device">
            <h2>{"What stays on your device"}</h2>
            <p>
              {
                "If you allow Accessibility access, ScrollSnooze processes interface structures in supported apps to identify short-video surfaces, count activity and apply configured pauses. Interface text used for duplicate detection is converted to short-lived salted fingerprints. Raw viewed-video titles, messages and screenshots are not part of ordinary account backup."
              }
            </p>
            <p>
              {
                "Usage Access, when allowed, supplies foreground minutes in supported apps. Your phone also stores goals, setup answers, preferences, daily activity and measurement-quality records. Setup answers are not uploaded by the current backup flow. Raw recorder events and fingerprints stay on the device unless you explicitly export and share diagnostic information."
              }
            </p>
            <p>
              {
                "Counting depends on supported app versions and permissions. Experimental or missing measurements are not a promise of complete or accurate tracking."
              }
            </p>
          </section>
          <section id="account">
            <h2>{"Google sign-in & account backup"}</h2>
            <p>
              {
                "Google handles sign-in and supplies an identity token. ScrollSnooze uses an opaque Google identifier to identify your account, plus a display name or a fallback derived from your email for presentation. We do not receive your Google password or gain access to Gmail or Google Drive through this sign-in."
              }
            </p>
            <p>
              {
                "As explained during sign-in, signing in enables automatic backup. The backend stores your account profile and timezone, saved goals, supported daily usage totals, measurement-quality fields and random device identifiers. Private video totals can include experimental measurements; they do not establish competitive-score eligibility. Where applicable, account-wide limit and device-allocation records support usage protection."
              }
            </p>
            <p>
              {
                "Signing out stops this app session’s automatic backup. It does not delete information already backed up."
              }
            </p>
          </section>
          <section id="sharing">
            <h2>{"Friends, challenges & notifications"}</h2>
            <p>
              {
                "General friend sharing is separate from sign-in. If enabled, accepted friends can see eligible daily totals. Starting or accepting a scoped battle can separately authorize sharing an aggregate score for the displayed battle window. These permissions do not share raw viewing events or video content. Use the app’s sharing controls or remove a friend to manage access."
              }
            </p>
            <p>
              {
                "If you allow notifications, local reminders may be scheduled. Where remote notifications are configured, the backend processes a device push token and delivery records. ScrollSnooze does not sell subscriptions in the initial release and does not receive your payment-card details."
              }
            </p>
          </section>
          <section id="providers">
            <h2>{"Service providers & website data"}</h2>
            <p>
              {
                "Account services are hosted on Amazon Web Services. Google provides authentication and Google Play distribution; Google services may deliver configured Android push notifications. This website is hosted by Vercel and its hosting infrastructure. These providers may process technical information outside your country."
              }
            </p>
            <p>
              {
                "Requests to this website expose ordinary connection information, such as IP address, browser request headers and requested pages, to the hosting provider. The site does not set advertising cookies, embed behavioral analytics, or submit its deletion form to a database. The form prepares an email in your chosen email app; it is sent only when you send it."
              }
            </p>
            <p>
              {
                "We do not sell your personal information. If you email support, we receive your email address, message and any attachments you choose to send. Do not send passwords, access tokens or private viewing logs."
              }
            </p>
          </section>
          <section id="retention">
            <h2>{"Retention & security"}</h2>
            <p>
              {
                "Local daily totals remain until reset or removal, subject to local cleanup rules. Raw local event history is normally pruned after 30 days. Cloud daily usage records are configured to expire after up to 400 days; database TTL removal can occur asynchronously after expiry. Profile, goal and relationship records remain until deletion or removal."
              }
            </p>
            <p>
              {
                "Application operational logs are configured for 30-day retention. Deleted records may remain in protected database recovery backups until those recovery copies expire; the configured point-in-time recovery system can retain earlier states for up to 35 days. Backups are not used to serve normal app requests. Support correspondence is retained only as needed to resolve your request or meet necessary legal or security obligations."
              }
            </p>
            <p>
              {
                "Account requests use HTTPS and authenticated account-scoped access. No service can guarantee absolute security."
              }
            </p>
          </section>
          <section id="choices">
            <h2>{"Your choices & deletion"}</h2>
            <p>
              {
                "You can turn Accessibility and Usage Access off in Android settings. In the app, Privacy & data provides export, local-reset and account-deletion controls. Cloud account deletion and clearing a phone’s local data are separate actions."
              }
            </p>
            <p>
              {"To request deletion without the app, use our "}
              <a href="/delete-account/">{"account-deletion page"}</a>
              {" or email "}
              <a href="mailto:siddiqkolimi.dev@gmail.com?subject=ScrollSnooze%20account%20deletion">
                {"siddiqkolimi.dev@gmail.com"}
              </a>
              {
                ". We verify account ownership before processing a request. Deletion removes your ScrollSnooze data, not your Google account. If a necessary legal or security obligation requires limited retention, we will explain the affected information and reason."
              }
            </p>
          </section>
          <section id="updates">
            <h2>{"Children, changes & contact"}</h2>
            <p>
              {
                "ScrollSnooze is not designed specifically for children, and this website does not knowingly solicit children’s personal information. If you believe a child has supplied personal information inappropriately, contact us so we can review and address it."
              }
            </p>
            <p>
              {
                "We may update this policy as the app changes. Material changes will be reflected in the effective date and relevant app notices. For access, correction, deletion or other privacy questions, contact "
              }
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
