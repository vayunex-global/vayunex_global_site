import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import MissionVision from './pages/MissionVision/MissionVision';
import Roots from './pages/Roots/Roots';
import Contact from './pages/Contact/Contact';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/roots" element={<Roots />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
