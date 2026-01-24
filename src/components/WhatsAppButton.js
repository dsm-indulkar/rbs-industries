import "../styles/buttons.css";


export default function WhatsAppButton() {
  return (
    <div className="floating-left">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8698964344"
        target="_blank"
        rel="noreferrer"
        className="contact-btn whatsapp-btn"
      >
        WhatsApp
      </a>

      {/* Email Button */}
      <a
        href="mailto:rbs.industries.india@gmail.com"
        className="contact-btn email-btn"
      >
        Email
      </a>
    </div>
  );
}
