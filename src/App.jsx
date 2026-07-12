import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USPSection from './components/USPSection';
import Services from './components/Services';
import Dentists from './components/Dentists';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingModalOpen]);

  const openBookingModal = (e) => {
    if(e) e.preventDefault();
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <Navbar onBookClick={openBookingModal} />
      <main>
        <Hero onBookClick={openBookingModal} />
        <USPSection />
        <Services />
        <Dentists />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav onBookClick={openBookingModal} />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />
    </>
  );
}

export default App;
