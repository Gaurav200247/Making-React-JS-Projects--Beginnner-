import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="list-item">
      <span className="question">
        👉 {title}
        <span onClick={() => setIsShow(!isShow)}>
          {isShow ? (
            <AiOutlineMinus className="show-more-btn" />
          ) : (
            <AiOutlinePlus className="show-more-btn" />
          )}
        </span>
      </span>
      {isShow && <span className="answer">{info}</span>}
    </li>
  );
};

export default Question;
