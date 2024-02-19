import { USER_TYPES } from "../types";
import { toast } from 'react-toastify';

export function signInUserSuccess(payload) {
  return {
    type: USER_TYPES.SIGN_IN_SUCCESS,
    payload,
  };
}

export function signOutUserSuccess(payload) {
  toast.error('SignedOut Success')
  return {
    type: USER_TYPES.SIGN_OUT_SUCCESS,
    payload,
  };
}