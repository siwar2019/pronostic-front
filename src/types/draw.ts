import { IUser } from "./pronostic";
export interface IDraw {
  A1: string;
  A2: string;
  B1: string;
  B2: string;
  C1: string;
  C2: string;
  D1: string;
  D2: string;
  E1: string;
  E2: string;
  F1: string;
  F2: string;
  G1: string;
  G2: string;
  H1: string;
  H2: string;
  A1B2: string;
  B1A2: string;
  C1D2: string;
  D1C2: string;
  E1F2: string;
  F1E2: string;
  G1H2: string;
  H1G2: string;
  A1B2C1D2: string;
  B1A2D1C2: string;
  E1F2G1H2: string;
  F1E2H1G2: string;
  A1B2C1D2E1F2G1H2: string;
  B1A2D1C2F1E2H1G2: string;
  champion: string;
}

export interface ITotalDrawScoreEmployee {
  emp: IUser;
  pointsQualification?: number;
}

export interface IDrawSetting {
  correctPhase1: string;
  incorrectPhase1: string;
  correctPhase2: string;
  incorrectPhase2: string;
  correctChampion: string;
  event_id: string;
}

export interface IDrawSetting32Teams {
  correctPhase1: string;
  incorrectPhase1: string;
  correctPhase2: string;
  incorrectPhase2: string;
  correctPhase3: string;
  incorrectPhase3: string;
  correctPhase4: string;
  incorrectPhase4: string;
  correctChampion: string;
  event_id: string;
}

export interface IDrawSetting16Teams {
  correctPhase1: string;
  incorrectPhase1: string;
  correctPhase2: string;
  incorrectPhase2: string;
  correctPhase3: string;
  incorrectPhase3: string;
  correctChampion: string;
  event_id: string;
}
