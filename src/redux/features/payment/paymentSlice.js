import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import paymentService from './paymentService'

const initialState = {
  loading: false,
  error: false,
  paymentRequestStatus: null,
  message: '', 
  success: false
};

// payment request
export const requestPayment = createAsyncThunk(
  'payment/request-payment',
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
)

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    RESET(state) {
      state.loading = false;
      state.error = false;
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestPayment.pending, (state) => {
        state.loading = true;
        state.paymentRequestStatus = null;
        state.error = null;
      })
      .addCase(requestPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentRequestStatus = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(requestPayment.rejected, (state, action) => {
        state.loading = false;
        state.paymentRequestStatus = null;
        state.error = action.payload;
      });
  },
});

export const {RESET} = paymentSlice.actions;

export const selectPayment = (state) => state.payment;

export default paymentSlice.reducer;