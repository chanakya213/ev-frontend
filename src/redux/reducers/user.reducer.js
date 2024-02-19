import { USER_TYPES } from "../types";
import { INITIAL_STATE } from "../store/initalState";
import { LStorage } from "../../helpers";

export default function UserReducer(state = INITIAL_STATE.user, action) {
  switch (action.type) {
    case USER_TYPES.SIGN_IN_SUCCESS: {
      LStorage.setUserData(action.payload);
      return {
        ...state,
        userData: action.payload,
      };
    }
    case USER_TYPES.SIGN_OUT_SUCCESS: {
      LStorage.removeUserData();
      return {
        ...state,
        userData: {},
      };
    }
    default:
      return state;
  }
}
