import { memo } from "react";
import "./Swystem.css";
import BranchNode from "./BranchNode";
import { swystem_data } from "../../data/data";
import React from "react";
import PropTypes from "prop-types";
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
      {swystem_data.system_process.map((process) => (
        <BranchNode
          key={process.key}
          ideate={process.key}
          envisionTheSkiesEveryGrea={process.value}
        />
      ))}
    </>
  );
});
Swystem.propTypes = {
  swystem_data: PropTypes.shape({
    system_process: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

Swystem.displayName = "Swystem";
export default Swystem;
