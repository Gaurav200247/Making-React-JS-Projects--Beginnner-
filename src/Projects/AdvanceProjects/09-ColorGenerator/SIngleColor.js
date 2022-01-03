import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  const CopyHex = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  const CopyRGB = () => {
    setAlert(true);
    navigator.clipboard.writeText(`rgb(${bcg})`);
  };

  return (
    <div
      style={{ backgroundColor: `rgb(${bcg})` }}
      className={`color-block ${index > 10 ? "white-color" : null}`}
    >
      <span className="value weight">{weight}%</span>
      <span className="value" onClick={CopyHex}>
        {hex}
      </span>
      <span className="value" onClick={CopyRGB}>
        rgb({bcg})
      </span>
      {alert && <span className="copied">Copied To Clipboard</span>}
    </div>
  );
};

export default SingleColor;
