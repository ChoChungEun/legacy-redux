import { takeLatest } from "redux-saga/effects";
import { FETCH_ITEM_LIST, FETCH_ITEM_DETAIL } from "../constant/actionTypes";
import { fetchItemListSaga } from "../sagas/itemList";
import { fetchItemDetailSaga } from "../sagas/itemDetail";

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM_DETAIL, fetchItemDetailSaga);
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}
