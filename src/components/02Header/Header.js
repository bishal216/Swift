import "./Header.css";
import { memo } from "react";
import React from 'react';
const Header = memo(() => {
  return (
    <div className="header">
      <div className='logo-class'>
        <img className="main-logo" loading="lazy" alt="" src="/group-36.svg" />
        <img className="logo-text" loading="lazy" alt="" src="/swift.svg" />
      </div>

      <button className="button6">
        <div className="button7">BOOK A CALL</div>
      </button>
    </div>
  );
});
Header.displayName = "Header";
export default Header;
