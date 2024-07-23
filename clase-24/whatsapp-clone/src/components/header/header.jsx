import React from 'react';
import './header.css';

function Header({ nombre }) {
  return (
    <div className="header">
      <div className="header-left">
        <span>{nombre}</span>
      </div>
      <div className="header-right">
        
      </div>
    </div>
  );
}

export default Header;