import axios from "axios";
import { fetchCollectorsFailure, fetchCollectorsStart, fetchCollectorsSuccess } from "./collectorSlice";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
// const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/users/`;

export const fetchCollectorsAsync = () => async (dispatch) => {
    dispatch(fetchCollectorsStart());
    try {
      const response = await axios.get(API_URL + 'collectors'); // Replace with your API endpoint
      dispatch(fetchCollectorsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCollectorsFailure());
    }
  };