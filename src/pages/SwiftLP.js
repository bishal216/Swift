import HomePage from "../components/HomePage/HomePage";
import Page2 from "../components/Page2/Page2";
import Swystem from "../components/Swystem/swystem";
// import BranchNode from "../components/BranchNode";
import ImageProper from "../components/ImageProper";
import Swimply from "../components/Swimply/Swimply";
import ScaleNode from "../components/ScaleNode";
import DataTransformer from "../components/DataTransformer";
import VectorNode from "../components/VectorNode";
import MapNode from "../components/MapNode";
import "./SwiftLP.css";

const SwiftLP = () => {
  return (
    <div className="swift-lp">
      <HomePage />
      <Page2 />
      <Swystem />

      {/* <ImageProper /> */}
      <Swimply />
      <ScaleNode />
      <DataTransformer />
      <VectorNode />
      <MapNode />
      <div className="navbar">
        <div className="navitems-parent">
          <div className="navitems">
            <div className="click-link">Problems</div>
          </div>
          <div className="navitems1">
            <div className="click-link1">Solution</div>
          </div>
          <div className="navitems2">
            <div className="click-link2">Services</div>
          </div>
          <div className="navitems3">
            <div className="click-link3">FAQ</div>
          </div>
        </div>
        <div className="button">
          <div className="button1">book a call</div>
        </div>
      </div>
    </div>
  );
};

export default SwiftLP;
