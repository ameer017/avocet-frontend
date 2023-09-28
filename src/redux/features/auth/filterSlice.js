import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredUsers: [],
  filteredOrders: [],
  
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_USERS(state, action) {
      const { users, search } = action.payload;
      const tempUsers = users.filter(
        (user) =>
          user.address.toLowerCase().includes(search.toLowerCase()) ||
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) 
      );
      state.filteredUsers = tempUsers;
    },
    FILTER_ORDERS(state, action) {
      const { orders, search } = action.payload;
      const tempOrders = orders.filter(
        (order) =>
          order.type.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredOrders = tempOrders;
    },
    FILTER_ADDRESS(state, action) {
      const { orders, search } = action.payload;
      const tempOrders = orders.filter(
        (order) =>
          order.type.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredOrders = tempOrders;
    },
  }
});

export const { FILTER_USERS, FILTER_ORDERS } = filterSlice.actions;

export const selectUsers = (state) => state.filter.filteredUsers;
export const selectOrders = (state) => state.filter.filteredOrders;

export default filterSlice.reducer;