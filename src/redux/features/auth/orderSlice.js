import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import orderService from "./orderService";
import axios from 'axios'
const BACKEND_URL = 'http://localhost:5000';
const API_URL = `${BACKEND_URL}/api/order/`;

// cretae Order
export const createOrder = createAsyncThunk('order/create', async (orderData) => {
  try {
    const response = await orderService.createOrder(orderData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error creating order.';
  }
});

export const sendPendingOrder = createAsyncThunk(
  'order/sendPendingOrder',
  async ({ collectorId, orderData }) => {
    // Dispatch the action to create the order in the backend
    const orderResponse = await createOrder(orderData, collectorId);

    // Dispatch the action to send an email to the collector
    await sendEmailToCollector(collectorId, orderData, orderResponse);

    // Return data as needed
    return { orderData, orderResponse };
  }
);

// Get Order
export const getOrder = createAsyncThunk(
    "order/getOrder", async (_, thunkAPI) => {
  try {
    return await orderService.getOrder();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


// verify Order
export const verifyOrder = createAsyncThunk(
  "order/verifyOrder",
  async (verificationToken, thunkAPI) => {
    try {
      return await orderService.verifyOrder(verificationToken);
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

// get Orders
export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (_, thunkAPI) => {
    try {
      return await orderService.getOrders();
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

// deleteOrder
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (id, thunkAPI) => {
    try {
      return await orderService.deleteOrder(id);
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

// upgradeOrder
export const upgradeOrder = createAsyncThunk(
  "order/upgradeOrder",
  async (orderData, thunkAPI) => {
    try {
      return await orderService.upgradeOrder(orderData);
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

// Update Order
export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (orderData, thunkAPI) => {
    try {
      return await orderService.updateOrder(orderData);
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


const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    order: null,
    orders: [],
    totalOrders: 0,
    processedOrders: 0,
  },

  reducers: {

    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    
    CALC_COMPLETED_ORDER(state, action) {
      const processedCount = state.orders.reduce((count, order) => {
        const { status } = order;
        if (status === "processed") {
          return count + 1;
        }
        return count;
      }, 0);
    
      state.processedOrders = processedCount;
    },    
    CALC_TOTAL_AMOUNT: (state, action) => {
      const processedAmount = state.orders.reduce((totalAmount, order) => {
        const { amount, status } = order;
        if (status === "processed" && amount) {
          return totalAmount + amount;
        }
        return totalAmount;
      }, 0);
    
      state.processedOrders = processedAmount;
    
      // Calculate the total amount from all orders
      const totalAmount = state.orders.reduce((total, order) => {
        const { amount } = order;
        if (amount) {
          return total + amount;
        }
        return total;
      }, 0);
    
      state.totalAmount = totalAmount;
    }
  },
  extraReducers: (builder) => {
    builder

      // create Order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.order = action.payload;
        toast.success('Order created!')
        console.log(action.payload)
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.order = null
        toast.error(action.payload);
      })

      // Get Order
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // verify Order
      .addCase(verifyOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(verifyOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // getOrders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // deleteOrder
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // upgradeOrder
      .addCase(upgradeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(upgradeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(upgradeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      // updateOrder
      .addCase(updateOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
  },
});


export const { RESET, CALC_COMPLETED_ORDER, CALC_TOTAL_AMOUNT, INITIATE_PAYMENT } =
  orderSlice.actions;

export const selectOrder = (state) => state.orders;

export default orderSlice.reducer;