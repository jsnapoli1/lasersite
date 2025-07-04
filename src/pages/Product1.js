import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import OrderForm from '../components/OrderForm';

const Product1 = () => {
  // Sample images for Product 1 carousel
  const product1Images = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop'
  ];

  return (
    <div className="container">
      <h1 className="page-title">Stanley Cups</h1>
      
      <div className="page-container">
        <div className="carousel-container">
          <ImageCarousel 
            images={product1Images} 
            title="Stanley Cups Gallery" 
          />
        </div>
        
        <div className="form-container">
          <OrderForm productName="Stanley Cups" />
        </div>
      </div>
    </div>
  );
};

export default Product1; 