import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "../../locales";

export interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: "fr",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLangue: (state, { payload }) => {
      //localStorage.setItem("lang" , payload)
      state.lang = payload;
    },
    changeLanguageAction: (state, { payload }) => {
      if (payload === "fr" || payload === "fr-FR") {
        changeLanguage("fr");
        state.lang = "fr";
      } else if (payload === "en") {
        changeLanguage("en");
        state.lang = "en";
      } else {
        console.log("ar");
        changeLanguage("ar");
        state.lang = "ar";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLangue, changeLanguageAction } = langSlice.actions;

export default langSlice.reducer;
