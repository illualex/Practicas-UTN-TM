import React from 'react';
import './header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header({ nombre }) {
  return (
    <div className="header">
      <div className="header-left">
        <span>{nombre}</span>
      </div>
      <div className="header-right">
        <i className="bi bi-camera-video" ></i>
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
}

export default Header;