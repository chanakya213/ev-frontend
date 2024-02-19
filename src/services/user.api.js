import { API_END_POINTS } from "./api.endpoints";
import { API , handleApiError } from "../helpers";

export const SIGN_IN_USER = async (formData) => {
  try {
    const res = await API.post(API_END_POINTS.SIGN_IN, formData);
    return res.data ;
  } catch (error) {
    return handleApiError(error);
  }
};