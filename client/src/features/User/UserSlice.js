import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = {};
    },
  },
});
export default userSlice.reducer;
export const { authenticateUser, logoutUser } = userSlice.actions;
