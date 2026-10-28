# ScrollSnooze website

The landing page follows the responsive composition of https://brainpalapp.ai/,
measured on 28 October 2026. ScrollSnooze retains its purple character assets,
product copy, pre-launch status, privacy disclosures and local font files.

## Visual system

- Warm near-black canvas, cream controls and apricot accents.
- Cabinet for headings and body; Lilita for the ScrollSnooze wordmark.
- An 1120 px content container, with 20 px gutters below 720 px and 32 px above.
- Heading scale: `clamp(44px, 9vw, 80px)`; section titles: `clamp(30px, 5vw, 48px)`.
- At 900 px the hero changes from a vertical stack to text and phone columns.
- The phone stays at most 300 px wide and scales down to 78vw on small phones.
- Five character moods stay together; plan cards stack below 720 px.
- The cream friends section spans the full viewport with scalloped edges.
- The feature deck is at most 560 px wide. Six owner-supplied image posters advance one by one every three seconds, with real neighboring posters behind the centered card and no arrows or pagination dots.

DaisyUI is limited to prefixed `ui-btn` components, avoiding collisions with
existing legal-page classes. `src/theme.css` declares the shared color roles;
Tailwind preflight is omitted to preserve the established document formatting.

## Motion and accessibility

Text and sections are visible on first render. The hero and feature preview
provide motion without hiding content behind reveal observers. Both stop when
offscreen or when the document is hidden.
Reduced motion disables automatic scene changes and character movement.

Keep full alt text, native FAQ details/summary behavior, visible keyboard focus,
responsive text wrapping and the skip link. Do not copy reference testimonials,
download figures, prices or feature guarantees into ScrollSnooze.

## Validation

Check widths 320, 390, 768, 900, 1280 and 1440, including horizontal overflow,
loaded images, heading visibility, FAQ expansion, automatic poster playback and anchor
navigation. Check privacy, deletion, support, terms and the not-found page.
Build with `npm run build`; run `node --test test/*.test.mjs` for existing
account-deletion and app-association behavior.

## Feature artwork

The feature carousel uses the six supplied full poster images in
`public/assets/features/`, with no overlaid headings or generated card artwork.
The complete image fits each card without cropping. Originals are unchanged;
750px-wide WebP copies keep the page lightweight. Source filenames are recorded
in `public/assets/features/SOURCES.md`.
