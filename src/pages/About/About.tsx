import { Link } from 'react-router-dom';
import { Target, Leaf, CheckCircle, Handshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* 1. Hero Section */}
      <section className="about-hero standard-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>About Vayunex Global</h1>
          <p>Bridging native Indian authenticity with global demand.</p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="our-story section">
        <div className="container story-grid">
          <div className="story-content">
            <h2 className="section-title">Our Story & Mission</h2>
            <p>
              Vayunex Global was founded with a singular vision: to bring the incredibly rich, authentic, and naturally sourced products of India to the global stage, uncompromising on quality and ethics.
            </p>
            <p>
              Driven by the philosophy of <strong>"Integrity Beyond Borders"</strong>, our roots are deeply planted in traditional agricultural practices and ethical manufacturing. We meticulously source every product directly from native farms and trusted suppliers, ensuring that the final goods delivered to our international clients—whether in the USA, UK, UAE, or Australia—meet stringent global standards perfectly.
            </p>
            <p>
              More than just an import-export business, we are your strategic partner in global trade, guaranteeing transparency, reliability, and excellence at every step of the supply chain.
            </p>
          </div>
          <div className="story-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
              alt="Vayunex Global team discussing international trade"
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="core-values section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The pillars that define our operations and client relationships.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <CheckCircle size={48} className="value-icon" />
              <h3>Uncompromised Quality</h3>
              <p>We adhere to strict quality control measures, ensuring every product represents the best of authentic Indian sourcing.</p>
            </div>

            <div className="value-card">
              <Leaf size={48} className="value-icon" />
              <h3>Ethical Sourcing</h3>
              <p>We empower local communities by prioritizing sustainable, ethical, and traditional farming practices.</p>
            </div>

            <div className="value-card">
              <ShieldCheck size={48} className="value-icon" />
              <h3>Complete Transparency</h3>
              <p>From the farm gate to international delivery, our entire supply chain is transparent, traceable, and documented.</p>
            </div>

            <div className="value-card">
              <Target size={48} className="value-icon" />
              <h3>Global Excellence</h3>
              <p>We constantly refine our logistics and operational efficiency to exceed international trade standards.</p>
            </div>

            <div className="value-card">
              <Handshake size={48} className="value-icon" />
              <h3>Trusted Partnerships</h3>
              <p>We build long-term, trustworthy relationships with wholesale buyers across the USA, UK, UAE, and beyond.</p>
            </div>

            <div className="value-card" style={{ background: 'var(--primary-green)' }}>
              <h3 style={{ color: 'var(--white)', marginTop: '2rem' }}>Experience the Vayunex Difference</h3>
              <p style={{ color: 'var(--white)' }}>Integrity Beyond Borders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="about-cta section">
        <div className="container">
          <h2>Ready to Elevate Your Sourcing?</h2>
          <p>
            Connect with our team today and discover how Vayunex Global can fulfill your international import requirements with unmatched authenticity.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" replace={true} className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-blue)' }}>
              Contact Our Experts
            </Link>
            <Link to="/products" replace={true} className="btn btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Added locally since it's not imported at the top to avoid another linter error.
import { ShieldCheck } from 'lucide-react';

export default About;
