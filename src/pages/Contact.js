import "../styles/common.css";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>

      <div className="contact-box">
        <p>📞 Phone: 9XXXXXXXXX</p>
        <p>💬 WhatsApp Available</p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Contact;
