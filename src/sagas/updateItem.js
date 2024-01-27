import { call, put } from "redux-saga/effects";
import { updateItemApi } from "../lib/api";
import { startLoading, endLoading } from "../actions/loadingActions";
import { UPDATE_ITEM } from "../constant/actionTypes";
import { updateSuccess, updateFailure } from "../actions/itemActions";

export function* updateItemSaga(action) {
  yield put(startLoading(UPDATE_ITEM));
  try {
    yield call(updateItemApi, action.payload);
    yield put(updateSuccess(action.payload));
  } catch (e) {
    yield put(updateFailure(e));
  }
  yield put(endLoading(UPDATE_ITEM));
}
