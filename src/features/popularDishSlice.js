import { createSlice } from "@reduxjs/toolkit";

export const popularDishSlice = createSlice({
  name: "popular",
  initialState: {
    popular: [],
  },
  reducers: {
    addPopularDish: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { addPopularDish } = popularDishSlice.actions;

export const selectPopular = (state) => state.popular.popular;

export default popularDishSlice.reducer;
