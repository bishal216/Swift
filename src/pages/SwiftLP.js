import React from 'react';
import NavBar from "../components/01NavBar/NavBar";
import Header  from "../components/02Header/Header";
import GameDevOverview from "../components/03GameDevOnTheFly/GameDevOverview";
import NestedClusters from "../components/04Slow2Swift/NestedClusters";
import Swystem from "../components/05Swystem/Swystem";
import GameComparison from "../components/06Swimply/GameComparison";
// import Schwemes from "../components/07Swchemes/Schwemes";
import DataTransformer from "../components/08FAQ/DataTransformer";
import GameFlying from "../components/09GameFlying/GameFlying";
import Footer from "../components/10Footer/Footer";
import "./SwiftLP.css";

/**
 * SwiftLP Component
 *
 * This component renders the landing page of the Swift website.
 * It includes the navigation bar, header, game development overview,
 * nested clusters, Swystem, FrameProper, Schwemes, DataTransformer,
 * GameFlying, and Footer components.
 *
 * @returns {JSX.Element} The rendered SwiftLP component.
 */
const SwiftLP = () => {
  return (
    // Root div for the Swift landing page
    <div className="swift-lp">
      {/* Navigation bar */}
      <NavBar/>
      {/* Header */}
      <Header />
      {/* Game development overview */}
      <GameDevOverview />
      {/* Nested clusters */}
      <NestedClusters />
      {/* Swystem */}
      <Swystem/>
      {/* FrameProper */}
      <GameComparison />
      {/* Schwemes */}
      {/* <Schwemes /> */}
      {/* DataTransformer */}
      <DataTransformer />
      {/* GameFlying */}
      <GameFlying />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SwiftLP;
