import "./NavBar.css";
import { memo } from "react";

const NavBar = memo(() => {
  return (
    <>
      <header className="sticky-navbar">
        <nav className="branch-merger">
          <div className="navitems4">
            <div className="click-link4">Problems</div>
          </div>
          <div className="navitems5">
            <div className="click-link5">Solution</div>
          </div>
          <div className="navitems6">
            <div className="click-link6">Services</div>
          </div>
          <div className="navitems7">
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

export default NavBar;
