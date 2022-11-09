import { createSlice } from "@reduxjs/toolkit";

export const grillSlice = createSlice({
  name: "grill",
  initialState: {
    grill: [],
  },
  reducers: {
    listGrill: (state, action) => {
      state.grill = action.payload;
    },
  },
});

export const { listGrill } = grillSlice.actions;
export const selectGrill = (state) => state.grill.grill;
export default grillSlice.reducer;
