import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import certifications from '../../assets/certifications.jpeg';

const Footer = () => {
  const location = useLocation();
  const isInternal = location.pathname !== '/';

  return (
    <footer className="footer">
      {/* Trust Strip */}
      <div className="trust-strip">
        <div className="container trust-container">
          <span className="trust-text">Trusted & Certified By</span>
          <div className="trust-logos">
            <img src={certifications} alt="FSSAI, APEDA, ISO Certifications" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src="/Vayunexlogo.png" alt="Vayunex Global Logo" className="footer-logo-image" />
              <div className="logo-text">
                <h2>Vayunex Global</h2>
                <span className="tagline">Integrity Beyond Borders</span>
              </div>
            </Link>
            <p className="footer-desc">
              Global import and export of consumable products, focusing on authentic and genuine sourcing from India. We build long-term partnerships based on trust and transparency.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/vayunex_global_exports?igsh=MW9qOTdrOXNxaDF0ag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/company/vayunex-global/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" replace={isInternal}>Home</Link></li>
              <li><Link to="/about" replace={isInternal}>About Us</Link></li>
              <li><Link to="/products" replace={isInternal}>Our Products</Link></li>
              <li><Link to="/mission-vision" replace={isInternal}>Mission & Vision</Link></li>
              <li><Link to="/roots" replace={isInternal}>Roots</Link></li>
            </ul>
          </div>

          {/* Services/Categories */}
          <div className="footer-col">
            <h3 className="footer-title">Product Categories</h3>
            <ul className="footer-links">
              <li><Link to="/products#black-rice" replace={isInternal}>Black Rice</Link></li>
              <li><Link to="/products#ayurvedic" replace={isInternal}>Ayurvedic Products</Link></li>
              <li><Link to="/products#spices" replace={isInternal}>Authentic Spices</Link></li>
              <li><Link to="/products#grains" replace={isInternal}>Grains & Pulses</Link></li>
              <li><Link to="/contact" replace={isInternal}>Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Hinjewadi, Pune, India</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919762540055">+91 9762540055</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vayunexglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@vayunexglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vayunex Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;