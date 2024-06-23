import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const phoneNumber = '+923088589651'; // Replace with your WhatsApp number

  const [selectedService, setSelectedService] = useState('');
  const [showWebsiteType, setShowWebsiteType] = useState(false);

  const handleServiceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    setShowWebsiteType(selectedValue === 'Website Development');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const service = encodeURIComponent(selectedService);
    const websiteType = encodeURIComponent(document.getElementById('websiteType').value);
    const timeRequired = encodeURIComponent(document.getElementById('timeRequired').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const text = `Name: ${name}%0AEmail: ${email}%0AService: ${service}%0AWebsite Type: ${websiteType}%0ATime Required: ${timeRequired}%0A${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="contact-container">
      <h2>Contact</h2>
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
            <label htmlFor="service">What service do you want?</label>
            <select id="service" name="service" onChange={handleServiceChange} value={selectedService} required>
              <option value="">Select</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO">SEO</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Redesigning/Revamping">Redesigning/Revamping</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {showWebsiteType && (
            <div className="form-group">
              <label htmlFor="websiteType">Type of Website:</label>
              <select id="websiteType" name="websiteType">
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="E-commerce">E-commerce</option>
                {/* Add more options as needed */}
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="timeRequired">Time Required:</label>
            <input type="text" id="timeRequired" name="timeRequired" placeholder="Enter time required" />
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


// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission

//     // Fetch form values
//     const name = encodeURIComponent(event.target.name.value.trim());
//     const email = encodeURIComponent(event.target.email.value.trim());
//     const message = encodeURIComponent(event.target.message.value.trim());
    
//     // Construct message for WhatsApp
//     const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

//     // Replace with your WhatsApp number
//     const phoneNumber = '+923088589651'; 
//     // Generate WhatsApp link
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;

//     // Redirect to WhatsApp
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <section className="contact-container">
//       <h2>Book a Consulation / Get Quote</h2>
//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Your Name:</label>
//             <input type="text" id="name" name="name" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Your Email:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email" />
//           </div>
//           <label htmlFor="service">What service do you want?</label>
//           <select id="service" name="service" required>
//             <option value="Website Development">Website Development</option>
//             <option value="SEO">SEO</option>
//             <option value="Social Media Marketing">Social Media Marketing</option>
//             <option value="Redesigning/Revamping">Redesigning/Revamping</option>
//             {/* Add more options as needed */}
//           </select>
//           <label htmlFor="websiteType">Type of Website:</label>
//           <select id="websiteType" name="websiteType">
//             <option value="E-commerce Website">E-commerce Website</option>
//             <option value="Business Website">Business Website</option>
//             <option value="Educational Website">Educational Website</option>
//             <option value="Portfolio Website">Portfolio Website</option>
//             <option value="Landing page">Landing page</option>
//             <option value="Blog Website">Blog Website</option>
//             <option value="Other">Other</option>
           
//           </select>

//           <label htmlFor="timeRequired">Time Required:</label>
//           <input type="text" id="timeRequired" name="timeRequired" placeholder="Enter time required" />

//           <div className="form-group">
//             <label htmlFor="message">Your Message:</label>
//             <textarea id="message" name="message" placeholder="Type your message here" required></textarea>
//           </div>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
