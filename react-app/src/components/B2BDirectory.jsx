import React, { useState } from 'react';
import './B2BDirectory.css'; // We'll create this CSS file next

const B2BDirectory = () => {
  const [listings, setListings] = useState([
    { id: 1, company: 'Supplier Bahan Kue Jaya', product: 'Tepung Terigu Curah', quantity: '1 ton/bulan', price: 'Rp 8.000/kg', contact: '0812xxxxxxx', category: 'Food & Beverage' },
    { id: 2, company: 'Konveksi Maju Bersama', product: 'Jasa Jahit Pakaian', quantity: '500 pcs/minggu', price: 'Nego', contact: '0856xxxxxxx', category: 'Fashion' },
    { id: 3, company: 'Distributor Elektronik Cepat', product: 'Power Bank Grosir', quantity: '1000 unit', price: 'Rp 35.000/unit', contact: '0878xxxxxxx', category: 'Electronics' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Food & Beverage', 'Fashion', 'Crafts', 'Electronics', 'Services'];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || listing.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="b2b-directory-container">
      <h2>Direktori B2B</h2>
      <p>Temukan peluang kemitraan grosir atau reseller dengan UMKM lain.</p>

      <div className="b2b-filters">
        <input
          type="text"
          placeholder="Cari produk atau perusahaan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>)}
        </select>
      </div>

      {filteredListings.length === 0 ? (
        <p>Tidak ada listing B2B yang ditemukan.</p>
      ) : (
        <div className="b2b-listing-list">
          {filteredListings.map(listing => (
            <div key={listing.id} className="b2b-listing-card">
              <h4>{listing.company}</h4>
              <p><strong>Produk/Jasa:</strong> {listing.product}</p>
              <p><strong>Kuantitas:</strong> {listing.quantity}</p>
              <p><strong>Harga:</strong> {listing.price}</p>
              <p><strong>Kategori:</strong> {listing.category}</p>
              <button>Hubungi Penjual</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default B2BDirectory;