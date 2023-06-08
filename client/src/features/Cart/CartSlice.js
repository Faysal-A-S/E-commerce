import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exist = state.cartItem.findIndex(
        (item) => action.payload._id === item._id
      );

      if (state.cartItem.length === 0) {
        state.cartItem.push(action.payload);
      } else if (exist !== -1) {
        state.cartItem[exist].cquantity += 1;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});
export default CartSlice.reducer;
export const { addItem, removeItem } = CartSlice.actions;
