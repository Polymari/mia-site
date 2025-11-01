import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WarungDigital from './pages/WarungDigital';
import AksesModal from './pages/AksesModal';
import AkademiUMKM from './pages/AkademiUMKM';
import KonektorPasar from './pages/KonektorPasar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warung-digital" element={<WarungDigital />} />
        <Route path="/akses-modal" element={<AksesModal />} />
        <Route path="/akademi-umkm" element={<AkademiUMKM />} />
        <Route path="/konektor-pasar" element={<KonektorPasar />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;
