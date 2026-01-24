import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918698964344"; // YOUR NUMBER

    const text = `New Enquiry – RBS Industries

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="page contact">
      <h2>Contact Us</h2>

      {/* CONTACT DETAILS */}
      <div className="contact-info">
        <p>
          📞 <a href="tel:+918698964344">8698964344</a>
        </p>
        <p>
          ✉️{" "}
          <a href="mailto:rbs.industries.india@gmail.com">
            rbs.industries.india@gmail.com
          </a>
        </p>
        <p>
          📍{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=RBS+Industries+Maharashtra+India"
            target="_blank"
            rel="noreferrer"
          >
            Maharashtra, India
          </a>
        </p>
      </div>

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
