import { createAction, handleActions } from "redux-actions";
import {
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_ITEM,
  ADD_SUCCESS,
  ADD_FAILURE,
  ADD_ITEM,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  DELETE_ITEM,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
  FETCH_ITEM_DETAIL,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_ITEM_LIST,
} from "../constant/actionTypes";

export const updateSuccess = createAction(UPDATE_SUCCESS, (data) => {
  return data;
});
export const updateFailure = createAction(UPDATE_FAILURE, (e) => e);
export const updateItem = createAction(UPDATE_ITEM, (data) => {
  return data;
});

export const addSuccess = createAction(ADD_SUCCESS, (id) => id);
export const addFailure = createAction(ADD_FAILURE, (e) => e);
export const addItem = createAction(ADD_ITEM, (data) => data);

export const deleteSuccess = createAction(DELETE_SUCCESS, (id) => id);
export const deleteFailure = createAction(DELETE_FAILURE, (e) => e);
export const deleteItem = createAction(DELETE_ITEM, (id) => id);

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
    [UPDATE_SUCCESS]: (state, action) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.updateItem;
        } else {
          return item;
        }
      }),
    }),
    [UPDATE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [ADD_SUCCESS]: (state, action) => ({
      ...state,
      items: [action.payload, ...state.items],
    }),
    [ADD_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [DELETE_SUCCESS]: (state, action) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    }),
    [DELETE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
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
