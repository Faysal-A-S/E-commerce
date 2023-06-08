import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/ApiSlice";
import userSlice from "./../features/User/UserSlice";
import ProductSlice from "../features/Product/ProductSlice";
import CartSlice from "../features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    authenticatedUser: userSlice,
    products: ProductSlice,
    cart: CartSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
});
