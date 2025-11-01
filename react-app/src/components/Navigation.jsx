import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // We'll create this CSS file next

const Navigation = ({ onLogout }) => {
  return (
    <nav className="bottom-navigation">
      <NavLink to="/" className="nav-item">
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Beranda</span>
      </NavLink>
      <NavLink to="/warung-digital" className="nav-item">
        <span className="nav-icon">🛒</span>
        <span className="nav-text">Warung Digital</span>
      </NavLink>
      <NavLink to="/akses-modal" className="nav-item">
        <span className="nav-icon">💰</span>
        <span className="nav-text">Akses Modal</span>
      </NavLink>
      <NavLink to="/akademi-umkm" className="nav-item">
        <span className="nav-icon">📚</span>
        <span className="nav-text">Akademi UMKM</span>
      </NavLink>
      <NavLink to="/konektor-pasar" className="nav-item">
        <span className="nav-icon">🤝</span>
        <span className="nav-text">Konektor Pasar</span>
      </NavLink>
      <button onClick={onLogout} className="nav-item logout-button">
        <span className="nav-icon">🚪</span>
        <span className="nav-text">Logout</span>
      </button>
    </nav>
  );
};

export default Navigation;