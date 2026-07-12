import { Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#" className="logo footer-logo">
            <Smile size={24} /> DentalCare
          </a>
          <p>Providing exceptional dental care with a gentle touch. Your smile is our passion.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#services">Services</a>
          <a href="#dentists">Our Dentists</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="footer-links">
          <h3>Services</h3>
          <a href="#">General Dentistry</a>
          <a href="#">Cosmetic Dentistry</a>
          <a href="#">Orthodontics</a>
          <a href="#">Implants</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 DentalCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
