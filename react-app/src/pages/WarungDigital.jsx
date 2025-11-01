import React from 'react';
import Navigation from '../components/Navigation';
import StoreBuilder from '../components/StoreBuilder';
import DigitalCashBook from '../components/DigitalCashBook';
import OrderDashboard from '../components/OrderDashboard';

const WarungDigital = () => {
  return (
    <div className="warung-digital-container">
      <h1>Warung Digital</h1>
      <p>Selamat datang di Warung Digital. Di sini Anda dapat membangun toko online Anda, mengelola keuangan, dan melacak pesanan.</p>
      <StoreBuilder />
      <DigitalCashBook />
      <OrderDashboard />
      <Navigation />
    </div>
  );
};

export default WarungDigital;