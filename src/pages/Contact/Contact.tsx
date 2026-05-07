import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, PhoneCall, ChevronDown } from 'lucide-react';

const countryCodes = [
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+355', name: 'Albania', flag: '🇦🇱' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+376', name: 'Andorra', flag: '🇦🇩' },
  { code: '+244', name: 'Angola', flag: '🇦🇴' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`;
    
    const whatsappMessage = `*New Inquiry from Vayunex Global Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${fullPhoneNumber}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    const whatsappNumber = '919762540055';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country: typeof countryCodes[0]) => {
    setFormData({ ...formData, countryCode: country.code });
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        setIsDropdownOpen(true);
        e.preventDefault();
      }
      return;
    }

    // Capture A-Z keys for scrolling
    if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
      e.preventDefault(); // Prevent page from scrolling
      const searchChar = e.key.toLowerCase();
      const index = countryCodes.findIndex(c => c.name.toLowerCase().startsWith(searchChar));

      if (index !== -1 && itemRefs.current[index] && menuRef.current) {
        // Manual scroll instead of scrollIntoView to avoid scrolling the whole page
        menuRef.current.scrollTop = itemRefs.current[index]!.offsetTop;
      }
    }

    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const currentCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[20];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero standard-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="animate-fade-in">Contact Us</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have a question or looking to partner? Reach out to us today.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="info-intro">
              <h2>Get in Touch</h2>
              <p>We are here to help you bridge the gap between Indian quality and global markets.</p>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <div className="icon-box"><MapPin size={24} /></div>
                <div className="info-text">
                  <h3>Our Headquarters</h3>
                  <p>Hinjewadi, Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><Phone size={24} /></div>
                <div className="info-text">
                  <h3>Call Us</h3>
                  <a href="tel:+919762540055" className="contact-link">+91 9762540055</a>
                  <p className="sub-text">Mon - Sat, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><Mail size={24} /></div>
                <div className="info-text">
                  <h3>Email Address</h3>
                  <a href="mailto:info@vayunexglobal.com" className="contact-link">info@vayunexglobal.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name"><User size={16} /> Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><AtSign size={16} /> Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone"><PhoneCall size={16} /> Phone Number</label>
                  <div className="phone-input-group custom-phone-group">
                    <div
                      className="custom-country-selector"
                      ref={dropdownRef}
                      onKeyDown={handleKeyDown}
                      tabIndex={0}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      <div
                        className={`flag-toggle ${isDropdownOpen ? 'active' : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span className="current-flag">{currentCountry.flag}</span>
                        <ChevronDown size={14} className={`arrow ${isDropdownOpen ? 'rotate' : ''}`} />
                      </div>

                      {isDropdownOpen && (
                        <div className="country-dropdown-menu" ref={menuRef}>
                          {countryCodes.map((country, index) => (
                            <div
                              key={country.name + country.code}
                              className="country-option"
                              onClick={() => handleCountrySelect(country)}
                              ref={(el) => (itemRefs.current[index] = el)}
                            >
                              <span className="option-name">{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="input-with-code">
                      <span className="fixed-code">{formData.countryCode}</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="00000 00000"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject"><MessageSquare size={16} /> Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about Black Rice"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn pill-btn">
                  <span>SEND MESSAGE</span>
                  <Send size={18} fill="currentColor" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
