import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BikeServicingPage from './pages/BikeServicingPage';
import BikeRepairPage from './pages/BikeRepairPage';
import BikeSparePartsPage from './pages/BikeSparePartsPage';
import EngineServicePage from './pages/EngineServicePage';
import DoorstepServicePage from './pages/DoorstepServicePage';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bike-servicing" element={<BikeServicingPage />} />
          <Route path="/bike-repair" element={<BikeRepairPage />} />
          <Route path="/bike-spare-parts" element={<BikeSparePartsPage />} />
          <Route path="/engine-service" element={<EngineServicePage />} />
          <Route path="/doorstep-service" element={<DoorstepServicePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
