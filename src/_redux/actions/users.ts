import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { IRegisterEmployee } from "../../types/addEmployee";
import {
  IEmployeeSwitch,
  IPartnerSwitchStatusResponse,
  IPartnerEvents,
  Icommercial,
  ICommercialSwitch,
  IPartnersCommercial,
  ICommercialSwitchPartner,
  IPriceUsers,
  IRequestCachout,
  IPaymentCommercial,
} from "../../types/users";
import { clientApi } from "../../_clientApi";

export const addEmployee = createAsyncThunk(
  "users/addEmployee",
  async (value: IRegisterEmployee, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await clientApi.post("/AddEmployee", value);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get All Partners ****/

export const getAllPartners = createAsyncThunk(
  "users/getAllPartners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-partners");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const switchPartnerStatus = createAsyncThunk(
  "users/switchPartnerStatus",
  async (value: IPartnerSwitchStatusResponse, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/activate-account-partner", value);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return value;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
////// Send Emlpoyee/////

export const SendEmployee = createAsyncThunk(
  "users/SendEmployee",
  async (value: string[], { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-employee", {
        emails: value,
      });

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.employees);
    }
  }
);

/////// Get all employee ///////
export const getAllEmployee = createAsyncThunk(
  "users/getAllEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-employee-partner");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////////  update employee by partner ////////
export const desactivateEmployee = createAsyncThunk(
  "users/desactivateEmployee",
  async (value: IEmployeeSwitch, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/activate-account-employee",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////////  currentUser ////////
export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get<{ employeeNumber: string }>(
        "/get-current-user"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addEventsToPartners = createAsyncThunk(
  "users/addEventsToPartners",
  async (value: IPartnerEvents, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/add-event-to-partner", value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentPartner = createAsyncThunk(
  "users/get-current-partner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-current-partner");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCompany = createAsyncThunk(
  "users/getCompany",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-company");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//////  create commercial/////

export const createCommercial = createAsyncThunk(
  "users/CreateCommercial",
  async (value: Icommercial, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-commercial", value);

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.commercial);
    }
  }
);

/////// Get all commercial ///////
export const getAllCommercial = createAsyncThunk(
  "users/getAllCommercial",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-commercial");
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////////  update commercial by Admin ////////
export const desactivateCommercial = createAsyncThunk(
  "users/desactivateCommercial",
  async (value: ICommercialSwitch, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-account-commercial",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//////  create partner by commercial /////

export const createPartnerByCommecial = createAsyncThunk(
  "users/createPartnerByCommecial",
  async (value: IPartnersCommercial, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/create-partner-by-commercial",
        value
      );

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.company);
    }
  }
);
////// get all company by commercial /////

export const getPartnerCommercial = createAsyncThunk(
  "users/getPartnerCommercial",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-partner-by-commercial");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////////  update partenr by commercial ////////
export const desactivatePartnerByCommercial = createAsyncThunk(
  "users/desactivatePartnerByCommercial",
  async (value: ICommercialSwitchPartner, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/update-account-partner-by-commercial",
        value
      );
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/////// Get all employee for commercial  ///////

export const getAllEmployeeForCommercial = createAsyncThunk(
  "users/getAllEmployeeForCommercial",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-employee-commercial");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//////  create commercial/////

export const createUsersPrice = createAsyncThunk(
  "users/createUsersPrice",
  async (value: IPriceUsers, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/Add-settings-users", value);

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.commercial);
    }
  }
);

/////// Get price user for admin  ///////

export const getPriceUsersForAdmin = createAsyncThunk(
  "users/getPriceUsersForAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-price-users");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/////// Update price user for admin  ///////

export const UpdatePriceUsersForAdmin = createAsyncThunk(
  "users/UpdatePriceUsersForAdmin",
  async (value: IPriceUsers, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-price-users", value);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get historiqu commercial  ****/

export const getHistoriqueCommercial = createAsyncThunk(
  "users/getHistoriqueCommercial",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-historique-users");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//////  demande cashout commercial/////

export const requestCashout = createAsyncThunk(
  "users/requestCashout",
  async (value: IRequestCachout, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/request-chasout", value);

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.commercial);
    }
  }
);

/**** Get historiqu commercial  ****/

export const getRequestCommercial = createAsyncThunk(
  "users/getRequestCommercial",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-resquest-cashout");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//////  payment commercial by admin /////

export const paymentCommercial = createAsyncThunk(
  "users/paymentCommercial",
  async (value: IPaymentCommercial, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/payment-commercial", value);

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
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

export const deleteEmployee = createAsyncThunk(
  "users/deleteEmployee",
  async (value: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/delete-employee", { id: value });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
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

export const deletePartner = createAsyncThunk(
  "users/deletePartner",
  async (value: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/delete-partner", { id: value });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data.data;
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
