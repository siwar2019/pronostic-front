import { company } from "./../../types/auth";
import { createSlice } from "@reduxjs/toolkit";
import {
  IPartners,
  IEmployee,
  ICurrentPartner,
  Icompany,
  Icommercial,
  IPartnersCommercial,
  IPriceUsers,
  IHistorySolde,
  IRequestCachout,
  IRequestCachoutAdmin,
  IPaymentCommercial,
} from "../../types/users";
import {
  getAllPartners,
  switchPartnerStatus,
  getAllEmployee,
  desactivateEmployee,
  getCurrentUser,
  addEventsToPartners,
  getCompany,
  SendEmployee,
  createCommercial,
  getAllCommercial,
  getPartnerCommercial,
  createUsersPrice,
  getPriceUsersForAdmin,
  UpdatePriceUsersForAdmin,
  getHistoriqueCommercial,
  requestCashout,
  getRequestCommercial,
  paymentCommercial,
} from "../actions/users";
import { getAllPartnerByEventsForAdmin } from "../actions/events";
export interface usersState {
  partners: Array<IPartners>;
  // partnerStatus: IPartnerSwitchStatusResponse;
  employees: IEmployee[];
  employeeNumber: string;
  employeesExist: IEmployee[];
  partnerId: string;
  success: number;
  currentPartner: ICurrentPartner[];
  company?: Icompany;
  companyEvents?: Icompany[];
  commercial: Icommercial[];
  partnerCommercial: IPartnersCommercial[];
  settings?: IPriceUsers;
  historique?: IHistorySolde;
  requestcashout?: IRequestCachout[];
  requestcashoutAdmin?: IRequestCachoutAdmin[];
  paymentCommercial? :IPaymentCommercial;
}

const initialState: usersState = {
  partners: [],
  currentPartner: [],
  employees: [],
  employeeNumber: "",
  employeesExist: [],
  partnerId: "",
  success: 0,
  commercial: [],
  partnerCommercial: [],
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setPartnerId: (state, action) => {
      state.partnerId = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPartners.fulfilled, (state, { payload }: any) => {
      state.partners = payload;
    });

    builder.addCase(switchPartnerStatus.fulfilled, (state, { payload }) => {
      state.partners.forEach((el) => {
        if (payload && el.id === payload?.id) {
          el.is_active = payload.is_active;
        }
      });
    });

    builder.addCase(getAllEmployee.fulfilled, (state, { payload }) => {
      state.employees = payload;
    });
    builder.addCase(desactivateEmployee.fulfilled, (state, { payload }) => {
      state.employees.forEach((el) => {
        if (el.id === payload.id) {
          el.is_active = payload.is_active;
        }
      });
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.employeeNumber = payload.employeeNumber;
    });

    builder.addCase(addEventsToPartners.fulfilled, (state, { payload }) => {
      state.success = 1;
    });

    builder.addCase(addEventsToPartners.rejected, (state, { payload }) => {
      state.success = -1;
    });

    builder.addCase(getCompany.fulfilled, (state, { payload }: any) => {
      state.company = payload;
    });
    builder.addCase(SendEmployee.rejected, (state, { payload }: any) => {
      state.employeesExist = payload;
    });
    builder.addCase(
      getAllPartnerByEventsForAdmin.fulfilled,
      (state, { payload }: any) => {
        state.companyEvents = payload;
      }
    );

    builder.addCase(createCommercial.fulfilled, (state, { payload }: any) => {
      state.commercial = payload;
    });

    builder.addCase(getAllCommercial.fulfilled, (state, { payload }) => {
      state.commercial = payload;
    });

    builder.addCase(getPartnerCommercial.fulfilled, (state, { payload }) => {
      state.partnerCommercial = payload;
    });

    builder.addCase(createUsersPrice.fulfilled, (state, { payload }) => {
      state.settings = payload;
    });
    builder.addCase(getPriceUsersForAdmin.fulfilled, (state, { payload }) => {
      state.settings = payload;
      
    });
    builder.addCase(UpdatePriceUsersForAdmin.fulfilled, (state, { payload }) => {
      state.settings = payload;
      
    });

    builder.addCase(getHistoriqueCommercial.fulfilled, (state, { payload }) => {
      state.historique = payload;
      
    });

    builder.addCase(requestCashout.fulfilled, (state, { payload }) => {
      state.historique = payload;
      
    });
    builder.addCase(getRequestCommercial.fulfilled, (state, { payload }) => {
      state.requestcashoutAdmin = payload;
      
    });

    builder.addCase(paymentCommercial.fulfilled, (state, { payload }) => {
      state.paymentCommercial = payload;
      
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPartnerId, setSuccess } = usersSlice.actions;
export default usersSlice.reducer;
