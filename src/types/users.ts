import Commercial from "../app/Components/admin/Gestion commercial/addCommercial";
import { IEvents } from "./events";

export interface IPartners {
  id: number;
  email: string;
  is_active: boolean;
  company_id: number;
  company: company;
}

export interface ICurrentPartner {
  company: Icompany;
}

export interface Icompany {
  social_reason: string;
  employee_number: number;
  phone: string;
}

export interface company {
  social_reason: string;
  employee_number: number;
  phone: string;
  id: string;
}

export interface IPartnerSwitchStatus {
  id: any;
  is_active: boolean;
}
export interface IEmployeeSwitch {
  id: number;
  is_active: boolean;
}

export interface IPartnerSwitchStatusResponse {
  id: number;
  is_active: boolean;
  // message: string;
}

export interface IPartnerActions {
  openActionPopup: boolean;
  setOpenActionPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IEmployee {
  id: number;
  email: string;
  employeeNumber: string;
  // socialReason: string;
  role: string;
  is_active: boolean;
  // phone: string;
  company_id: number;
}

export interface ICompanie {
  id: number;
  social_reason: string;
  employee_number: string;
  phone: string;
}

export interface IPartnerEvents {
  eventIds: string[];
  partnerId: string;
}

export interface Icommercial {
  id?: number;
  email: string;
  is_active?: boolean;
  commercial?: commercial;
}

export interface commercial {
  phone: string;
  commissionRate: string;
  firstName: string;
  cashOut: string;
}

export interface ICommercialSwitch {
  id: number;
  is_active: boolean;
}
export interface ICommercialSwitchPartner {
  id: number;
  is_active: boolean;
}

export interface IEmployee {
  id: number;
  email: string;
  employeeNumber: string;
  // socialReason: string;
  role: string;
  is_active: boolean;
  // phone: string;
  company_id: number;
}

export interface IPartnersCommercial {
  id?: number;
  email: string;
  company_id?: number;
  company?: company;
  is_active?: boolean;
  prixUsers?: number;
}
export interface IPriceUsers {
  id?: number;
  prixUsers: string;
}

export interface IHistorique {
  id: number;
  priceUser: string;
  employee_number: string;
  commissionRate: string;
  company: company;
  solde: string;
}

export interface ICommercialSolde {
  cashOut: string;
  commissionRate: string;
  createdAt: string;
  firstName: string;
  id: string;
  phone: string;
  solde: string;
  updatedAt: string;
}

export interface IHistorySolde {
  historiqueSoldeData: IHistorique[];
  commercialSolde: ICommercialSolde;
}
export interface IRequestCachout {
  id?: number;
  MtCashout: string;
}

export interface IRequestCachoutAdmin {
  id: number;
  MtCashout: string;
  User: {
    id: number;
    email: string;
    commercial: {
      cashOut: string;
      commissionRate: string;
      firstName: string;
      phone: string;
    };
  };
}

export interface IPaymentCommercial {
  id?: number;
  name: string;
  dateEchance: string;
  numDeCheque: string;
  typeDePayments: string;
  cachout: string | undefined;
  commercial_id?: number;
}
