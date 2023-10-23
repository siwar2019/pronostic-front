import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IEmployeeDailyPoints,
  IEvents,
  IEventsTabWinner,
  IActiveEvent,
  IParnterEvents,
  IActivedEventFromPartner,
  IDesactivedEventFromPartner,
  IDisplayQualification,
  ICalculatedEvent,
  IEventSwitch,
} from "../../types/events";
import { clientApi } from "../../_clientApi";
import Swal from "sweetalert2";

/**** Create new Event****/

export const createEvent = createAsyncThunk(
  "categories/createEvent",
  async (value: any, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/create-event", value);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get All Event****/
export const getAllEvents = createAsyncThunk(
  "categories/getAllEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-events");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getEventsbyPartnerId = createAsyncThunk(
  "categories/getEventsbyPartneId",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-event-by-id");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getEventsbyPartner = createAsyncThunk(
  "categories/getEventsbyPartner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-events-by-partner");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get All Event By Category for partner ****/

export const getAllEventsByCategory = createAsyncThunk(
  "categories/getAllEventsByCategory",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-by-categorie",
        { id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get All Event By Category  for admin****/

export const getAllEventsByCategoryForAdmin = createAsyncThunk(
  "categories/getAllEventsByCategoryForAdmin",
  async (
    { id, partnerId }: { id: string; partnerId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-by-categorie-for-admin",
        { id, partnerId }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/////// Get events by partner ///////
// export const getEventsbyPartner = createAsyncThunk(
//   "users/getEventsbyPartner",
//   async (value:string[], { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         "http://localhost:5000/get-partner-events-by-Id",
//       {Id: },
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

/**** Get All Event for admin by categories ****/

export const getAllEventsForAdminByCatégorie = createAsyncThunk(
  "categories/getAllEventsForAdminByCatégorie",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-for-admin-by-categorie",
        { id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllEventsByCatégorieTableWinner = createAsyncThunk(
  "categories/getAllEventsByCatégorieTableWinner",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IEventsTabWinner>(
        "/get-event-for-admin-by-categorie",
        { id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllPartnerByEventsForAdmin = createAsyncThunk(
  "categories/getAllPartnerByEventsForAdmin",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-partner-by-events-for-admin",

        { event_id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllEventsByCategoryForPartnerByAdmin = createAsyncThunk(
  "categories/getAllEventsByCategoryForPartnerByAdmin",
  async (
    { partner_id, categorie_id }: { partner_id: string; categorie_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-by-categorie-for-partner-by-admin",
        { partner_id, categorie_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Daily points for partner statics ****/

export const getEmployeeDailyPoints = createAsyncThunk(
  "categories/getEmployeeDailyPoints",
  async (
    { event_id, employee_id }: { event_id: string; employee_id: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IEmployeeDailyPoints>(
        "/get-daily-points-employee",
        { event_id, employee_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const switchActiveEvent = createAsyncThunk(
  "categories/switchActiveEvent",
  async (value: IActiveEvent, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await clientApi.post(
        "/switch-active-event-for-partner",
        value
      );
      Swal.fire({
        icon: "success",
        title: "Updated",
        showConfirmButton: false,
        timer: 500,
      });
      return value;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.eventsSelected);
    }
  }
);

/**** Get All Parnter Events ****/

export const getAllPartnerEvents = createAsyncThunk(
  "categories/getAllPartnerEvents",
  async (value: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IParnterEvents>(
        "/get-partner-event",
        {
          id: value,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/////// get event buyed for categorie by admin /////
export const getAllEventsBuyedForAdmin = createAsyncThunk(
  "categories/getAllEventsBuyedForAdmin",
  async (
    { id, company_id }: { id: string; company_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-buy-for-admin-by-categorie",
        { id, company_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllEventsByCategoryByAdmin = createAsyncThunk(
  "categories/getAllEventsByCategoryByAdmin",
  async (
    { partner_id, categorie_id }: { partner_id: string; categorie_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-by-categorie-for-partner-by-admin",
        { partner_id, categorie_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Get All Active Event****/
export const getActiveEventsForPartner = createAsyncThunk(
  "categories/getActiveEventsForPartner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-active-events-for-partner");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Active Event ****/
export const activeEventsForPartner = createAsyncThunk(
  "categories/activeEventsForPartner",
  async (value: IActivedEventFromPartner, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/actived-partner-event", value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** desactive Event ****/
export const desactiveEventsForPartner = createAsyncThunk(
  "categories/desactiveEventsForPartner",
  async (value: IDesactivedEventFromPartner, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/desactived-partner-event", value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** get event by id ****/

export const getEventById = createAsyncThunk(
  "draw/getEventById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-event-by-id-for-employee", {
        id,
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

/**** display Event qualification ****/
export const displayQualificationForPartner = createAsyncThunk(
  "categories/displayQualificationForPartner",
  async (value: IDisplayQualification, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/active-desactive-qualification-partner",
        value
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** Archived Event By Admin ****/
export const archivedEventByAdmin = createAsyncThunk(
  "categories/archivedEventByAdmin",
  async (value: IEventSwitch, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/archived-events-by-admin", 
        value,
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

export const getActiveEventsByCategoryForEmployee = createAsyncThunk(
  "categories/getActiveEventsByCategoryForEmployee",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        "/get-active-event-by-categorie-for-employee",
        { id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCalculatedEventsForPartner = createAsyncThunk(
  "categories/getCalculatedEventsForPartner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-calculated-events-for-partner"
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const switchHiddenEvent = createAsyncThunk(
  "categories/switchHiddenEvent",
  async (value: ICalculatedEvent, { rejectWithValue }) => {
    try {
      Swal.fire({
        icon: "success",
        title: "Updated",
        showConfirmButton: false,
        timer: 500,
      });
      return value;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error.response.data.eventsCalculatedDisplay);
    }
  }
);

export const getPartnersEvents = createAsyncThunk(
  "categories/getPartnersEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get<IParnterEvents[]>(
        "/get-all-partners-events"
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
export const getEventsQualificationForAdminByCatégorie = createAsyncThunk(
  "categories/getEventsQualificationForAdminByCatégorie",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IEvents>(
        "/get-event-qualification-for-admin-by-categorie",
        { id: value }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
