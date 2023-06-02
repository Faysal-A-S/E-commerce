import { apiSlice } from "../Api/ApiSlice";

export const ProductApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useProductsQuery } = ProductApi;
