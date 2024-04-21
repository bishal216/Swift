import { memo } from "react";
import "./FrameComponent4.css";

const FrameComponent4 = memo(() => {
  return (
    <div className="error-handler">
      <div className="function-call-node">
        <h1 className="got-questions1">Got Questions?</h1>
        <div className="weve-got-answers1">We've Got Answers.</div>
      </div>
      <div className="sequence-node">
        <div className="faq4">
          <div className="how-do-you4">
            How do you ensure project deadlines are met?
          </div>
          <img className="union-icon6" alt="" src="/union-1.svg" />
        </div>
        <div className="faq5">
          <div className="how-do-you5">
            What about customization and unique features?
          </div>
          <img className="union-icon7" alt="" src="/union-1.svg" />
        </div>
        <div className="faq6">
          <div className="how-do-you6">
            Are there any hidden costs involved?
          </div>
          <img className="union-icon8" alt="" src="/union-1.svg" />
        </div>
        <div className="faq7">
          <input
            className="how-do-you7"
            placeholder="What about the contracts?"
            type="text"
          />
          <img className="union-icon9" alt="" src="/union-1.svg" />
        </div>
      </div>
    </div>
  );
});

export default FrameComponent4;
