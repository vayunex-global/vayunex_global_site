import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Zap, Award } from 'lucide-react';
import './Products.css';

// Import local product images
import chakHaoImg from '../../assets/products/chak_hao.png';
import johaImg from '../../assets/products/joha.png';
import rajgiraImg from '../../assets/products/rajgira.png';
import shilajitImg from '../../assets/products/shilajit_v2.png';

const Products: React.FC = () => {
  const products = [
    {
      id: 'chak-hao',
      name: 'Chak-Hao Rice (Black Rice)',
      description: 'Sourced from the North-Eastern region of India, Chak-Hao is a traditional black rice known for its natural color, mild aroma, and nutritional richness. It contains high levels of antioxidants and is widely used in premium and health-conscious food segments. A nutrient-dense superfood ideal for gourmet culinary applications and health-conscious lifestyles, specialty dishes, and modern healthy diets.',
      image: chakHaoImg,
      features: ['High Antioxidants', 'Rich in Fiber', 'Naturally Sourced', 'Superfood'],
      icon: <Zap size={20} />
    },
    {
      id: 'joha-rice',
      name: 'Joha Rice',
      description: 'Joha rice is an aromatic, short-grain variety grown in Assam. It is valued for its pleasant fragrance, soft texture, and easy digestibility. Commonly used in traditional meals, it is also gaining popularity in international markets for its unique aroma and consistent cooking quality.',
      image: johaImg,
      features: ['Aromatic', 'Easy Digestibility', 'Premium Quality', 'Soft Texture'],
      icon: <Leaf size={20} />
    },
    {
      id: 'rajgira',
      name: 'Rajgira (Amaranth)',
      description: 'Rajgira is a naturally gluten-free grain widely consumed across India. It is rich in protein, fiber, and essential minerals, making it suitable for health foods and dietary products. It can be processed into flour, puffed grains, or snacks, meeting the growing global demand for nutritious alternatives.',
      image: rajgiraImg,
      features: ['Gluten-Free', 'High Protein', 'Rich in Minerals', 'Versatile Grains'],
      icon: <Award size={20} />
    },
    {
      id: 'shilajit',
      name: 'Shilajit',
      description: 'Shilajit is a naturally occurring potent mineral-rich resin, found in the Himalayan ranges. It is processed and purified before use, ensuring quality and safety standards. Known for its traditional use in wellness applications, it is widely demanded in nutraceutical and herbal product industries.',
      image: shilajitImg,
      features: ['Potent Resin', 'Mineral-Rich', 'Himalayan Source', 'Purified Quality'],
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
                  <img src={product.image} alt={product.name} />
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
