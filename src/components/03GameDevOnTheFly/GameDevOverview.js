// export default GameDevOverview;
import { memo } from "react";
import "./GameDevOverview.css";
import React from "react";

/**
 * GameDevOverview Component
 * This component renders a section with a detailed description of our principles and benefits.
 */
const GameDevOverview = memo(() => {
  const handleScrollToFooter = (event) => {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  const benefitItems = [
    {
      imgSrc: "/lightning-bolt.svg",
      imgAlt: "Lightning Bolt",
      text: "Get to the Market Quicker",
    },
    {
      imgSrc: "/hand.svg",
      imgAlt: "Hand Image",
      text: "Grab Opportunities Faster",
    },
    {
      imgSrc: "/rocket.svg",
      imgAlt: "Rocket Image",
      text: "Stay Ahead of Trends",
    },
  ];

  return (
    <section className="game-dev-overview">
      <div className="game-dev-overview-overlay"></div>
      <header className="header">
        <div className="header__content">
          <div className="header__connection">
            <p className="header__text-gradient">
              Where vision meets velocity.
            </p>
            <h1 className="header__title">Game Dev on the Fly</h1>
          </div>
          <div className="header__principles">
            <p className="header__principles-text">
              Our core principles revolve around breaking the barriers of
              traditional game development timelines. We value innovation,
              efficiency, and speed, ensuring your game not only sees the light
              of day but does so faster than you thought possible.
            </p>
          </div>
          <button
            className="header__cta"
            aria-label="Book a Call"
            onClick={handleScrollToFooter}
          >
            Book a Call
          </button>
        </div>
      </header>

      <section className="benefits">
        <div className="benefits__list">
          {benefitItems.map(({ imgSrc, imgAlt, text }) => (
            <div className="benefits__card" key={text}>
              <img className="benefits__icon" alt={imgAlt} src={imgSrc} />
              <p className="benefits__text">{text}</p>
            </div>
          ))}
        </div>
        <p className="benefits__description">
          With Swift, it&apos;s not just about saving time; it&apos;s about
          leveraging time to your advantage, ensuring your game has the impact
          it deserves.
        </p>
      </section>
      {/* TODO: Add Down Animation animation */}
      <img
        className="footer__icon"
        loading="lazy"
        alt="Down Animation"
        src="/downAnimation.svg"
      />
    </section>
  );
});

GameDevOverview.displayName = "GameDevOverview";
export default GameDevOverview;
