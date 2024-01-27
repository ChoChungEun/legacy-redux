import { createAction, handleActions } from "redux-actions";
import {
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
  FETCH_ITEM_DETAIL,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_ITEM_LIST,
} from "../constant/actionTypes";

export const fetchDetailSuccess = createAction(
  FETCH_DETAIL_SUCCESS,
  (data) => data
);
export const fetchDetailFailure = createAction(FETCH_DETAIL_FAILURE, (e) => e);
export const fetchItemDetail = createAction(
  FETCH_ITEM_DETAIL,
  (itemId) => itemId
);

export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (data) => data
);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);
export const fetchItemList = createAction(FETCH_ITEM_LIST);

const initialState = {
  item: null,
  items: [],
  error: null,
};

const item = handleActions(
  {
    [FETCH_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_DETAIL_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default item;
