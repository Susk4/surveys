/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const surveysApiSlice = createApi({
  reducerPath: "surveysApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    createSurvey: builder.mutation({
      query: (body) => ({
        url: "surveys",
        method: "POST",
        body,
      }),
    }),
    getSurveys: builder.query({
      query: (userId) => ({
        url: `surveys?userId=${userId}`,
      }),
      transformResponse: (response) => response.data,
    }),
    deleteSurvey: builder.mutation({
      query: (id) => ({
        url: `surveys/${id}`,
        method: "DELETE",
      }),
    }),
    patchSurvey: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `surveys/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

// Reducer
export const surveysApiReducer = surveysApiSlice.reducer;

// Hooks
export const {
  useLoginMutation,
  useRegisterMutation,
  useCreateSurveyMutation,
  useGetSurveysQuery,
  useDeleteSurveyMutation,
  usePatchSurveyMutation,
} = surveysApiSlice;
