import { createSlice } from "@reduxjs/toolkit";

export const orderListSlice = createSlice({
  name: "orderList",
  initialState: {
    orderList: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orderList.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addOrder, removeOrder } = orderListSlice.actions;
export default orderListSlice.reducer;
