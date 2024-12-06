import { fetchBaseQuery } from "@reduxjs/toolkit/query";

console.log(process?.env?.NEXT_PUBLIC_BASE_URL, "baseurl");

export const rtkBaseQuery = fetchBaseQuery({
  baseUrl: process?.env?.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});
