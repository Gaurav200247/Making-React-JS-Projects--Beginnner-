import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const SingleItem = ({ id, img, title, amount, price, currentStatus }) => {
  const { DeleteItem, increase, decrease } = useGlobalContext();

  return (
    <div className="single-item-container">
      {/* img-container starts */}
      <div className="img-container">
        <img className="img" src={img} alt={title} />
      </div>
      {/* img-container ends */}

      {/* single-item-info starts */}
      <div className="single-item-info">
        {/* title-status-container starts */}
        <div className="title-status-container">
          <span className="title">{title.substr(0, 100)}</span>
          <span className="status">{currentStatus}</span>
        </div>
        {/* title-status-container ends */}

        <button
          className="btn btn-danger delete-btn"
          onClick={() => DeleteItem(id)}
        >
          Delete Item
        </button>

        {/* qty-container starts */}
        <span className="qty-container">
          <span className="quantity">Qty : {amount}</span>

          {/* plus btn starts */}
          <button className="plus-btn qty-btn" onClick={() => increase(id)}>
            <AiOutlineArrowUp />
          </button>
          {/* plus btn ends */}

          {/* minus-btn starts*/}
          <button className="minus-btn qty-btn" onClick={() => decrease(id)}>
            <AiOutlineArrowDown />
          </button>
          {/* minus-btn ends */}
        </span>
        {/* qty-btns starts */}
      </div>
      {/* single-item-info ends */}

      {/* price-container starts */}
      <div className="price-container">
        <span className="price">₹ {price}</span>
      </div>
      {/* price-container ends */}
    </div>
  );
};

export default SingleItem;
