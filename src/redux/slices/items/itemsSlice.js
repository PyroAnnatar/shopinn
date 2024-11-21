import { createSlice } from "@reduxjs/toolkit";
import items from "../../../mockData/items.json";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    all: items,
    filtered: [],
  },
  reducers: {
    filterByCategory: (state, { payload: { category, filter } }) => {
      if (!filter) {
        state.filtered = state.all;
      } else {
        state.filtered = state.all.filter((item) => item[category] === filter);
      }
    },
  },
});

export const { filterByCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
