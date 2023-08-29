import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import paymentService from './paymentService';

const initialState = {
  success: false,
  error: null,
  paymentRequestStatus: 'idle',
  message: "",
  pending: false
};

export const requestPayment = createAsyncThunk(
  'payment/initiatePayment',
  async (requestData, thunkAPI) => {
    try {
      return await paymentService.requestPayment(requestData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestPayment.pending, (state) => {
        console.log('Payment request pending...');
        state.paymentRequestStatus = 'loading';
        state.pending = true
      })
      .addCase(requestPayment.fulfilled, (state, action) => {
        console.log('Payment request fulfilled');
        state.paymentRequestStatus = 'succeeded';
        state.success = true;
        state.error = null;
      })
      .addCase(requestPayment.rejected, (state, action) => {
        console.log('Payment request rejected:', action.error.message);
        state.paymentRequestStatus = 'failed';
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
