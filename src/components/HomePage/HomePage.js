import "./HomePage.css";
import { Homepage_data } from "../../data/content_data";
import NavBar from "./navbar/navbar";
import lightning from "./../../assets/lightning-bolt.svg";
import hand from "./../../assets/hand.svg";
import rocket from "./../../assets/rocket.svg";
import downanimation from "./../../assets/downanimation.svg"
const HomePage = () => {
  return (
    <section className="HomePage">
      <NavBar />

      {/* Info Bar */}
      <div className="MainInfo">
        <div className="Slogan">{Homepage_data.slogan}</div>
        <h1 className="Title">{Homepage_data.title}</h1>
        <div className="CorePrinciples">{Homepage_data.core_principle}</div>
        <div>
          <button className="BookButton">book a call</button>
        </div>
      </div>

      <div className="ExtraInfo">
        <div className="cards">
          <div className="card">
            <img className="lightning-bolt-icon" alt="" src={lightning} />
            <div className="get-to-the">Get to the Market Quicker</div>
          </div>
          <div className="card">
            <img className="hand-icon" alt="" src={hand} />
            <div className="get-to-the1">Grab Oppurtunities Faster</div>
          </div>
          <div className="card">
            <img className="rocket-icon" alt="" src={rocket} />
            <div className="get-to-the2">Stay Ahead of Trends</div>
          </div>
        </div>

        <div className="with-swift-its">
          {Homepage_data.extra_info}
        </div>
      </div>

      <div className="downanimation">
      <img
        loading="lazy"
        alt=""
        src={downanimation}
      />
      </div>

    </section>
  );
};

export default HomePage;
