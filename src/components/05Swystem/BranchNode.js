import { memo } from "react";
import "./BranchNode.css";
import React from "react";
import PropTypes from "prop-types";
const BranchNode = memo(({ ideate, envisionTheSkiesEveryGrea }) => {
  return (
    <section className="branch-node">
      <h1 className="ideate1">{ideate}</h1>
      <div className="parent-node1" />
      <div className="envision-the-skies1">{envisionTheSkiesEveryGrea}</div>
    </section>
  );
});

BranchNode.propTypes = {
  ideate: PropTypes.string.isRequired,
  envisionTheSkiesEveryGrea: PropTypes.string.isRequired,
};

BranchNode.displayName = "BranchNode";
export default BranchNode;
