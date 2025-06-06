import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <button className="navbar__toggle" onClick={handleToggle} aria-label="Toggle navigation">
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" exact="true" className="navbar__link" activeclassname="active" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="navbar__link" activeclassname="active" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" className="navbar__link" activeclassname="active" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" className="navbar__link" activeclassname="active" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/resume" className="navbar__link" activeclassname="active" onClick={closeMenu}>Resume</NavLink>
          <NavLink to="/contact-me" className="navbar__link" activeclassname="active" onClick={closeMenu}>Contact Me</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
