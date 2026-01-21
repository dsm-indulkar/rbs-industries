import "../styles/common.css";
import "../styles/home.css";

function Home() {
  return (
    <div className="page">
      <h1 className="home-title">RBS Industries</h1>
      <p className="home-subtitle">
        Trusted wholesale supplier delivering quality products at best prices.
      </p>

      <div className="home-highlight">
        <div className="highlight-box">Bulk Supply</div>
        <div className="highlight-box">Best Rates</div>
        <div className="highlight-box">Trusted Quality</div>
      </div>
    </div>
  );
}

export default Home;
