import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    address: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
    storeAddress: (state, action) => {
      state.address = action.payload;
      console.log(state.address);
    },
  },
});

export const { loginUser, logoutUser, storeAddress } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectAddress = (state) => state.user.address;

export default userSlice.reducer;
