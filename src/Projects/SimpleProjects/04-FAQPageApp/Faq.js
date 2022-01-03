import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

const Faq = () => {
  const [accodion, setAccodion] = useState(data);

  return (
    <div className="main-container">
      <div className="left-container">
        <h1>Questions And Answers About Login</h1>
      </div>
      <div className="right-container">
        {accodion.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
