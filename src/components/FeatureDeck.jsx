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
        return <div key={scene.id} className={`feature-poster poster-${position}`}
          role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${scenes.length}`}
          aria-hidden={index !== active}>
          <img className="feature-poster-art" src={scene.image} alt={scene.alt} width="750" height="1343" loading="lazy" decoding="async" />
        </div>;
      })}
    </div>
  </div>;
}
