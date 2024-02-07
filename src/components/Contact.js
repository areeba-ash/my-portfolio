// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <div className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here"></textarea>

        <button type="submit">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
