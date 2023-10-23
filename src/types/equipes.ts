export interface IEquipes {
  id: string;
  name: string;
  country: string;
  images: File;
}

export interface IEquipesEvents {
  id: string;
  name: string;
  country: string;
  images: string;
}

export interface INewEquipe {
  name: string;
  country: string;
  icon: string;
  images: File;
}
