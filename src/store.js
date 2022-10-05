import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import popularReducer from "./features/popularDishSlice";
import categoryReducer from "./features/categorySlice";
import dealsReducer from "./features/dealSlice";
import pizzaReducer from "./features/pizzaSlice";
import burgerReducer from "./features/burgerSlice";
import saladReducer from "./features/saladSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    popular: popularReducer,
    category: categoryReducer,
    deals: dealsReducer,
    pizzas: pizzaReducer,
    burger: burgerReducer,
    salad: saladReducer,
  },
});
