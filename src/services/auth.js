// api.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { rtkBaseQuery } from "../baseQuery";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    KeywordInfo: builder.query({
      query: () => ({
        method: "GET",
        url: `objects`,
      }),
    }),
    // graphData: builder.query({
    //   query: () => ({
    //     method: "GET",
    //     url: `/graph`,
    //   }),
    // }),
  }),
});

export const { useKeywordInfoQuery } = authApi;

export default authApi;
