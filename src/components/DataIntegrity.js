import { memo, useMemo } from "react";
import "./DataIntegrity.css";

const DataIntegrity = memo(
  ({
    hiringDevelopers,
    mix,
    variedDevelopmentSpeedOft,
    mix1,
    highCommitmentWithAnAdded,
    mix2,
    directInvolvementButGreat,
    mix3,
    constantMicromanagement,
    propBackground,
    propBoxShadow,
  }) => {
    const dataIntegrityStyle = useMemo(() => {
      return {
        background: propBackground,
        boxShadow: propBoxShadow,
      };
    }, [propBackground, propBoxShadow]);

    return (
      <div className="data-integrity" style={dataIntegrityStyle}>
        <b className="hiring-developers1">{hiringDevelopers}</b>
        <div className="frame-container">
          <div className="mix-parent5">
            <img className="mix-icon12" alt="" src={mix} />
            <div className="varied-development-speed1">
              {variedDevelopmentSpeedOft}
            </div>
          </div>
          <div className="mix-parent6">
            <img className="mix-icon13" alt="" src={mix1} />
            <div className="high-commitment-with1">
              {highCommitmentWithAnAdded}
            </div>
          </div>
          <div className="mix-parent7">
            <img className="mix-icon14" alt="" src={mix2} />
            <div className="direct-involvement-but1">
              {directInvolvementButGreat}
            </div>
          </div>
          <div className="mix-parent8">
            <img className="mix-icon15" alt="" src={mix3} />
            <div className="constant-micromanagement1">
              {constantMicromanagement}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DataIntegrity;
