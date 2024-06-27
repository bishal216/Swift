import { React, memo } from "react";
import "./GameFlying.css";

const GameFlying = memo(() => {
  return (
    <section className="game-flying">
      <div className="game-flying-bgs">
        <img className="game-flying-bg-44" src="/group-44.svg" />
        <img className="game-flying-bg-42" alt="" src="/group-42.png" />
      </div>
      <h1 className="get-your-game-container">
        <span>{`Get Your `}</span>
        <span className="game">Game</span>
        <span> Flying</span>
      </h1>
      <div className="lets-get-your-container">
        <p>
          Let&apos;s get your game out of the hangar and into the skies. Click below
          to schedule a discovery call with Swift, and let&apos;s turn your game
          concept into your next big win sooner than you think.
        </p>
      </div>

      <button className="schedule-button">
        <p>Schedule a Call</p>
      </button>
    </section>
  );
});

GameFlying.displayName = "GameFlying";
export default GameFlying;
