import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "It is generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, your dentist may suggest more frequent visits based on your specific oral health needs."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major dental insurance plans. Please contact our office with your insurance details, and we will be happy to verify your coverage."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you experience a dental emergency, such as a severe toothache, knocked-out tooth, or broken restoration, please call our emergency line immediately. We prioritize urgent cases and will try to see you as soon as possible."
  },
  {
    question: "Are your treatments painful?",
    answer: "We utilize the latest techniques and local anesthesia to ensure that most procedures are virtually painless. Your comfort is our top priority."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services.</p>
        </div>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown size={20} />
              </button>
              <div 
                className="faq-answer" 
                style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
