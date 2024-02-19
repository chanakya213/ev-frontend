import { THEME_TYPES } from "../types";

export function requestUpdateThemeMode(payload) {
  return {
    type: THEME_TYPES.UPDATE_THEME_MODE_REQUEST,
    payload,
  };
}

export function updateThemeModeSuccess(payload) {
  return {
    type: THEME_TYPES.UPDATE_THEME_MODE_SUCCESS,
    payload,
  };
}
