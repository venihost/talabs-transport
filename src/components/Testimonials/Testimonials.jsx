import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Solutions Inc.',
      image: '/images/testimonials/john.jpg',
      text: 'TaLabs Transport has been instrumental in streamlining our logistics operations. Their reliable service and professional team have made them our go-to transport partner.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager, Global Trade Co.',
      image: '/images/testimonials/sarah.jpg',
      text: 'The level of service and attention to detail provided by TaLabs Transport is exceptional. They consistently deliver on time and handle our cargo with utmost care.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Logistics Director, Asian Markets Ltd.',
      image: '/images/testimonials/michael.jpg',
      text: 'Working with TaLabs Transport has significantly improved our supply chain efficiency. Their digital tracking system provides real-time updates that we greatly value.',
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
            <div className="testimonial-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="author-image"
              />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
