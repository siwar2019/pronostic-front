import { createSlice } from "@reduxjs/toolkit";
import { ICurrentUser } from "../../types/auth";
import { logout, onAppBoot, userDemoLogin, userLogin } from "../actions/auth";
export interface authState {
  currentUser?: ICurrentUser;
  // userConnected: IUserConnected;
  // partnerRegister: IRegisterResponse;
}

const initialState: authState = {
  // currentUser: {
  //   email: "",
  //   role: "visiteur",
  // },
  // userConnected: {
  //   token: "",
  //   message: "",
  //   success: 0,
  //   data: {
  //     socialReason: "",
  //     role: "anonymous",
  //   },
  // },
  // partnerRegister: {
  //   message: "",
  //   success: 0,
  // },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setSuccess: (state, action) => {
    //   state.userConnected.success = action.payload;
    // },
    // setPartnerRegisterSuccess: (state, action) => {
    //   state.partnerRegister.success = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(onAppBoot.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });

    builder.addCase(userDemoLogin.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.currentUser = {
        email: "",
        role: "visiteur",
        id: null,
      };
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;
export default authSlice.reducer;
