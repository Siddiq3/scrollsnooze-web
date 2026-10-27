export default function Mascot({ mood = "fresh", alt, className = "", eager = false }) {
  return <img className={`mascot ${className}`} src={`/assets/${mood}.webp`} alt={alt ?? `ScrollSnooze ${mood} character`} width="800" height="800" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} />;
}
