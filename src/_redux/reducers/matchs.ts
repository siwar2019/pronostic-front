import { IEquipe } from "./../../types/groupes";
import { createSlice } from "@reduxjs/toolkit";
import { IGroupesEquipe, IGroupesMatchs } from "../../types/groupes";
import { IMatch, IMatchs, IUpdateMatch, Match, MatchUpdate } from "../../types/matchs";
import {
  addDateToMatch,
  cleanMatchByIdForEmployee,
  getAllMatchs,
  getAllMatchsForEmployee,
  getAllMatchsForPartner,
  getMatchByIdForEmployee,
  getMatchByIdForAdmin,
  getGroupeEquipe,
  UpdateDateToMatch,
  getMatchById,
  getAllMatchsForAdmin,
  getGroupeEquipeForAdmin,
  getAllMatchsForAdminStatistiques,
  getMatchByIds,
  EditMatchEquipe,
  getMatchNotificationForEmployee,
  
} from "../actions/matchs";
export interface usersState {
  matchs: Array<IMatchs>;
  match?: IMatch;
  groupesMatchs: IGroupesMatchs[];
  matchDate: Match[];
  groupeEquipe: IGroupesEquipe[];
  equipes?: IEquipe[];
  matchUpdate?: MatchUpdate;
  optionsMatchs: any[];
  matchUpdateEquipe? : IUpdateMatch; 
  notificationMatchs?: IGroupesMatchs[];
}

const initialState: usersState = {
  matchs: [],
  groupesMatchs: [],
  matchDate: [],
  groupeEquipe: [],
  optionsMatchs: [],
};

export const matchsSlice = createSlice({
  name: "matchsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMatchs.fulfilled, (state, { payload }: any) => {
      state.matchs = payload;
    });

    builder.addCase(getAllMatchs.rejected, (state, { payload }: any) => {});

    builder.addCase(
      getAllMatchsForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.groupesMatchs = payload;
      }
    );
    builder.addCase(
      getAllMatchsForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.groupesMatchs = payload;
      }
    );
    builder.addCase(
      getAllMatchsForPartner.fulfilled,
      (state, { payload }: any) => {
        state.groupesMatchs = payload;
      }
    );
    builder.addCase(
      getMatchByIdForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.match = payload;
      }
    );
    builder.addCase(
      getMatchByIdForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.match = payload;
      }
    );
    builder.addCase(
      cleanMatchByIdForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.match = payload;
      }
    );
    builder.addCase(getMatchById.fulfilled, (state, { payload }: any) => {
      state.match = payload;
    });

    builder.addCase(addDateToMatch.fulfilled, (state, { payload }: any) => {
      state.matchDate = payload;
    });

    builder.addCase(getGroupeEquipe.fulfilled, (state, { payload }: any) => {
      state.groupeEquipe = payload;
    });

    builder.addCase(
      getGroupeEquipeForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.groupeEquipe = payload;
      }
    );
    builder.addCase(UpdateDateToMatch.fulfilled, (state, { payload }: any) => {
      state.matchUpdate = payload;
    });

    builder.addCase(
      getAllMatchsForAdminStatistiques.fulfilled,
      (state, { payload }: any) => {
        state.matchs = payload;
      }
    );

    builder.addCase(getMatchByIds.fulfilled, (state, { payload }: any) => {
      state.optionsMatchs = payload;
    });

    builder.addCase(EditMatchEquipe.fulfilled, (state, { payload }: any) => {
      state.matchUpdateEquipe = payload;
    });

    builder.addCase(
      getMatchNotificationForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.notificationMatchs = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = matchsSlice.actions;
export default matchsSlice.reducer;
