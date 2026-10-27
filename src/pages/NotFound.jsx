export default function NotFound() {
  return (
    <main id="main" className="wrap">
      <header className="pagehero">
        <div className="eyebrow">
          <span className="dot"></span>
          {"A small detour"}
        </div>
        <h1>{"This page wandered off."}</h1>
        <p>{"Let’s get you back to a little more headspace."}</p>
      </header>
      <div className="pagecontent">
        <a className="button" href="/">
          {"Back to ScrollSnooze ↗"}
        </a>
      </div>
    </main>
  );
}
