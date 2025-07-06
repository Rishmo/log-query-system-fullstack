import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="hero-header">
      <div className="hero-content">
        <h1>
          <span role="img" aria-label="logs">📊</span> Log Ingestion & Query Dashboard
        </h1>
        <p>Visualize, filter, and analyze logs like a pro 👨‍💻</p>
      </div>
    </div>
  );
}

export default Header;
