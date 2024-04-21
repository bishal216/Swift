import { memo, useMemo } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = memo(
  ({ conceptualize, draftTheBlueprintsForTake, propTop, propTextAlign }) => {
    const branchNodeStyle = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    const conceptualizeStyle = useMemo(() => {
      return {
        textAlign: propTextAlign,
      };
    }, [propTextAlign]);

    return (
      <section className="branch-node2" style={branchNodeStyle}>
        <b className="conceptualize" style={conceptualizeStyle}>
          {conceptualize}
        </b>
        <div className="branch-node-child" />
        <div className="draft-the-blueprints">{draftTheBlueprintsForTake}</div>
      </section>
    );
  }
);

export default FrameComponent7;
