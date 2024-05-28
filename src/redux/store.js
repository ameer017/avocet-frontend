import { configureStore } from "@reduxjs/toolkit";
import wasteReducer from "./features/plastik/plastikSlice";

const store = configureStore({
  reducer: {
    wastes: wasteReducer,
  },
});

export default store;
