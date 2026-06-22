import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Zap, Award } from 'lucide-react';
import './Products.css';

// Import local product images
import shilajitImg from '../../assets/products/Shilajit.jpg';
import chakHaoRiceImg from '../../assets/products/Chak-hao_rice.jpg';
import johaRiceImg from '../../assets/products/Joha_rice.jpg';
import rajgiraImg from '../../assets/products/Rajgira(Amaranth).jpg';

const Products: React.FC = () => {
  const products = [
    {
      id: 'joha-rice',
      name: 'Joha Rice',
      description: 'An exquisite, aromatic winter rice indigenous to the Northeast of India, prized for its delicate, sweet scent and superior taste. Grown traditionally by local farmers, Joha Rice is known for its high nutritional value, easy digestibility, and unique flavor profile. It is the perfect choice for creating rich traditional dishes, festive meals, and elevating everyday culinary experiences.',
      image: johaRiceImg,
      features: ['Aromatic Scent', 'Traditional Farming', 'Easily Digestible', 'Premium Quality'],
      icon: <Leaf size={20} />
    },
    {
      id: 'chak-hao',
      name: 'Chak-Hao (Black Rice)',
      description: 'A deeply aromatic and highly nutritious black rice, celebrated for its rich, slightly nutty flavor and remarkable health benefits. Uniquely high in anthocyanin antioxidants, dietary fiber, and essential minerals, this ancient grain supports heart health and overall wellness. Sourced from the finest, sustainable farms, it is ideal for gourmet recipes, healthy modern diets, and striking culinary presentations.',
      image: chakHaoRiceImg,
      features: ['High Antioxidants', 'Rich in Fiber', 'Nutrient-Dense', 'Gourmet Ingredient'],
      icon: <Leaf size={20} />
    },
    {
      id: 'rajgira',
      name: 'Rajgira (Amaranth)',
      description: 'An ancient pseudocereal and powerful superfood, packed with high-quality protein, essential amino acids, calcium, and iron. Naturally gluten-free and highly versatile, Rajgira is a staple for fasting and healthy lifestyles alike. It provides sustained energy and is perfect for baking, porridge, or as a wholesome addition to a balanced, health-conscious diet.',
      image: rajgiraImg,
      features: ['High Protein', 'Gluten-Free', 'Rich in Calcium & Iron', 'Superfood'],
      icon: <Zap size={20} />
    },
    {
      id: 'shilajit',
      name: 'Pure Shilajit Extract',
      description: 'Premium-grade, purified Shilajit resin ethically sourced from the pristine high altitudes of the Himalayas. Packed with over 80 essential trace minerals and high levels of fulvic acid, it serves as a potent natural adaptogen. It enhances natural energy, stamina, cognitive function, and vitality. Responsibly processed to preserve its maximum potency and holistic wellness benefits.',
      image: shilajitImg,
      features: ['Potent Adaptogen', 'Rich in Fulvic Acid', 'Natural Vitality', 'Ethically Sourced'],
      icon: <Shield size={20} />
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero standard-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="animate-fade-in">Our Products</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nature’s finest, rooted in true Indian tradition.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container products-intro animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>
            From rare grains like Chak-Hao and Joha rice to powerful Ayurvedic products, 
            we bring nature's finest rooted in true Indian tradition. Every product is 
            responsibly sourced, quality-checked, and trusted for delivering authentic 
            health and wellness benefits.
          </p>
        </div>
      </section>

      {/* Product List */}
      <div className="product-list">
        {products.map((product, index) => (
          <section key={product.id} className="product-section">
            <div className="container">
              <div className="product-grid animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
                </div>
                <div className="product-content">
                  <div className="feature-tag">
                    {product.icon}
                    <span>Authentic Indian</span>
                  </div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="product-features">
                    {product.features.map(feature => (
                      <span key={feature} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" replace={true} className="product-inquiry-btn">
                    Inquire for Bulk Export <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Products;
