const BASE_URL = process.env.REACT_APP_API_URL;

export const API_END_POINTS = {
   SIGN_IN: `${BASE_URL}/login`,
   GET_VEHICLES_TABLE_DATA: `${BASE_URL}/vehicles?`,
   GET_SINGLE_VEHICLE_DATA: `${BASE_URL}/vehicles/info?dvid=`,
   GET_DASHBOARD_STATISTICS: `${BASE_URL}/dashbaord/statistics`,
   GET_SINGLE_VEHICLE_ALARM_LIST: `${BASE_URL}/vehicles/motorChart?dvid=`,
   GET_SINGLE_VEHICLE_TEMPERATURE_LIST: `${BASE_URL}/vehicles/temperatureChart?dvid=`,
   GET_SINGLE_VEHICLE_PREDICTIVE_DATA: `${BASE_URL}/vehicles/predictive?dvid=`,
};