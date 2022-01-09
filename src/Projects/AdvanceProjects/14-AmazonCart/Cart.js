import React from "react";
import { useGlobalContext } from "./Context";
import SingleItem from "./SingleItem";

const Cart = () => {
  const { cart, total, amount, ClearCart } = useGlobalContext();

  return (
    <div className="cart-container">
      {/* cart right container starts */}
      <div className="cart-items-container">
        {/* head container */}
        <h3 className="cart-heading">Shopping Cart</h3>

        <div className="cart-flexbox">
          <button className="clear-all-btn btn btn-dark" onClick={ClearCart}>
            Clear All Items
          </button>

          <span style={{ color: "black" }}>Prices</span>
        </div>
        {/* head container ends */}

        {/* SingleItem strats */}
        {cart.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
        {/* SingleItem ends */}

        {/* footer starts */}
        <div className="cart-footer">
          <span className="total-items">SubTotal ({amount} items)</span>
          <span className="total-price">₹ {total}</span>
        </div>
        {/* footer ends */}
      </div>
      {/* cart right container ends */}

      {/* cart left container starts */}
      <div className="cart-info-container">
        <span className="total-items">SubTotal ({amount} items)</span>
        <span className="total-price">Price : ₹ {total}</span>
        <button className="btn btn-warning buy-btn">Proceed To Buy</button>
      </div>
      {/* cart left container ends */}
    </div>
  );
};

export default Cart;
