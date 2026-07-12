import { useState, useEffect } from 'react';
import { X, CheckCircle, Stethoscope, Smile, MessageSquare, MoreHorizontal, Loader2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: 'General Checkup',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    // Basic validation
    if (step === 2 && (!formData.date || !formData.time)) {
      alert("Please select a date and time");
      return;
    }
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStep('success');
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after a slight delay for smooth transition
    setTimeout(() => {
      setStep(1);
      setFormData({
        service: 'General Checkup',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay active" onClick={(e) => { if(e.target.classList.contains('booking-modal-overlay')) handleClose() }}>
      <div className="booking-modal-content">
        <div className="modal-header">
          <h2>Book Appointment</h2>
          <button className="close-modal-btn" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="booking-steps-container">
          {/* Step Progress Indicators */}
          {step !== 'success' && (
            <div className="step-progress">
              <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
              <div className={`step-line ${step > 1 ? 'active' : ''}`}></div>
              <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
              <div className={`step-line ${step > 2 ? 'active' : ''}`}></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
          )}

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="booking-step active">
              <h3>Select Service</h3>
              <div className="service-selection">
                <label className="radio-card">
                  <input type="radio" name="service" value="General Checkup" checked={formData.service === 'General Checkup'} onChange={handleChange} />
                  <span className="card-content">
                    <Stethoscope />
                    <span>General Checkup</span>
                  </span>
                </label>
                <label className="radio-card">
                  <input type="radio" name="service" value="Cleaning" checked={formData.service === 'Cleaning'} onChange={handleChange} />
                  <span className="card-content">
                    <Smile />
                    <span>Teeth Cleaning</span>
                  </span>
                </label>
                <label className="radio-card">
                  <input type="radio" name="service" value="Consultation" checked={formData.service === 'Consultation'} onChange={handleChange} />
                  <span className="card-content">
                    <MessageSquare />
                    <span>Consultation</span>
                  </span>
                </label>
                <label className="radio-card">
                  <input type="radio" name="service" value="Other" checked={formData.service === 'Other'} onChange={handleChange} />
                  <span className="card-content">
                    <MoreHorizontal />
                    <span>Other</span>
                  </span>
                </label>
              </div>
              <button className="btn btn-primary btn-full-width" onClick={nextStep}>Continue</button>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="booking-step active">
              <h3>Select Date & Time</h3>
              <div className="form-group">
                <label>Select Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  onClick={(e) => {
                    try {
                      if (typeof e.target.showPicker === 'function') {
                        e.target.showPicker();
                      }
                    } catch (err) {
                      // ignore error if showPicker is not supported or not allowed
                    }
                  }}
                  required 
                />
              </div>
              <div className="form-group mt-3">
                <label>Available Slots</label>
                <div className="time-slots">
                  {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'].map((timeStr) => (
                    <label key={timeStr} className="time-slot">
                      <input 
                        type="radio" 
                        name="time" 
                        value={timeStr}
                        checked={formData.time === timeStr}
                        onChange={handleChange}
                      />
                      <span>{timeStr}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="step-actions">
                <button className="btn btn-outline" onClick={prevStep}>Back</button>
                <button className="btn btn-primary" onClick={nextStep}>Continue</button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <div className="booking-step active">
              <h3>Your Details</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                />
              </div>
              <div className="step-actions">
                <button className="btn btn-outline" onClick={prevStep} disabled={loading}>Back</button>
                <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
                  {loading ? <><Loader2 className="animate-spin" /> Confirming...</> : 'Confirm Booking'}
                </button>
              </div>
            </div>
          )}

          {/* Success Screen */}
          {step === 'success' && (
            <div className="booking-step active success-screen">
              <div className="success-icon">
                <CheckCircle size={80} />
              </div>
              <h3>Booking Confirmed!</h3>
              <p>Your appointment for <strong>{formData.service}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been successfully scheduled.</p>
              <button className="btn btn-primary btn-full-width mt-4" onClick={handleClose}>Done</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
