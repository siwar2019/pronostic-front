import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IGroupesMatchs,
  INewGroupeEquipe,
  INewMatch,
} from "../../types/groupes";
import { clientApi } from "../../_clientApi";
import Swal from "sweetalert2";

/**** Get All Groupes****/

export const getAllGroupes = createAsyncThunk(
  "groupes/getAllGroupes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-all-groupes");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/**** get groupe by events ****/
export const getgroupeByEvents = createAsyncThunk(
  "groupes/getgroupeByEvents",
  async ({ event_id }: { event_id: string }, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("/get-groupe-by-id-Event", { event_id });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// /**** Get Groupes by id (by equipe) ****/

// export const getAllEventsByCategory = createAsyncThunk(
//   "categories/getAllEventsByCategory",
//   async (value: string, { rejectWithValue }) => {
//     try {
//       const response = await clientApi.get<IGroupes>(
//         "/get-event-by-categorie",

//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

/**** create  Matchs by event****/
export const getMatchsByEvent = createAsyncThunk(
  "matchs/getMatchsByEvent",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await clientApi.post<IGroupesMatchs[]>("get-match-by-event", {
        event_id: id,
      });
      let result = res.data;
      result.map((el) => {
        el.matchs.map((match) => {
          match.equipes.sort(
            (a, b) =>
              Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
          );
          return match;
        });
        return el;
      });
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMatchsByEventForAdmin = createAsyncThunk(
  "matchs/getMatchsByEventForAdmin",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("get-match-by-event-for-admin", {
        event_id: id,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** clean match by  events****/
export const cleanMatchByEventsForAdmin = createAsyncThunk(
  "matchs/cleanMatchByEventsForAdmin",
  async (_, { rejectWithValue }) => {
    try {
      return undefined;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/**** Get All groupe-equipe for admin****/

export const getAllGroupeEquipeForAdmin = createAsyncThunk(
  "categories/getAllEquipeByGroupeForAdmin",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-groupe-equipe-for-admin", {
        event_id: id,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////// create groupe - match - by admin  manuelement //////
export const createGroupeEquipeForAdmin = createAsyncThunk(
  "groupes/createGroupeEquipeForAdmin",
  async (value: INewGroupeEquipe, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("create-groupes-admin", value);

      return res.data;
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

////// create  match - by admin  manuelement //////
export const addMatchForAdmin = createAsyncThunk(
  "groupes/addMatchForAdmin",
  async (value: INewMatch, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("create-match-groupes-admin", value);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteGroupeMatch = createAsyncThunk(
  "groupes/deleteGroupeMatch",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/delete-groupe", { id: value });
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
