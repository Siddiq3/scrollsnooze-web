import { useEffect, useRef, useState } from 'react';
import BoxingMascot from './BoxingMascot';

export default function BoxingPlayer({ opponent = false, initialCount }) {
  const root = useRef(null);
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    const glove = root.current.querySelector('.boxing-lead');
    if (!glove.getAnimations || !('IntersectionObserver' in window)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let frame;
    let animation;
    let previousStrike = null;
    const tick = () => {
      if (!animation || animation.playState === 'idle') {
        animation = glove.getAnimations().find(item => item.animationName === 'boxing-punch');
      }
      if (animation?.playState === 'running') {
        const { progress, currentIteration } = animation.effect.getComputedTiming();
        if (progress !== null && currentIteration !== null) {
          // The leading glove reaches full extension at 25% of its CSS cycle.
          // Using the animation's own phase keeps counting aligned with each boxer.
          const strike = currentIteration - (progress < .25 ? 1 : 0);
          if (previousStrike !== null && strike > previousStrike) setCount(value => value + 1);
          previousStrike = strike;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previousStrike = null;
      if (inView && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    }, { threshold: .1 });
    observer.observe(root.current);
    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduced.removeEventListener('change', sync);
    };
  }, []);
  return <div className={`battle-player${opponent ? ' opponent' : ''}`} ref={root}>
    <BoxingMascot opponent={opponent} />
    <strong key={count} className="battle-score">{count}</strong>
    <span>{opponent ? 'FRIEND' : 'YOU'}</span>
  </div>;
}
