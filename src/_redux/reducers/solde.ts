import { createSlice } from "@reduxjs/toolkit";
import { GetEmployeeSolde, GetPartnerSolde } from "../actions/solde";
export interface usersState {
  partnerSolde: { totalSolde: number };
  employeeSolde: { totalSolde: number };
}

const initialState: usersState = {
  partnerSolde: { totalSolde: NaN },
  employeeSolde: { totalSolde: NaN },
};

export const soldeSlice = createSlice({
  name: "soldeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPartnerSolde.fulfilled, (state, { payload }: any) => {
      state.partnerSolde = payload;
    });
    builder.addCase(GetEmployeeSolde.fulfilled, (state, { payload }: any) => {
      state.employeeSolde = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export default soldeSlice.reducer;
