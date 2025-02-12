import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

const slides = [
  {
    id: 1,
    title: "Welcome to Our Platform",
    description: "Discover amazing features and possibilities",
    image: "https://images.unsplash.com/photo-1604417619789-b145daaec6d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMHRyaXB8ZW58MHx8MHx8fDA%3D",
    cta: "Get Started"
  },
  {
    id: 2,
    title: "Intercity Travel",
    description: "Travel seamlessly between cities with ease",
    image: "https://images.unsplash.com/photo-1572401611152-cf63d874b019?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D",
    cta: "Book Now"
  },
  {
    id: 3,
    title: "Ride Sharing",
    description: "Affordable and convenient rides at your fingertips",
    image: "https://images.unsplash.com/photo-1612461494633-9ae8f707008e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhciUyMHRyaXB8ZW58MHx8MHx8fDA%3D",
    cta: "Share Ride"
  }
];
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  return (
    <div className="custom-slider position-relative vh-100 overflow-hidden">
      <div className="slider-container h-100">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide position-absolute w-100 h-100 ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div className="slider-overlay position-absolute w-100 h-100 top-0 start-0 bg-dark bg-opacity-50">
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-75">
                <h1 className="display-4 fw-bold mb-4">{slide.title}</h1>
                <p className="lead mb-4">{slide.description}</p>
                <button className="btn btn-light btn-lg px-5">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-control position-absolute start-0 top-50 translate-middle-y bg-dark bg-opacity-50 text-white border-0 p-3 ms-3"
        onClick={prevSlide}
        style={{ zIndex: 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>

      <button
        className="slider-control position-absolute end-0 top-50 translate-middle-y bg-dark bg-opacity-50 text-white border-0 p-3 me-3"
        onClick={nextSlide}
        style={{ zIndex: 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>

      <div className="slider-indicators position-absolute bottom-0 start-50 translate-middle-x mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-indicator mx-2 btn rounded-circle p-2 border-0 ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;