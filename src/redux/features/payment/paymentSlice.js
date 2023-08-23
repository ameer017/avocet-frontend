import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FLUTTERWAVE_API_URL = 'http://localhost:5000/api/payment/initiate-payment'; 

export const initiatePayment = createAsyncThunk(
  'payment/initiatePayment',
  async (paymentData, thunkAPI) => {
    try {
      const response = await axios.post(FLUTTERWAVE_API_URL, paymentData);
      return { paymentLink: response.data.paymentLink };
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

const initialState = {
  loading: false,
  paymentLink: null,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    resetPaymentState: (state) => {
      state.loading = false;
      state.paymentLink = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initiatePayment.pending, (state) => {
        state.loading = true;
        state.paymentLink = null;
        state.error = null;
      })
      .addCase(initiatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentLink = action.payload.paymentLink;
        state.error = null;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.loading = false;
        state.paymentLink = null;
        state.error = action.payload;
      });
  },
});

export const { resetPaymentState } = paymentSlice.actions;

export default paymentSlice.reducer;
