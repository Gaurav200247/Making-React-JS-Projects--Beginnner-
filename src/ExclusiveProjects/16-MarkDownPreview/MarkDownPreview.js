import React, { useState } from "react";

const MarkDownPreview = () => {
  const [text, settext] = useState("# MarkDown Preview");
  return (
    <div className="container">
      <textarea
        className="input"
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className="show-area">{text}</div>
    </div>
  );
};

export default MarkDownPreview;
