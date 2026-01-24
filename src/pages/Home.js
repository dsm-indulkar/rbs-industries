import Banner from "../components/Banner";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="page home-bg">
      {/* IMAGE BANNER */}
      <Banner />

      <section className="home-hero">
        <h1>RBS Enriched Coconut Hair Oil</h1>
        <p>
          Enriched with natural goodness for strong, healthy and shiny hair.
        </p>
      </section>

      <section className="home-points">
        <div>Reduces Hair Fall</div>
        <div>Nourishes Scalp</div>
        <div>Adds Natural Shine</div>
        <div>Safe for Daily Use</div>
      </section>
    </div>
  );
}
