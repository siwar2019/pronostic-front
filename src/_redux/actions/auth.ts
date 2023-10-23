import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IChangePwd,
  IForgotPwd,
  ILoginProps,
  IRegisterProps,
  IUpdatePwd,
} from "../../types/auth";
import { NavigateFunction} from "react-router-dom";
import { clientApi } from "../../_clientApi";
import Swal from "sweetalert2";

///// Register Partner ///////
export const partnerSingnUp = createAsyncThunk(
  "auth/partnerSingnUp",
  async (
    { value, navigate }: { value: IRegisterProps; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/Register", value);
      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
/////// login partner //////
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (
    { value, navigate }: { value: ILoginProps; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const resData = await clientApi.post("/login", value);

      localStorage.setItem("token", resData.data.token);
      clientApi.defaults.headers.common[
        "Authorization"
      ] = `bearer ${resData.data.token}`;
      const response = await clientApi.get("/get-current-user");
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: resData.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        return response.data;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const userDemoLogin = createAsyncThunk(
  "auth/userDemoLogin",
  async (navigate: NavigateFunction, { rejectWithValue }) => {
    try {
      const resData = await clientApi.post("/login-demo");

      localStorage.setItem("token", resData.data.token);
      clientApi.defaults.headers.common[
        "Authorization"
      ] = `bearer ${resData.data.token}`;
      const response = await clientApi.get("/get-current-user");
      if (response.status === 200) {
        navigate("/");
        return response.data;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const onAppBoot = createAsyncThunk(
  "auth/onAppBoot",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        clientApi.defaults.headers.common["Authorization"] = `bearer ${token}`;
        const response = await clientApi.get("/get-current-user");
        if (response.status === 200) {
          return response.data;
        }
      } else {
        return { email: "", role: "visiteur" };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.clear();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

///// Update Password ///////
export const updatePwd = createAsyncThunk(
  "auth/updatePwd",
  async (
    { value, navigate }: { value: IUpdatePwd; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/update-password", value);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/"), 2000);
        return response.data;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

///// Send Email change password ///////
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (
    { value, navigate }: { value: IForgotPwd; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/forgot-password", value);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/changePassword"), 2000);
        return response.data;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

///// Change password ///////
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    { value, navigate }: { value: IChangePwd; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post("/change-password", value);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/login"), 2000);
        return response.data;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => navigate("/forgotPassword"), 2000);
      return rejectWithValue(error);
    }
  }
);
