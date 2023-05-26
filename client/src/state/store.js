import { configureStore } from "@reduxjs/toolkit";
// import { graphilogicsReducer } from "./graphilogicsSlice";
// import { graphilogicsListReducer } from "./graphilogicsListSlice";
import { authReducer } from "./authSlice";
import { surveysApiReducer, surveysApiSlice } from "./surveysApiSlice";

export const store = configureStore({
  reducer: {
    // graphilogics: graphilogicsReducer,
    auth: authReducer,
    // graphilogicsList: graphilogicsListReducer,
    [surveysApiSlice.reducerPath]: surveysApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(surveysApiSlice.middleware),
});
