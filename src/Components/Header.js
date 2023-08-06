import React, { useState, useEffect } from 'react';
import './Header.css';
import { AiOutlineMenuFold } from "react-icons/ai";
import exampleImage from '../assets/logo.png';
import { Image } from 'antd';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div href="#" className="logo">
        <Image
          style={{
            width: '80px',
            height: '80px',
          }}
          src={exampleImage}
          preview={false}
        />
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <AiOutlineMenuFold style={{ fontSize: "25px", color: 'white' }} />
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
