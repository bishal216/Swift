import { memo } from "react";
import "./Swystem.css";
import BranchNode from "./BranchNode";
const Swystem = memo(() => {
    return (
        <>
        <section className="vector-node">
        <div className="star-node">
          <h1 className="the-swift-swystem-container">
            <span>{`The Swift `}</span>
            <span className="sw">Sw</span>
            <span>ystem</span>
          </h1>
          <div className="polygon-node">
            <div className="game-development-is">
              Game development is notorious for its complexity, time-consuming
              processes, and unpredictable delays.
            </div>
          </div>
        </div>
        <img
          className="line-3-stroke"
          loading="lazy"
          alt=""
          src="/line-3-stroke.svg"
        />
      </section>
      <BranchNode
        ideate="Ideate"
        envisionTheSkiesEveryGrea="Envision the skies. Every great flight begins here."
      />
      <BranchNode
        ideate="Conceptualize"
        envisionTheSkiesEveryGrea="Draft the blueprints for takeoff. Your game's first flap towards the horizon."
      />
      <BranchNode
        ideate="Strategize"
        envisionTheSkiesEveryGrea="Chart the course. Together, we envision the most efficient route through skies."
      />
      <BranchNode
        ideate="Develop"
        envisionTheSkiesEveryGrea="Gear up; gather speed. We transform the concepts to dynamic ascents."
      />
      <section className="image-proper">
      <div className="path-proper">
        <div className="group-proper">
          <div className="line-proper">
            <h1 className="release">Release</h1>
            <div className="star-proper" />
          </div>
          <div className="line-proper1">
            <h1 className="iterate">Iterate</h1>
            <div className="line-proper-child" />
          </div>
        </div>
        <div className="arc-proper">
          <div className="takeoff-your-game">
            Takeoff. Your game soars into the heights of the gaming universe.
          </div>
          <div className="harness-the-wind">
            Harness the wind currents. We continuously clear the air, optimizing
            for the perfect flight.
          </div>
        </div>
      </div>
    </section>
      </>
    );
});

export default Swystem;