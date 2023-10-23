import { IUser } from "./pronostic";

export interface IPartnersEvents {
  user_id: number;
  event_id: number;
}
export interface IEvents {
  id: string;
  name: string;
  categoryId: string;
  qualificationType: string;
  displayQualification: boolean;
  description: string;
  image: File;
  categories: any;
  user: IUser;
  is_deleted: boolean;
  displayOrder: boolean;
}
export interface IActiveEvent {
  event_id: number;
  is_calculated?: boolean;
}
export interface IEventSwitch {
  event_id: string;
  is_deleted: boolean;
}

export interface IUserEvent {
  is_calculated: boolean;
  event_id: string;
}
export interface IEachEvents {
  id: string;
  name?: string;
  categoryId: string;
}
export interface INewEvent {
  name: string;
  categoryId: string;
  qualificationType: string;
  displayQualification: boolean;
  description: string;
  image: File;
}
export interface IEventsTabWinner {
  id: string;
  name: string;
  categoryId: string;
}
export interface IEmployeeDailyPoints {
  date: string;
  points: number;
}
export interface IParnterEvents {
  displayQualification: boolean;
  eventId: number;
  partnerId: number;
  isActive: boolean;
}

export interface IEventsSelected {
  id: string;
  name: string;
  categoryId: string;
  user: IUser;
}

export interface IActivedEventFromPartner {
  archivedEventsIds: string[];
  partnerId: string;
}

export interface IDesactivedEventFromPartner {
  activedEventIds: string[];
  partnerId: string;
}

export interface IDisplayQualification {
  partnerId: string;
  eventId: string;
  displayQualification: boolean;
}

export interface IEventById {
  id: string;
  name: string;
  categoryId: string;
  qualificationType: string;
  displayQualification: boolean;
  description: string;
  image: File;
}

export interface ICalculatedEvent {
  event_id: number;
  is_hidden?: boolean;
}
