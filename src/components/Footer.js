import "../styles/common.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>RBS Industries</h4>
          <p>
            Manufacturer & supplier of Enriched Coconut Hair Oil.
            Quality-focused, trusted for wholesale supply.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Maharashtra, India</p>
          <p>📞 +91 XXXXXXXX</p>
          <p>🕘 9 AM – 7 PM</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#/why-our-oil">Why Our Oil</a>
          <a href="#/gallery">Gallery</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 RBS Industries. All Rights Reserved.
        </span>

        <span className="site-credit">
          Site by <strong>Dipak Indulkar</strong>
        </span>
      </div>
    </footer>
  );
}
