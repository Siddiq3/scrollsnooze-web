# ScrollSnooze React website

React + Vite implementation of the ScrollSnooze website. This is a new independent folder;
the existing published Sites website and its source remain unchanged.

## Run

Requires Node 22.12+.

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. Each public page has a real HTML
entry with its own title, description and canonical metadata, so direct navigation works
without a single-page fallback. JavaScript is required to render the React page content.

Pages: `/`, `/privacy/`, `/delete-account/`, `/support/`, `/terms/`, `/404.html`.
Shared header/footer: `src/components/`. Page content: `src/pages/`. Styling: `src/styles.css`.
Brand art and local font: `public/assets/`. No Python generator is required.

The landing page follows the BrainPal reference layout: warm background, cream buttons,
an emotion row, scalloped friend section, rotating feature posters, paired cards and FAQ.
All seven illustrations are ScrollSnooze’s own purple characters. Cabinet Grotesk fonts
are self-hosted from Fontshare; the existing Lilita font supplies the brand lettering.

`src/landing.css` defines the reference-inspired layout and motion. The phone uses
`src/components/HeroFeatureLoop.jsx`, recreating the reference's full 11.5-second,
30 fps feature sequence with our artwork:

| Time | Scene |
| --- | --- |
| 0–2.5s | Real reels, faster vertical swipes, counter and pointer arrow |
| 2.5–5.5s | Count increases through fresh, tired and drained character moods |
| 5.5–8.5s | Chat comparison, with messages appearing one at a time |
| 8.5–11.5s | Friend battle, animated scores, lightning and winner glow |

Scene transitions use a 200 ms entrance and 100 ms exit fade. The reel footage is
our workspace's Mixkit stock demo, not the reference website's footage. It is muted,
inline and optimized to about 2 MB, with a poster and manual-play fallback. Samples
are illustrative; friends are labelled in development. Character moods do not measure
brain health. The loop preserves its position while paused and stops when the page
is hidden or Reduce Motion is enabled. The page's Pause animations control stops
both the timeline and reel playback. Download buttons remain coming soon.

Deploy this React project using [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md). The old Sites
hosting project is not used by Vercel. No final domain is hardcoded. Set `SITE_URL` in
Vercel for production metadata and `EXPO_PUBLIC_WEBSITE_URL` in Expo for app links.

The deletion form prepares an email draft locally, shows it for review and offers
Open email app / Copy message. It does not send a request or automatically delete
an account. Users must send the message; support verifies ownership and processes it.
No actual deletion request or account deletion was performed during checks.
