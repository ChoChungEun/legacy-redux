import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ITEM_LIST } from "../constant/actionTypes";
import { fetchItemList } from "../actions/itemActions";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import UpdateButton from "./UpdateButton";
import { changeColor } from "../actions/colorChangeAction";

function ItemList() {
  const dispatch = useDispatch();

  const { items, isLoading, color } = useSelector(
    ({ item, loading, color }) => ({
      items: item.items,
      isLoading: loading[FETCH_ITEM_LIST],
      color: color.color,
    })
  );

  useEffect(() => {
    dispatch(fetchItemList());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  const handleColorChange = () => {
    dispatch(changeColor("red"));
  };

  const fontColor = color;

  return (
    <div align="center">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <button onClick={handleColorChange} style={{ color: fontColor }}>
        Change Color
      </button>
      <div>a</div>
      <div>b</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
          gap: 10,
        }}
      >
        <h2 className="title">목록</h2>
        <AddButton />
        <UpdateButton />
      </div>
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
            <DeleteButton id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
