import { call, put } from "redux-saga/effects";
import { fetchItemDetailApi } from "../lib/api";
import { startLoading, endLoading } from "../actions/loadingActions";
import { FETCH_ITEM_DETAIL } from "../constant/actionTypes";
import { fetchDetailSuccess, fetchDetailFailure } from "../actions/itemActions";

export function* fetchItemDetailSaga(action) {
  yield put(startLoading(FETCH_ITEM_DETAIL));
  try {
    const response = yield call(fetchItemDetailApi, action.payload);
    yield put(fetchDetailSuccess(response.data));
  } catch (e) {
    yield put(fetchDetailFailure(e));
  }
  yield put(endLoading(FETCH_ITEM_DETAIL));
}
