import { createSlice } from "@reduxjs/toolkit";
import { IEmployeeOptions } from "../../types/options";
import {
  createPronosticWithDoubleScore,
  createPronosticWithDoubleScoreAndForgot,
  createPronosticWithDoubleScoreAndSuper,
  createPronosticWithForgotSave,
  createPronosticWithSuperPronostic,
  getEmployeeOptions,
  updatePronosticWithDoubleAndSuper,
  updatePronosticWithDoubleScore,
  updatePronosticWithSuperPronostic,
  updateUnusedDoubleScoreJoker,
} from "../actions/options";
export interface usersState {
  employeeOptions: IEmployeeOptions;
  eventId: string;
  messageForgot: string;
  messageSuper: string;
  messageSuperUpdate: string;
  messageDoubleScore: string;
  messageUnusedDoubleScore: string;
  messageScoreDouble: string;
  messageScoreDoubleAndForgot: string;
  messageScoreDoubleAndSuper: string;
  messageUpdateWithSuperAndDouble: string;
}

const initialState: usersState = {
  employeeOptions: {
    super_pronostic: false,
    use_date_super: "",
    super_match_id: "",
    forgot_save: false,
    use_date_forgot: "",
    forgot_match_id: "",
    double_score: false,
    use_date_double: "",
    double_match_id: "",
  },
  eventId: "",
  messageSuper: "",
  messageForgot: "",
  messageSuperUpdate: "",
  messageDoubleScore: "",
  messageUnusedDoubleScore: "",
  messageScoreDouble: "",
  messageScoreDoubleAndForgot: "",
  messageScoreDoubleAndSuper: "",
  messageUpdateWithSuperAndDouble: "",
};

export const optionsSlice = createSlice({
  name: "optionsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeeOptions.fulfilled, (state, { payload }: any) => {
      state.employeeOptions = payload;
    });
    builder.addCase(
      createPronosticWithSuperPronostic.fulfilled,
      (state, { payload }: any) => {
        state.messageSuper = payload;
      }
    );
    builder.addCase(
      createPronosticWithForgotSave.fulfilled,
      (state, { payload }: any) => {
        state.messageForgot = payload;
      }
    );
    builder.addCase(
      createPronosticWithDoubleScore.fulfilled,
      (state, { payload }: any) => {
        state.messageDoubleScore = payload;
      }
    );
    builder.addCase(
      updatePronosticWithSuperPronostic.fulfilled,
      (state, { payload }: any) => {
        state.messageSuperUpdate = payload;
      }
    );
    builder.addCase(
      updateUnusedDoubleScoreJoker.fulfilled,
      (state, { payload }: any) => {
        state.messageUnusedDoubleScore = payload;
      }
    );
    builder.addCase(
      updatePronosticWithDoubleScore.fulfilled,
      (state, { payload }: any) => {
        state.messageScoreDouble = payload;
      }
    );
    builder.addCase(
      createPronosticWithDoubleScoreAndForgot.fulfilled,
      (state, { payload }: any) => {
        state.messageScoreDoubleAndForgot = payload;
      }
    );
    builder.addCase(
      createPronosticWithDoubleScoreAndSuper.fulfilled,
      (state, { payload }: any) => {
        state.messageScoreDoubleAndSuper = payload;
      }
    );
    builder.addCase(
      updatePronosticWithDoubleAndSuper.fulfilled,
      (state, { payload }: any) => {
        state.messageUpdateWithSuperAndDouble = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export default optionsSlice.reducer;
