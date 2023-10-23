import { createSlice } from "@reduxjs/toolkit";
import { IGroupes, IGroupesEquipestab, IGroupesMatchs, IMatchs, INewGroupeEquipe, INewMatch } from "../../types/groupes";
import { addMatchForAdmin, cleanMatchByEventsForAdmin, createGroupeEquipeForAdmin, getAllGroupeEquipeForAdmin, getAllGroupes, getgroupeByEvents, getMatchsByEvent, getMatchsByEventForAdmin } from "../actions/groupes";
export interface usersState {
  groupes: Array<IGroupes>;
  groupesMatch: IGroupesMatchs[];
  MatchsGroupe : IMatchs[]; 
  groupesEquipes: IGroupesEquipestab[];
  NewGroupeEquipe:Array<INewGroupeEquipe>
  NewMatch: Array <INewMatch>
}

const initialState: usersState = {
  groupes: [],
  groupesMatch: [],
  MatchsGroupe: [],
  groupesEquipes: [],
  NewGroupeEquipe:[],
  NewMatch:[],

};

export const groupesSlice = createSlice({
  name: "groupesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroupes.fulfilled, (state, { payload }: any) => {
      state.groupes = payload;
    });
    builder.addCase(getMatchsByEvent.fulfilled, (state, { payload }: any) => {
      state.groupesMatch = payload;
    });
   
    builder.addCase(getMatchsByEventForAdmin.fulfilled, (state, { payload }: any) => {
      state.groupesMatch = payload;
    });
   
    
    builder.addCase(getAllGroupes.rejected, (state, { payload }: any) => {});


    builder.addCase(getAllGroupeEquipeForAdmin.fulfilled, (state, { payload }: any) => {
      state.groupesEquipes = payload;
    });

    builder.addCase(
      cleanMatchByEventsForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.groupesMatch = [];
      }
    );
    builder.addCase(createGroupeEquipeForAdmin.fulfilled, (state, { payload }: any) => {
      state.NewGroupeEquipe = payload;
    });
    builder.addCase(addMatchForAdmin.fulfilled, (state, { payload }: any) => {
      state.NewGroupeEquipe = payload;
    });

    builder.addCase(getgroupeByEvents.fulfilled, (state, { payload }: any) => {
      state.groupes = payload;
    });
  },

  
});

// Action creators are generated for each case reducer function
// export const {} = groupesSlice.actions;
export default groupesSlice.reducer;
