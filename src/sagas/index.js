import { takeLatest } from "redux-saga/effects";
import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEM_LIST,
  FETCH_ITEM_DETAIL,
  UPDATE_ITEM,
} from "../constant/actionTypes";
import { fetchItemListSaga } from "../sagas/itemList";
import { fetchItemDetailSaga } from "../sagas/itemDetail";
import { deleteItemSaga } from "../sagas/deleteItem";
import { addItemSaga } from "../sagas/addItem";
import { updateItemSaga } from "../sagas/updateItem";

export function* itemSaga() {
  yield takeLatest(UPDATE_ITEM, updateItemSaga);
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(DELETE_ITEM, deleteItemSaga);
  yield takeLatest(FETCH_ITEM_DETAIL, fetchItemDetailSaga);
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}
