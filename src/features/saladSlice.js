import { createSlice } from "@reduxjs/toolkit";

export const saladSlice = createSlice({
  name: "salad",
  initialState: {
    salads: [],
  },
  reducers: {
    listsalads: (state, action) => {
      state.salads = action.payload;
    },
  },
});

export const { listsalads } = saladSlice.actions;
export const selectSalad = (state) => state.salad.salads;
export default saladSlice.reducer;
