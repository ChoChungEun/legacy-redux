import { createAction, handleActions } from "redux-actions";
import { START_LOADING, END_LOADING } from "../constant/actionTypes";

export const startLoading = createAction(
  START_LOADING,
  (actionType) => actionType
);

export const endLoading = createAction(END_LOADING, (actionType) => actionType);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [END_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
