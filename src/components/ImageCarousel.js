import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <h3 className="carousel-title">{title}</h3>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className="carousel-slide">
          <img 
            src={images[currentIndex]} 
            alt={`${title} - ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 