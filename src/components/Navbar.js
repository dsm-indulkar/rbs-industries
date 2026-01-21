import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">RBS Industries</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
