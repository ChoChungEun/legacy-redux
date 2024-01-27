import React from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../actions/itemActions";

const UpdateButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const update = {
      id: 1,
      userId: 1,
      title: "update title",
      body: "update body",
    };
    dispatch(updateItem({ id: 1, updateItem: update }));
  };

  return <button onClick={handleClick}>Update</button>;
};

export default UpdateButton;
