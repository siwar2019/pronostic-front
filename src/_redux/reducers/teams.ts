import { createSlice } from "@reduxjs/toolkit";
import { ITeams } from "../../types/teams";
import { getAllTeams } from "../actions/teams";
export interface usersState {
  teams: Array<ITeams>;
}

const initialState: usersState = {
  teams: [],
};

export const teamsSlice = createSlice({
  name: "teamsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTeams.fulfilled, (state, { payload }: any) => {
      state.teams = payload;
    });
    builder.addCase(getAllTeams.rejected, (state, { payload }: any) => {});
  },
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = teamsSlice.actions;
export default teamsSlice.reducer;
