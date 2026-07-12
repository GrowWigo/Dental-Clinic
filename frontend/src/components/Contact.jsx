import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We are here to help you achieve your best smile.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Smile Avenue, Health District, Cityville, 45678</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Phone size={24} /></div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Mail size={24} /></div>
              <div>
                <h3>Email Us</h3>
                <p>hello@dentalcareclinic.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Clock size={24} /></div>
              <div>
                <h3>Working Hours</h3>
                <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11394.887268875507!2d-73.99222631525048!3d40.74104279515568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714856037746!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '24px', minHeight: '350px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
