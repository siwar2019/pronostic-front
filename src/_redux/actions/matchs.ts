import { createAsyncThunk } from "@reduxjs/toolkit";
import {  IGroupesMatchs, IMatchs } from "../../types/groupes";
import {
  

  IUpdateMatch,
  IUpdateMatchCoff,
  Match,
  MatchUpdate,
  MatchUpdateCoeff,
} from "../../types/matchs";
import { clientApi } from "../../_clientApi";
import Swal from "sweetalert2";
import { Dayjs } from "dayjs";
/**** Get All Matchs****/

export const getAllMatchs = createAsyncThunk(
  "matchs/getAllmatchs",
  async (value: string, { rejectWithValue }) => {
    try {
      const res = await clientApi.get("/get-match-by-groupe", {
        params: {
          id: value,
        },
      });
      let result = res.data;
      result.map((el: { equipes: any[] }) => {
        el.equipes.sort(
          (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
        );
        return el;
      });
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**** create  Matchs****/
export const createMatches = createAsyncThunk(
  "matchs/createMatches",
  async (id: string, { rejectWithValue }) => {
    try {
      await clientApi.post("create-matches-groupes", { event_id: id });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMatchById = createAsyncThunk(
  "matchs/getMatchById",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.get<IMatchs>("/get-match-by-id", {
        params: {
          id: value,
        },
      });
      let result = response.data;
      result.equipes.sort(
        (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
      );
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/***ici */
export const getAllMatchsForEmployee = createAsyncThunk(
  "matchs/getAllMatchsForEmployee",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IGroupesMatchs[]>(
        "/get-match-by-event-for-employee",
        { event_id }
      );
      let result = response.data;
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

export const getAllMatchsForAdmin = createAsyncThunk(
  "matchs/getAllMatchsForAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IGroupesMatchs[]>(
        "/get-coeff-match-by-event-for-admin",
        { event_id }
      );
      let result = response.data;
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

export const getAllMatchsForPartner = createAsyncThunk(
  "matchs/getAllMatchsForPartner",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-match-by-event-for-partner", {
        event_id,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGroupeEquipe = createAsyncThunk(
  "matchs/getGroupeEquipe",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-groupe-equipe", { event_id });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGroupeEquipeForAdmin = createAsyncThunk(
  "matchs/getGroupeEquipeForAdmin",
  async (event_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-groupe-equipe-for-admin", {
        event_id,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getMatchByIdForEmployee = createAsyncThunk(
//   "matchs/getMatchByIdForEmployee",
//   async (match_id: string, { rejectWithValue }) => {
//     try {
//       const response = await clientApi.post("/get-match-by-id-for-employee", {
//         match_id,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const getMatchByIdForEmployee = createAsyncThunk(
  "matchs/getMatchByIdForEmployee",
  async (match_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post<IMatchs>(
        "/get-match-by-id-for-employee",
        {
          match_id,
        }
      );
      let result = response.data;
      result.equipes.sort(
        (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
      );
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cleanMatchByIdForEmployee = createAsyncThunk(
  "matchs/cleanMatchByIdForEmployee",
  async (_, { rejectWithValue }) => {
    try {
      return undefined;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addDateToMatch = createAsyncThunk(
  "matchs/addDateToMatch",
  async (matchsDates: Match[], { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/add-date-to-matchs", {
        matchsDates,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMatchByIdForAdmin = createAsyncThunk(
  "matchs/getMatchByIdForAdmin",
  async (match_id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-match-by-id-for-admin", {
        match_id,
      });
      let result = response.data;
      result.equipes.sort(
        (a, b) => Number(b.MatchEquipes.order) - Number(a.MatchEquipes.order)
      );
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UpdateDateToMatch = createAsyncThunk(
  "matchs/UpdateDateToMatch",
  async (value: MatchUpdate, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-date-match", { ...value });
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

export const UpdateCoeffToMatch = createAsyncThunk(
  "matchs/UpdateCoeffToMatch",
  async (value: MatchUpdateCoeff, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-coeff-match", {
        ...value,
      });
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      // return response.data;
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

export const getAllMatchsForAdminStatistiques = createAsyncThunk(
  "matchs/getAllMatchsForAdminStatistiques",
  async (
    {
      event_id,
      dateStart,
      dateEnd,
    }: { event_id: string; dateStart: Dayjs | null; dateEnd: Dayjs | null },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post(
        "/get-all-match-by-event-for-admin",
        { event_id, dateStart, dateEnd }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/***************** get matchs by ids **********/
export const getMatchByIds = createAsyncThunk(
  "matchs/getMatchByIds",
  async (ids: Number[], { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/get-matchs-by-ids", {
        ids,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


////// delete match ///// 

export const deleteMatchById = createAsyncThunk(
  "matchs/deleteMatchById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/delete-match", {id});
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////// update  match equipe  ///// 

export const EditMatchEquipe = createAsyncThunk(
  "matchs/EditMatchEquipe",
  async (value: IUpdateMatchCoff, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-match-equipe", value);
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

export const getMatchNotificationForEmployee = createAsyncThunk(
  "categories/getMatchNotificationForEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        "/get-match-notification-by-events-for-employee"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


