import "./Header.css";
import { memo } from "react";

const Header = memo(() => {
  return (
    <>
      <img
        className="root-node-child"
        loading="lazy"
        alt=""
        src="/group-36.svg"
      />
      <img className="swift-icon" loading="lazy" alt="" src="/swift.svg" />

      <button className="button6">
        <div className="button7">BOOK A CALL</div>
      </button>
    </>
  );
});

export default Header;
