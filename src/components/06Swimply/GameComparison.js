import { memo } from "react";
import "./GameComparison.css";
import { swimply } from "../../data/data";
import React from "react";

/**
 * Renders a comparison section for Swift vs traditional agencies.
 *
 * @component
 * @example
 * return <GameComparison />
 */
const GameComparison = memo(() => {
  /**
   * Renders a comparison node with a title and list of values.
   *
   * @param {string} title - The title of the comparison node.
   * @param {Array<string>} data - The list of values for the comparison node.
   * @param {string} keyPrefix - The prefix for the key of the comparison node.
   * @returns {JSX.Element} The rendered comparison node.
   */
  const renderComparisonNode = (title, data, keyPrefix) => (
    <article className="comparison-node" key={keyPrefix}>
      {/* Render the title of the comparison node */}
      <h2 className="comparison-title">{title}</h2>
      {/* Render a list of values for the comparison node */}
      <ul className="comparison-items debug">
        {data.map((value, index) => (
          <li className="comparison-item" key={`${keyPrefix}-${index}`}>
            {/* Render an icon */}
            <img className="item-icon" src="/mix.svg" alt="icon" />
            {/* Render the value of the comparison item */}
            <p className="item-value">{value}</p>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <header className="comparison-header">
          <h1 className="main-title">
            <span>Swift is </span>
            <span className="highlight">Sw</span>
            <span>imply Better</span>
          </h1>
          <p className="subtitle">Others just don’t compare.</p>
        </header>

        <div className="comparison-content">
          {/* Render the comparison node for traditional agencies */}
          {renderComparisonNode(
            "Traditional Agencies",
            swimply.traditional,
            "traditional"
          )}
          {/* Render the comparison node for Swift */}
          {renderComparisonNode("Swift", swimply.swift, "swift")}
          {/* Render the comparison node for hiring developers */}
          {renderComparisonNode(
            "Hiring Developers",
            swimply.hiring_developers,
            "hiring"
          )}
        </div>
      </div>
      {/* Render the background image */}
      <img className="background-image" alt="" src="/group-41.svg" />
    </section>
  );
});

GameComparison.displayName = "GameComparison";
export default GameComparison;
