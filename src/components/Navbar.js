import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/common.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar sticky">
      {/* LEFT : BRAND NAME (NOT CLICKABLE) */}
      <div className="brand">
        <span className="brand-text">RBS Industries</span>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENU */}
      <nav className={`nav-right ${open ? "show" : ""}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link" onClick={() => setOpen(false)}>
          Products
        </NavLink>
        <NavLink to="/benefits" className="nav-link" onClick={() => setOpen(false)}>
          Benefits
        </NavLink>
        <NavLink to="/wholesale" className="nav-link" onClick={() => setOpen(false)}>
          Wholesale
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
