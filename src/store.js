import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import popularReducer from "./features/popularDishSlice";
import categoryReducer from "./features/categorySlice";
import dealsReducer from "./features/dealSlice";
import pizzaReducer from "./features/pizzaSlice";
import saladReducer from "./features/saladSlice";
import dessertReducer from "./features/dessertSlice";
import drinkReducer from "./features/drinkSlice";
import sidesReducer from "./features/sideSlice";
import grillReducer from "./features/grillSlice";
import basketReducer from "./features/basketSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    popular: popularReducer,
    category: categoryReducer,
    deals: dealsReducer,
    pizzas: pizzaReducer,
    salad: saladReducer,
    dessert: dessertReducer,
    drink: drinkReducer,
    sides: sidesReducer,
    grill: grillReducer,
    basket: basketReducer,
  },
});
