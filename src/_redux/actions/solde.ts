import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { ICreateSoldPartner } from "../../types/solde";
import { clientApi } from "../../_clientApi";

/**** ****/

export const assignmentSoldeToEmployee = createAsyncThunk(
  "pronosticsSlice/assignmentSoldeToEmployee",
  async (value: any[], { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/assignment-solde-to-employee", {
        soldes: value,
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

/**** Get Partner solde ****/

export const GetPartnerSolde = createAsyncThunk(
  "score/GetPartnerSolde",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-partner-solde");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** create Partner solde ****/

export const CreateNewSoldePartner = createAsyncThunk(
  "score/CreateNewSoldePartner",
  async (values: ICreateSoldPartner, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-solde-partner", {
        action: values.action,
        solde: values.solde,
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

/**** Get employee solde ****/

export const GetEmployeeSolde = createAsyncThunk(
  "score/GetEmployeeSolde",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-employee-solde");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
