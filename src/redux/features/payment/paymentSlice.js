import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import paymentService from './paymentService';

const initialState = {
  success: false,
  error: false,
  payment: null,
  payments: [],
  message: "",
  loading: false
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

export const getPaymentDetails = createAsyncThunk(
  "payment/get-payments",
  async (_, thunkAPI) => {
    try {
      return await paymentService.getPaymentDetails();
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
        state.payment = true;
        state.loading = true
      })
      .addCase(requestPayment.fulfilled, (state, action) => {
        state.payment = action.payload;
        state.success = true;
        state.error = null;
      })
      .addCase(requestPayment.rejected, (state, action) => {
        console.log('Payment request rejected:', action.error.message);
        state.payment = false;
        state.success = false;
        state.error = action.error.message;
      })

      .addCase(getPaymentDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payments = action.payload;
      })
      .addCase(getPaymentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
  },
});

// export const selectPayment = (state) => state.payment

export default paymentSlice.reducer;
