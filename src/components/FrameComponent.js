import { memo } from "react";
import "./FrameComponent.css";

const FrameComponent = memo(() => {
  return (
    <header className="combiner1">
      <div className="navbar-mobile">
        <div className="modifier">
          <div className="converter1">
            <img className="converter-child" alt="" src="/group-36-11.svg" />
            <img className="swift-icon3" alt="" src="/swift-11.svg" />
          </div>
          <div className="converter2">
            <img
              className="hamburger-icon"
              loading="lazy"
              alt=""
              src="/hamburger.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
});

export default FrameComponent;
