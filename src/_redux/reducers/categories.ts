import { IEvents } from "./../../types/events";
/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { ICategories, INewCategories } from "../../types/categories";
import { getAllCategories } from "../actions/categories";
import {
  createEvent,
  getAllEventsByCategoryForAdmin,
  getEventsbyPartner,
} from "../actions/events";
export interface usersState {
  categories: Array<ICategories>;
  Newcategories: Array<INewCategories>;

  displayEvents: number;
  selectedEvents: Array<string>;
  selectedEvent: any;
  events: IEvents[];
  eventCounter: number;
  finalListIds: Array<string>;
  eventAdded: number;
  message: string;

  disableContenuButton: boolean;
}

const initialState: usersState = {
  Newcategories: [],
  categories: [],
  selectedEvents: [],
  displayEvents: 0,
  selectedEvent: "",
  eventCounter: 0,
  events: [],
  finalListIds: [],
  eventAdded: 0,
  message: "",
  disableContenuButton: true,
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setDisplayStep: (state, action) => {
      state.displayEvents = action.payload;
    },

    setSelectedEvents: (state, action) => {
      state.selectedEvent = action.payload;
      const index = state.selectedEvents.indexOf(state.selectedEvent);
      if (index === -1) {
        state.selectedEvents = state.selectedEvents.concat(state.selectedEvent);
        state.eventCounter = state.eventCounter + 1;
      } else {
        state.selectedEvents = state.selectedEvents.filter(
          (event) => event !== state.selectedEvent
        );
        state.eventCounter = state.eventCounter - 1;
      }
    },

    setEventAdded: (state, action) => {
      state.eventAdded = action.payload;
    },

    setDisable: (state, action) => {
      state.disableContenuButton = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, { payload }: any) => {
      state.categories = payload;
    });

    builder.addCase(
      getAllEventsByCategoryForAdmin.fulfilled,
      (state, { payload }) => {}
    );

    builder.addCase(getEventsbyPartner.fulfilled, (state, { payload }) => {
      state.events = payload;
    });

    builder.addCase(createEvent.fulfilled, (state, { payload }) => {
      state.eventAdded = 1;
      state.message = payload.message;
      state.disableContenuButton = false;
    });

    builder.addCase(createEvent.rejected, (state) => {
      state.eventAdded = -1;
      state.message = "Cet évènement existe déjà";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setDisplayStep, setSelectedEvents, setEventAdded, setDisable } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
