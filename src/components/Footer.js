import "../styles/footer.css";

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
          <p>
        📍{" "}
        <a
          href="https://maps.app.goo.gl/REEv5Jcaqdj9oZH1A"
          target="_blank"
          rel="noreferrer"
        >
          Gangapur, Kolhapur, Maharashtra
        </a>
      </p>
          <p><a href="tel:+918698964344">📞 +91 8698964344</a></p>
          <p>🕘 09:00 AM – 07:00 PM</p>
        </div>

        <div className="footer-col">
  <h4>Quick Links</h4>

  <div className="quick-links vertical">
    <a href="#/benefits">Benefits</a>
    <a href="#/wholesale">Wholesale</a>
    <a href="#/gallery">Gallery</a>
  </div>
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
