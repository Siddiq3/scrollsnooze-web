# Deploy ScrollSnooze to Vercel

Deploy **scrollsnooze-web**, the React project. `scrollsnooze-site` is the older published
static site; its `.openai/hosting.json` is not used by Vercel.

1. Import the repository in Vercel and set Root Directory to `scrollsnooze-web` (or `.`
   if this folder is the root of a dedicated repository).
2. Framework: Vite. Install: `npm ci`. Build: `npm run build`. Output: `dist`.
3. Choose Node 22.x. Deploy. Keep production pages public, without Vercel login protection.
4. Once your production domain is known, set `SITE_URL=https://YOUR-REAL-DOMAIN` in
   Vercel's Production environment and redeploy. This generates canonical URLs,
   Open Graph URLs, robots.txt and sitemap.xml for the correct domain. The build
   can use Vercel's `VERCEL_PROJECT_PRODUCTION_URL` automatically when available.
   A local build with no origin omits absolute metadata rather than using the old site.
5. Open `/privacy/`, `/delete-account/`, `/terms/` and `/support/` directly and refresh
   each URL. Vercel serves real HTML entries. No backend or email secret is needed.
6. In Expo's Production environment, add **EXPO_PUBLIC_WEBSITE_URL** with the same
   production origin. Alternatively add it to `build.production.env` in `driftless/eas.json`.
   Rebuild the app: Expo embeds this value at build time. `EXPO_PUBLIC_API_URL` continues
   to point to the AWS API; the website origin is a separate setting.
7. In Play Console use `https://YOUR-REAL-DOMAIN/privacy/` for Privacy Policy and
   `https://YOUR-REAL-DOMAIN/delete-account/` for the account-deletion resource.
8. Use the privacy and terms URLs in Google OAuth app branding if requested. This
   website currently has no Google login, so it needs no OAuth redirect URI.

The app derives privacy, deletion, support and terms links from its website origin.
Until the setting exists, it hides these external links and retains in-app data controls.
Do not paste example domains into production configuration.

## Deletion operations

The website prepares a request email to siddiqkolimi.dev@gmail.com. The user must send it.
It does not immediately delete accounts or record a server-side request. The Copy message
fallback works for webmail. Monitor this inbox, verify ownership and complete deletion
through the authenticated account workflow. Keep support requests only as needed.
Do not claim a request has been received until you receive the email. In-app authenticated
deletion remains available separately. No live user account was deleted in verification.

## Checks

`node --test test/deletion-request.test.mjs` checks email validation and encoding.
`npm run build` builds all page entries. Recheck policy disclosures whenever providers,
retention, payments or app data flows change. No Vercel analytics is included.

## War invitation links

Shared links now use `https://scrollsnooze.vercel.app/join/<opaque-token>?utm_content=duel`.
The token travels inside the link; recipients never need to type or copy a code.
Vercel rewrites `/join/:code` to the AWS public join endpoint, preserving query parameters.
The matching backend must be deployed first. A 404 JSON `Not Found` from API Gateway
means the route is not deployed; an HTML expired-invitation page means the route exists.

For installed Android apps, set Vercel Production **ANDROID_SIGNING_SHA256** to the public
SHA-256 from Play Console → App integrity → App signing key certificate. Redeploy Vercel.
Use comma-separated fingerprints to add a directly installed test-build certificate.
The build creates `/.well-known/assetlinks.json` with the correct package. Never use SHA-1.
Without a certificate it deliberately emits an empty list; direct opening is not verified.
`APPLE_TEAM_ID` similarly generates the iOS association file. Neither value is a secret.
No backend URL or key is exposed to a client-side deletion form.

Rebuild the app after the join domain change. Verify the installed Android build using:

```sh
adb shell pm verify-app-links --re-verify com.siddiqkolimi.scrollsnooze
adb shell pm get-app-links com.siddiqkolimi.scrollsnooze
adb shell am start -W -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d 'https://scrollsnooze.vercel.app/join/REAL_TOKEN?utm_content=duel'
```

The token above is a placeholder: test with an invitation created by a signed-in test account.
After a Google Play install from the landing page, Install Referrer carries the invitation
through setup and sign-in; acceptance is always explicit. Validate this with a real Play
testing-track install. Sideloading an APK does not reproduce Play install attribution.
iOS new installs require reopening the invite link after installation. Do not advertise
automatic iOS deferred linking. Until Play publication the download URL is not usable.
