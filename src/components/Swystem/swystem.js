import "./swystem.css";
import { swystem_data } from "./../../data/content_data";
import BranchNode from "./BranchNode";
const swystem = () => {
  return (
    <section className="swystem">
      <div className="star-node">
        <h1 className="swift-header">
          The Swift <span className="sw">Sw</span>ystem
        </h1>
        <div className="polygon-node">
          <div className="game-development-is">
            Game development is notorious for its complexity, time-consuming
            processes, and unpredictable delays.
          </div>
        </div>
      </div>
      <div className="Path">
      {Object.keys(swystem_data.system_process).map((step, index) => (
        <BranchNode
          key={index}
          ideate={step}
          envisionTheSkiesEveryGrea={swystem_data.system_process[step]}
        />
      ))}
    </div>

    </section>
  );
};

export default swystem;
