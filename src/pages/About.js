import "../styles/about.css";

export default function About() {
  return (
    <div className="page about">
      <h2>About RBS Industries</h2>

      <p>
        RBS Industries is a quality-driven manufacturer and supplier of
        Enriched Coconut Hair Oil. We focus on delivering natural, safe,
        and effective hair care solutions made from carefully selected
        coconuts and processed with strict quality standards.
      </p>

      <p>
        Our products are crafted to nourish hair, strengthen roots, and
        support long-term hair health while maintaining purity and
        consistency in every batch.
      </p>

      <div className="about-divider" />

      <div className="about-grid">
        <div className="about-card">
          <h4>Our Vision</h4>
          <p>
            To become a trusted and recognized brand in the hair care
            industry by offering high-quality, natural products that
            promote healthy living and customer satisfaction.
          </p>
        </div>

        <div className="about-card">
          <h4>Our Mission</h4>
          <p>
            To manufacture and supply enriched coconut hair oil that meets
            quality expectations, supports healthy hair care, and builds
            long-term trust with customers and partners.
          </p>
        </div>

        <div className="about-card">
          <h4>Our Core Values</h4>
          <ul>
            <li>Quality & Consistency</li>
            <li>Purity of Ingredients</li>
            <li>Customer Trust</li>
            <li>Integrity in Business</li>
            <li>Long-term Relationships</li>
          </ul>
        </div>
      </div>

      <div className="about-divider" />

      <h3>Why Choose RBS Industries?</h3>
      <ul>
        <li>Carefully crafted enriched coconut hair oil</li>
        <li>Focus on natural and safe formulations</li>
        <li>Reliable wholesale and bulk supply</li>
        <li>Commitment to quality and transparency</li>
      </ul>
    </div>
  );
}
