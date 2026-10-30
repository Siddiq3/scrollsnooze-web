export default function Privacy() {
  return (
    <main id="main" className="wrap document-page">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"Your privacy"}
        </div>
        <h1>{"Privacy Policy"}</h1>
        <p>{"ScrollSnooze privacy policy · Last updated October 30, 2026"}</p>
      </header>
      <div className="legal-grid">
        <aside className="toc" aria-label="On this page">
          <strong>{"On this page"}</strong>
          <a href="#overview">{"The short version"}</a>
          <a href="#device">{"What stays on your device"}</a>
          <a href="#accessibility-limits">{"What Accessibility does not do"}</a>
          <a href="#permissions">{"Other permissions"}</a>
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
                "If you allow Android AccessibilityService access, ScrollSnooze processes, only in Instagram and YouTube, app and foreground-window activity, window-change and scroll events, visible interface text and content descriptions, resource IDs, view classes, visibility and interface structure. These identify players and ads, detect item changes, count the Instagram Reels and YouTube Shorts you watch, measure time spent on them, show your count, goal alerts and meme breaks, and apply configured pauses, including when ScrollSnooze is closed. Relevant text is processed temporarily and converted into salted identifiers, held in memory only, for duplicate detection. Meme breaks use your phone’s language setting. Raw text and captions are not saved or uploaded, including any messages or passwords shown on screen. The accessibility service does not take screenshots. Language-specific meme reaction and selection history, including reaction IDs and caption indices, may be stored locally to manage which reactions are shown. This history is not included in normal account backup. Video detection is experimental."
              }
            </p>
            <p>
              {
                "Separate Usage Access, when allowed, supplies foreground minutes in supported apps. Your phone stores counts, ad counts, viewing time and dates per app, timestamped viewing events for hourly activity and your daily recap, whether a day's count is experimental, goals, setup answers and preferences. Setup answers and viewing-event records are not included in account backup. Developer debug builds can export local diagnostic event records and capture interface structure without raw text or descriptions for accuracy testing; sharing requires an explicit action."
              }
            </p>
            <p>
              {
                "You can decline the in-app disclosure without enabling accessibility tracking, or revoke access at any time in Android Accessibility settings. Signed-in users can read the full explanation again in the app under Profile > Account settings > Your data & account. App-minute tracking can work through separate Usage Access. Counting depends on supported app versions and permissions. Experimental or missing measurements are not a promise of complete or accurate tracking."
              }
            </p>
          </section>
          <section id="accessibility-limits">
            <h2>{"What Accessibility does not do"}</h2>
            <ul>
              <li>
                {
                  "Android delivers Accessibility events to ScrollSnooze only from Instagram (com.instagram.android) and YouTube (com.google.android.youtube). This list is built into the app and can only change through an app update on Google Play."
                }
              </li>
              <li>
                {
                  "Outside those two apps, ScrollSnooze only checks which app is in front (its package name), so it knows you have left Instagram or YouTube. It does not read the screen of other apps, including chat, banking, UPI and payment apps."
                }
              </li>
              <li>
                {"It does not take screenshots or record your screen."}
              </li>
              <li>
                {
                  "It does not save or upload the text you see or type, including messages, passwords and one-time codes. Text in Instagram and YouTube is processed in memory only, to recognise Reels and Shorts."
                }
              </li>
              <li>
                {
                  "Saved viewing records contain only random record IDs, the app, whether the item was an ad, the time and date, your time zone and version numbers. They do not contain video titles, captions, creators, links or screen content."
                }
              </li>
              <li>
                {
                  "It cannot tap, swipe or type for you. Its only action is Android Back, and only when you tap Leave feed on a pause screen."
                }
              </li>
            </ul>
          </section>
          <section id="permissions">
            <h2>{"Other permissions"}</h2>
            <ul>
              <li>
                <strong>{"Usage Access (optional): "}</strong>
                {
                  "reads Android’s usage statistics to measure your minutes in Instagram and YouTube. You can turn it off in Android Settings > Usage access."
                }
              </li>
              <li>
                <strong>{"Notifications (optional): "}</strong>
                {
                  "shows goal alerts at 80% and 100% of a daily goal and, if you turn it on, an evening check-in at 9 pm. These notifications are created on your phone."
                }
              </li>
              <li>
                <strong>{"Internet and network state: "}</strong>
                {"used for sign-in, account backup, friends and challenges."}
              </li>
              <li>
                <strong>{"Run at startup: "}</strong>
                {"lets scheduled reminders continue after your phone restarts."}
              </li>
              <li>
                <strong>{"Vibration and app icon badge: "}</strong>
                {"used for haptic feedback and notification badges."}
              </li>
              <li>
                <strong>{"Google Play install referrer: "}</strong>
                {
                  "read once on your phone after installing, only to open a friend’s challenge invite you followed."
                }
              </li>
            </ul>
            <p>
              {
                "ScrollSnooze does not request Display over other apps, battery optimisation exemptions, in-app purchases, biometrics, location, camera, microphone, contacts, photos or files."
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
                "As explained during sign-in, signing in enables automatic backup. The backend stores your account profile and timezone, saved goals, supported daily usage totals and random device identifiers that keep each phone's totals separate. Raw accessibility text, captions, UI trees and viewing-event records are not included in account backup. Private video totals can include experimental measurements; they do not establish competitive-score eligibility. Where applicable, account-wide limit and device-allocation records support usage protection."
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
                "We use these service providers: Amazon Web Services hosts account services (sign-in verification, backup, friends and challenges). Google provides Google Sign-In, Google Play distribution and the Play install referrer. The Firebase Cloud Messaging library is included with Android notifications, but ScrollSnooze does not currently send remote push notifications. Vercel hosts this website. ScrollSnooze does not use advertising, analytics or crash-reporting SDKs. These providers may process technical information outside your country."
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
                "Local viewing events older than 30 days are purged when the accessibility service connects. Local daily aggregates remain until reset or deletion. Debug exports remain in app cache until removed or the cache is cleared. Application operational logs are configured for 30-day retention and include request route, response status, duration and request ID; unhandled application errors record the error type. These support service operation and troubleshooting. Deleted records may remain in protected database recovery backups until those recovery copies expire; the configured point-in-time recovery system can retain earlier states for up to 35 days. Backups are not used to serve normal app requests. Support correspondence is retained only as needed to resolve your request or meet necessary legal or security obligations."
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
                "You can turn Accessibility and Usage Access off in Android settings. In the app, go to Profile > Account settings > Your data & account to export your data, reset this phone or delete your account and data. Cloud account deletion and clearing a phone’s local data are separate actions."
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
