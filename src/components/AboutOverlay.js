import React from 'react';

function AboutOverlay({ onClose }) {
  return (
    <div className="overlay about-overlay">
      <div>
        <h2>About Me</h2>
        <p>
          Your bio goes here.  Talk about your skills, experience, and passion for video editing.  Describe the types of projects you enjoy.  This is your chance to connect with potential clients or employers.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AboutOverlay;
