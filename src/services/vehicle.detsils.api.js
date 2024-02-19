import { API_END_POINTS } from "./api.endpoints";
import { API, handleApiError } from "../helpers";

export const GET_VEHICLES_TABLE_DATA = async (query) => {
   try {
      const res = await API.get(API_END_POINTS.GET_VEHICLES_TABLE_DATA + query);
      return res.data;
   } catch (error) {
      return handleApiError(error);
   }
};

export const GET_SINGLE_VEHICLE_DATA = async (id) => {
   try {
      const res = await API.get(API_END_POINTS.GET_SINGLE_VEHICLE_DATA + id);
      return res.data;
   } catch (error) {
      return handleApiError(error);
   }
};

export const GET_SINGLE_VEHICLE_ALARM_LIST = async (dvid) => {
   try {
      const res = await API.get(
         API_END_POINTS.GET_SINGLE_VEHICLE_ALARM_LIST + dvid);
      return res.data;
   } catch (error) {
      return handleApiError(error);
   }
};

export const GET_SINGLE_VEHICLE_TEMPERATURE_LIST = async (dvid) => {
   try {
      const res = await API.get(
         API_END_POINTS.GET_SINGLE_VEHICLE_TEMPERATURE_LIST + dvid
      );
      return res.data;
   } catch (error) {
      return handleApiError(error);
   }
};

export const GET_SINGLE_VEHICLE_PREDICTIVE_DATA = async (dvid) => {
   try {
      const res = await API.get(
         API_END_POINTS.GET_SINGLE_VEHICLE_PREDICTIVE_DATA + dvid
      );
      return res.data;
   } catch (error) {
      return handleApiError(error);
   }
};
