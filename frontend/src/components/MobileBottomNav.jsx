import { CalendarCheck } from 'lucide-react';

export default function MobileBottomNav({ onBookClick }) {
  return (
    <div className="bottom-nav-mobile">
      <button className="btn btn-primary btn-full-width open-booking-btn" onClick={onBookClick}>
        <CalendarCheck size={20} /> Book Appointment Now
      </button>
    </div>
  );
}
