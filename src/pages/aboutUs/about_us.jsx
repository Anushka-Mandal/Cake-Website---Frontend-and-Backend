import React, { useState } from 'react';
import axios from 'axios';
import './AboutUs.css';

function AboutUs() {
  // State variables for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('All fields are required.');
      return;
    }

    try {
      // Send POST request to backend (contact endpoint)
      const response = await axios.post('http://localhost:5001/api/contact', formData);

      // Set status to success message
      setStatus('Message sent successfully!');

      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error sending message:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="about-us">
      {/* About Us Section */}
      <section className="about-section">
        <div className="content-wrapper">
          <h1 className="section-title">ABOUT US</h1>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://i.pinimg.com/564x/69/c7/c4/69c7c46224a9b98226bc6418db0cf7c3.jpg"
                alt="About Us"
                className="about-image"
              />
            </div>
            <div className="col-md-6 about-text">
              <p>
                Welcome to Dessertopia! We take pride in offering the best cakes made from the finest ingredients. We believe every celebration deserves a sweet touch!
              </p>
              <p>
                With a passion for crafting delicious, made-to-order cakes, we bring your dream designs to life, one slice at a time. Whether it's a birthday, wedding, or any special moment, we're here to make it extra delightful! Our expert bakers & decorators pour love, creativity, & attention to detail into every cake, ensuring each bite is as memorable as the occasion.
              </p>
              <p>
                From classic flavors to unique, custom creations, we've got the perfect treat to sweeten your special day. Our commitment to quality, freshness, & customer satisfaction means you can trust us to deliver a cake that not only looks amazing but tastes even better. Let us be a part of your celebrations, & we'll make sure the experience is as joyful as the cake itself!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <div className="content-wrapper">
          <h1 className="section-title">CONTACT US</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {status && <p>{status}</p>} {/* Display status message */}
          </form>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
