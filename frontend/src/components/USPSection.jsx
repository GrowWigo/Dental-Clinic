import { Stethoscope, Microscope, Baby, Clock } from 'lucide-react';

export default function USPSection() {
  return (
    <section id="usp" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose DentalCare?</h2>
          <p>We combine expertise with empathy to provide the best dental experience.</p>
        </div>
        <div className="usp-grid">
          <div className="usp-card">
            <div className="icon-wrapper">
              <Stethoscope size={40} />
            </div>
            <h3>Expert Dentists</h3>
            <p>Our team consists of highly qualified and experienced dental professionals.</p>
          </div>
          <div className="usp-card">
            <div className="icon-wrapper">
              <Microscope size={40} />
            </div>
            <h3>Advanced Technology</h3>
            <p>We use the latest dental technology for precise and painless treatments.</p>
          </div>
          <div className="usp-card">
            <div className="icon-wrapper">
              <Baby size={40} />
            </div>
            <h3>Painless Procedures</h3>
            <p>Your comfort is our priority. We ensure a relaxed and pain-free experience.</p>
          </div>
          <div className="usp-card">
            <div className="icon-wrapper">
              <Clock size={40} />
            </div>
            <h3>24/7 Support</h3>
            <p>We are available round the clock for dental emergencies and consultations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
