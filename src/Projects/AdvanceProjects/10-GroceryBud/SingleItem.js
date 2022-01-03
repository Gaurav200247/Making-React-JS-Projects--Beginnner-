import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const SingleItem = ({ item, DeleteItem, EditItem }) => {
  const { id, name } = item;
  return (
    <li className="list-item">
      <span className="name">{name}</span>
      <div className="btn-container">
        <button className="mybtn edit" onClick={() => EditItem(id)}>
          <FaRegEdit className="icon" />
        </button>
        <button className="mybtn delete" onClick={() => DeleteItem(id)}>
          <BsFillTrashFill className="icon" />
        </button>
      </div>
    </li>
  );
};

export default SingleItem;
