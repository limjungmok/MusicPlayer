import React, { Component } from 'react';

const Header = ({isScrolled}) => {
  console.log({isScrolled});
  return (
    <header className={`header ${isScrolled ? 'is_fixed' : ''}`}>
      <a href="#" className="logo"></a>
    </header>
  );
}

export default Header;