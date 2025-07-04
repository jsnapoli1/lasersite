import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="page-title">Welcome to Nails N' Things</h1>
      
      <div className="home-content">
        {/* First Section - Left Justified */}
        <div className="home-section left-aligned">
          <div className="home-image">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop" 
              alt="Woodshop with tools and equipment"
            />
          </div>
          <div className="home-text">
            <h2>High Quality Handmade Goods</h2>
            <p>
              All of our products are handmade, laser engraved in our garage, and shipped directly to you. When we engrave other products, we only source genuine goods to share with you.
            </p>
            <p>
              We stand behind our products and will do our best to make sure you are happy with your purchase every step of the way. We customize designs to your needs and will work with you to make sure you are happy with your purchase.
            </p>
          </div>
        </div>

        {/* Second Section - Right Justified */}
        <div className="home-section right-aligned">
          <div className="home-text">
            <h2>By Students, For Students</h2>
            <p>
            As proud CU Boulder alumni, we know how meaningful it is to show off your school spirit, club pride, or organization identity. That's why we create personalized, laser-engraved goods tailored specifically for students—by people who've been in your shoes. Whether you're looking to rep your major, team, or club, we've got you covered with custom designs that actually mean something to you.
            </p>
          </div>
          <div className="home-image">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" 
              alt="College graduation ceremony"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 