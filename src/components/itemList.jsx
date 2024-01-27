import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ITEM_LIST } from "../constant/actionTypes";
import { fetchItemList } from "../actions/itemActions";
import DeleteButton from "./DeleteButton";

function ItemList() {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector(({ item, loading }) => ({
    items: item.items,
    isLoading: loading[FETCH_ITEM_LIST],
  }));

  useEffect(() => {
    dispatch(fetchItemList());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  console.log(items);
  return (
    <div align="center">
      <h2 className="title">상품 목록</h2>
      {items?.map((item) => (
        <div style={{ marginBottom: 10, borderBottom: "1px solid black" }}>
          <Link to={`/item/${item.id}`}>
            <div key={item.id}>
              <div>id: {item.id}</div>
              <div>userId: {item.userId}</div>
              <div>title: {item.title}</div>
            </div>
          </Link>
          <div>
            <DeleteButton id={item.id}>삭제</DeleteButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
