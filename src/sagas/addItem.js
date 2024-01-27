import { call, put } from "redux-saga/effects";
import { addItemApi } from "../lib/api";
import { startLoading, endLoading } from "../actions/loadingActions";
import { ADD_ITEM } from "../constant/actionTypes";
import { addSuccess, addFailure } from "../actions/itemActions";

export function* addItemSaga(action) {
  yield put(startLoading(ADD_ITEM));
  try {
    const response = yield call(addItemApi, action.payload);
    yield put(addSuccess(response.data));
  } catch (e) {
    yield put(addFailure(e));
  }
  yield put(endLoading(ADD_ITEM));
}
