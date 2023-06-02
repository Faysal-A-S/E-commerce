import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
    headers: { "Content-Type": "application/json" },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
