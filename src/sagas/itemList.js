import { call, put } from "redux-saga/effects";
import { fetchItemListApi } from "../lib/api";
import { startLoading, endLoading } from "../actions/loadingActions";
import { FETCH_ITEM_LIST } from "../constant/actionTypes";
import { fetchListSuccess, fetchListFailure } from "../actions/itemActions";

export function* fetchItemListSaga() {
  yield put(startLoading(FETCH_ITEM_LIST));
  try {
    const response = yield call(fetchItemListApi);
    yield put(fetchListSuccess(response.data));
  } catch (e) {
    yield put(fetchListFailure(e));
  }
  yield put(endLoading(FETCH_ITEM_LIST));
}
