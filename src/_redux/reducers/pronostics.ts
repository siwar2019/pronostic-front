import {
  ITotalPronosticsByPartner,
} from "./../../types/pronostic";
// import { IpronosticsMatchs, ITotalPronosticsAdmin, ITotalPronosticsEmployeePartner } from "./../../types/pronostic";
import {
  getEmployeeDailyPointsDifference,
  getEmployeeDailyRang,
  getEmployeePointsDetails,
  getPointsPronosticsEmployeeByEvent,
} from "./../actions/pronostics";
// import {
//   IPointsPronosticsEmployee,
//   IpronosticsMatchs,
//   ITotalPronosticsEmployeePartner,
// } from "./../../types/pronostic";
import { createSlice } from "@reduxjs/toolkit";
import {
  IDailyRang,
  IPointsPronosticsEmployee,
  IPronostics,
  ITotalPronosticsAdmin,
  ITotalPronosticsEmployee,
  ITotalPronosticsEmployeePartner,
  IDailyPointsDiffernce,
  IPointsDetails,
  IEachPronosticsEvent,
} from "../../types/pronostic";
import {
  getPronosticsEmployee,
  getTotalPronosticsEmployee,
  getPronosticsEmployeeForPartner,
  getPronosticEmployee,
  getPronosticsEmployeesForPartner,
  getTotalPronosticsAdmin,
  getTotalPronosticsEmployeeByAdmin,
  getPronosticsEmployeesForPartnerByAdmin,
  getTotalPronosticsByMatchForAdmin,
  getPronosticsEmployeeForPartnerByAdmin,
  getPointsPronosticsEmployeeByEventByAdmin,
  getTotalPointsPronosticsAllEventsForEmployee,
  getEachEventPronosticsForEmployee,
  getEachEventPronosticsEmployeeForEmployee,
  getAllPronosticsEmployeeForPartner,
  getAllPronosticsHistoryEmployeesForPartner,
} from "../actions/pronostics";
export interface pronosticsState {
  pronostics: IPronostics[];
  pronostic?: IPronostics;
  pronosticsMatchs?: ITotalPronosticsEmployeePartner[];
  pronosticsPartner: ITotalPronosticsEmployeePartner[];
  totalPronosticsEmployee: ITotalPronosticsEmployee[];
  totalPronosticsAdmin: ITotalPronosticsEmployee[];
  pointsPronosticsEmployee?: IPointsPronosticsEmployee[];
  pronosticsMatchsAdmin: ITotalPronosticsAdmin[];
  employeeDailyRang: IDailyRang[];
  employeeDailyPointsDifference: IDailyPointsDiffernce[];
  employeePointsDetails: IPointsDetails[];
  pointsPronosticsEmployeeAdmin?: IPointsPronosticsEmployee[];
  getTotalPronosticsEmployeeByPartnerAllEvents?: ITotalPronosticsByPartner[];
  eachPronosticsEventEmployee?: IEachPronosticsEvent[];
  eachPronosticsEventEmployeeForEmployee?: IEachPronosticsEvent[];
  allPronosticsPartner?: ITotalPronosticsEmployeePartner[];
}

const initialState: pronosticsState = {
  pronostics: [],
  pronosticsPartner: [],
  totalPronosticsEmployee: [],
  totalPronosticsAdmin: [],
  pronosticsMatchsAdmin: [],
  employeeDailyRang: [],
  employeeDailyPointsDifference: [],
  employeePointsDetails: [],
  eachPronosticsEventEmployee: [],
  allPronosticsPartner: [],
};

export const pronosticsSlice = createSlice({
  name: "pronosticsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPronosticsEmployee.fulfilled,
      (state, { payload }: any) => {
        state.pronostics = payload;
      }
    );
    builder.addCase(
      getTotalPronosticsEmployee.fulfilled,
      (state, { payload }: any) => {
        state.totalPronosticsEmployee = payload;
      }
    );
    builder.addCase(
      getPronosticsEmployeeForPartner.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsPartner = payload;
      }
    );
    builder.addCase(
      getPronosticEmployee.fulfilled,
      (state, { payload }: any) => {
        state.pronostic = payload;
      }
    );
    builder.addCase(
      getPronosticsEmployeesForPartner.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsMatchs = payload;
      }
    );

    builder.addCase(
      getTotalPronosticsAdmin.fulfilled,
      (state, { payload }: any) => {
        state.totalPronosticsAdmin = payload;
      }
    );

    // builder.addCase(
    //   getTotalPronosticsEmployeeByAdmin.fulfilled,
    //   (state, { payload }: any) => {
    //     state.totalPronosticsEmployee = payload;
    //   }
    // );

    //   builder.addCase(getPronosticsEmployeesForPartnerByAdmin.fulfilled,(state, { payload }: any) => {
    //     state.pronosticsMatchs = payload;
    //   }
    // );

    // builder.addCase(
    //   getPronosticsEmployeesForPartner.fulfilled,
    //   (state, { payload }: any) => {
    //     state.pronosticsMatchs = payload;
    //   }
    // );

    builder.addCase(
      getTotalPronosticsEmployeeByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.totalPronosticsEmployee = payload;
      }
    );

    builder.addCase(
      getPronosticsEmployeesForPartnerByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsMatchs = payload;
      }
    );

    builder.addCase(
      getPronosticsEmployeeForPartnerByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsPartner = payload;
      }
    );
    builder.addCase(
      getPointsPronosticsEmployeeByEvent.fulfilled,
      (state, { payload }: any) => {
        state.pointsPronosticsEmployee = payload;
      }
    );
    builder.addCase(
      getPointsPronosticsEmployeeByEventByAdmin.fulfilled,
      (state, { payload }: any) => {
        state.pointsPronosticsEmployeeAdmin = payload;
      }
    );
    builder.addCase(
      getTotalPronosticsByMatchForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsMatchsAdmin = payload;
      }
    );
    builder.addCase(
      getEmployeeDailyRang.fulfilled,
      (state, { payload }: any) => {
        state.employeeDailyRang = payload;
      }
    );
    builder.addCase(
      getEmployeeDailyPointsDifference.fulfilled,
      (state, { payload }: any) => {
        state.employeeDailyPointsDifference = payload;
      }
    );

    builder.addCase(
      getEmployeePointsDetails.fulfilled,
      (state, { payload }: any) => {
        state.employeePointsDetails = payload;
      }
    );
    builder.addCase(
      getTotalPointsPronosticsAllEventsForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.getTotalPronosticsEmployeeByPartnerAllEvents = payload;
      }
    );
    builder.addCase(
      getEachEventPronosticsForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.eachPronosticsEventEmployee = payload;
      }
    );
    builder.addCase(
      getEachEventPronosticsEmployeeForEmployee.fulfilled,
      (state, { payload }: any) => {
        state.eachPronosticsEventEmployeeForEmployee = payload;
      }
    );
    builder.addCase(
      getAllPronosticsEmployeeForPartner.fulfilled,
      (state, { payload }: any) => {
        state.allPronosticsPartner = payload;
      }
    );
    builder.addCase(
      getAllPronosticsHistoryEmployeesForPartner.fulfilled,
      (state, { payload }: any) => {
        state.pronosticsMatchs = payload;
      }
    );
  },
});
// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = pronosticsSlice.actions;
export default pronosticsSlice.reducer;
