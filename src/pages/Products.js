import "../styles/products.css";

import pouch125 from "../assets/products/pouch125.jpg";
import pouch250 from "../assets/products/pouch250.jpg";
import bottle500 from "../assets/products/bottle500.jpg";

export default function Products() {
  return (
    <div className="page">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {/* 125 ml */}
        <div className="product-card">
          <img src={pouch125} alt="125 ml Pouch" />
          <p>125 ml Pouch</p>
        </div>

        {/* 250 ml */}
        <div className="product-card">
          <img src={pouch250} alt="250 ml Pouch" />
          <p>250 ml Pouch</p>
        </div>

        {/* 500 ml */}
        <div className="product-card">
          <img src={bottle500} alt="500 ml Bottle" />
          <p>500 ml Bottle</p>
        </div>
        {/* 125 ml */}
        <div className="product-card">
          <img src={pouch125} alt="125 ml Pouch" />
          <p>125 ml Pouch</p>
        </div>

        {/* 250 ml */}
        <div className="product-card">
          <img src={pouch250} alt="250 ml Pouch" />
          <p>250 ml Pouch</p>
        </div>

        {/* 500 ml */}
        <div className="product-card">
          <img src={bottle500} alt="500 ml Bottle" />
          <p>500 ml Bottle</p>
        </div>
        {/* 125 ml */}
        <div className="product-card">
          <img src={pouch125} alt="125 ml Pouch" />
          <p>125 ml Pouch</p>
        </div>

        {/* 250 ml */}
        <div className="product-card">
          <img src={pouch250} alt="250 ml Pouch" />
          <p>250 ml Pouch</p>
        </div>

        {/* 500 ml */}
        <div className="product-card">
          <img src={bottle500} alt="500 ml Bottle" />
          <p>500 ml Bottle</p>
        </div>
        {/* 125 ml */}
        <div className="product-card">
          <img src={pouch125} alt="125 ml Pouch" />
          <p>125 ml Pouch</p>
        </div>

        {/* 250 ml */}
        <div className="product-card">
          <img src={pouch250} alt="250 ml Pouch" />
          <p>250 ml Pouch</p>
        </div>

        {/* 500 ml */}
        <div className="product-card">
          <img src={bottle500} alt="500 ml Bottle" />
          <p>500 ml Bottle</p>
        </div>
      </div>
    </div>
  );
}
