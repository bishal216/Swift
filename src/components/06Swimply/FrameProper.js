import { memo } from "react";
import "./FrameProper.css";
import { swimply } from "../../data/data";
import React from "react";
const FrameProper = memo(() => {
  return (
    <section className="swimply">
      <div className="image-mask">
        <div className="blob-node">
          <h1 className="swift-is-swimply-container">
            <span>{`Swift is `}</span>
            <span className="sw2">Sw</span>
            <span>imply Better</span>
          </h1>
          <div className="others-just-dont">Others just don’t compare.</div>
        </div>

        <div className="symbol-node">
          <div className="shape-text-node">
            <h1 className="traditional-agencies">Traditional Agencies</h1>
            <div className="line-symbol-node">
              {swimply.traditional.map((values, index) => (
                <div
                  className="polygon-symbol-node"
                  key={`traditional-${index}`}
                >
                  <img className="mix-icon" src="/mix.svg" alt="icon" />
                  <div className="slower-turnaround">{values}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="shape-text-node1">
            <h1 className="traditional-agencies">Swift</h1>
            <div className="line-symbol-node">
              {swimply.swift.map((values, index) => (
                <div className="polygon-symbol-node" key={`swift-${index}`}>
                  <img className="mix-icon" src="/mix.svg" alt="icon" />
                  <div className="slower-turnaround">{values}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="shape-text-node">
            <h1 className="traditional-agencies">Hiring Developers</h1>
            <div className="line-symbol-node">
              {swimply.hiring_developers.map((values, index) => (
                <div className="polygon-symbol-node" key={`hiring-${index}`}>
                  <img className="mix-icon" src="/mix.svg" alt="icon" />
                  <div className="slower-turnaround">{values}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className="image-mask-cover" alt="" src="/group-41.svg" />
    </section>
  );
});

FrameProper.displayName = "FrameProper";
export default FrameProper;
