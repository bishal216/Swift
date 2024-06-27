import { React, memo, useState } from "react";
import "./DataTransformer.css";
import { FAQs } from "../../data/data";

const DataTransformer = memo(() => {
  const [faqs, setFaqs] = useState(
    FAQs.map((faq) => ({ ...faq, isOpen: false }))
  ); // Add isOpen property to track open/closed state

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
      return updatedFaqs;
    });
  };

  return (
    <section className="data-transformer">
      <div className="filter-node">
        <h1 className="got-questions">Got Questions?</h1>
        <div className="weve-got-answers">We&apos;ve Got Answers.</div>
      </div>
      <div className="constant-node">
        {faqs.map((faq, index) => (
          <>
            <div className={`faq`} key={index}>
              <div className="col-flex">
                <div
                  className={`question ${faq.isOpen ? "open" : ""}`}
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                </div>
                <div className={`answer ${faq.isOpen ? "open" : ""}`}>
                  {/* Replace this with actual answer content */}
                  {faq.answer}
                </div>
              </div>
              <img
                className={`union-icon`}
                loading="lazy"
                alt=""
                src="/union-1.svg"
                onClick={() => toggleAnswer(index)}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
});
DataTransformer.displayName = "DataTransformer";
export default DataTransformer;
