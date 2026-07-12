import { Star, StarHalf, CheckCircle } from 'lucide-react';

const testimonialsTop = [
  { name: 'John Doe', avatar: 'JD', role: 'Root Canal Patient', rating: 5, text: "The best dental experience I've ever had. The staff is incredibly friendly and the procedure was completely painless. Highly recommend!" },
  { name: 'Alice Smith', avatar: 'AS', role: 'Orthodontics Patient', rating: 5, text: "I got my Invisalign here and the results are amazing. Dr. Sarah was extremely helpful throughout the entire process." },
  { name: 'Robert Johnson', avatar: 'RJ', role: 'General Dentistry', rating: 4.5, text: "Very professional clinic with modern equipment. They explained everything clearly before starting the treatment." },
  { name: 'Emily Davis', avatar: 'ED', role: 'Teeth Whitening', rating: 5, text: "My smile has never looked brighter! The whitening procedure was quick and the results were immediate." },
  { name: 'Michael Brown', avatar: 'MB', role: 'Dental Implants', rating: 5, text: "Life-changing experience. The implants look and feel like my natural teeth. Great team!" },
  { name: 'Sarah Wilson', avatar: 'SW', role: 'Pediatric Care', rating: 5, text: "They are so good with kids. My daughter used to be afraid of the dentist, but now she loves coming here." },
];

const testimonialsBottom = [
  { name: 'David Miller', avatar: 'DM', role: 'Emergency Patient', rating: 5, text: "I had a severe toothache and they accommodated me immediately. Truly lifesavers!" },
  { name: 'Jessica Taylor', avatar: 'JT', role: 'Cosmetic Dentistry', rating: 4.5, text: "The veneers are perfect. I can't stop smiling. Thank you so much for the excellent work." },
  { name: 'William Anderson', avatar: 'WA', role: 'Checkup & Cleaning', rating: 5, text: "Very thorough cleaning and the hygienist was very gentle. Best clinic in the city." },
  { name: 'Olivia Thomas', avatar: 'OT', role: 'Braces', rating: 5, text: "After 18 months of braces, my teeth are perfectly straight. The orthodontic team is top-notch." },
  { name: 'James Jackson', avatar: 'JJ', role: 'Wisdom Tooth', rating: 5, text: "Wisdom tooth extraction was quick and painless. Recovery was exactly as they explained." },
  { name: 'Sophia White', avatar: 'SW', role: 'Gum Treatment', rating: 5, text: "Excellent periodontic care. My gums are healthy again thanks to their dedicated treatment plan." },
];

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="google-badge">
        <span className="g-icon">G</span>
        <div className="stars">
          {[...Array(Math.floor(t.rating))].map((_, i) => <Star key={i} fill="#fbbf24" color="#fbbf24" size={16} />)}
          {t.rating % 1 !== 0 && <StarHalf fill="#fbbf24" color="#fbbf24" size={16} />}
        </div>
      </div>
      <p className="review-text">"{t.text}"</p>
      <div className="reviewer">
        <div className="reviewer-avatar">{t.avatar}</div>
        <div className="reviewer-details">
          <h4>{t.name} <CheckCircle size={14} color="#10b981" /></h4>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container">
        <div className="section-header">
          <h2>What Our Patients Say</h2>
          <p>Real stories from our happy patients on Google.</p>
        </div>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="marquee-wrapper">
        
        {/* Top Row: Left to Right */}
        <div className="marquee-track marquee-right">
          <div className="marquee-content">
            {testimonialsTop.map((t, idx) => <TestimonialCard key={`top1-${idx}`} t={t} />)}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {testimonialsTop.map((t, idx) => <TestimonialCard key={`top2-${idx}`} t={t} />)}
          </div>
        </div>

        {/* Bottom Row: Right to Left */}
        <div className="marquee-track marquee-left">
          <div className="marquee-content">
            {testimonialsBottom.map((t, idx) => <TestimonialCard key={`bot1-${idx}`} t={t} />)}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {testimonialsBottom.map((t, idx) => <TestimonialCard key={`bot2-${idx}`} t={t} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
