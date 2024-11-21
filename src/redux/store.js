import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/cartSlice";
import orderListReducer from "./slices/orderList/orderListSlice";
import itemsSliceReducer from "./slices/items/itemsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orderList: orderListReducer,
    items: itemsSliceReducer,
  },
});
