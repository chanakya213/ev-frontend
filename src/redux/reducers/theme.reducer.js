import { THEME_TYPES } from "../types";
import { INITIAL_STATE } from "../store/initalState";

export default function ThemeReducer(state = INITIAL_STATE.theme, action) {
  switch (action.type) {
    case THEME_TYPES.UPDATE_THEME_MODE_SUCCESS: {
      return {
        ...state,
        mode: action.payload,
      };
    }

    default:
      return state;
  }
}
