import { createAsyncThunk } from "@reduxjs/toolkit";

import { clientApi } from "../../_clientApi";

/**** Get All Teams****/

export const getAllTeams = createAsyncThunk(
  "categories/getAllEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("get-all-teams");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
