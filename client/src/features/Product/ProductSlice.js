import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export default productSlice.reducer;
export const { getProducts, getProduct } = productSlice.actions;
