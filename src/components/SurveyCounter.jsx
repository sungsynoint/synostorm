import React from "react";

const SurveyCounter = ({ notCompleted }) => {
  return (
    <section className="counter">
      <h3>
        There are
        <span className="badge badge-primary mx-1">{notCompleted.length}</span>
        surveys not completed
      </h3>
    </section>
  );
};

export default SurveyCounter;
