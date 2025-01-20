import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    products: productsReducer,
  },
});

export default store;
