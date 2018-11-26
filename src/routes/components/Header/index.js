import React, { Component } from 'react';

const Header = ({isScrolled}) => {
  return (
    <header className={`header ${isScrolled ? 'is_fixed' : ''}`}>
      <a href="#" className="logo">
        <i>V</i><i>I</i><i>BE</i>
      </a>
    </header>
  );
}

export default Header;