import "./Header.css";
import { React, memo } from "react";

/**
 * Header Component
 * This component renders the header section with a logo and a call-to-action button.
 */
const Header = memo(() => {
  const handleScrollToFooter = (event) => {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="main-header">
      <div className="header-logo-container">
        <img
          className="header-main-logo"
          loading="lazy"
          alt="Main Logo"
          src="/swift-logo.svg"
        />
        <img
          className="header-logo-text"
          loading="lazy"
          alt="Swift"
          src="/swift.svg"
        />
      </div>

      <nav>
        <a
          className="header-button"
          aria-label="Book a call"
          href="#footer"
          onClick={handleScrollToFooter}
        >
          <span className="header-button-text">BOOK A CALL</span>
        </a>
      </nav>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
