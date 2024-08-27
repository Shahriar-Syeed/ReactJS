import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice.js"

import uiReducer from "./ui-slice.js";

const store = configureStore({
  reducer:{
    ui: uiReducer,
    cart: cartReducer,
  }
});

export default store;
