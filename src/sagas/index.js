import { takeLatest } from "redux-saga/effects";
import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEM_LIST,
  FETCH_ITEM_DETAIL,
} from "../constant/actionTypes";
import { fetchItemListSaga } from "../sagas/itemList";
import { fetchItemDetailSaga } from "../sagas/itemDetail";
import { deleteItemSaga } from "../sagas/deleteItem";
import { addItemSaga } from "../sagas/addItem";

export function* itemSaga() {
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(DELETE_ITEM, deleteItemSaga);
  yield takeLatest(FETCH_ITEM_DETAIL, fetchItemDetailSaga);
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}
