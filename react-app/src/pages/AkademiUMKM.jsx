import React from 'react';
import Navigation from '../components/Navigation';
import MicroLearningContent from '../components/MicroLearningContent';
import CertificationGamification from '../components/CertificationGamification';

const AkademiUMKM = () => {
  return (
    <div className="akademi-umkm-container">
      <h1>Akademi UMKM</h1>
      <p>Tingkatkan kompetensi bisnis Anda dengan micro-learning dan sertifikasi.</p>
      <MicroLearningContent />
      <CertificationGamification />
      <Navigation />
    </div>
  );
};

export default AkademiUMKM;