import "../styles/gallery.css";

export default function Gallery() {
  return (
    <div className="page">
      <h2>Product Gallery</h2>

      <div className="gallery-grid">
        <div className="gallery-box">Product Image 1</div>
        <div className="gallery-box">Product Image 2</div>
        <div className="gallery-box">Product Image 3</div>
        <div className="gallery-box">Product Image 4</div>
      </div>
    </div>
  );
}
