import "../styles/products.css";

import pouch125 from "../assets/products/pouch125.jpg";
import pouch250 from "../assets/products/pouch250.jpg";
import bottle500 from "../assets/products/bottle500.jpg";

export default function Products() {
  return (
    <div className="page">
      <h2 className="products-title">Gangotri Coconut Hair Oil</h2>

      <p style={{ textAlign: "center", marginBottom: "28px", color: "#475569" }}>
        Manufactured by <strong>RBS Industries</strong>
      </p>

      <div className="products-grid">
        <div className="product-card">
          <img src={pouch125} alt="Gangotri Coconut Hair Oil 125 ml Pouch" />
          <p>125 ml Pouch</p>
        </div>

        <div className="product-card">
          <img src={pouch250} alt="Gangotri Coconut Hair Oil 250 ml Pouch" />
          <p>250 ml Pouch</p>
        </div>

        <div className="product-card">
          <img src={bottle500} alt="Gangotri Coconut Hair Oil 500 ml Bottle" />
          <p>500 ml Bottle</p>
        </div>
      </div>
    </div>
  );
}
