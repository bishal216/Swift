import { memo } from "react";
import "./BranchNode.css";
import React from "react";
import PropTypes from "prop-types";

const BranchNode = memo(({ title, content }) => {
  return (
    <section className="branch-node">
      <h1 className="branch-node-title">{title}</h1>
      <div className="branch-node-divider" />
      <div className="branch-node-content">{content}</div>
    </section>
  );
});

BranchNode.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

BranchNode.displayName = "BranchNode";
export default BranchNode;
