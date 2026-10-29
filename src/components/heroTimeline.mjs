// One count per clip in our six-reel sample, independent of the reference's numbers.
export const HERO_LOOP = { duration: 11500, moods: 2500, compare: 5500, battle: 8500 };
export const REEL_COUNTS = [48, 49, 50, 51, 52, 53];
export const MOOD_COUNTS = [[0, 53], [200, 53], [600, 72], [1500, 141], [2400, 218], [3000, 218]];
export const EXAMPLE_TOTAL = MOOD_COUNTS.at(-1)[1];
export const BATTLE_COUNTS = { you: 28, friend: 74 };
export function reelCountAt(milliseconds) {
  const index = Math.min(REEL_COUNTS.length - 1, Math.max(0, Math.floor(milliseconds / (HERO_LOOP.moods / REEL_COUNTS.length))));
  return REEL_COUNTS[index];
}
export function moodCountAt(milliseconds) {
  const time = Math.max(0, milliseconds);
  const next = MOOD_COUNTS.findIndex(([at]) => at > time);
  if (next < 0) return EXAMPLE_TOTAL;
  const [fromTime, fromCount] = MOOD_COUNTS[Math.max(0, next - 1)];
  const [toTime, toCount] = MOOD_COUNTS[next];
  return Math.round(fromCount + (toCount - fromCount) * (time - fromTime) / (toTime - fromTime || 1));
}
