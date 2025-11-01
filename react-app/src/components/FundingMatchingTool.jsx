import React, { useState } from 'react';
import './FundingMatchingTool.css'; // We'll create this CSS file next

const FundingMatchingTool = ({ feasibilityScore }) => {
  const [minLoanAmount, setMinLoanAmount] = useState('');
  const [maxLoanAmount, setMaxLoanAmount] = useState('');
  const [fundingOptions, setFundingOptions] = useState([]);

  const mockFundingOptions = [
    { id: 1, name: 'KUR Bank Rakyat Indonesia', type: 'KUR', minScore: 60, minAmount: 1000000, maxAmount: 50000000, interest: '6% p.a.' },
    { id: 2, name: 'Fintech Lending A', type: 'Fintech', minScore: 50, minAmount: 500000, maxAmount: 20000000, interest: '1.5% per month' },
    { id: 3, name: 'KUR Bank Mandiri', type: 'KUR', minScore: 70, minAmount: 5000000, maxAmount: 100000000, interest: '6% p.a.' },
    { id: 4, name: 'Fintech Lending B', type: 'Fintech', minScore: 40, minAmount: 200000, maxAmount: 10000000, interest: '2% per month' },
  ];

  const handleSearchFunding = () => {
    const filteredOptions = mockFundingOptions.filter(option => {
      const scoreMatch = feasibilityScore >= option.minScore;
      const minAmountMatch = minLoanAmount ? option.maxAmount >= parseFloat(minLoanAmount) : true;
      const maxAmountMatch = maxLoanAmount ? option.minAmount <= parseFloat(maxLoanAmount) : true;
      return scoreMatch && minAmountMatch && maxAmountMatch;
    });
    setFundingOptions(filteredOptions);
  };

  return (
    <div className="funding-matching-tool-container">
      <h2>Pencari Dana Cepat</h2>
      <p>Temukan opsi KUR atau pendanaan fintech terbaik yang sesuai dengan Skor Kelayakan Anda ({feasibilityScore}%).</p>

      <div className="quick-feasibility-checker">
        <h3>Cek Kelayakan Cepat</h3>
        <p>Skor Kelayakan Anda: <span className={`score-display ${feasibilityScore >= 60 ? 'score-high' : 'score-low'}`}>{feasibilityScore}%</span></p>
        {feasibilityScore >= 60 ? (
          <p className="success-message">Anda memiliki skor yang baik untuk mencari pendanaan!</p>
        ) : (
          <p className="warning-message">Tingkatkan skor Anda untuk peluang pendanaan yang lebih baik.</p>
        )}
      </div>

      <div className="funding-search-form">
        <h3>Cari Opsi Pendanaan</h3>
        <div className="form-group">
          <label htmlFor="minAmount">Jumlah Pinjaman Minimum (Rp):</label>
          <input
            type="number"
            id="minAmount"
            value={minLoanAmount}
            onChange={(e) => setMinLoanAmount(e.target.value)}
            placeholder="Contoh: 1000000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxAmount">Jumlah Pinjaman Maksimum (Rp):</label>
          <input
            type="number"
            id="maxAmount"
            value={maxLoanAmount}
            onChange={(e) => setMaxLoanAmount(e.target.value)}
            placeholder="Contoh: 50000000"
          />
        </div>
        <button onClick={handleSearchFunding}>Cari Pendanaan</button>
      </div>

      {fundingOptions.length > 0 && (
        <div className="funding-results">
          <h3>Opsi Pendanaan yang Cocok:</h3>
          <ul>
            {fundingOptions.map(option => (
              <li key={option.id} className="funding-option-card">
                <h4>{option.name} ({option.type})</h4>
                <p>Min. Skor Kelayakan: {option.minScore}%</p>
                <p>Jumlah: Rp {option.minAmount.toLocaleString('id-ID')} - Rp {option.maxAmount.toLocaleString('id-ID')}</p>
                <p>Bunga: {option.interest}</p>
                <button>Ajukan Sekarang</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FundingMatchingTool;