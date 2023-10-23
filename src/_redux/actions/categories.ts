import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { INewCategories } from "../../types/categories";
import { clientApi } from "../../_clientApi";

/**** Create new Catégories****/

export const createCategorie = createAsyncThunk(
  "categories/createCategorie",
  async (value: INewCategories, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-category", value);
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

/**** Get All categorie ****/

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-categories");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
