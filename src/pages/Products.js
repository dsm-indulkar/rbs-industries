import "./Products.css";

function Products() {
  const items = [
    { name: "Industrial Product A", desc: "High quality wholesale supply" },
    { name: "Industrial Product B", desc: "Best price for bulk orders" },
    { name: "Industrial Product C", desc: "Trusted by retailers" },
  ];

  return (
    <div className="container">
      <h2>Our Wholesale Products</h2>
      <div className="cards">
        {items.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
