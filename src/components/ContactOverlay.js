import React from 'react';

function ContactOverlay({ onClose }) {
  return (
    <div className="overlay contact-overlay">
      <div>
        <h2>Contact</h2>
        <p>
          Get in touch!
        </p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>Phone: (Optional) Your Phone Number</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ContactOverlay;
