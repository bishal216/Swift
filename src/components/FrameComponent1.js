import { memo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = memo(() => {
  return (
    <section className="feedback-receiver">
      <div className="statusbar">
        <div className="counter">
          <div className="statusbar-time">
            <div className="splitter">9:41</div>
          </div>
        </div>
        <div className="joiner">
          <img className="notch-icon" loading="lazy" alt="" src="/notch.svg" />
        </div>
        <div className="validator">
          <div className="filter">
            <div className="mapper">
              <img className="wifi-icon" alt="" src="/wifi.svg" />
              <img
                className="mobile-signal-icon"
                alt=""
                src="/mobile-signal.svg"
              />
            </div>
            <img className="battery-icon" alt="" src="/battery.svg" />
          </div>
        </div>
      </div>
      <div className="combiner">
        <form className="selector">
          <img className="modifier-icon" alt="" src="/vector-651.svg" />
          <div className="converter">
            <div className="accumulator">
              <div className="where-vision-meets1">
                Where vision meets velocity.
              </div>
              <h1 className="game-dev-on1">Game Dev on the Fly</h1>
            </div>
            <div className="expander">
              <div className="our-core-principles1">
                Our core principles revolve around breaking the barriers of
                traditional game development timelines. We value innovation,
                efficiency, and speed, ensuring your game not only sees the
                light of day but does so faster than you thought possible.
              </div>
            </div>
            <button className="button16">
              <div className="button17">book a call</div>
            </button>
          </div>
          <div className="transformer">
            <div className="validator1">
              <div className="smallcard3">
                <img
                  className="lightning-bolt-icon1"
                  alt=""
                  src="/lightning-bolt1.svg"
                />
                <div className="get-to-the3">Get to the Market Quicker</div>
              </div>
              <div className="smallcard4">
                <img className="hand-icon1" alt="" src="/hand1.svg" />
                <div className="get-to-the4">Grab Oppurtunities Faster</div>
              </div>
              <div className="smallcard5">
                <img className="rocket-icon1" alt="" src="/rocket1.svg" />
                <input
                  className="get-to-the5"
                  placeholder="Stay Ahead of Trends"
                  type="text"
                />
              </div>
            </div>
            <div className="with-swift-its1">
              With Swift, it's not just about saving time; it's about leveraging
              time to your advantage, ensuring your game has the impact it
              deserves.
            </div>
          </div>
        </form>
        <img
          className="downanimation-icon1"
          loading="lazy"
          alt=""
          src="/downanimation1.svg"
        />
      </div>
    </section>
  );
});

export default FrameComponent1;
