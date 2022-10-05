import { createSlice } from "@reduxjs/toolkit";

export const dealSlice = createSlice({
  name: "deals",
  initialState: {
    deals: [],
  },
  reducers: {
    addDeals: (state, action) => {
      state.deals = action.payload;
    },
  },
});

export const { addDeals } = dealSlice.actions;

export const selectDeals = (state) => state.deals.deals;

export default dealSlice.reducer;
