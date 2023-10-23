import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { IScore } from "../../types/score";
import { clientApi } from "../../_clientApi";

/**** Create score by match ****/
export const scoreMatch = createAsyncThunk(
  "scoreSlice/scoreMatch",
  async (value: IScore, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-score", value);
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

/**** Get All Scores****/

export const GETSCORE = createAsyncThunk(
  "score/GETSCORE",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/Score");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/*** Update Score ***/

export const updateScoreMatch = createAsyncThunk(
  "scoreSlice/updateScoreMatch",
  async (value: IScore, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-score", value);
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      return rejectWithValue(error);
    }
  }
);
