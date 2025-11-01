import React from 'react';
import './WhatsAppButton.css'; // We'll create this CSS file next

const WhatsAppButton = () => {
  const phoneNumber = '6281234567890'; // Replace with actual WhatsApp number
  const message = 'Halo, saya butuh bantuan terkait platform MSME.'; // Pre-filled message

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img src="/vite.svg" alt="WhatsApp Icon" className="whatsapp-icon" /> {/* Placeholder icon */}
      Dukungan WhatsApp
    </button>
  );
};

export default WhatsAppButton;