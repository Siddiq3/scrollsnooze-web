import { useEffect, useRef, useState } from "react";
import Mascot from "./Mascot";

import { HERO_LOOP, EXAMPLE_TOTAL, BATTLE_COUNTS, reelCountAt, moodCountAt } from "./heroTimeline.mjs";
export { HERO_LOOP } from "./heroTimeline.mjs";
const easeOut = value => 1 - Math.pow(1 - Math.min(1, Math.max(0, value)), 3);

function Reels({ still, time, video }) {
  const count = reelCountAt(time);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    const player = video.current;
    let active = true;
    player.playbackRate = 1;
    if (still) player.pause();
    else player.play().then(() => {
      if (!active) player.pause();
      else setBlocked(false);
    }).catch(() => { if (active) setBlocked(true); });
    return () => { active = false; player.pause(); };
  }, [still]);
  const play = () => video.current.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
  return <>
    <h3>How many reels<br /><em>today?</em></h3>
    <div className="hero-reel-wrap">
      <div className="demo-feed reel-video-feed">
        <video ref={video} muted playsInline autoPlay={!still} preload="metadata" poster="/media/reels-preview-poster.webp" aria-label="Sample reels playing and swiping vertically">
          <source src="/media/scrollsnooze-reels-preview.mp4" type="video/mp4" />
        </video>
        <div className="reel-counter-anchor" aria-label={`${count} example reels counted`}>
          <div className="counter-pop" key={count}><div className="demo-counter"><Mascot eager alt="" /><strong>{count}</strong></div></div>
          <svg className="counter-arrow" viewBox="0 0 64 74" aria-hidden="true"><path d="M57 7Q45 27 11 59M13 39 8 62 32 56" /></svg>
        </div>
        {blocked && !still && <button className="play-reel" type="button" onClick={play}>▶ Play preview</button>}
      </div>
    </div>
  </>;
}

function MoodScene({ time }) {
  const count = moodCountAt(time);
  const mood = count < 100 ? "fresh" : count < 200 ? "tired" : "drained";
  return <>
    <h3>Your scrolling,<br /><em>at a glance.</em></h3>
    <strong className={`hero-mood-count ${mood}`}>{count}</strong>
    <span className="hero-count-unit">example reels today</span>
    <Mascot key={mood} eager mood={mood} className={`hero-mood-pal mood-${mood}`} alt={`ScrollSnooze feeling ${mood}`} />
    <span className="hero-mood-caption">{mood === "fresh" ? "A fresh start." : mood === "tired" ? "Maybe a little break?" : "Time to put the feed on snooze."}</span>
  </>;
}

function CompareScene({ time }) {
  return <>
    <h3>A little friendly<br /><em>comparison?</em></h3>
    <div className="hero-chat">
      <div className="chat-message" style={{ opacity: time >= 150 ? 1 : 0, transform: `translateY(${time >= 150 ? 0 : 18}px)` }}><span>Alex</span><div className="chat-badge"><Mascot eager mood="drained" alt="" /><b>{EXAMPLE_TOTAL}</b></div><p>my scrolling check-in today</p></div>
      <div className="chat-message chat-green" style={{ opacity: time >= 700 ? 1 : 0, transform: `translateY(${time >= 700 ? 0 : 18}px)` }}><span>Maya</span><p>Time for a break?</p></div>
      <div className="chat-message chat-mine" style={{ opacity: time >= 1250 ? 1 : 0, transform: `translateY(${time >= 1250 ? 0 : 18}px)` }}><p>let’s scroll less together 👊</p></div>
      <div className="chat-message" style={{ opacity: time >= 1900 ? 1 : 0, transform: `translateY(${time >= 1900 ? 0 : 18}px)` }}><span>Sam</span><p>Challenge accepted.</p></div>
    </div>
    <span className="hero-scene-note">Illustrative conversation</span>
  </>;
}

function BattleScene({ time }) {
  const progress = easeOut((time - 200) / 1000);
  return <>
    <h3>Scroll less<br /><em>with friends.</em></h3>
    <div className="hero-battle-board">
      <svg className="battle-lightning" viewBox="0 0 240 270" aria-hidden="true"><path d="M204 5 89 119 119 133 15 258" /></svg>
      <div className={`hero-fighter hero-you ${time > 1800 ? "hero-winner" : ""}`}><Mascot eager alt="Your cheerful character" /><strong>{Math.round(BATTLE_COUNTS.you * progress)}</strong><span>YOU</span></div>
      <div className="hero-fighter hero-friend"><Mascot eager mood="drained" alt="Your friend’s sleepy character" /><strong>{Math.round(BATTLE_COUNTS.friend * progress)}</strong><span>FRIEND</span></div>
      <span className="hero-win-label" style={{ opacity: time > 1900 ? 1 : 0 }}>Less scrolling wins</span>
    </div>
    <span className="hero-scene-note">Friend experiences in development</span>
  </>;
}

export default function HeroFeatureLoop({ still }) {
  const elapsed = useRef(0);
  const video = useRef(null);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (still) return;
    let request;
    let previous;
    let lastFrame = -1;
    const tick = now => {
      if (elapsed.current < HERO_LOOP.moods) {
        // Media time keeps the popup exact through buffering, pausing and replay.
        const player = video.current;
        if (player) elapsed.current = player.ended ? HERO_LOOP.moods : Math.min(HERO_LOOP.moods - 1, player.currentTime * 1000);
      } else if (previous !== undefined) {
        elapsed.current = (elapsed.current + now - previous) % HERO_LOOP.duration;
      }
      previous = now;
      const frame = Math.floor(elapsed.current * 30 / 1000);
      if (frame !== lastFrame) { setTime(elapsed.current); lastFrame = frame; }
      request = requestAnimationFrame(tick);
    };
    request = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(request);
  }, [still]);
  const scene = time < HERO_LOOP.moods ? "reels" : time < HERO_LOOP.compare ? "moods" : time < HERO_LOOP.battle ? "compare" : "battle";
  const start = scene === "reels" ? 0 : scene === "moods" ? HERO_LOOP.moods : scene === "compare" ? HERO_LOOP.compare : HERO_LOOP.battle;
  const end = scene === "reels" ? HERO_LOOP.moods : scene === "moods" ? HERO_LOOP.compare : scene === "compare" ? HERO_LOOP.battle : HERO_LOOP.duration;
  const opacity = still ? 1 : Math.min(1, scene === "reels" ? 1 : (time - start) / 200, (end - time) / 100);
  return <div className="demo-screen feature-loop" data-still={still} aria-label="11.5 second preview: reel counter, character moods, friend comparison and battle">
    <div key={scene} className={`hero-loop-scene hero-loop-${scene}`} style={{ opacity }}>
      {scene === "reels" && <Reels still={still} time={time} video={video} />}
      {scene === "moods" && <MoodScene time={time - HERO_LOOP.moods} />}
      {scene === "compare" && <CompareScene time={time - HERO_LOOP.compare} />}
      {scene === "battle" && <BattleScene time={time - HERO_LOOP.battle} />}
    </div>
  </div>;
}
