import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/itemActions";

const AddButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const updateItem = {
      userId: 4,
      title: "new post",
      body: "",
    };
    dispatch(addItem(updateItem));
  };

  return <button onClick={handleClick}>Add</button>;
};

export default AddButton;
