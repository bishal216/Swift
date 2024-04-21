import { memo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = memo(() => {
  return (
    <section className="b-tree-node">
      <div className="hash-table-node">
        <div className="graph-node">
          <img
            className="graph-node-child"
            loading="lazy"
            alt=""
            src="/group-361.svg"
          />
          <img
            className="swift-icon2"
            loading="lazy"
            alt=""
            src="/swift1.svg"
          />
        </div>
        <div className="network-node">
          <div className="cluster-node">
            <img className="component-node-icon" alt="" src="/vector-621.svg" />
            <img
              className="component-node-icon1"
              alt=""
              src="/vector-631.svg"
            />
            <img
              className="component-node-icon2"
              alt=""
              src="/vector-641.svg"
            />
          </div>
        </div>
      </div>
      <div className="edge-node">
        <form className="vertex-node">
          <input
            className="text-field2"
            placeholder="Enter your email"
            type="text"
          />
          <input
            className="text-field3"
            placeholder="Enter your message"
            type="text"
          />
          <button className="button14">
            <div className="button15">Contact us</div>
          </button>
        </form>
        <div className="bellman-ford-node">
          <div className="floyd-warshall-node">
            <b className="company1">Company</b>
            <div className="text-processor">
              <div className="home1">Home</div>
              <div className="work1">Work</div>
              <div className="about-us1">About Us</div>
            </div>
          </div>
          <div className="connection-handler">
            <b className="contact-us1">Contact Us</b>
            <div className="input-filter">
              <div className="output-formatter">
                <img
                  className="call-icon1"
                  loading="lazy"
                  alt=""
                  src="/call.svg"
                />
                <div className="phn-no1">+977 (Phn no.)</div>
              </div>
              <div className="output-formatter1">
                <img
                  className="mail-icon1"
                  loading="lazy"
                  alt=""
                  src="/mail.svg"
                />
                <div className="emailgmailcom1">email@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent2;
