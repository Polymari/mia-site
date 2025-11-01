import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Selamat Datang di Platform Ekosistem Digital MSME</h1>
      <p>Pilih modul untuk memulai:</p>
      <div className="dashboard-grid">
        <Link to="/warung-digital" className="dashboard-card">
          <span className="icon">🛒</span>
          <h2>Warung Digital</h2>
          <p>Kelola toko online Anda</p>
        </Link>
        <Link to="/akses-modal" className="dashboard-card">
          <span className="icon">💰</span>
          <h2>Akses Modal</h2>
          <p>Dapatkan pembiayaan untuk bisnis Anda</p>
        </Link>
        <Link to="/akademi-umkm" className="dashboard-card">
          <span className="icon">📚</span>
          <h2>Akademi UMKM</h2>
          <p>Tingkatkan kompetensi bisnis Anda</p>
        </Link>
        <Link to="/konektor-pasar" className="dashboard-card">
          <span className="icon">🤝</span>
          <h2>Konektor Pasar & Komunitas</h2>
          <p>Perluas jaringan dan pasar Anda</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;