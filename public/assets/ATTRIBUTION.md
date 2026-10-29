# Website assets

- ScrollSnooze character illustrations and icon: copied from this workspace's app branding assets; seven purple poses.
- Lilita One: existing app font asset.
- Cabinet Grotesk, weights 500, 700 and 800: Fontshare / Indian Type Foundry, downloaded from the public Fontshare CDN for local web hosting. Source: https://www.fontshare.com/fonts/cabinet-grotesk ; licensing information: https://www.fontshare.com/licenses
- Animated feature cards: original CSS/React scenes in this project.
- Reel footage: six Mixkit stock clips used in the workspace’s original continuous demo; see `/media/SOURCES.md`. The counter overlay uses ScrollSnooze’s character.

BrainPal's public landing page served as the layout and motion reference. Its mascot artwork, marketing videos, ratings and testimonials are not included.

## Meditation character

`meditating.png` was created with the built-in image generation tool on 29 October 2026, using the owner-supplied ScrollSnooze character as the reference.

Prompt: Preserve the same lavender brain character and soft 3D rendering; seat it cross-legged in meditation, eyes closed, smiling gently, hands resting palms-up on its knees. Keep its brain folds, pale belly and rosy cheeks. Full body, centered, transparent background, no props or text.


## Friendly boxing characters

`boxing-you.webp` and `boxing-friend.webp` were created with the built-in image
generation tool on 30 October 2026, using `fresh.webp` as the identity reference.
Both have genuine alpha transparency and are optimized to 800×800 WebP.

Left fighter prompt: Preserve the exact ScrollSnooze purple brain mascot, folds,
large glossy eyes, tiny body, pale tummy and soft 3D rendering. Full-body playful
boxing stance facing right, feet apart, knees bent, mint boxing gloves up, one
reaching forward and the other guarding the chin. Confident friendly smile,
centered square, transparent background, complete gloves and feet, no text or scene.

Right fighter prompt: Match the original mascot and the left fighter’s rendering.
Full-body three-quarter pose facing left, light-blue boxing gloves, leading glove
forward and other glove guarding the chin, feet apart, knees bent and playful
focused grin. Preserve purple coloring and proportions, transparent background,
complete gloves and feet, no text, numbers, ring or scene.


## Independently animated boxing arms

Generated with the built-in image generation tool on 30 October 2026 using the
existing mint- and blue-glove boxers as references. Transparent three-cell atlases
were split into aligned 800×800 WebP layers. The same body is mirrored for the
opponent so both retain a consistent silhouette; glove colors remain distinct.

Saved layers:
- `public/assets/boxing-you-body.webp`
- `public/assets/boxing-you-lead.webp`
- `public/assets/boxing-you-guard.webp`
- `public/assets/boxing-friend-lead.webp`
- `public/assets/boxing-friend-guard.webp`

Prompt set (one atlas per boxer): Preserve the supplied boxer’s mascot identity,
pose, color and soft 3D rendering. Produce a transparent three-cell horizontal
layer atlas with equal square cells. Cell 1 contains only the head, torso and
legs with both arms removed and the body restored cleanly. Cell 2 contains only
the leading arm and glove; cell 3 contains only the guarding arm and glove.
Keep matching full-character coordinates across cells so overlaying them
reconstructs the boxer. Mint-glove boxer faces right; blue-glove boxer faces
left. No text, labels, separators, numbers, scenery or opaque background.
