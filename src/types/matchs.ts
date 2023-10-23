export interface IMatchs {
  id: string;
  date: string;
  time: string;
  groupe_id: string;
  equipes: IEquipe[];
  score: IScore;
  coeff: number
}

export interface IEquipe {
  id: string;
  name: string;
  country: string;
  icon: string;
  images:string;
  createdAt: string;
  updatedAt: string;
}

export interface IMatch {
  id: string;
  date: string;
  time: string;
  groupe_id: string;
  equipes: IEquipeMatch[];
  coeff: string;
}

export interface IEquipeMatch {
  id: string;
  name: string;
  country: string;
  icon: string;
  images:File;
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
export interface Match {
  id: string;
  date: Date;
}

export interface IScore {
  equipe1: string;
  equipe2: string;
  id: string;
  match_id: string;
}
export interface MatchUpdate {
  matchId: string;
  date: Date;
}

export interface MatchUpdateCoeff {
  matchId: string;
  coeff: string;
}
export interface IUpdateMatch {
  id : string; 
  groupe_id: string;
  event_id: string;
  listEquipes: any;
}
export interface IUpdateMatchCoff {
  id : string; 
  groupe_id: string;
  event_id: string;
  listEquipes: any;
  coeff:any;
  date:any
}


