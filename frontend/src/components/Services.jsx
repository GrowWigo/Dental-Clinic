import { Smile, Sparkles, Activity, Anchor, Heart, Shield } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Dental Services</h2>
          <p>Comprehensive dental care tailored to your specific needs.</p>
        </div>
        <div className="services-grid">
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">General Dentistry</h3>
            <p className="service-desc">Routine check-ups, cleanings, and preventative care to keep your smile healthy.</p>
          </div>
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">Cosmetic Dentistry</h3>
            <p className="service-desc">Teeth whitening, veneers, and smile makeovers for a perfect smile.</p>
          </div>
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">Orthodontics</h3>
            <p className="service-desc">Braces and clear aligners (Invisalign) to straighten your teeth effectively.</p>
          </div>
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">Dental Implants</h3>
            <p className="service-desc">Permanent and natural-looking solutions for missing teeth.</p>
          </div>
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">Root Canal</h3>
            <p className="service-desc">Painless endodontic therapy to save infected or damaged teeth.</p>
          </div>
          <div className="service-card" style={{ backgroundImage: "linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url('https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=600')" }}>
            <h3 className="service-title">Pediatric Dentistry</h3>
            <p className="service-desc">Gentle and friendly dental care specialized for children and infants.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
