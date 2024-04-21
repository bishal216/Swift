import NavBar from "../components/01NavBar/NavBar";
import Header  from "../components/02Header/Header";
import Subtree from "../components/03GameDevOnTheFly/Subtree";
import NestedClusters from "../components/04Slow2Swift/NestedClusters";
import Swystem from "../components/05Swystem/Swystem";
import FrameProper from "../components/06Swimply/FrameProper";
import ScaleNode from "../components/07Swchemes/ScaleNode";
import DataTransformer from "../components/08FAQ/DataTransformer";
import VectorNode from "../components/09GameFlying/VectorNode";
import MapNode from "../components/10Footer/MapNode";
import "./SwiftLP.css";

const SwiftLP = () => {
  return (
    <div className="swift-lp">
      <NavBar/>
      <Header />
      <Subtree />
      <NestedClusters />
      <Swystem/>
      <FrameProper />
      <ScaleNode />
      <DataTransformer />
      <VectorNode />
      <MapNode />
    </div>
  );
};

export default SwiftLP;
