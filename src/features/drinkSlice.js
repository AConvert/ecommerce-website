import { createSlice } from "@reduxjs/toolkit";

export const drinkSlice = createSlice({
  name: "drink",
  initialState: {
    drinks: [],
  },
  reducers: {
    listDrink: (state, action) => {
      state.drinks = action.payload;
    },
  },
});

export const { listDrink } = drinkSlice.actions;
export const selectDrink = (state) => state.drink.drinks;
export default drinkSlice.reducer;
