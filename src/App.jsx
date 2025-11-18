import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
