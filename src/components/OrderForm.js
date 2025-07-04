import React, { useState, useEffect } from 'react';
import './OrderForm.css';

const OrderForm = ({ productName }) => {
  const [formData, setFormData] = useState({
    color: '',
    design: '',
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    venmoConfirmed: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Order submitted successfully! Please complete your Venmo payment to @jsnapoli1 to finalize your purchase.');
      // Here you would typically send the data to your backend
      console.log('Order submitted:', formData);
    }
  };

  useEffect(() => {
    const isValid = 
      formData.color.trim() !== '' &&
      formData.design.trim() !== '' &&
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.city.trim() !== '' &&
      formData.state.trim() !== '' &&
      formData.zipCode.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.venmoConfirmed;
    
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <div className="order-form">
      <h3 className="form-title">Order {productName}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="color">Color *</label>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
            className="form-select"
          >
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="nude">Nude</option>
            <option value="coral">Coral</option>
            <option value="navy">Navy</option>
            <option value="burgundy">Burgundy</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="design">Design *</label>
          <select
            id="design"
            name="design"
            value={formData.design}
            onChange={handleInputChange}
            required
            className="form-select"
          >
            <option value="">Select a design</option>
            <option value="solid">Solid Color</option>
            <option value="french-manicure">French Manicure</option>
            <option value="gradient">Gradient</option>
            <option value="glitter">Glitter</option>
            <option value="floral">Floral Pattern</option>
            <option value="geometric">Geometric Pattern</option>
            <option value="stripes">Stripes</option>
            <option value="polka-dots">Polka Dots</option>
            <option value="marble">Marble Effect</option>
            <option value="ombre">Ombre</option>
            <option value="metallic">Metallic</option>
            <option value="matte">Matte Finish</option>
            <option value="glossy">Glossy Finish</option>
            <option value="chrome">Chrome</option>
            <option value="holographic">Holographic</option>
            <option value="custom">Custom Design</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Shipping Address *</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State *</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code *</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="venmoConfirmed"
            name="venmoConfirmed"
            checked={formData.venmoConfirmed}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="venmoConfirmed">
            I confirm that I will Venmo @jsnapoli1 before my purchase is finalized *
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm; 