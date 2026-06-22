import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Globe2, ArrowRight } from 'lucide-react';
import './Home.css';

// Import local product images for the selection section
import chakHaoRiceImg from '../../assets/products/Chak-hao_rice.jpg';
import johaRiceImg from '../../assets/products/Joha_rice.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Vayunex.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <span className="hero-badge">Welcome to Vayunex Global</span>
          <h1 className="hero-title">Global Import-Export You Can Trust</h1>
          <p className="hero-subtitle">
            Delivering Authentic Indian Products Worldwide. <br /> Integrity Beyond Borders.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary hero-btn">
              Get Free Consultation
            </Link>
            <Link to="/products" className="btn btn-secondary hero-btn">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <h2 className="section-title">Why Choose Vayunex?</h2>
          <p className="section-subtitle">
            We are built on the foundation of trust, quality, and a commitment to delivering excellence across borders.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" size={32} />
              </div>
              <h3>Uncompromised Authenticity</h3>
              <p>We source directly from trusted Indian farms and premium manufacturers to ensure 100% genuine products.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Globe2 className="feature-icon" size={32} />
              </div>
              <h3>Global Network</h3>
              <p>With an expansive logistics network, we ensure seamless delivery to the USA, UK, UAE, Australia, and New Zealand.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck className="feature-icon" size={32} />
              </div>
              <h3>Transparent Supply Chain</h3>
              <p>From sourcing to doorstep delivery, our processes are ethical, transparent, and fully documented.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="about-preview">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
              alt="Vayunex Global Corporate Office"
              className="about-image"
            />
            <div className="experience-badge">
              <strong>Premium</strong>
              <span>Sourcing</span>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Your Partner in Global Trade</h2>
            <p className="about-text">
              At Vayunex Global, we believe in "Integrity Beyond Borders." We bridge the gap between local Indian authenticity and international demand. Whether you are a wholesale buyer or a health-conscious individual, we guarantee products that meet global standards.
            </p>
            <p className="about-text">
              By working closely with traditional farmers and ethical manufacturers in India, we bring you consumable products that carry the rich heritage of their origins.
            </p>
            <Link to="/about" className="learn-more-link">
              Read Our Full Story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Products Preview */}
      <section className="products-preview section">
        <div className="container">
          <h2 className="section-title">Our Premium Selection</h2>
          <p className="section-subtitle">
            Authentic, ethically sourced consumables from the heart of India to your business.
          </p>

          <div className="products-grid">
            {/* Product 1 - Joha Rice */}
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${johaRiceImg})` }}></div>
              <div className="product-info">
                <h3>Joha Rice</h3>
                <p>An exquisite, aromatic winter rice indigenous to the Northeast of India, prized for its delicate scent and easy digestibility.</p>
                <Link to="/contact" className="btn btn-primary w-full">Enquire Now</Link>
              </div>
            </div>

            {/* Product 2 - Chak-Hao (Black Rice) */}
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${chakHaoRiceImg})` }}></div>
              <div className="product-info">
                <h3>Chak-Hao (Black Rice)</h3>
                <p>A deeply aromatic black rice celebrated for its nutty flavor, uniquely high anthocyanin antioxidants, and rich dietary fiber.</p>
                <Link to="/contact" className="btn btn-primary w-full">Enquire Now</Link>
              </div>
            </div>

          </div>

          <div className="view-all-container">
            <Link to="/products" className="btn btn-secondary" style={{ color: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Global Presence */}
      <section className="global-presence section">
        <div className="container">
          <div className="presence-content">
            <h2 className="section-title text-white">Our Global Reach</h2>
            <p className="presence-desc">
              We proudly serve health-conscious individuals and wholesale buyers across major international markets, ensuring safe, timely, and compliant deliveries.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">USA</span>
                <span className="stat-label">Market</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">UK</span>
                <span className="stat-label">Market</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">UAE</span>
                <span className="stat-label">Market</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">EUROPE</span>
                <span className="stat-label">Markets</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">ASIA</span>
                <span className="stat-label">Markets</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">AFRICA</span>
                <span className="stat-label">Markets</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">AUS/NZ</span>
                <span className="stat-label">Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA / Inquiry Bar */}
      <section className="cta-section section">
        <div className="container cta-container">
          <div className="cta-text">
            <h2>Ready to source the best for your business?</h2>
            <p>Connect with our sourcing experts and get a customized quote within 24 hours.</p>
          </div>
          <div className="cta-action">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Inquiry Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
