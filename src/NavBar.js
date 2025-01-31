import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you will style it in a separate CSS file
import qmfslogo from './logo_qmfs.png'

function Navbar(){
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar" style={{ width: '100%'}}>
      <div className="navbar-logo">
            <img src={qmfslogo} className="qmfs-logo-navbar" alt="logo"/>
      </div>
      <button 
        className="hamburger" 
        aria-label="Toggle menu" 
        onClick={() => setIsActive(!isActive)}
      >
        &#9776;
      </button>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/team">OUR TEAM</Link>
        </li>
        <li>
          <Link to="/achievements">OUR ACHIEVEMENTS</Link>
        </li>
        <li>
          <Link to="/cars">OUR CARS</Link>
        </li>
        <li>
          <Link to="/partners">PARTNERS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
