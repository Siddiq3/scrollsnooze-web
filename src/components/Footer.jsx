export default function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <a className="brand" href="/">
          <img src="/assets/icon-master.webp" width="40" height="40" alt="" />
          {"ScrollSnooze"}
        </a>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/privacy/">{"Privacy policy"}</a>
          <a href="/delete-account/">{"Delete account"}</a>
          <a href="/terms/">{"Terms of use"}</a>
          <a href="/support/">{"Support"}</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>{"© 2026 Siddiq Kolimi. Made for a little more life."}</span>
        <a href="mailto:siddiqkolimi.dev@gmail.com">
          {"siddiqkolimi.dev@gmail.com"}
        </a>
      </div>
    </footer>
  );
}
