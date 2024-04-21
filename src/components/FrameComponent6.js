import { memo } from "react";
import DataIntegrity from "./DataIntegrity";
import "./FrameComponent6.css";

const FrameComponent6 = memo(() => {
  return (
    <section className="data-expander">
      <img className="data-expander-child" alt="" src="/group-42.svg" />
      <img className="data-expander-item" alt="" src="/group-42.svg" />
      <div className="data-decoder">
        <div className="data-encryptor">
          <h1 className="swift-is-swimply-container1">
            <span>{`Swift is `}</span>
            <span className="sw4">Sw</span>
            <span>imply Better</span>
          </h1>
          <div className="others-just-dont1">Others just don’t compare.</div>
        </div>
        <div className="data-verifier">
          <div className="data-integrity1">
            <b className="traditional-agencies1">Traditional Agencies</b>
            <div className="data-backup">
              <div className="data-restore">
                <img
                  className="mix-icon16"
                  loading="lazy"
                  alt=""
                  src="/mix.svg"
                />
                <div className="slower-turnaround1">Slower Turnaround</div>
              </div>
              <div className="data-queue">
                <img className="mix-icon17" alt="" src="/mix.svg" />
                <div className="rigid-and-lengthy1">
                  Rigid and lengthy contracts
                </div>
              </div>
              <div className="data-pool">
                <img className="mix-icon18" alt="" src="/mix.svg" />
                <div className="minimal-involvement-in1">
                  Minimal involvement in the process
                </div>
              </div>
              <div className="data-matrix">
                <img className="mix-icon19" alt="" src="/mix.svg" />
                <div className="requires-oversight-to1">
                  Requires oversight to align the idea with goals
                </div>
              </div>
            </div>
          </div>
          <DataIntegrity
            hiringDevelopers="Hiring Developers"
            mix="/mix.svg"
            variedDevelopmentSpeedOft="Varied development speed, often limited by resources"
            mix1="/mix.svg"
            highCommitmentWithAnAdded="High commitment with an added HR overhead"
            mix2="/mix.svg"
            directInvolvementButGreat="Direct involvement but greater time commitment too"
            mix3="/mix.svg"
            constantMicromanagement="Constant micromanagement"
          />
          <DataIntegrity
            hiringDevelopers="Swift"
            mix="/mix-4.svg"
            variedDevelopmentSpeedOft="Rapid development in time-fixed sprints"
            mix1="/mix-4.svg"
            highCommitmentWithAnAdded="Flexible contract, no long-term entanglements"
            mix2="/mix-4.svg"
            directInvolvementButGreat="You are involved in our every step"
            mix3="/mix-4.svg"
            constantMicromanagement="No micromanagement"
            propBackground="linear-gradient(180deg, #f23e0d, rgba(242, 62, 13, 0.2))"
            propBoxShadow="0px 0px 20px 3px rgba(242, 62, 13, 0.6), 0px 0px 4px 1px rgba(242, 62, 13, 0.45)"
          />
        </div>
      </div>
    </section>
  );
});

export default FrameComponent6;
