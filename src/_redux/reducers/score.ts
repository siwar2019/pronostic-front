import { createSlice } from "@reduxjs/toolkit";
import { IScore } from "../../types/score";
export interface scoreState {
  score: IScore[];
  scoreAdded: number;
}

const initialState: scoreState = {
  score: [],
  scoreAdded: 0,
};

export const scoreSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    setScoreAdd: (state, action) => {
      state.scoreAdded = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScoreAdd } = scoreSlice.actions;
export default scoreSlice.reducer;
