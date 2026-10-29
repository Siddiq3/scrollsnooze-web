import { useEffect, useRef, useState } from "react";
import useScrollMotion from "../hooks/useScrollMotion";
import Mascot from "../components/Mascot";
import BoxingPlayer from "../components/BoxingPlayer";
import HeroFeatureLoop from "../components/HeroFeatureLoop";
import FeatureDeck from "../components/FeatureDeck";

const scenes = [
  { id: "scroll-habits", title: "Know your scroll habits", image: "/assets/features/scroll-habits.webp", alt: "Know your scroll habits — ScrollSnooze reel preview with the purple mascot" },
  { id: "mindful-break", title: "Less feed. More free time.", image: "/assets/features/mindful-break.webp", alt: "Less feed. More free time. Pause, unwind and recharge with the purple mascot" },
  { id: "choose-when-to-stop", title: "Choose when to stop", image: "/assets/features/choose-when-to-stop.webp", alt: "Choose when to stop — the purple mascot beside a daily limit reached message" },
  { id: "all-your-feeds", title: "All your feeds. One place.", image: "/assets/features/all-your-feeds.webp", alt: "All your feeds. One place. Purple mascot with Instagram, YouTube Shorts, Facebook and Snapchat icons" },
  { id: "weekly-progress", title: "Check weekly progress", image: "/assets/features/weekly-progress.webp", alt: "Check weekly progress — a seven-day activity chart with the purple mascot" },
  { id: "weekly-insights", title: "A fresh look at your week", image: "/assets/features/weekly-insights.webp", alt: "A fresh look at your week — activity, patterns and progress with the purple mascot" },
];
const states = [
  ["fresh", "Fresh", "A new start"],
  ["tired", "Tired", "A long session"],
  ["drained", "Drained", "A limit reached"],
  ["focused", "Focused", "A little pause"],
  ["wrapped", "Reflecting", "A daily check-in"],
];

// Scroll arrivals enhance the composition; content stays visible if motion is unavailable.
function SectionContent({ children, className = "", motion = "rise", delay = 0 }) {
  return <div className={`reveal ${className}`} data-motion={motion} data-motion-delay={delay}>{children}</div>;
}

function useOnScreen() {
  const ref = useRef(null);
  const [onScreen, setOnScreen] = useState(true);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, onScreen];
}

function StoreLink() {
  return <a className="ui-btn store-button" href="/support/"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 2v20l16-10z" /></svg>Coming soon to Google Play</a>;
}

export default function Home() {
  const rootRef = useRef(null);
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
  const still = reduced || !visible;
  useScrollMotion(rootRef, still);
  const [heroRef, heroVisible] = useOnScreen();
  const [deckRef, deckVisible] = useOnScreen();
  useEffect(() => {
    if (still || !deckVisible) return;
    const deck = setInterval(() => setSlide(value => (value + 1) % scenes.length), 3000);
    return () => clearInterval(deck);
  }, [still, deckVisible]);
  return <main id="main" ref={rootRef} className={`reference-landing ${still ? "motion-paused" : ""}`}>
    <div className="warm-glow" aria-hidden="true" />
    <section className="reference-hero">
      <div className="wrap hero-grid">
        <div>
          <SectionContent><h1>See your <em>reel count.</em></h1></SectionContent>
          <SectionContent delay={80}><p className="lede">Understand your Reels, Shorts and daily app time. ScrollSnooze helps you notice your habits and find a moment to pause.</p></SectionContent>
          <SectionContent delay={160}><div className="store-row"><StoreLink /><p className="launch-proof">Android launch in preparation <span>·</span> Your little fresh start</p></div></SectionContent>
        </div>
        <SectionContent motion="phone" delay={100}>
          <div className="reference-phone-stage" ref={heroRef}>
            <div className="mascot-peek"><Mascot eager alt="ScrollSnooze waving from above the phone" /><span className="speech-bubble">Hi! Let’s scroll a little less.</span></div>
            <div className="reference-phone" aria-label="Animated feature preview">
              <HeroFeatureLoop still={still || !heroVisible} />
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
    <section id="meet-your-mood" className="reference-moods wrap">
      <SectionContent><h2>A little companion.<br />Every kind of day.</h2></SectionContent>
      <SectionContent><p className="section-intro">Fresh starts, sleepy scrolls and peaceful pauses. Our character brings a little feeling to your daily check-in.</p></SectionContent>
      <div className="reference-states">{states.map(([mood,title,caption], i) => <SectionContent key={mood} motion="mood" delay={i * 70}><div className="reference-state"><Mascot mood={mood} className="bob" alt={`ScrollSnooze feeling ${title.toLowerCase()}`} /><strong>{title}</strong><span>{caption}</span></div></SectionContent>)}</div>
      <SectionContent motion="none"><div className="mood-spectrum" data-motion="spectrum" /></SectionContent>
    </section>
    <section className="reference-battle" id="battle">
      <div className="wrap">
        <SectionContent><h2>Better habits. Together.</h2></SectionContent>
        <SectionContent><p className="section-intro">A friendly reason to put the phone down.<br />Compare daily activity and cheer each other on.</p></SectionContent>
        <SectionContent motion="friends"><div className="battle-ring"><BoxingPlayer initialCount={36} /><span className="battle-vs">VS</span><BoxingPlayer opponent initialCount={93} /></div></SectionContent>
        <SectionContent><span className="battle-caption">Less scrolling. More high fives.</span></SectionContent>
      </div>
    </section>
    <section className="reference-features wrap" id="how-it-works">
      <SectionContent><h2>Notice. Pause. Reset.</h2></SectionContent>
      <SectionContent><p className="section-intro">Daily insights, goals and focus times.<br />A little help finding the end of your feed.</p></SectionContent>
      <div ref={deckRef} data-motion="deck">
        <FeatureDeck scenes={scenes} active={slide} />
      </div>
    </section>
    <section className="reference-message wrap"><SectionContent motion="settle"><Mascot mood="friends" className="bob" alt="Two ScrollSnooze friends high-fiving" /><p>Less time in the feed.<br /><em>More time for your people.</em></p><span>A little encouragement goes a long way.</span></SectionContent></section>
    <section className="reference-choices wrap">
      <SectionContent><h2>Your pace. Your choice.</h2></SectionContent>
      <div className="reference-plans"><SectionContent><article><h3>Make it yours.</h3><p className="plan-caption">Start small</p><ul><li>Daily app-time insights</li><li>Your own goals and intentions</li><li>Guest mode, without an account</li></ul><a href="/support/">Getting started ↗</a></article></SectionContent><SectionContent><article className="protected-plan"><Mascot mood="privacy" className="bob plan-pal" alt="ScrollSnooze protecting your privacy" /><h3>Your data. Your say.</h3><p className="plan-caption">Stay in control</p><ul><li>Choose your permissions</li><li>Google sign-in for supported backup</li><li>Request account deletion anytime</li></ul><a href="/privacy/">Read the privacy policy ↗</a></article></SectionContent></div>
    </section>
    <section className="reference-faq wrap"><SectionContent><div className="reference-faq-head"><Mascot mood="tired" alt="Our curious sleepy character" /><h2>Questions?</h2></div></SectionContent><SectionContent><div className="faq">
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
    </div></SectionContent></section>
    <section className="reference-final" id="get-the-app"><div className="wrap"><SectionContent motion="settle"><img className="mascot bob" src="/assets/meditating.png" alt="ScrollSnooze meditating peacefully with legs crossed and hands resting on its knees" width="1328" height="1200" loading="lazy" /></SectionContent><SectionContent><h2>Scroll less. Live a little more.</h2></SectionContent><SectionContent><StoreLink /></SectionContent></div></section>
  </main>;
}
