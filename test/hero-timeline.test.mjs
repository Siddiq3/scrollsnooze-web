import { test } from 'node:test';
import assert from 'node:assert/strict';
import { HERO_LOOP, REEL_COUNTS, EXAMPLE_TOTAL, reelCountAt, moodCountAt } from '../src/components/heroTimeline.mjs';
test('the sample counter advances once per reel and never before a new clip', () => {
  let previous = reelCountAt(0);
  let increments = 0;
  for (let time = 1; time < HERO_LOOP.moods; time++) {
    const count = reelCountAt(time);
    assert.ok(count === previous || count === previous + 1);
    if (count !== previous) increments++;
    previous = count;
  }
  assert.equal(increments, 5);
  assert.equal(reelCountAt(-100), REEL_COUNTS[0]);
  assert.equal(reelCountAt(10000), REEL_COUNTS.at(-1));
});
test('the large counter continues the feed count and reaches the chat total without reversing', () => {
  assert.equal(moodCountAt(0), reelCountAt(HERO_LOOP.moods));
  let previous = moodCountAt(0);
  for (let time = 1; time <= HERO_LOOP.compare - HERO_LOOP.moods; time++) {
    const count = moodCountAt(time);
    assert.ok(count >= previous);
    previous = count;
  }
  assert.equal(previous, EXAMPLE_TOTAL);
  assert.equal(moodCountAt(10000), EXAMPLE_TOTAL);
});
