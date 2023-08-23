import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  collectors: [],
  isLoading: false,
  isError: false,
  isSuccess: false
};

const collectorSlice = createSlice({
  name: 'collector',
  initialState,
  reducers: {
    fetchCollectorsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    fetchCollectorsSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.collectors = action.payload;
    },
    fetchCollectorsFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { fetchCollectorsStart, fetchCollectorsSuccess, fetchCollectorsFailure } = collectorSlice.actions;



export default collectorSlice.reducer;
