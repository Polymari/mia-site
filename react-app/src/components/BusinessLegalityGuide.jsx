import React, { useState } from 'react';
import './BusinessLegalityGuide.css'; // We'll create this CSS file next

const BusinessLegalityGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const legalitySteps = [
    {
      title: 'Apa itu NIB (Nomor Induk Berusaha)?',
      content: `NIB adalah identitas pelaku usaha yang diterbitkan oleh lembaga OSS (Online Single Submission). NIB wajib dimiliki oleh setiap pelaku usaha, baik perorangan maupun badan usaha, untuk memulai dan menjalankan kegiatan usahanya.`,
      action: 'Pelajari Lebih Lanjut tentang OSS',
      actionLink: 'https://oss.go.id/',
    },
    {
      title: 'Bagaimana Cara Mendapatkan NIB?',
      content: `1. Kunjungi situs web OSS (oss.go.id).\n2. Daftar akun dan lengkapi data diri.\n3. Pilih jenis usaha dan lengkapi informasi yang diperlukan.\n4. Verifikasi data dan terbitkan NIB Anda.`,
      action: 'Mulai Proses NIB',
      actionLink: 'https://oss.go.id/registrasi',
    },
    {
      title: 'Manfaat Memiliki NIB',
      content: `Memiliki NIB memberikan banyak manfaat, antara lain: kemudahan akses pembiayaan, legalitas usaha yang diakui, kemudahan dalam perizinan, dan peningkatan kepercayaan konsumen.`,
      action: 'Lihat Manfaat Lainnya',
      actionLink: '#',
    },
    {
      title: 'Dokumen Pendukung Lainnya',
      content: `Selain NIB, beberapa dokumen lain yang mungkin Anda perlukan adalah Izin Usaha, Sertifikat Halal (jika relevan), dan NPWP.`,
      action: 'Daftar Dokumen Lengkap',
      actionLink: '#',
    },
  ];

  const handleNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, legalitySteps.length - 1));
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const currentStep = legalitySteps[activeStep];

  return (
    <div className="business-legality-guide-container">
      <h2>Panduan Legalitas Bisnis</h2>
      <p>Dapatkan panduan langkah demi langkah untuk mengurus legalitas bisnis Anda.</p>

      <div className="legality-step-card">
        <h3>{currentStep.title}</h3>
        <p className="step-content">{currentStep.content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
        {currentStep.actionLink && (
          <a href={currentStep.actionLink} target="_blank" rel="noopener noreferrer">
            <button>{currentStep.action}</button>
          </a>
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrevStep} disabled={activeStep === 0} className="btn-secondary">
          Sebelumnya (Urungkan)
        </button>
        <button onClick={handleNextStep} disabled={activeStep === legalitySteps.length - 1}>
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default BusinessLegalityGuide;