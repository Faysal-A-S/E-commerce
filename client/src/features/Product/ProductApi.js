import { apiSlice } from "../Api/ApiSlice";

export const ProductApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    product: builder.query({
      query: (data) => ({
        url: `/product/${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductsQuery, useProductQuery } = ProductApi;
