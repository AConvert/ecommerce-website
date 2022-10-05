import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCategory } = categorySlice.actions;

export const selectCategory = (state) => state.category.value;

export default categorySlice.reducer;
