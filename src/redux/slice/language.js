import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: "en",
  availableLanguages: ["en", "ar", "fr"],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;