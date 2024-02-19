import { API_END_POINTS } from "./api.endpoints";
import { API, handleApiError } from "../helpers";

export const GET_DASHBOARD_STATISTICS = async () => {
    try {
        const res = await API.get(API_END_POINTS.GET_DASHBOARD_STATISTICS);
        return res.data;
    } catch (error) {
        return handleApiError(error);
    }
};