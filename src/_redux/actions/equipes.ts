import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { clientApi } from "../../_clientApi";
import Swal from "sweetalert2";

//////upload fichier equipes/////
export const uploadEquipes = createAsyncThunk(
  "auth/uploadEquipes",
  async (
    { value, id }: { value: FormData; id: string },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_HOST}/upload`,
        value,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        await clientApi.post("create-equipes", { event_id: id });
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/**** Get All Equipes ****/
export const getAllEquipes = createAsyncThunk(
  "equipes/getAllEquipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-equipes");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Create new equipes ****/

export const createNewEquipe = createAsyncThunk(
  "equipe/createNewEquipe",
  async (value: any, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-equipes-admin", value);
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: true,
        timer: 1500,
      });
      return response.data.data
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
