import { createSlice } from "@reduxjs/toolkit";

const initialState = { surveyModalOpen: false };

const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    login: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    register: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },

    toggleSurveyModalOpen: (state) => {
      state.surveyModalOpen = !state.surveyModalOpen
    }
  },
});

// Reducer
export const appStateReducer = appStateSlice.reducer;

// Action
export const { toggleSurveyModalOpen } = appStateSlice.actions;

// Selectors
export const getSurveyModalOpen = (state) => state.appState.surveyModalOpen;
