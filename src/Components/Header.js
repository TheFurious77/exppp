import React from 'react';
import './Header.css';

const Header = ({ imagePath, title, length }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <img src={imagePath} alt={title} className="header-icon" />
          <span className="header-title">{title}</span>
          <span className="header-length">{length}</span>
        </div>
        <div className="header-right">
          <button className="icon-button" aria-label="Add">
            <img
              src="/images/icons/add.svg"
              alt="Add"
              className="header-right-icon"
            />
          </button>
          <button className="icon-button" aria-label="Menu">
            <img
              src="/images/icons/3 dot menu.svg"
              alt="Menu"
              className="header-right-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
