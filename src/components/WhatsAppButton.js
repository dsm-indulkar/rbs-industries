function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        zIndex: 1000,
      }}
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;
