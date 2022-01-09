import React from "react";
import Cart from "./Cart";
import { useGlobalContext } from "./Context";
import NavBar from "./NavBar";

const Menu = () => {
  const { cart } = useGlobalContext();

  const ReloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar />
      <Cart />

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1 className="empty-cart-heading">Shopping Cart Is Empty 😥</h1>
          <button className="btn btn-primary reload-btn" onClick={ReloadPage}>
            Press to Reload Items
          </button>
        </div>
      ) : (
        <p className="warning-para">
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price.<br></br>Do you have
          a promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </p>
      )}
    </div>
  );
};

export default Menu;
