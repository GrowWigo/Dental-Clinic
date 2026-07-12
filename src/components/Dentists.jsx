export default function Dentists() {
  return (
    <section id="dentists" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Experts</h2>
          <p>Highly skilled professionals dedicated to your oral health.</p>
        </div>
        <div className="dentists-scroll-container">
          <div className="dentist-card">
            <div className="dentist-img placeholder-img-1"></div>
            <div className="dentist-info">
              <h3>Dr. Sarah Jenkins</h3>
              <span className="dentist-role">Chief Orthodontist</span>
              <p>15+ Years Experience • Invisalign Certified</p>
            </div>
          </div>
          <div className="dentist-card">
            <div className="dentist-img placeholder-img-2"></div>
            <div className="dentist-info">
              <h3>Dr. Michael Chen</h3>
              <span className="dentist-role">Implantologist</span>
              <p>12+ Years Experience • Fellow ICOI</p>
            </div>
          </div>
          <div className="dentist-card">
            <div className="dentist-img placeholder-img-3"></div>
            <div className="dentist-info">
              <h3>Dr. Emily Watson</h3>
              <span className="dentist-role">Pediatric Dentist</span>
              <p>8+ Years Experience • Child-friendly care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
