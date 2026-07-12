import { useState, useEffect } from 'react';
import { Smile, Menu, X } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <Smile className="text-primary" size={24} /> DentalCare
          </a>
          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#dentists">Our Dentists</a>
            <a href="#testimonials">Reviews</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="btn btn-primary open-booking-btn desktop-only" onClick={onBookClick}>
            Book Appointment
          </button>
        </div>
      </header>
    </>
  );
}
