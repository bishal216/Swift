import { memo } from "react";
import "./BranchNode.css";

const BranchNode = memo(({ ideate, envisionTheSkiesEveryGrea }) => {
  return (
    <section className="branch-node1">
      <div className="leaf-node">
        <h1 className="ideate1">{ideate}</h1>
        <div className="parent-node1" />
        <div className="envision-the-skies1">{envisionTheSkiesEveryGrea}</div>
      </div>
    </section>
  );
});

export default BranchNode;
