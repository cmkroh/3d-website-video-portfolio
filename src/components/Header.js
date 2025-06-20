import React from 'react';

function Header({ onAboutClick, onContactClick }) {
  return (
    <header className="site-header">
      <h1>Your Name</h1>
      <nav>
        <button onClick={onAboutClick}>About</button>
        <button onClick={onContactClick}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
