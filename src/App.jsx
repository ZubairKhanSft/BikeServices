import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceLandingPage from './components/ServiceLandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-puncture-repair-chhindwara" element={<ServiceLandingPage slug="car-puncture-repair-chhindwara" />} />
        <Route path="/bike-puncture-repair-chhindwara" element={<ServiceLandingPage slug="bike-puncture-repair-chhindwara" />} />
        <Route path="/roadside-assistance-chhindwara" element={<ServiceLandingPage slug="roadside-assistance-chhindwara" />} />
      </Routes>
    </BrowserRouter>
  );
}
