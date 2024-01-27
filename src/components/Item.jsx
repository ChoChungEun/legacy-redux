import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ITEM_DETAIL } from "../constant/actionTypes";
import { fetchItemDetail } from "../actions/itemActions";

const Item = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { item, isLoading } = useSelector(({ item, loading }) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM_DETAIL],
  }));

  useEffect(() => {
    dispatch(fetchItemDetail(id));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      key={item?.id}
      style={{ marginBottom: 10, borderBottom: "1px solid black" }}
    >
      <div>id: {item?.id}</div>
      <div>userId: {item?.userId}</div>
      <div>title: {item?.title}</div>
    </div>
  );
};

export default Item;
