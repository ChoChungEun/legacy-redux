import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { itemSaga } from "../sagas/index";
import item from "../actions/itemActions";
import loading from "../actions/loadingActions";

const rootReducer = combineReducers({
  item,
  loading,
});

export function* rootSaga() {
  yield all([itemSaga()]);
}

export default rootReducer;
