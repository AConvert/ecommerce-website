import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
  },
  reducers: {
    addPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

export const { addPizzas } = pizzaSlice.actions;

export const selectPizza = (state) => state.pizzas.pizzas;

export default pizzaSlice.reducer;
