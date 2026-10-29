export default function BoxingMascot({ opponent = false }) {
  const side = opponent ? 'friend' : 'you';
  return <span className={`boxing-sprite bob boxing-${side}`} role="img" aria-label={`ScrollSnooze character ${opponent ? 'with blue gloves boxing to the left' : 'with mint gloves boxing to the right'}`}>
    <span className="boxing-body"><img src="/assets/boxing-you-body.webp" width="800" height="800" alt="" loading="lazy" decoding="async" /></span>
    <span className="boxing-arm boxing-lead"><img src={`/assets/boxing-${side}-lead.webp`} width="800" height="800" alt="" loading="lazy" decoding="async" /></span>
    <span className="boxing-arm boxing-guard"><img src={`/assets/boxing-${side}-guard.webp`} width="800" height="800" alt="" loading="lazy" decoding="async" /></span>
  </span>;
}
