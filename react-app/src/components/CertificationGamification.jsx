import React, { useState } from 'react';
import './CertificationGamification.css'; // We'll create this CSS file next

const CertificationGamification = () => {
  const [userBadges, setUserBadges] = useState([
    { id: 1, name: 'Pemasar Pemula', icon: '⚡️', earned: true, description: 'Selesaikan 3 modul pemasaran digital.' },
    { id: 2, name: 'Ahli Fotografi Produk', icon: '📸', earned: false, description: 'Selesaikan modul fotografi produk.' },
    { id: 3, name: 'Manajer Keuangan', icon: '💰', earned: false, description: 'Selesaikan modul manajemen keuangan.' },
  ]);

  const handleEarnBadge = (id) => {
    setUserBadges(userBadges.map(badge =>
      badge.id === id ? { ...badge, earned: true } : badge
    ));
    alert(`Selamat! Anda mendapatkan lencana "${userBadges.find(b => b.id === id).name}"!`);
  };

  return (
    <div className="certification-gamification-container">
      <h2>Sertifikasi & Gamifikasi</h2>
      <p>Dapatkan sertifikasi dan kumpulkan lencana untuk meningkatkan kredibilitas Anda di platform.</p>

      <div className="user-badges">
        <h3>Lencana Anda</h3>
        <div className="badge-grid">
          {userBadges.map(badge => (
            <div key={badge.id} className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
              <span className="badge-icon">{badge.icon}</span>
              <h4>{badge.name}</h4>
              <p>{badge.description}</p>
              {!badge.earned && (
                <button onClick={() => handleEarnBadge(badge.id)} className="btn-small">
                  Dapatkan Lencana
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="certification-info">
        <h3>Sertifikasi</h3>
        <p>Setelah menyelesaikan serangkaian modul, Anda dapat mengikuti ujian untuk mendapatkan sertifikasi resmi.</p>
        <button>Lihat Sertifikasi Tersedia</button>
      </div>
    </div>
  );
};

export default CertificationGamification;