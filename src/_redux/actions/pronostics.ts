import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  IDailyPointsDiffernce,
  IDailyRang,
  IPointsDetails,
  IPronostic,
  ITotalPronosticsAdmin,
} from "../../types/pronostic";
import { clientApi } from "../../_clientApi";

export const pronosticsEmployee = createAsyncThunk(
  "pronosticsSlice/pronosticsEmployee",
  async (value: IPronostic, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-pronostic", value);
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

export const updatePronosticEmployee = createAsyncThunk(
  "pronosticsSlice/updatePronosticEmployee",
  async (value: IPronostic, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-pronostic", value);
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

export const getPronosticsEmployee = createAsyncThunk(
  "pronosticsSlice/getPronosticsEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-pronostics-employee", {
        event_id,
      });
      let result = response.data;

      result.map((el) => {
        el.matchs.equipes.sort(
          (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
        );

        return el;
      });
      return result;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPronosticEmployee = createAsyncThunk(
  "pronosticsSlice/getPronosticEmployee",
  async (match_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<ITotalPronosticsAdmin>(
        "/get-pronostic-employee",
        {
          match_id,
        }
      );
      let result = response.data;
      result.matchs.equipes.sort(
        (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
      );
      return result;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPronosticsEmployeeForPartner = createAsyncThunk(
  "pronosticsSlice/getPronosticsEmployeeForPartner",
  async (
    { event_id, id }: { event_id: string; id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-pronostics-employee-for-partner",
        {
          event_id,
          id,
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPronosticsEmployeesForPartner = createAsyncThunk(
  "pronosticsSlice/getPronosticsEmployeesForPartner",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-pronostics-employees-for-partner",
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

export const getTotalPronosticsEmployee = createAsyncThunk(
  "pronosticsSlice/getTotalPronosticsEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-total-pronostics-employee-by-event",
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

export const getTotalPronosticsAdmin = createAsyncThunk(
  "pronosticsSlice/getTotalPronosticsAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-total-pronostics-admin-by-partner-by-event",
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
export const getTotalPronosticsEmployeeByAdmin = createAsyncThunk(
  "pronosticsSlice/getTotalPronosticsEmployeeByAdmin",
  async (
    { partner_id, event_id }: { partner_id: string; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-total-pronostics-employee-by-event-for-partner-by-admin",
        { partner_id, event_id }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPronosticsEmployeesForPartnerByAdmin = createAsyncThunk(
  "pronosticsSlice/getPronosticsEmployeesForPartnerByAdmin",
  async (
    { partner_id, event_id }: { partner_id: string; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-pronostics-employees-for-partner-for-partner-by-admin",
        { partner_id, event_id }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPronosticsEmployeeForPartnerByAdmin = createAsyncThunk(
  "pronosticsSlice/getPronosticsEmployeeForPartnerByAdmin",
  async (
    { event_id, employee_id }: { event_id: string; employee_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-pronostics-employee-for-partner-by-admin",
        { event_id, employee_id }
      );
      let result = response.data;

      result.map((el) => {
        el.matchs.equipes.sort(
          (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
        );

        return el;
      });
      return result;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getPointsPronosticsEmployeeByEvent = createAsyncThunk(
  "pronosticsSlice/getPointsPronosticsEmployeeByEvent",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-points-pronostics-employee-by-event",
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

export const getPointsPronosticsEmployeeByEventByAdmin = createAsyncThunk(
  "pronosticsSlice/getPointsPronosticsEmployeeByEventByAdmin",
  async (
    { partner_id, event_id }: { partner_id: string; event_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-points-pronostics-employee-by-event-admin",
        { partner_id, event_id }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// export const getTotalPronosticsEmployeeByAdmin = createAsyncThunk(
//   "pronosticsSlice/getTotalPronosticsEmployeeByAdmin",
//   async ({ partner_id, event_id }: { partner_id: string, event_id: string }, { rejectWithValue }) => {
//     try {
//       const response = await clientApi.post(
//         "/get-total-pronostics-employee-by-event-for-partner-by-admin",
//         { partner_id, event_id });

//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error);
//     }
//   }
// );

///// get totale pronostics by match for admin /////

export const getTotalPronosticsByMatchForAdmin = createAsyncThunk(
  "pronosticsSlice/getTotalPronosticsByMatchForAdmin",
  async (
    {
      event_id,
      match_id,
      company_id,
    }: { event_id: string; match_id: string; company_id?: string },
    { rejectWithValue }
  ) => {
    try {
      console.log(company_id);
      const response = await clientApi.post(
        "/get-totale-pronostics-by-match-for-admin",
        {
          event_id,
          match_id,
          company_id,
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

/**** Daily rangs for partner statics ****/

export const getEmployeeDailyRang = createAsyncThunk(
  "categories/getEmployeeDailyRang",
  async (
    { event_id, employee_id }: { event_id: string; employee_id: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IDailyRang>(
        "/get-daily-rang-employee",
        { event_id, employee_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Daily points_difference for partner statics ****/

export const getEmployeeDailyPointsDifference = createAsyncThunk(
  "categories/getEmployeeDailyPointsDifference",
  async (
    { event_id, employee_id }: { event_id: string; employee_id: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IDailyPointsDiffernce>(
        "/get-daily-points-difference",
        { event_id, employee_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** get employee points details for partner statics ****/

export const getEmployeePointsDetails = createAsyncThunk(
  "categories/getEmployeePointsDetails",
  async (
    { event_id, employee_id }: { event_id: string; employee_id: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IPointsDetails>(
        "/get-employee-points-details",
        { event_id, employee_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** get totale points pronostics all events for employee ****/

export const getTotalPointsPronosticsAllEventsForEmployee = createAsyncThunk(
  "matchs/getTotalPointsPronosticsAllEventsForEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-total-pronostics-employee",
        {}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** get totale points pronostics all events employee for partner****/

export const getEachEventPronosticsForEmployee = createAsyncThunk(
  "matchs/getEachEventPronosticsForEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-each-event-pronostics-employee",
        {}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** get totale points pronostics all events employee for employee ****/

export const getEachEventPronosticsEmployeeForEmployee = createAsyncThunk(
  "matchs/getEachEventPronosticsEmployeeForEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-each-event-pronostics-employee-for-employee",
        {}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllPronosticsEmployeeForPartner = createAsyncThunk(
  "pronosticsSlice/getAllPronosticsEmployeeForPartner",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-all-pronostics-employee-for-partner",
        {
          id,
        }
      );
      let result = response.data;

      result.map((el) => {
        el.matchs.equipes.sort(
          (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
        );

        return el;
      });
      return result;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getAllPronosticsHistoryEmployeesForPartner = createAsyncThunk(
  "pronosticsSlice/getAllPronosticsHistoryEmployeesForPartner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-all-pronostics-history-employees-for-partner",
        {}
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const resetAllEmployeesPoints = createAsyncThunk(
  "categories/resetAllEmployeesPoints",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/initialization-pronostic");
      Swal.fire({
        icon: "success",
        title: "Updated",
        showConfirmButton: false,
        timer: 500,
      });
      return response.data;
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

export const addInitialValueToEmployee = createAsyncThunk(
  "pronosticsSlice/addInitialValueToEmployee",
  async (value: any[], { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/add-initial-value-to-employee", {
        points: value,
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
