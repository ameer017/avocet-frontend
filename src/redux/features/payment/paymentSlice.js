import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentService from "./paymentService";

const initialState = {
  success: false,
  error: false,
  payment: null,
  payments: [],
  message: "",
  loading: false,
};

export const requestPayment = createAsyncThunk(
  "payment/initiatePayment",
  async (requestData, thunkAPI) => {
    try {
      const response = await paymentService.requestPayment(requestData);
      return response.data;
    } catch (error) {
      const errorMessage = response?.data?.status || error.message || error.toString();
      return thunkAPI.rejectWithValue(errorMessage);
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

export const upgradePayment = createAsyncThunk(
  "payment/upgradePayment",
  async (requestData, thunkAPI) => {
    try {
      const response = await paymentService.upgradePayment(requestData);
      return response.data; // Assuming response has a "data" property.
    } catch (error) {
      const errorMessage = response?.status || error.message || error.toString();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.error = false;
      })
      .addCase(requestPayment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(getPaymentDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payments = action.payload;
        state.error = false;
      })
      .addCase(getPaymentDetails.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(upgradePayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(upgradePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload;
        state.error = false;
      })
      .addCase(upgradePayment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export default paymentSlice.reducer;
