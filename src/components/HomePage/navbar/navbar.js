import logo from "./../../../assets/logo.svg";
import swift from "./../../../assets/swift.svg";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
            <img src={logo} alt="Logo" />
            <img src={swift} alt="LogoText" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {/* Update the NavLinks to match your routes */}
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Problems
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Solution
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                FAQ
              </NavLink>
            </li>
          </ul>

          <div className="Booking">
            <p> BOOK A CALL</p>
          </div>

          <IoClose className="nav__close" onClick={toggleMenu} />
        </div>

        <IoMenu className="nav__toggle" onClick={toggleMenu} />
      </nav>
    </header>
  );
};

export default NavBar;
