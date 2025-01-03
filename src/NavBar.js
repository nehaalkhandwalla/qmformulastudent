import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you will style it in a separate CSS file
import qmfslogo from './logo_qmfs.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
            <img src={qmfslogo} className="qmfs-logo-navbar" alt="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
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
          <Link to="/about">OUR CARS</Link>
        </li>
        <li>
          <Link to="/about">PARTNERS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
