// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
