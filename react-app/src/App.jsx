import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WarungDigital from './pages/WarungDigital';
import AksesModal from './pages/AksesModal';
import AkademiUMKM from './pages/AkademiUMKM';
import KonektorPasar from './pages/KonektorPasar';
import LandingPage from './pages/LandingPage';
import WhatsAppButton from './components/WhatsAppButton';

import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Basic authentication state

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <LandingPage onLogin={handleLogin} />} />
        <Route path="/warung-digital" element={isAuthenticated ? <WarungDigital /> : <LandingPage onLogin={handleLogin} />} />
        <Route path="/akses-modal" element={isAuthenticated ? <AksesModal /> : <LandingPage onLogin={handleLogin} />} />
        <Route path="/akademi-umkm" element={isAuthenticated ? <AkademiUMKM /> : <LandingPage onLogin={handleLogin} />} />
        <Route path="/konektor-pasar" element={isAuthenticated ? <KonektorPasar /> : <LandingPage onLogin={handleLogin} />} />
      </Routes>
      {isAuthenticated && <Navigation onLogout={handleLogout} />}
      <WhatsAppButton />
    </div>
  );
}

export default App;
