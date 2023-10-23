import { Comparer } from "@reduxjs/toolkit";

export interface IRegisterProps {
  socialReason: string;
  email: string;
  phone: string;
  employeeNumber: string;
  password: string;
}

export interface IRegisterResponse {
  message: string;
  success: number;
}

export interface IUserConnected {
  token: string;
  message: string;
  success: number;
  data: dataType;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  message: string;
  success: number;
  data: dataType;
  firstName: string;
}

export interface ILogoutProps {
  email: string;
  password: string;
}

export interface ILogoutResponse {
  token: string;
  message: string;
  success: number;
  data: dataType;
  FirstName: string;
}

export interface dataType {
  socialReason: string;
  role: string;
}

export interface ICurrentUser {
  email: string;
  role: string;
  id: number;
}

export interface company {
  social_reason: string;
  employee_number: number;
  phone: string;
}

export interface IUpdatePwd {
  oldPassword: string;
  newPassword: string;
}

export interface IForgotPwd {
  email: string;
}

export interface IChangePwd {
  code: string;
  newPassword: string;
}
