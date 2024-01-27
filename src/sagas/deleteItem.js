import { call, put } from "redux-saga/effects";
import { delteItemApi } from "../lib/api";
import { startLoading, endLoading } from "../actions/loadingActions";
import { DELETE_ITEM } from "../constant/actionTypes";
import { deleteSuccess, deleteFailure } from "../actions/itemActions";

export function* deleteItemSaga(action) {
  yield put(startLoading(DELETE_ITEM));
  try {
    yield call(delteItemApi, action.payload);
    yield put(deleteSuccess(action.payload));
  } catch (e) {
    yield put(deleteFailure(e));
  }
  yield put(endLoading(DELETE_ITEM));
}
