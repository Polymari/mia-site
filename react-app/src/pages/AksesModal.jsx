import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import FinancialHealthDashboard from '../components/FinancialHealthDashboard';
import FundingMatchingTool from '../components/FundingMatchingTool';
import BusinessLegalityGuide from '../components/BusinessLegalityGuide';

const AksesModal = () => {
  // In a real application, the feasibility score would be calculated from user data
  // For demonstration, we'll use a mock score
  const [mockFeasibilityScore, setMockFeasibilityScore] = useState(75);

  return (
    <div className="akses-modal-container">
      <h1>Akses Modal</h1>
      <p>Dapatkan akses ke pembiayaan dan legalitas bisnis untuk mengembangkan usaha Anda.</p>
      <FinancialHealthDashboard />
      <FundingMatchingTool feasibilityScore={mockFeasibilityScore} />
      <BusinessLegalityGuide />
      <Navigation />
    </div>
  );
};

export default AksesModal;