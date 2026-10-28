import Mascot from "./Mascot";

function FeaturePoster({ scene }) {
  return <>
    <h3>{scene.title}</h3>
    <p>{scene.sub}</p>
    {scene.mood === "fresh" ? (
      <div className="poster-reel">
        <img src="/media/reels-poster.jpg" alt="Example reel with the ScrollSnooze counter" width="270" height="480" />
        <span className="poster-count"><Mascot mood="fresh" alt="" /><strong>{scene.stat}</strong></span>
      </div>
    ) : (
      <Mascot mood={scene.mood} alt={`ScrollSnooze ${scene.mood} feature illustration`} />
    )}
    <div className="poster-stat"><strong>{scene.stat}</strong><span>{scene.unit}</span></div>
    <span className="poster-preview">Illustrative preview</span>
  </>;
}

/** Real neighboring posters stay mounted so transitions move the whole deck. */
export default function FeatureDeck({ scenes, active }) {
  return <div className="feature-carousel"
    role="region" aria-roledescription="carousel" aria-label="ScrollSnooze feature previews"
    aria-live="off"
  >
    <div className="poster-deck">
      {scenes.map((scene, index) => {
        const offset = (index - active + scenes.length) % scenes.length;
        const position = offset === 0 ? "front" : offset === 1 ? "right" : offset === scenes.length - 1 ? "left" : "back";
        return <div key={scene.mood} className={`feature-poster poster-${scene.mood} poster-${position}`}
          role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${scenes.length}`}
          aria-hidden={index !== active}>
          <FeaturePoster scene={scene} />
        </div>;
      })}
    </div>
  </div>;
}
