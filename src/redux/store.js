import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import filterSlice from "./features/auth/filterSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        filter: filterSlice
    }
})