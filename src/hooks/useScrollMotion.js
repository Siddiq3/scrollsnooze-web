import { useEffect, useRef } from 'react';

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
const arrivals = {
  rise: { transform: 'translateY(28px)' },
  phone: { transform: 'translateY(42px) rotate(3deg) scale(.96)' },
  mood: { transform: 'translateY(24px) scale(.9)' },
  deck: { transform: 'translateY(44px) scale(.94)' },
  settle: { transform: 'translateY(24px) rotate(-3deg) scale(.96)' },
};

// Enhance visible content, rather than making visibility depend on JavaScript.
// No scroll listener, animation dependency, or per-frame React state updates.
export default function useScrollMotion(rootRef, disabled) {
  const seen = useRef(new WeakSet());
  useEffect(() => {
    const root = rootRef.current;
    if (!root || disabled || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
    const active = new Map();
    const play = (target, from, delay = 0, duration = 700) => {
      if (!target || target.contains(document.activeElement)) return;
      const animation = target.animate([
        { opacity: .12, ...from },
        { opacity: 1, transform: 'none' },
      ], { duration, delay, easing: ease, fill: 'backwards' });
      active.set(target, animation);
      animation.onfinish = animation.oncancel = () => active.delete(target);
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target;
        observer.unobserve(target);
        if (seen.current.has(target)) continue;
        seen.current.add(target);
        const kind = target.dataset.motion;
        if (kind === 'friends') {
          play(target.querySelector('.battle-player'), { transform: 'translateX(-42px) rotate(-5deg)' }, 0, 800);
          play(target.querySelector('.opponent'), { transform: 'translateX(42px) rotate(5deg)' }, 90, 800);
          play(target.querySelector('.battle-vs'), { transform: 'scale(.8)' }, 180, 500);
        } else if (kind === 'spectrum') {
          play(target, { transform: 'scaleX(.05)' }, 60, 900);
        } else {
          play(target, arrivals[kind] || arrivals.rise, Number(target.dataset.motionDelay) || 0, kind === 'phone' ? 900 : 700);
        }
      }
    }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
    root.querySelectorAll('[data-motion]:not([data-motion="none"])').forEach(target => observer.observe(target));

    // Stop idle character loops outside the viewport, too.
    const sections = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.dataset.inView = String(entry.isIntersecting);
    });
    root.querySelectorAll(':scope > section').forEach(section => sections.observe(section));
    root.dataset.motionReady = 'true';

    const finishOnFocus = event => {
      for (const [target, animation] of active) if (target.contains(event.target)) animation.finish();
    };
    root.addEventListener('focusin', finishOnFocus);
    return () => {
      observer.disconnect();
      sections.disconnect();
      active.forEach(animation => animation.cancel());
      root.removeEventListener('focusin', finishOnFocus);
      delete root.dataset.motionReady;
      root.querySelectorAll('[data-in-view]').forEach(section => delete section.dataset.inView);
    };
  }, [rootRef, disabled]);
}
