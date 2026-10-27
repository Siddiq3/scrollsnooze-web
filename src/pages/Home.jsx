import { useEffect, useRef, useState } from "react";
import Mascot from "../components/Mascot";
import HeroFeatureLoop from "../components/HeroFeatureLoop";

const scenes = [
  { mood: "fresh", title: "Notice your scrolling.", sub: "A little awareness goes a long way.", stat: "24", unit: "example videos" },
  { mood: "focused", title: "Make space to pause.", sub: "Your next scroll can wait.", stat: "30", unit: "minute example goal" },
  { mood: "friends", title: "Bring a friend along.", sub: "Better habits. Better company.", stat: "VS", unit: "friend experiences in development" },
  { mood: "wrapped", title: "Look back. Move forward.", sub: "Find the patterns in your day.", stat: "7", unit: "days, one little recap" },
];
const states = [
  ["fresh", "Fresh", "A new start"],
  ["tired", "Tired", "A long session"],
  ["drained", "Drained", "A limit reached"],
  ["focused", "Focused", "A little pause"],
  ["wrapped", "Reflecting", "A daily check-in"],
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) return;
    el.classList.add("await-reveal");
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        el.classList.add("is-visible");
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` }}>{children}</div>;
}

function StoreLink() {
  return <a className="store-button" href="/support/"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 2v20l16-10z" /></svg>Coming soon to Google Play</a>;
}

export default function Home() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionChanged = () => setReduced(media.matches);
    const visibilityChanged = () => setVisible(!document.hidden);
    media.addEventListener("change", motionChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => { media.removeEventListener("change", motionChanged); document.removeEventListener("visibilitychange", visibilityChanged); };
  }, []);
  const still = paused || reduced || !visible;
  useEffect(() => {
    if (still) return;
    const deck = setInterval(() => setSlide(value => (value + 1) % scenes.length), 4800);
    return () => clearInterval(deck);
  }, [still]);
  const scene = scenes[slide];
  return <main id="main" className={`reference-landing ${still ? "motion-paused" : ""}`}>
    <div className="warm-glow" aria-hidden="true" />
    <section className="reference-hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal><p className="overline">Reels awareness for Android</p></Reveal>
          <Reveal delay={60}><h1>See your <em>reel count.</em></h1></Reveal>
          <Reveal delay={120}><p className="lede">Understand your Reels, Shorts and daily app time. ScrollSnooze helps you notice your habits and find a moment to pause.</p></Reveal>
          <Reveal delay={180}><div className="store-row"><StoreLink /><p className="launch-proof">Android launch in preparation <span>·</span> Your little fresh start</p></div></Reveal>
        </div>
        <Reveal delay={120}>
          <div className="reference-phone-stage">
            <div className="mascot-peek"><Mascot eager alt="ScrollSnooze waving from above the phone" /><span className="speech-bubble">Hi! Let’s scroll a little less.</span></div>
            <div className="reference-phone" aria-label="Animated feature preview">
              <HeroFeatureLoop still={still} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
    <section id="meet-your-mood" className="reference-moods wrap">
      <Reveal><h2>A little companion.<br />Every kind of day.</h2></Reveal>
      <Reveal delay={60}><p className="section-intro">Fresh starts, sleepy scrolls and peaceful pauses. Our character brings a little feeling to your daily check-in.</p></Reveal>
      <div className="reference-states">{states.map(([mood,title,caption], i) => <Reveal delay={i*60} key={mood}><div className="reference-state"><Mascot mood={mood} className="bob" alt={`ScrollSnooze feeling ${title.toLowerCase()}`} /><strong>{title}</strong><span>{caption}</span></div></Reveal>)}</div>
      <Reveal delay={300}><div className="mood-spectrum" /><p className="smallprint">Character moods are illustrations, not a measure of brain health.</p></Reveal>
    </section>
    <section className="reference-battle" id="battle">
      <div className="wrap">
        <Reveal><h2>Better habits. Together.</h2></Reveal>
        <Reveal delay={60}><p className="section-intro">A friendly reason to put the phone down.<br />Compare daily activity and cheer each other on.</p></Reveal>
        <Reveal delay={120}><div className="battle-ring"><div className="battle-player"><Mascot mood="fresh" className="bob" alt="Your cheerful ScrollSnooze companion" /><strong>36</strong><span>YOU</span></div><span className="battle-vs">VS</span><div className="battle-player opponent"><Mascot mood="tired" className="bob" alt="Your friend’s sleepy ScrollSnooze companion" /><strong>93</strong><span>FRIEND</span></div></div></Reveal>
        <Reveal delay={180}><span className="battle-caption">Less scrolling. More high fives.</span><p className="battle-note">Illustrative scores · friend experiences are in development</p></Reveal>
      </div>
    </section>
    <section className="reference-features wrap" id="how-it-works">
      <Reveal><h2>Notice. Pause. Reset.</h2></Reveal>
      <Reveal delay={60}><p className="section-intro">Daily insights, goals and focus times.<br />A little help finding the end of your feed.</p></Reveal>
      <Reveal delay={120}><div className="poster-deck">
        <div className="poster-behind" aria-hidden="true" />
        <div className="feature-poster" key={slide}>
          <span className="poster-brand">SCROLLSNOOZE</span><h3>{scene.title}</h3><p>{scene.sub}</p><Mascot mood={scene.mood} alt={`ScrollSnooze ${scene.mood} feature illustration`} /><div className="poster-stat"><strong>{scene.stat}</strong><span>{scene.unit}</span></div><span className="poster-preview">Illustrative preview</span>
        </div>
      </div><div className="deck-controls" role="group" aria-label="Feature previews">{scenes.map((item,i)=><button key={item.mood} type="button" aria-label={`Show preview ${i+1}: ${item.title}`} aria-pressed={slide===i} onClick={()=>setSlide(i)} />)}</div></Reveal>
      <p className="smallprint">Short-video detection is experimental on supported Instagram and YouTube versions and requires permission. Android app pauses depend on permissions and supported app behavior.</p>
    </section>
    <section className="reference-message wrap"><Reveal><Mascot mood="friends" className="bob" alt="Two ScrollSnooze friends high-fiving" /><p>Less time in the feed.<br /><em>More time for your people.</em></p><span>A little encouragement goes a long way.</span></Reveal></section>
    <section className="reference-choices wrap">
      <Reveal><h2>Your pace. Your choice.</h2></Reveal>
      <div className="reference-plans"><Reveal><article><span className="overline">Start small</span><h3>Make it yours.</h3><ul><li>Daily app-time insights</li><li>Your own goals and intentions</li><li>Guest mode, without an account</li></ul><a href="/support/">Getting started ↗</a></article></Reveal><Reveal delay={60}><article className="protected-plan"><Mascot mood="privacy" className="bob plan-pal" alt="ScrollSnooze protecting your privacy" /><span className="overline">Stay in control</span><h3>Your data. Your say.</h3><ul><li>Choose your permissions</li><li>Google sign-in for supported backup</li><li>Request account deletion anytime</li></ul><a href="/privacy/">Read the privacy policy ↗</a></article></Reveal></div>
    </section>
    <section className="reference-faq wrap"><Reveal><div className="reference-faq-head"><Mascot mood="tired" alt="Our curious sleepy character" /><h2>Questions?</h2></div></Reveal><Reveal delay={60}><div className="faq">
        <details>
          <summary>{"Can I use ScrollSnooze without an account?"}</summary>
          <p>
            {
              "Yes. Local tracking and goals are available to guests. Signing in with Google enables automatic account backup of saved goals and supported daily history. Friend sharing requires a separate choice."
            }
          </p>
        </details>
        <details>
          <summary>{"Does it count every Reel or Short?"}</summary>
          <p>
            {
              "No count is guaranteed. Video detection is experimental on supported Instagram and YouTube versions, and depends on access being enabled. Other supported apps may provide app minutes only. Missing or unvalidated data is identified in the app."
            }
          </p>
        </details>
        <details>
          <summary>{"Why does it ask for Accessibility access?"}</summary>
          <p>
            {
              "Optional Accessibility access helps detect supported short-video surfaces and apply configured pauses. Usage Access supplies app minutes. The app explains these permissions before you decide, and you can revoke them in Android settings."
            }
          </p>
        </details>
        <details>
          <summary>{"Is ScrollSnooze available on iPhone?"}</summary>
          <p>
            {
              "The initial launch is for Android. An iPhone version is in development; individual Reels and Shorts counting is not available through Apple’s Screen Time APIs."
            }
          </p>
        </details>
        <details>
          <summary>{"How do I delete my account?"}</summary>
          <p>
            {"Use Privacy & data in the app, or "}
            <a
              href="/delete-account/"
              style={{ color: "#ddc7ff", textDecoration: "underline" }}
            >
              {"request deletion here"}
            </a>
            {". You don’t need to reinstall the app to make a request."}
          </p>
        </details>
    </div></Reveal></section>
    <section className="reference-final" id="get-the-app"><div className="wrap"><Reveal><Mascot mood="focused" className="bob" alt="ScrollSnooze enjoying a peaceful pause" /></Reveal><Reveal delay={60}><h2>Scroll less. Live a little more.</h2></Reveal><Reveal delay={120}><StoreLink /></Reveal><p className="smallprint">ScrollSnooze is preparing for its Android debut.</p><button type="button" className="motion-control" onClick={()=>setPaused(value=>!value)} aria-pressed={paused}>{paused ? "Resume animations" : "Pause animations"}</button></div></section>
  </main>;
}
