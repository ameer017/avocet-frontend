import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/features/auth/authSlice'
import orderSlice from "./features/auth/orderSlice";
import filterSlice from "./features/auth/filterSlice";
import collectorSlice from "./features/auth/collectorSlice";
import paymentSlice from "./features/payment/paymentSlice";
import kycSlice from "./features/auth/kycSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        order: orderSlice,
        filter: filterSlice,
        collector: collectorSlice,
        payment: paymentSlice,       
        kyc: kycSlice,       
    }
})