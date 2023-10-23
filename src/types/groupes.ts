import { IEvents } from "./events";
export interface IGroupes {
  id: string;
  name: string;
  event_id: string;
}

export interface IdGroupe {
  id: string;
}

export interface IGroupesMatchs {
  groupe: IGroupe;
  matchs: IMatchs[];
}

export interface IGroupesEquipe {
  id: string;
  order: IOrder[];
  name: string;
  events: IEvents;
}

export interface IGroupe {
  id: string;
  name: string;
  event_id: string;
  createdAt: string;
  updatedAt: string;
  GroupeEquipes: IGroupeEquipes;
  events: IEventsNotification;
}

export interface IGroupeEquipes {
  groupe_id: string;
  equipe_id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMatchs {
  id: string;
  date: string;
  coeff: number;
  groupe_id: string;
  equipes: IEquipe[];
  createdAt: string;
  updatedAt: string;
}

export interface IEquipe {
  id: string;
  name: string;
  country: string;
  icon: string;
  images: string;
  createdAt: string;
  updatedAt: string;
  MatchEquipes: IMatchEquipes;
}

export interface IMatchEquipes {
  createdAt: string;
  equipe_id: number;
  match_id: number;
  order: boolean;
  updatedAt: string;
}
export interface IGroupesEquipestab {
  id: string;
  name: string;
  event_id: string;
  order: IOrder[];
}

export interface IOrder {
  id: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  pt: number;
  but: number;
  o_but: number;
  groupe_id: number;
  equipe_id: number;
  event_id: number;
  createdAt: string;
  updatedAt: string;
  equipes: IEquipeOrder;
}

export interface IEquipeOrder {
  id: string;
  name: string;
  country: string;
  icon: string;
  images: File;
  createdAt: string;
  updatedAt: string;
  order_match: IOrderMatch[];
}

export interface IOrderMatch {
  id: string;
  form: string;
  order_id: number;
  match_id: number;
  equipe_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface INewGroupeEquipe {
  groupeName: string;
  event_id: number;
  listEquipes: any;

}

export interface INewMatch {
  groupe_id: string;
  event_id: number;
  listEquipes: any;
  coeff: number;
}

export interface IEventsNotification {
  id: string;
  name: string;
  categorieId: string;
  qualificationType: string;
  displayQualification: boolean;
  description: string;
  image: File;
  categories: any;
  is_deleted: boolean;
  displayOrder: boolean;
}


