/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import {
  IActiveEvent,
  IEmployeeDailyPoints,
  IEvents,
  IParnterEvents,
  IEventsTabWinner,
  IEventsSelected,
  IEventById,
  IPartnersEvents,
  IEventSwitch,
} from "../../types/events";
import {
  createEvent,
  getAllEvents,
  getAllEventsByCategory,
  getAllEventsByCategoryForAdmin,
  getAllEventsByCategoryForPartnerByAdmin,
  getAllEventsForAdminByCatégorie,
  getAllPartnerEvents,
  getEmployeeDailyPoints,
  // getAllEventsByCatégorieTableWinner,
  // getAllPartnerByEventsForAdmin,
  getAllEventsByCatégorieTableWinner,
  getAllEventsByCategoryByAdmin,
  // getAllPartnerByEventsForAdmin,
  switchActiveEvent,
  getActiveEventsForPartner,
  activeEventsForPartner,
  desactiveEventsForPartner,
  getEventById,
  displayQualificationForPartner,
  archivedEventByAdmin,
  getActiveEventsByCategoryForEmployee,
  getCalculatedEventsForPartner,
  getPartnersEvents,
  getEventsQualificationForAdminByCatégorie,
} from "../actions/events";
export interface usersState {
  eventsById: Array<IEvents>;
  displayEvents: number;
  selectedEvents: Array<string>;
  selectedEvent: any;
  finalList: Array<IEvents>;
  events: Array<IEvents>;
  eventCounter: number;
  finalListIds: Array<string>;
  eventAdded: number;
  message: string;
  employeeDailyPoints: Array<IEmployeeDailyPoints>;
  disableContenuButton: boolean;
  activeEvents?: Array<IActiveEvent>;
  switchEvents?: Array<IEventSwitch>;
  partnerEvents: Array<IParnterEvents>;
  eventsTabWinner: Array<IEventsTabWinner>;
  eventsBuyed: Array<IEvents>;
  selectedEventModal: any;
  eventsSelected?: Array<IEventsSelected>;
  successArchived: number;
  successActived: number;
  eventById?: IEventById;
  successUpdateQualification: number;
  setSelectedCountry: any;
  archivedEventMessage: any;
  eventsCalculatedDisplay?: Array<IEventsSelected>;
  partnersEvents: Array<IPartnersEvents>;
}

const initialState: usersState = {
  eventsById: [],
  selectedEvents: [],
  displayEvents: 0,
  selectedEvent: "",
  finalList: [],
  events: [],
  eventCounter: 0,
  finalListIds: [],
  eventAdded: 0,
  message: "",
  employeeDailyPoints: [],
  disableContenuButton: true,
  partnerEvents: [],
  eventsTabWinner: [],
  eventsBuyed: [],
  selectedEventModal: "",
  eventsSelected: [],
  successArchived: 0,
  successActived: 0,
  successUpdateQualification: 0,
  setSelectedCountry: "",
  archivedEventMessage: "",
  partnersEvents: [],
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setSuccessArchived: (state, action) => {
      state.successArchived = action.payload;
    },
    setSuccessActived: (state, action) => {
      state.successActived = action.payload;
    },

    setSuccessDisplayQualification: (state, action) => {
      state.successUpdateQualification = action.payload;
    },

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

    setEventsFinalList: (state) => {
      let chosenEvent: any[] = [];
      if (state.displayEvents === 2) {
        state.selectedEvents.map((selectedEvent) => {
          chosenEvent = state.events.filter(
            (event) => event.id === selectedEvent
          );
          state.finalList.push(chosenEvent[0]);
        });
      } else if (state.displayEvents === 1 || state.displayEvents === 2) {
        state.finalList = [];
      }
      state.finalListIds = state.finalList.map(({ id }) => id);
    },

    setEventAdded: (state, action) => {
      state.eventAdded = action.payload;
    },

    setDisable: (state, action) => {
      state.disableContenuButton = action.payload;
    },

    setSelectedEventsModal: (state, action) => {
      state.selectedEventModal = action.payload;
    },

    setSelectedCountry: (state, action) => {
      state.setSelectedCountry = action.payload;
    },

    setNewListEventsCalculatedDisplay: (state, action) => {
      state.eventsCalculatedDisplay = action.payload;
    },

    updateCalclutedList: (state, action) => {
      state.eventsSelected = state.eventsSelected.map((event) => {
        if (event.id === action.payload) {
          event.user[0].UserEvents.is_calculated =
            !event.user[0].UserEvents.is_calculated;
        }
        return event;
      });
    },
    updateHiddenList: (state, action) => {
      state.eventsCalculatedDisplay = state.eventsCalculatedDisplay.map(
        (event) => {
          if (event.id === action.payload) {
            event.user[0].UserEvents.is_hidden =
              !event.user[0].UserEvents.is_hidden;
          }
          return event;
        }
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getAllEventsByCategory.fulfilled,
      (state, { payload }: any) => {
        state.events = payload;
      }
    );

    builder.addCase(
      getAllEventsByCategoryForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.events = payload;
      }
    );

    builder.addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.events = payload.filter((event: any) => event.id !== 0);
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

    builder.addCase(
      getAllEventsForAdminByCatégorie.fulfilled,
      (state, { payload }: any) => {
        state.events = payload.filter((event: any) => event.id !== 0);
      }
    );

    builder.addCase(
      getAllEventsByCatégorieTableWinner.fulfilled,
      (state, { payload }: any) => {
        state.eventsTabWinner = payload;
      }
    );

    builder.addCase(
      getAllEventsByCategoryForPartnerByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.events = payload;
      }
    );

    builder.addCase(
      getAllPartnerEvents.fulfilled,
      (state, { payload }: any) => {
        state.partnerEvents = payload;
      }
    );

    builder.addCase(
      getEmployeeDailyPoints.fulfilled,
      (state, { payload }: any) => {
        state.employeeDailyPoints = payload;
      }
    );

    builder.addCase(switchActiveEvent.fulfilled, (state, { payload }) => {
      state.activeEvents?.forEach((el) => {
        if (el.event_id === payload.event_id) {
          el.is_calculated = payload.is_calculated;
        }
      });
    });

    builder.addCase(switchActiveEvent.rejected, (state, { payload }: any) => {
      state.eventsSelected = payload.filter((event: any) => event.id !== 0);
    });

    builder.addCase(
      getAllEventsByCategoryByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.eventsBuyed = payload;
      }
    );

    builder.addCase(
      getActiveEventsForPartner.fulfilled,
      (state, { payload }: any) => {
        state.eventsSelected = payload.filter((event: any) => event.id !== 0);
      }
    );

    builder.addCase(activeEventsForPartner.fulfilled, (state, { payload }) => {
      state.successActived = 1;
    });

    builder.addCase(activeEventsForPartner.rejected, (state, { payload }) => {
      state.successActived = -1;
    });

    builder.addCase(
      desactiveEventsForPartner.fulfilled,
      (state, { payload }) => {
        state.successArchived = 1;
      }
    );

    builder.addCase(
      desactiveEventsForPartner.rejected,
      (state, { payload }) => {
        state.successArchived = -1;
      }
    );

    builder.addCase(getEventById.fulfilled, (state, { payload }: any) => {
      state.eventById = payload;
    });

    builder.addCase(
      displayQualificationForPartner.fulfilled,
      (state, { payload }) => {
        state.successUpdateQualification = 1;
      }
    );

    builder.addCase(
      displayQualificationForPartner.rejected,
      (state, { payload }) => {
        state.successUpdateQualification = -1;
      }
    );

    builder.addCase(archivedEventByAdmin.fulfilled, (state, { payload }) => {
      state.events.forEach((el) => {
        if (el.id===payload.event_id) {
          el.is_deleted = payload.is_deleted;
        }
      });
    });

    builder.addCase(
      getActiveEventsByCategoryForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.events = payload.filter((event: any) => event.id !== 0);
      }
    );
    builder.addCase(
      getCalculatedEventsForPartner.fulfilled,
      (state, { payload }: any) => {
        state.eventsCalculatedDisplay = payload.filter(
          (event: any) => event.id !== 0
        );
      }
    );
    builder.addCase(getPartnersEvents.fulfilled, (state, { payload }: any) => {
      state.partnersEvents = payload;
    });
    builder.addCase(
      getEventsQualificationForAdminByCatégorie.fulfilled,
      (state, { payload }: any) => {
        state.events = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {
  setDisplayStep,
  setSelectedEvents,
  setEventsFinalList,
  setEventAdded,
  setDisable,
  setSelectedEventsModal,
  setSuccessArchived,
  setSuccessActived,
  setSuccessDisplayQualification,
  setSelectedCountry,
  setNewListEventsCalculatedDisplay,
  updateCalclutedList,
  updateHiddenList,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
