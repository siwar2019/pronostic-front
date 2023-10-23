/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { IEquipes, IEquipesEvents } from "../../types/equipes";
import {
  createNewEquipe,
  getAllEquipes,
  uploadEquipes,
} from "../actions/equipes";
export interface usersState {
  equipes: Array<IEquipes>;
  equipesEvents: Array<IEquipesEvents>;
}

const initialState: usersState = {
  equipes: [],
  equipesEvents: [],
};

export const equipesSlice = createSlice({
  name: "equipesSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(uploadEquipes.fulfilled, (state, { payload }: any) => {
      state.equipes = payload;
    });

    builder.addCase(getAllEquipes.fulfilled, (state, { payload }: any) => {
      state.equipesEvents = payload;
    });

    builder.addCase(createNewEquipe.fulfilled, (state, { payload }: any) => {
      state.equipesEvents.push(payload);
    });
  },
});

// export const {} = equipesSlice.actions;

export default equipesSlice.reducer;
