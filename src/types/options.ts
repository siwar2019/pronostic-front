export interface IEmployeeOptions {
  super_pronostic: boolean;
  use_date_super: string;
  super_match_id: string;
  forgot_save: boolean;
  use_date_forgot: string;
  forgot_match_id: string;
  double_score: boolean;
  use_date_double: string;
  double_match_id: string;
}

export interface IPronosticWithJoker {
  match_id: string;
  equipe1: string;
  equipe2: string;
  event_id: string;
}

export interface IUnusedDoubleJoker {
  match_id: string;
  event_id: string;
}
