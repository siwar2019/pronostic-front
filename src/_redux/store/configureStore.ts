import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../reducers/auth";
import usersSlice from "../reducers/users";
import categoriesSlice from "../reducers/categories";
import eventsSlice from "../reducers/events";
import teamsSlice from "../reducers/teams";
import groupesSlice from "../reducers/groupes";
import matchsSlice from "../reducers/matchs";
import equipesSlice from "../reducers/equipes";
import scoreSlice from "../reducers/score";
import pronosticsSlice from "../reducers/pronostics";
import languageSlice from "../reducers/language";
import drawSlice from "../reducers/draw";
import optionsSlice from "../reducers/options";
import soldeSlice from "../reducers/solde";
import quizSlice  from "../reducers/quiz";
import listChoice from "../reducers/listChoice";
import postsReducer from '../reducers/listChoice'

const combinedReducer = combineReducers({
  auth,
  usersSlice,
  categoriesSlice,
  eventsSlice,
  quizSlice,
  teamsSlice,
  groupesSlice,
  matchsSlice,
  equipesSlice,
  scoreSlice,
  pronosticsSlice,
  languageSlice,
  drawSlice,
  optionsSlice,
  soldeSlice,
  listChoice,
  postsReducer
  
});

const store = configureStore({
  reducer: combinedReducer,
  
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
