import {
  IDrawSetting,
  IDrawSetting16Teams,
  IDrawSetting32Teams,
  ITotalDrawScoreEmployee,
} from "./../../types/draw";
/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { IDraw } from "../../types/draw";
import {
  getCorrectDraw,
  getDrawByAdmin,
  getDrawByEmployee,
  getTotalDrawScoreEmployee,
  updateDraw,
  getTotalDrawScoreEmployeeByAdmin,
  getDraw8TeamsSettingByAdmin,
  getDraw32TeamsSettingByAdmin,
  getDraw16TeamsSettingByAdmin,
  getDraw8TeamsSettingByEmployee,
  getDraw32TeamsSettingByEmployee,
  getDraw16TeamsSettingByEmployee,
} from "../actions/draw";

export interface drawState {
  draw?: IDraw;
  employeeDraw?: IDraw;
  correctDraw?: IDraw;
  totalDrawScoreEmployee?: ITotalDrawScoreEmployee[];
  totalDrawScoreEmployeeByAdmin?: ITotalDrawScoreEmployee[];
  drawSetting8Team?: IDrawSetting;
  drawSetting32Team?: IDrawSetting32Teams;
  drawSetting16Team?: IDrawSetting16Teams;
  drawSetting8TeamEmployee?: IDrawSetting;
  drawSetting32TeamEmployee?: IDrawSetting32Teams;
  drawSetting16TeamEmployee?: IDrawSetting16Teams;
}

const initialState: drawState = {};

export const drawSlice = createSlice({
  name: "drawSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(updateDraw.fulfilled, (state, { payload }: any) => {
      state.draw = payload;
    });
    builder.addCase(getDrawByEmployee.fulfilled, (state, { payload }: any) => {
      state.employeeDraw = payload;
    });
    builder.addCase(getDrawByAdmin.fulfilled, (state, { payload }: any) => {
      state.employeeDraw = payload;
    });
    builder.addCase(getCorrectDraw.fulfilled, (state, { payload }: any) => {
      state.correctDraw = payload;
    });
    builder.addCase(
      getTotalDrawScoreEmployee.fulfilled,
      (state, { payload }: any) => {
        state.totalDrawScoreEmployee = payload;
      }
    );
    builder.addCase(
      getTotalDrawScoreEmployeeByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.totalDrawScoreEmployeeByAdmin = payload;
      }
    );
    builder.addCase(
      getDraw8TeamsSettingByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting8Team = payload;
      }
    );
    builder.addCase(
      getDraw32TeamsSettingByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting32Team = payload;
      }
    );
    builder.addCase(
      getDraw16TeamsSettingByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting16Team = payload;
      }
    );
    builder.addCase(
      getDraw8TeamsSettingByEmployee.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting8TeamEmployee = payload;
      }
    );
    builder.addCase(
      getDraw32TeamsSettingByEmployee.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting32TeamEmployee = payload;
      }
    );
    builder.addCase(
      getDraw16TeamsSettingByEmployee.fulfilled,
      (state, { payload }: any) => {
        state.drawSetting16TeamEmployee = payload;
      }
    );
  },
});

export default drawSlice.reducer;
