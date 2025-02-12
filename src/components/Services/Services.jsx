import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🚛',
      title: 'Road Transportation',
      description: 'Reliable and efficient road transportation services across the country with real-time tracking.',
    },
    {
      id: 2,
      icon: '🏭',
      title: 'Warehousing',
      description: 'Secure storage solutions with modern facilities and inventory management systems.',
    },
    {
      id: 3,
      icon: '📦',
      title: 'Cargo Services',
      description: 'Complete cargo handling solutions including packaging, loading, and unloading services.',
    },
    {
      id: 4,
      icon: '🌐',
      title: 'International Shipping',
      description: 'Global shipping services with customs clearance and documentation support.',
    },
    {
      id: 5,
      icon: '⚡',
      title: 'Express Delivery',
      description: 'Fast and reliable express delivery services for time-sensitive shipments.',
    },
    {
      id: 6,
      icon: '📱',
      title: 'Digital Solutions',
      description: 'Advanced tracking and management systems for complete shipment visibility.',
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
