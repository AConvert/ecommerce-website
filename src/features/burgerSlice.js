// import { createSlice } from "@reduxjs/toolkit";

// export const burgerSlice = createSlice({
//   name: "burgers",
//   initialState: {
//     salad: [],
//   },
//   reducers: {
//     listSalad: (state, action) => {
//       state.items = [...state.items, action.payload];
//     },
//   },
// });

// export const { listSalad } = burgerSlice.actions;

// export function selectSalad(state) {
//   return state.burgers.salad;
// }
// export default burgerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burgers",
  initialState: {
    burgers: [],
  },
  reducers: {
    addBurgers: (state, action) => {
      state.burgers = action.payload;
    },
  },
});

export const { addBurgers } = burgerSlice.actions;

export const selectBurger = (state) => state.burgers.burgers;

export default burgerSlice.reducer;
