import { memo } from "react";
import "./Swystem.css";
import BranchNode from "./BranchNode";
import { swystem_data } from "../../data/data";
import React from "react";
import PropTypes from "prop-types";

const Swystem = memo(() => {
  const { system_process } = swystem_data;

  return (
    <section className="system-overview-container">
      <div className="system-overview ">
        <div className="overview-header">
          <h1 className="overview-title">
            <span>The Swift </span>
            <span className="highlight">Sw</span>
            <span>ystem</span>
          </h1>
          <div className="overview-description">
            <div className="description-text">
              Game development is notorious for its complexity, time-consuming
              processes, and unpredictable delays.
            </div>
          </div>
        </div>
        <img
          className="divider-line"
          loading="lazy"
          alt="Divider Line"
          src="/line-3-stroke.svg"
        />
      </div>
      {system_process.map(({ key, value }) => (
        <BranchNode key={key} title={key} content={value} />
      ))}
    </section>
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
