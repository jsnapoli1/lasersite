import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import OrderForm from '../components/OrderForm';

const Product2 = () => {
  // Sample images for Product 2 carousel
  const product2Images = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop'
  ];

  return (
    <div className="container">
      <h1 className="page-title">Wine Glasses</h1>
      
      <div className="page-container">
        <div className="carousel-container">
          <ImageCarousel 
            images={product2Images} 
            title="Wine Glasses Gallery" 
          />
        </div>
        
        <div className="form-container">
          <OrderForm productName="Wine Glasses" />
        </div>
      </div>
    </div>
  );
};

export default Product2; 