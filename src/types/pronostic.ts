import { IEachEvents, IUserEvent } from "./events";
import { company } from "./auth";

export interface IPronostic {
  equipe1: string;
  equipe2: string;
  match_id: string;
}

export interface IPronostics {
  length: number;
  id: string;
  equipe1: string;
  equipe2: string;
  match_id: string;
  employee_id: string;
  createdAt: string;
  updatedAt: string;
  matchs: IMatch;
}

export interface IMatch {
  id: string;
  date: string;
  groupe_id: string;
  createdAt: string;
  updatedAt: string;
  equipes: IEquipe[];
  groupes: IGroupes;
  score: IScore;
  pronosticsMatchs: IpronosticsMatchs;
  coeff: string;
  score_duplicate: any;
}

export interface IScore {
  id: string;
  equipe1: string;
  equipe2: string;
  match_id: string;
}

export interface IEquipe {
  images: File;
  id: string;
  name: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  MatchEquipes: IMatchEquipes;
  groupes: IGroupes[];
}

export interface IMatchEquipes {
  match_id: string;
  equipe_id: string;
  createdAt: string;
  updatedAt: string;
  order: boolean;
}

export interface IGroupes {
  id: string;
  name: string;
  event_id: string;
  createdAt: string;
  updatedAt: string;
  GroupeEquipes: IGroupeEquipes;
}

export interface IGroupeEquipes {
  groupe_id: string;
  equipe_id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITotalPronosticsEmployee {
  diff: string;
  employee_id: number;
  event_id: number;
  id: number;
  point: string;
  createdAt: string;
  updatedAt: string;
  users: IUser;
  pronosticMatchs: ITotalPronosticsEmployeePartner[];
}

export interface IUser {
  company_id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  is_active: string;
  // password: string;
  role: string;
  company: company;
  UserEvents: IUserEvent;
}

export interface ITotalPronosticsEmployeePartner {
  employee_id: number;
  event_id: string;
  equipe1: string;
  equipe2: string;
  id: string;
  updatedAt: string;
  createdAt: string;
  match_id: string;
  matchs: IMatch;
  pronosticsMatchs: IpronosticsMatchs;
}

export interface IpronosticsMatchs {
  createdAt: string;
  diff: string;
  employee_id: number;
  id: string;
  match_id: string;
  point: string;
  updatedAt: string;
}

// export interface ITotalPronosticsAdmin {
//   diff: string;
//   employee_id: number;
//   event_id: number;
//   id: number;
//   point: string;
//   createdAt: string;
//   updatedAt: string;
//   users: IUser;
//   pronosticMatchs: ITotalPronosticsEmployeePartner[];

// }

export interface IPointsPronosticsEmployee {
  emp: IUser;
  pointsPronostics?: number;
}

export interface ITotalPronosticsAdmin {
  employee_id: number;
  event_id: string;
  equipe1: string;
  equipe2: string;
  match_id: string;
  matchs: IMatch;
  users: [];
  pronosticsMatchs: IpronosticsMatchs;
}

export interface IDailyRang {
  date: string;
  rang: number;
}

export interface IDailyRang {
  date: string;
  rang: number;
}

export interface IDailyPointsDiffernce {
  date: string;
  difference: number;
}

export interface IPointsDetails {
  correct: number;
  incorrect: number;
  correctDiffernceAndWinner: number;
  correctWinner: number;
}

export interface ITotalPronosticsByPartner {
  difference: number;
  emp: IUser;
  pointsPronostics?: number;
  map?: any;
  eventsData: IEventsData;
}

export interface IEachPronosticsEvent {
  emp: IUser;
  eventsData: IEventsData;
  map?: any;
  pointsPronostics?: number;
  difference: number;
}

export interface IEventsData {
  map?: any;
  event: IEachEvents;
  totalpornosticsEmp?: ITotalPronosticsEmployee;
}

export interface IInialPoints {
  employee: number;
  initialPoints: string;
}
