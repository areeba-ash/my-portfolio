import React from 'react';
import './Contact.css';

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Fetch form values
    const name = encodeURIComponent(event.target.name.value.trim());
    const email = encodeURIComponent(event.target.email.value.trim());
    const message = encodeURIComponent(event.target.message.value.trim());
    
    // Construct message for WhatsApp
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Replace with your WhatsApp number
    const phoneNumber = '+923088589651'; 
    // Generate WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="contact-container">
      <h2>Book a Consulation / Get Quote</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Type your message here" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
