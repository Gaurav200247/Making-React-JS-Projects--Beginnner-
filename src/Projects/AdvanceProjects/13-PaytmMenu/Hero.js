import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import phoneImage from "../../../styles/Images/phone.png";
import smallLogo from "../../../styles/Images/PaytmLogo2.png";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { CloseSubMenu } = useGlobalContext();
  return (
    <div className="info" onMouseOver={CloseSubMenu}>
      {/* Info-container-starts */}
      <div className="info-container">
        {/* small logo */}
        <img className="small-logo" src={smallLogo} alt="logo" />
        {/* small logo */}

        {/* info-description starts */}
        <h1 className="info-heading">India's Most-loved Payments App</h1>
        <h6 className="info-content">
          Recharge & pay bills, book flights & movie tickets, open a savings
          account, invest in stocks & mutual funds, and do a lot more.
        </h6>
        <button className="btn download-btn">
          Download Paytm App <AiOutlineApple className="download-icon" />{" "}
          <FaGooglePlay className="download-icon" />
        </button>
        {/* info-description ends */}
      </div>
      {/* Info-container-ends */}

      {/* phone-image-container-starts */}
      <div className="phone-image-container">
        <img
          className="phone-image"
          src={phoneImage}
          alt="phoneImage is here"
        />
      </div>
      {/* phone-image-container-ends */}
    </div>
  );
};

export default Hero;
