import { createAction, handleActions } from "redux-actions";
import { CHANGE_COLOR } from "../constant/actionTypes";

export const changeColor = createAction(CHANGE_COLOR, (color) => color);

const initialState = {
  color: "",
};

const color = handleActions(
  {
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      color: action.payload,
    }),
  },
  initialState
);

export default color;
