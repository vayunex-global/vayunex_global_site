import React from 'react';
import './MissionVision.css';
import { Target, Lightbulb, Shield, Globe, Users, HeartHandshake, Award, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <div className="mission-vision-page">
      {/* Hero Section */}
      <section className="mv-hero standard-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="animate-fade-in">Mission, Vision & Strategy</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transforming global trade through integrity and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Modern Split Mission & Vision */}
      <section className="mv-split-section">
        <div className="split-panel mission-panel">
          <div className="panel-content animate-fade-in">
            <div className="icon-badge">
              <Target size={32} />
            </div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to bridge the gap between world-class Indian quality and global markets. 
              We are dedicated to sourcing premium, sustainably-grown products and delivering them 
              with absolute transparency and integrity. By fostering ethical trade and long-term 
              partnerships, we aim to deliver exceptional value to our customers, producers, 
              and stakeholders worldwide.
            </p>
            <ul className="panel-list">
              <li><CheckCircle2 size={18} /> Bridging Rural Quality & Global Access</li>
              <li><CheckCircle2 size={18} /> Championing Sustainable Sourcing</li>
              <li><CheckCircle2 size={18} /> Unwavering Commitment to Integrity</li>
            </ul>
          </div>
        </div>
        <div className="split-panel vision-panel">
          <div className="panel-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-badge green">
              <Lightbulb size={32} />
            </div>
            <h2>Our Vision</h2>
            <p>
              To be recognized as the most trusted beacon of integrity in the global import-export 
              industry. We envision a future where Vayunex Global is synonymized with reliability, 
              innovation, and excellence. Our goal is to set the gold standard for global trade, 
              empowering businesses across borders while promoting environmental stewardship 
              and economic empowerment.
            </p>
            <ul className="panel-list">
              <li><CheckCircle2 size={18} /> Global Benchmarking in Trade Reliability</li>
              <li><CheckCircle2 size={18} /> Leadership in Ethical Logistics</li>
              <li><CheckCircle2 size={18} /> Innovation-Driven Global Expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section - NEW */}
      <section className="section pillars-section overflow-hidden">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Strategic Pillars</h2>
            <p className="section-subtitle">
              The foundations on which we build our global excellence.
            </p>
          </div>

          <div className="pillars-grid-large">
            <div className="pillar-item animate-fade-in">
              <div className="pillar-icon-box">
                <Shield size={32} />
              </div>
              <h3>Reliability</h3>
              <p>Ensuring timely delivery and consistent quality through rigorous supply chain management and proactive communication.</p>
            </div>
            <div className="pillar-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="pillar-icon-box green">
                <Award size={32} />
              </div>
              <h3>Excellence</h3>
              <p>Striving for the highest certifications and standards in product sourcing and customer service excellence.</p>
            </div>
            <div className="pillar-item animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="pillar-icon-box">
                <Zap size={32} />
              </div>
              <h3>Agility</h3>
              <p>Rapidly adapting to global market trends and logistical challenges to provide seamless trade solutions.</p>
            </div>
            <div className="pillar-item animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="pillar-icon-box green">
                <BarChart3 size={32} />
              </div>
              <h3>Intelligence</h3>
              <p>Leveraging deep market insights and data-driven strategies to identify the best opportunities for our partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - REDESIGNED */}
      <section className="section bg-dark-professional">
        <div className="container">
          <h2 className="section-title text-white">Our Core Philosophy</h2>
          <p className="section-subtitle text-white-muted">
            Fundamental truths that define the 'Vayunex Way' of doing business.
          </p>

          <div className="philosophy-grid-modern">
            <div className="phil-card">
              <div className="phil-icon"><Shield size={28} /></div>
              <div className="phil-text">
                <h3>Absolute Integrity</h3>
                <p>We believe that honesty is the only way to build a lasting global legacy. Transparency is our baseline.</p>
              </div>
            </div>
            <div className="phil-card">
              <div className="phil-icon"><Globe size={28} /></div>
              <div className="phil-text">
                <h3>Borderless Vision</h3>
                <p>We see a world without trade barriers, where quality flows freely to where it's needed most.</p>
              </div>
            </div>
            <div className="phil-card">
              <div className="phil-icon"><Users size={28} /></div>
              <div className="phil-text">
                <h3>Collaborative Growth</h3>
                <p>We grow when our partners and producers grow. Our success is fundamentally interconnected.</p>
              </div>
            </div>
            <div className="phil-card">
              <div className="phil-icon"><HeartHandshake size={28} /></div>
              <div className="phil-text">
                <h3>Unwavering Trust</h3>
                <p>Trust is earned through consistent performance. We work every day to be your most reliable partner.</p>
              </div>
            </div>
            <div className="phil-card">
              <div className="phil-icon"><Lightbulb size={28} /></div>
              <div className="phil-text">
                <h3>Driven Innovation</h3>
                <p>Utilizing modern technology and logistical breakthroughs to solve the trade challenges of tomorrow.</p>
              </div>
            </div>
            <div className="phil-card">
              <div className="phil-icon"><Zap size={28} /></div>
              <div className="phil-text">
                <h3>Market Excellence</h3>
                <p>Setting the benchmark for quality in every product category we touch, from black rice to industrial goods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section - NEW */}
      <section className="section container promise-section">
        <div className="promise-box animate-fade-in">
          <div className="promise-content">
            <h3>The Vayunex Promise</h3>
            <h2>A Commitment to Global Excellence</h2>
            <p>
              "We promise to never compromise on the quality of our products or the integrity of 
              our word. Every shipment we handle is a testament to our dedication to the 
              betterment of global trade."
            </p>
            <div className="promise-footer">
              <span className="founder-signature">Vayunex Global Team</span>
            </div>
          </div>
          <div className="promise-visual">
            <div className="visual-circle"></div>
            <Shield size={120} className="floating-shield" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
