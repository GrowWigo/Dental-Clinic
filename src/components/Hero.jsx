import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} className="text-primary" />
            <span>#1 Rated Dental Clinic in City</span>
          </div>
          <h1 className="hero-title">
            Your <span className="text-highlight">Smile</span>,<br/> Our Masterpiece
          </h1>
          <p className="hero-subtitle">
            Experience world-class dental care with state-of-the-art technology and a team of expert dentists dedicated to your oral health and confidence.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-large open-booking-btn" onClick={onBookClick}>
              Book Your Appointment Now <ArrowRight size={20} />
            </button>
            <div className="hero-stats">
              <div className="stat">
                <strong>10k+</strong>
                <span>Happy Patients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <strong>15+</strong>
                <span>Expert Dentists</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="floating-card card-1">
            <span className="emoji">😁</span>
            <div>
              <strong>Painless</strong>
              <p>Treatments</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <span className="emoji">⭐</span>
            <div>
              <strong>4.9/5</strong>
              <p>Google Reviews</p>
            </div>
          </div>
          <div className="hero-image-placeholder">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smiling patient" className="hero-img" />
          </div>
        </div>
      </div>
      <div className="hero-bg-shape"></div>
      <div className="hero-bg-shape-2"></div>
    </section>
  );
}
