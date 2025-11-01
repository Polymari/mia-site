import React from 'react';
import Navigation from '../components/Navigation';
import AggregatedMarketplace from '../components/AggregatedMarketplace';
import CommunityForum from '../components/CommunityForum';
import B2BDirectory from '../components/B2BDirectory';

const KonektorPasar = () => {
  return (
    <div className="konektor-pasar-container">
      <h1>Konektor Pasar & Pusat Komunitas</h1>
      <p>Perluas jangkauan pasar dan bangun komunitas dengan sesama UMKM.</p>
      <AggregatedMarketplace />
      <CommunityForum />
      <B2BDirectory />
      <Navigation />
    </div>
  );
};

export default KonektorPasar;