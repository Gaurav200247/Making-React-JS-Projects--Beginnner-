import React, { useEffect, useState } from "react";
import DisplayAlert from "./DisplayAlert";
import SingleItem from "./SingleItem";

const getToLocalStorage = () => {
  let listInLocal = localStorage.getItem("listArray");
  if (listInLocal) {
    return JSON.parse(localStorage.getItem("listArray"));
  } else {
    return [];
  }
};

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getToLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [isAlert, setIsAlert] = useState({
    show: false,
    action: "",
    msg: "",
  });

  // default state for form
  const DefaultState = () => {
    setName("");
    setEditID(null);
    setIsEditing(false);
  };
  // this function is used to make a default state for alert as show is false it helps in wrtting less and efficent code
  const showAlert = (show = true, action = "", msg = "") => {
    setIsAlert({
      show: show,
      action: action,
      msg: msg,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // if name is not written
      showAlert(true, "danger", "Please Enter a value !");
    } else if (name && isEditing) {
      // if editing is enabled change the nmae having id === editID then update the list

      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, name: name };
          }
          return item;
        })
      );

      DefaultState();
      showAlert(true, "edit", "Item Edited Successfully !!");
    } else {
      // to add item to list
      const id = new Date().getTime().toString();
      setList([...list, { id, name }]);
      showAlert(true, "add", "Item Added SuccesFully !!");
      DefaultState();
    }
  };

  // to start editing an item
  const EditItem = (id) => {
    // put id of choosen elemnt to specificitem to put its name in input tag
    let specificItem = list.find((item) => item.id === id);
    setEditID(id);
    setIsEditing(true);
    setName(specificItem.name);
  };

  // to delete a item from list
  const DeleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "danger", "Item Deleted SuccesFully !!");
  };

  // to clear all list items
  const ClearList = () => {
    setList([]);
    showAlert(true, "clearAll", "All Items are Deleted Successfully !!");
  };

  useEffect(() => {
    localStorage.setItem("listArray", JSON.stringify(list));
  }, [list]);

  return (
    <div className="container">
      {/* Alert */}
      {isAlert.show && (
        <DisplayAlert {...isAlert} removeAlert={showAlert} list={list} />
      )}
      {/* Alert Ends */}

      <h1 className="heading">Grocery Bud 😃</h1>
      {/* form starts*/}
      <form onSubmit={HandleSubmit}>
        <input
          className="form-control"
          placeholder="Enter Item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>
      {/* form ends */}

      {/* Single Item */}
      {list.length > 0 && (
        <div className="list-container">
          {list.map((item) => {
            return (
              <SingleItem
                key={item.id}
                item={item}
                DeleteItem={DeleteItem}
                EditItem={EditItem}
              />
            );
          })}
          <button className="btn btn-danger clear-all-btn" onClick={ClearList}>
            clear all items
          </button>
        </div>
      )}
      {/* SingleItem ends */}
    </div>
  );
};

export default GroceryBud;
