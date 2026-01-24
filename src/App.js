import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/common.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Benefits from "./pages/Benefits";
import WhyOurOil from "./pages/WhyOurOil";
import Wholesale from "./pages/Wholesale";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/why-our-oil" element={<WhyOurOil />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}
