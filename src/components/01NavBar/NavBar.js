import React from "react";
import "./NavBar.css";
import { memo } from "react";

const NavBar = memo(() => {
  return (
    <>
      <header className="sticky-navbar">
        <nav className="branch-merger">
          <div className="nav_items4">
            <div className="click-link4">Problems</div>
          </div>
          <div className="nav_items5">
            <div className="click-link5">Solution</div>
          </div>
          <div className="nav_items6">
            <div className="click-link6">Services</div>
          </div>
          <div className="nav_items7">
            <div className="click-link7">FAQ</div>
          </div>
        </nav>
        <div className="button4">
          <div className="button5">book a call</div>
        </div>
      </header>
    </>
  );
});

NavBar.displayName = "NavBar";
export default NavBar;
