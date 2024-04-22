import NavBar from "../components/01NavBar/NavBar";
import Header  from "../components/02Header/Header";
import Subtree from "../components/03GameDevOnTheFly/Subtree";
import NestedClusters from "../components/04Slow2Swift/NestedClusters";
import Swystem from "../components/05Swystem/Swystem";
import FrameProper from "../components/06Swimply/FrameProper";
import Schwemes from "../components/07Swchemes/Schwemes";
import DataTransformer from "../components/08FAQ/DataTransformer";
import GameFlying from "../components/09GameFlying/GameFlying";
import Footer from "../components/10Footer/Footer";
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
      <Schwemes />
      <DataTransformer />
      <GameFlying />
      <Footer />
    </div>
  );
};

export default SwiftLP;
