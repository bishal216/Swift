import "./Page2.css";
import { Page2_data } from "./../../data/content_data";
import man from "./../../assets/Man.svg";
const Page2 = () => {
  const { normal, focus, normal2 } = Page2_data.aboutUs;
  return (
    <section className=" page2">
      <div className="theme">{Page2_data.theme}</div>
      <div className="topHalf">
        <h1 className="issue">{Page2_data.issue}</h1>
        <div className="risk">{Page2_data.risk}</div>
      </div>

      <div className="midSection">But, you’re in luck</div>

      <div className="bottomHalf">
        <div className="bottomText">
          <h1 className="revolution">
            <span>{normal}</span>
            <span className="focus">{focus}</span>
            <span>{normal2}</span>
          </h1>
          <div className="from-initial-brainstorming">{Page2_data.task}</div>
        </div>
        <div className="bottomImage">
          <img className="man" alt="" src={man} />
        </div>
      </div>
    </section>
  );
};

export default Page2;
