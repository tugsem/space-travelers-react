import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import logo from './assets/spacex.png';

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden'; // Set overflow to hidden when menu is open
    } else {
      document.body.style.overflow = 'auto'; // Reset overflow when menu is closed
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menu]);

  return (
    <header className={menu ? 'header active' : 'header'}>
      <button className="mobileBtn" onClick={() => setMenu((prev) => !prev)} type="button">{ menu ? <IoIosCloseCircle /> : <GiHamburgerMenu /> }</button>
      <div className="d-flex logo-title">
        <a href="/"><img className="logo" src={logo} alt="spacex logo" /></a>
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav className={menu ? 'nav-links active' : 'nav-links'}>
        <NavLink to="/" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Rockets</NavLink>
        <NavLink to="/Missions" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Missions</NavLink>
        <NavLink to="/Profile" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>My Profile</NavLink>
      </nav>
    </header>
  );
};

export default Header;
