import React, { useState } from 'react';
import './StoreBuilder.css'; // We'll create this CSS file next

const StoreBuilder = () => {
  const [storeName, setStoreName] = useState('');
  const [template, setTemplate] = useState('default');
  const [brandingColor, setBrandingColor] = useState('#007bff');

  const handleCreateStore = () => {
    const confirmation = window.confirm(
      `Anda akan membuat toko dengan nama "${storeName}", template "${template}", dan warna branding "${brandingColor}". Lanjutkan?`
    );
    if (confirmation) {
      alert(`Toko "${storeName}" berhasil dibuat!`);
      // In a real application, this would involve API calls to create the store
    } else {
      alert('Pembuatan toko dibatalkan.');
    }
  };

  return (
    <div className="store-builder-container">
      <h2>Buat Toko Online Anda</h2>
      <p>Mulai bangun toko online Anda dengan mudah. Pilih template dan sesuaikan branding Anda.</p>

      <div className="form-group">
        <label htmlFor="storeName">Nama Toko:</label>
        <input
          type="text"
          id="storeName"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="Masukkan nama toko Anda"
        />
      </div>

      <div className="form-group">
        <label htmlFor="template">Pilih Template:</label>
        <select id="template" value={template} onChange={(e) => setTemplate(e.target.value)}>
          <option value="default">Template Default</option>
          <option value="modern">Modern Minimalis</option>
          <option value="classic">Klasik Elegan</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="brandingColor">Warna Branding:</label>
        <input
          type="color"
          id="brandingColor"
          value={brandingColor}
          onChange={(e) => setBrandingColor(e.target.value)}
        />
      </div>

      <button onClick={handleCreateStore}>Buat Toko Sekarang</button>
    </div>
  );
};

export default StoreBuilder;