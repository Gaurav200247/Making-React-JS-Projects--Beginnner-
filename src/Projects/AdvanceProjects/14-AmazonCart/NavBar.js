import React from "react";
import logo from "../../../styles/Images/Logo.png";
import { BsCart3 } from "react-icons/bs";
import { useGlobalContext } from "./Context";

const NavBar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      {/* logo starts */}
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {/* logo ends */}
      <div className="nav-cart-item-counter">
        <BsCart3 className="cart-icon" />
        <h4 className="item-counter">{amount}</h4>
      </div>
    </nav>
  );
};

export default NavBar;
