import { memo, React } from "react";
import "./Schwemes.css";
import { schwemes_data } from "../../data/data";
const Schwemes = memo(() => {
  const data = schwemes_data;

  return (
    <section className="schwemes">
      <div className="body-cover">
        <img className="jcontroller-bg" alt="" src={data.sections[0].image} />
      </div>
      <div className="body-content">
        <div className="flex-container debug">
          <div className="flex-row">1</div>
          <div className="flex-row">2</div>
          <div className="flex-row">3</div>
          <div className="flex-row">4</div>
          <div className="flex-row">5</div>
        </div>
      </div>
      {/* {data.sections.map((section) => (
        <div key={section.id} className="reflect-node">
          <div className="distort-node">
            <h2 className="game-art-and">{section.title}</h2>
            <div className="we-craft-visually">{section.description}</div>
          </div>
        </div>
      ))}
      <div className="output-aggregator">
        <div className="branch-splitter debug">
          <h1 className="here-are-the-container">
            <p>
              {data.mainTitle} <span className="sw">Sw</span>chemes.
            </p>
          </h1>
          <div className="services-designed-with">{data.mainDescription}</div>
        </div>
        <img className="output-aggregator-child" alt="" src={data.sections[3].image} />
      </div> */}
    </section>
  );
});

Schwemes.displayName = "Schwemes";
export default Schwemes;
