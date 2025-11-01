import React, { useState } from 'react';
import './AggregatedMarketplace.css'; // We'll create this CSS file next

const AggregatedMarketplace = () => {
  const [stores, setStores] = useState([
    { id: 1, name: 'Toko Baju Cantik', category: 'Fashion', region: 'Jakarta', description: 'Menjual pakaian wanita terbaru.' },
    { id: 2, name: 'Warung Kopi Nikmat', category: 'Culinary', region: 'Bandung', description: 'Kopi lokal dengan cita rasa khas.' },
    { id: 3, name: 'Kerajinan Tangan Unik', category: 'Crafts', region: 'Yogyakarta', description: 'Produk kerajinan tangan asli Indonesia.' },
    { id: 4, name: 'Toko Elektronik Murah', category: 'Electronics', region: 'Surabaya', description: 'Gadget dan aksesoris dengan harga terjangkau.' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterRegion, setFilterRegion] = useState('All');

  const categories = ['All', 'Fashion', 'Culinary', 'Crafts', 'Electronics'];
  const regions = ['All', 'Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya'];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          store.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || store.category === filterCategory;
    const matchesRegion = filterRegion === 'All' || store.region === filterRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="aggregated-marketplace-container">
      <h2>Agregator Marketplace</h2>
      <p>Temukan berbagai toko UMKM dari seluruh Indonesia. Semua toko Warung Digital Anda otomatis terdaftar di sini.</p>

      <div className="marketplace-filters">
        <input
          type="text"
          placeholder="Cari toko..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>)}
        </select>
        <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
          {regions.map(reg => <option key={reg} value={reg}>{reg === 'All' ? 'Semua Wilayah' : reg}</option>)}
        </select>
      </div>

      {filteredStores.length === 0 ? (
        <p>Tidak ada toko yang ditemukan.</p>
      ) : (
        <div className="store-list">
          {filteredStores.map(store => (
            <div key={store.id} className="store-card">
              <h4>{store.name}</h4>
              <p><strong>Kategori:</strong> {store.category}</p>
              <p><strong>Wilayah:</strong> {store.region}</p>
              <p>{store.description}</p>
              <button>Kunjungi Toko</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AggregatedMarketplace;