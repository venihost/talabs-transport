import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/images/truck1.jpg',
      alt: 'Transport Truck 1',
      title: 'Modern Fleet'
    },
    {
      id: 2,
      src: '/images/warehouse.jpg',
      alt: 'Warehouse',
      title: 'Storage Facility'
    },
    {
      id: 3,
      src: '/images/logistics.jpg',
      alt: 'Logistics Operations',
      title: 'Logistics'
    },
    {
      id: 4,
      src: '/images/delivery.jpg',
      alt: 'Delivery Service',
      title: 'Fast Delivery'
    },
    {
      id: 5,
      src: '/images/cargo.jpg',
      alt: 'Cargo Handling',
      title: 'Cargo Services'
    },
    {
      id: 6,
      src: '/images/team.jpg',
      alt: 'Our Team',
      title: 'Professional Team'
    }
  ];

  return (
    <div className="gallery-container">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
