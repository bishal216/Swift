// TODO: Add functionality to the nav bar
import "./NavBar.css";
import React, { memo } from "react";

/**
 * NavBar Component
 * This component renders a sticky navigation bar with links to different sections of the page.
 */
const NavBar = memo(() => {
  const navItems = [
    { href: "#problems", text: "Problems" },
    { href: "#solution", text: "Solution" },
    { href: "#services", text: "Services" },
    { href: "#faq", text: "FAQ" },
  ];

  return (
    <nav className="sticky-navbar">
      <ul className="nav-list">
        {navItems.map(({ href, text }) => (
          <li className="nav-item" key={href}>
            <a href={href} className="click-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

// Setting the display name for the component
NavBar.displayName = "NavBar";

export default NavBar;
