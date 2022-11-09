import { createSlice } from "@reduxjs/toolkit";

export const dessertSlice = createSlice({
  name: "dessert",
  initialState: {
    dessert: [],
  },
  reducers: {
    listDessert: (state, action) => {
      state.dessert = action.payload;
    },
  },
});

export const { listDessert } = dessertSlice.actions;
export const selectDessert = (state) => state.dessert.dessert;
export default dessertSlice.reducer;
