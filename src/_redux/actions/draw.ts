import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  IDraw,
  IDrawSetting,
  IDrawSetting16Teams,
  IDrawSetting32Teams,
} from "../../types/draw";
import { clientApi } from "../../_clientApi";

export const updateDraw = createAsyncThunk(
  "draw/updateDraw",
  async (value: IDraw, { rejectWithValue }) => {
    try {
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createDrawByEmployee = createAsyncThunk(
  "draw/createDrawByEmployee",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/create-draw-by-employee", {
        draw,
        event_id,
      });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDrawByEmployee = createAsyncThunk(
  "draw/getDrawByEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-draw-by-employee", {
        event_id,
      });

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDrawByAdmin = createAsyncThunk(
  "draw/getDrawByAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-draw-by-admin", {
        event_id,
      });

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getCorrectDraw = createAsyncThunk(
  "draw/getCorrectDraw",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-correct-draw", {
        event_id,
      });

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundOne = createAsyncThunk(
  "draw/createDrawByAdminRoundOne",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/create-draw-by-admin-round-one", {
        draw,
        event_id,
      });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundTwo = createAsyncThunk(
  "draw/createDrawByAdminRoundTwo",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/create-draw-by-admin-round-two", {
        draw,
        event_id,
      });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundThree = createAsyncThunk(
  "draw/createDrawByAdminRoundThree",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-three",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundFour = createAsyncThunk(
  "draw/createDrawByAdminRoundFour",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-four",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundFive = createAsyncThunk(
  "draw/createDrawByAdminRoundFive",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-five",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getTotalDrawScoreEmployee = createAsyncThunk(
  "pronosticsSlice/getTotalDrawScoreEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-total-draw-score-employee-by-event",
        {
          event_id,
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getTotalDrawScoreEmployeeByAdmin = createAsyncThunk(
  "pronosticsSlice/getTotalDrawScoreEmployeeByAdmin",
  async (
    { partner_id, event_id }: { partner_id: string; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-total-draw-score-employee-by-event-by-admin",
        { partner_id, event_id }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const createDrawByEmployee16Teams = createAsyncThunk(
  "draw/createDrawByEmployee16Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-employee-16teams",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundOne16Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundOne16Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-one-16-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundTwo16Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundTwo16Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-two-16-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundThree16Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundThree16Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-three-16-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundFour16Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundFour16Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-four-16-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByEmployee8Teams = createAsyncThunk(
  "draw/createDrawByEmployee8Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/create-draw-by-employee-8teams", {
        draw,
        event_id,
      });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundOne8Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundOne8Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-one-8-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundTwo8Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundTwo8Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-two-8-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawByAdminRoundThree8Teams = createAsyncThunk(
  "draw/createDrawByAdminRoundThree8Teams",
  async (
    { draw, event_id }: { draw: IDraw; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/create-draw-by-admin-round-three-8-team",
        {
          draw,
          event_id,
        }
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw8TeamsSettingByAdmin = createAsyncThunk(
  "draw/getDraw8TeamsSettingByAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-8-teams-by-admin",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw32TeamsSettingByAdmin = createAsyncThunk(
  "draw/getDraw32TeamsSettingByAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-32-teams-by-admin",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw16TeamsSettingByAdmin = createAsyncThunk(
  "draw/getDraw16TeamsSettingByAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-16-teams-by-admin",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw8TeamsSettingByEmployee = createAsyncThunk(
  "draw/getDraw8TeamsSettingByEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-8-teams-by-employee",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw32TeamsSettingByEmployee = createAsyncThunk(
  "draw/getDraw32TeamsSettingByEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-32-teams-by-employee",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const getDraw16TeamsSettingByEmployee = createAsyncThunk(
  "draw/getDraw16TeamsSettingByEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-setting-draw-16-teams-by-employee",
        {
          event_id,
        }
      );

      return response.data;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const updateDrawSetting8Teams = createAsyncThunk(
  "draw/updateDrawSetting8Teams",
  async (value: IDrawSetting, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-setting-draw-8-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const updateDrawSetting32Teams = createAsyncThunk(
  "draw/updateDrawSetting32Teams",
  async (value: IDrawSetting32Teams, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-setting-draw-32-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const updateDrawSetting16Teams = createAsyncThunk(
  "draw/updateDrawSetting16Teams",
  async (value: IDrawSetting16Teams, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-setting-draw-16-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawSetting8Teams = createAsyncThunk(
  "draw/createDrawSetting8Teams",
  async (value: IDrawSetting, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-setting-draw-8-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawSetting16Teams = createAsyncThunk(
  "draw/createDrawSetting16Teams",
  async (value: IDrawSetting16Teams, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-setting-draw-16-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const createDrawSetting32Teams = createAsyncThunk(
  "draw/createDrawSetting32Teams",
  async (value: IDrawSetting32Teams, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-setting-draw-32-teams-by-admin",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
