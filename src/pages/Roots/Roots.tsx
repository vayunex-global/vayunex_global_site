import React from 'react';
import { Link } from 'react-router-dom';
import './Roots.css';
import { ShieldCheck, Truck, Leaf, Trees } from 'lucide-react';
import journeyPath from '../../assets/journey-path.png';

const Roots: React.FC = () => {
  return (
    <div className="roots-page">
      {/* Hero Section */}
      <section className="roots-hero standard-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Roots of Our Products</h1>
          <p>Trace the journey of our premium products from the fertile soils of India to your doorstep.</p>
        </div>
      </section>

      {/* Sourcing Philosophy */}
      <section className="section container philosophy-intro">
        <div className="philosophy-grid">
          <div className="philosophy-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="badge">Our Philosophy</span>
            <h2>Authentic Sourcing, Direct from the Source</h2>
            <p>
              At Vayunex Global, we believe that true quality starts deep within the roots. 
              We partner directly with farmers and local cooperatives across India to ensure 
              that every product we export maintains its natural integrity and nutritional value.
            </p>
            <p>
              By eliminating unnecessary intermediaries, we not only ensure the freshest 
              possible products but also guarantee fair compensation for the hardworking hands 
              that tend to the soil.
            </p>
          </div>
          <div className="philosophy-image animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
              alt="Indian Farmlands" 
              className="rounded-img shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Process Pillars */}
      <section className="section bg-light pillars-section">
        <div className="container">
          <h2 className="section-title">The Three Pillars of Our Process</h2>
          <div className="pillars-grid">
            <div className="pillar-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="pillar-icon"><Leaf size={32} /></div>
              <h3>Natural Cultivation</h3>
              <p>We prioritize traditionally grown and organic products that utilize the natural richness of Indian biodiversity.</p>
            </div>
            <div className="pillar-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="pillar-icon"><ShieldCheck size={32} /></div>
              <h3>Rigorous Testing</h3>
              <p>Every batch undergoes multi-level quality checks to meet international safety and excellence standards.</p>
            </div>
            <div className="pillar-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="pillar-icon"><Truck size={32} /></div>
              <h3>Efficient Logistics</h3>
              <p>Our advanced supply chain management ensures that products reach global markets with their freshness intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="section journey-section">
        <div className="container">
          <h2 className="section-title text-center animate-fade-in">From Soil to Global Markets</h2>
          <div className="journey-grid">
            <div className="journey-text">
              <div className="journey-timeline">
                <div className="journey-item">
                  <div className="journey-dot">1</div>
                  <div className="journey-content">
                    <h4>Farm Selection</h4>
                    <p>We identify regions in India that offer the perfect climate and soil for specific products like Black Rice or Spices.</p>
                  </div>
                </div>
                <div className="journey-item">
                  <div className="journey-dot">2</div>
                  <div className="journey-content">
                    <h4>Harvest & Processing</h4>
                    <p>Traditional harvesting methods combined with modern processing keep the nutritional value intact.</p>
                  </div>
                </div>
                <div className="journey-item">
                  <div className="journey-dot">3</div>
                  <div className="journey-content">
                    <h4>Packaging</h4>
                    <p>Eco-friendly and durable packaging designed for long-distance international transit.</p>
                  </div>
                </div>
                <div className="journey-item">
                  <div className="journey-dot">4</div>
                  <div className="journey-content">
                    <h4>Global Delivery</h4>
                    <p>Secured shipping to our partners worldwide with full traceability of the source.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="journey-visual animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="airplane-path-container">
                <img src={journeyPath} alt="Journey Path Map" className="journey-path-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section roots-cta container">
        <div className="cta-box animate-fade-in">
          <Trees size={60} className="cta-icon" />
          <h2>Experience the Authenticity of India</h2>
          <p>Join us in our mission to bring the finest Indian products to the world.</p>
          <Link to="/products" replace={true} className="btn btn-primary">Discover Our Products</Link>
        </div>
      </section>
    </div>
  );
};

export default Roots;
