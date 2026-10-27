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
