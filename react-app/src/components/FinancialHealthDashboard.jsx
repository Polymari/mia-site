import React, { useState, useEffect } from 'react';
import './FinancialHealthDashboard.css'; // We'll create this CSS file next

const FinancialHealthDashboard = () => {
  const [cashBookData, setCashBookData] = useState([]); // This would come from a global state or API
  const [feasibilityScore, setFeasibilityScore] = useState(0);

  // Mock data for demonstration
  useEffect(() => {
    // In a real app, this would fetch data from the DigitalCashBook or an API
    const mockCashBookData = [
      { id: 1, description: 'Penjualan Produk X', amount: 500000, type: 'sales', date: '2025-10-01' },
      { id: 2, description: 'Sewa Toko', amount: 100000, type: 'expenses', date: '2025-10-05' },
      { id: 3, description: 'Penjualan Produk Y', amount: 300000, type: 'sales', date: '2025-10-10' },
      { id: 4, description: 'Pembelian Bahan Baku', amount: 80000, type: 'expenses', date: '2025-10-12' },
      { id: 5, description: 'Gaji Karyawan', amount: 150000, type: 'expenses', date: '2025-10-15' },
    ];
    setCashBookData(mockCashBookData);
  }, []);

  useEffect(() => {
    if (cashBookData.length > 0) {
      const totalSales = cashBookData
        .filter((t) => t.type === 'sales')
        .reduce((sum, t) => sum + t.amount, 0);

      const totalExpenses = cashBookData
        .filter((t) => t.type === 'expenses')
        .reduce((sum, t) => sum + t.amount, 0);

      const netProfit = totalSales - totalExpenses;

      // Simple feasibility score calculation (for demonstration)
      // In a real scenario, this would be a more complex algorithm
      let score = 0;
      if (netProfit > 0) {
        score = Math.min(100, (netProfit / totalSales) * 100); // Profitability
      } else {
        score = Math.max(0, 100 + (netProfit / totalExpenses) * 100); // Manage losses
      }
      setFeasibilityScore(Math.round(score));
    }
  }, [cashBookData]);

  const getScoreColor = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
  };

  return (
    <div className="financial-health-dashboard-container">
      <h2>Dasbor Kesehatan Keuangan</h2>
      <p>Lihat Skor Kelayakan Anda yang dihitung otomatis dari data Buku Kas.</p>

      <div className="feasibility-score-card">
        <h3>Skor Kelayakan Anda</h3>
        <div className={`score-display ${getScoreColor(feasibilityScore)}`}>
          {feasibilityScore}%
        </div>
        <p>Skor ini menunjukkan kelayakan bisnis Anda untuk mengakses pendanaan.</p>
        <button>Lihat Detail Keuangan</button>
      </div>

      <div className="financial-tips">
        <h3>Tips Meningkatkan Skor Kelayakan</h3>
        <ul>
          <li>Tingkatkan penjualan dan kurangi pengeluaran yang tidak perlu.</li>
          <li>Catat semua transaksi secara rutin di Buku Kas Digital.</li>
          <li>Pisahkan keuangan pribadi dan bisnis dengan jelas.</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialHealthDashboard;