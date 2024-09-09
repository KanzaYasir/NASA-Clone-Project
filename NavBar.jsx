import React, { useState } from 'react';
import downarrowImg from './images/downarrow-icon.png';
import nasalogo from './images/nasa-logo.svg';
import searchIcon from './images/search-icon.png';
import humbergerMenu from './images/humbergerMenu.png';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <header>
      <nav className="navbar bg-black p-4" role="navigation">
        <button 
          className="btnn-menu text-white" 
          onClick={toggleMenu} 
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? 
            <img src={humbergerMenu} id="humberger-menu" alt="Menu" /> : 
            <span style={{fontSize: "2rem"}}>&times;</span>
          }
        </button>
        <h3 className="text-white">Explore</h3>
        <img src={downarrowImg} id="downarrowImg" alt="Down Arrow" />
        <input 
          type="text" 
          placeholder="Search..." 
          aria-label="Search"
          className="p-3 border border-gray-300 rounded bg-black text-black"
        />
        <img src={nasalogo} id="nasalogo" alt="NASA Logo" />
        <ul className="desktop-menu list-none text-white">
          <li><a href="#news-events" className="no-underline text-white">News & Events</a></li>
          <li><a href="#multimedia" className="no-underline text-white">Multimedia</a></li>
          <li>
            <a href="#nasa-plus" className="no-underline text-white">NASA+</a>
            <button className="ml-2">LIVE</button>
          </li>
        </ul>
        <div className={`menu ${menuOpen ? 'show' : ''}`}>
          <ul className="list-none text-white">
            <li><a href="#home" className="no-underline text-white">Home</a></li>
            <li><a href="#missions" className="no-underline text-white">Missions</a></li>
            <li><a href="#humans-in-space" className="no-underline text-white">Humans in Space</a></li>
            <li><a href="#earth-climate" className="no-underline text-white">Earth and Climate</a></li>
            <li>
              <a href="#nasa-plus" className="no-underline text-white">NASA+</a>
              <button className="ml-2">LIVE</button>
            </li>
          </ul>
        </div>
        <button 
          className="btnn-search"
          aria-label="Search"
        >
          <img src={searchIcon} id="search" alt="Search" />
        </button>
      </nav>
    </header>
  );
}
