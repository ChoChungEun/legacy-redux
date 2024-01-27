import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions/itemActions";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItem(id));
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
