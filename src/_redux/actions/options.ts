import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { IPronosticWithJoker, IUnusedDoubleJoker } from "../../types/options";
import { clientApi } from "../../_clientApi";

/**** Get Employee Options ****/

export const getEmployeeOptions = createAsyncThunk(
  "options/getEmployeeOptions",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-employee-options", {
        event_id,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Create new pronostic with super pronostic ****/

export const createPronosticWithSuperPronostic = createAsyncThunk(
  "options/createOptionsWithSuperPronostic",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-pronostic-with-super",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Create new pronostic with Forgot ****/

export const createPronosticWithForgotSave = createAsyncThunk(
  "options/createOptionsWithForgotSave",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-pronostic-forgot-save",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Create new pronostic with double score ****/

export const createPronosticWithDoubleScore = createAsyncThunk(
  "options/createPronosticWithDoubleScore",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-pronostic-with-double-score",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Update new pronostic with super pronostic ****/

export const updatePronosticWithSuperPronostic = createAsyncThunk(
  "options/updateOptionsWithSuperPronostic",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-pronostic-with-super",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Update Unused Double Joker ****/

export const updateUnusedDoubleScoreJoker = createAsyncThunk(
  "options/updateUnusedDoubleScoreJoker",
  async (value: IUnusedDoubleJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-unused-double-score-joker",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Update new pronostic with super pronostic ****/

export const updatePronosticWithDoubleScore = createAsyncThunk(
  "options/updatePronosticWithDoubleScore",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-pronostic-with-double-score",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Create new pronostic with double score & forgot ****/

export const createPronosticWithDoubleScoreAndForgot = createAsyncThunk(
  "options/createPronosticWithDoubleScoreAndForgot",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-pronostic-with-double-forgot",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Create new pronostic with double score & super ****/

export const createPronosticWithDoubleScoreAndSuper = createAsyncThunk(
  "options/createPronosticWithDoubleScoreAndSuper",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-pronostic-with-double-super",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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

/**** Update pronostic with super pronostic & Double ****/

export const updatePronosticWithDoubleAndSuper = createAsyncThunk(
  "options/updatePronosticWithDoubleAndSuper",
  async (value: IPronosticWithJoker, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-pronostic-with-double-and-pronostic",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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
