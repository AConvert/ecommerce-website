import { createSlice } from "@reduxjs/toolkit";

export const sideSlice = createSlice({
  name: "sides",
  initialState: {
    sides: [],
  },
  reducers: {
    listSides: (state, action) => {
      state.sides = action.payload;
    },
  },
});

export const { listSides } = sideSlice.actions;
export const selectSides = (state) => state.sides.sides;
export default sideSlice.reducer;
