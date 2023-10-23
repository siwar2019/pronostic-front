import { AnyMxRecord } from "dns";

export interface INquestionResponse {
   // id:any,
    dateStart:any,
    dateExpiration:any,
    points:any,
    QuizId:string,
    type:any,
    questionDescription:string,
    response:any,
  
  }
  export interface INewQuiz {
    id: string;
    nom: string;
    category: string;
    description: string;
    image:File;
    isDisplayedByPartner: boolean;
  
  }
  export interface INewQuestion {
    id: number ;
    dateStart: string ;
    dateExpiration:string ;
    points : number ;
    questionDescription : string ;
    type:any ;
  }
  export interface INewResponse {
    id: number ;
    response:  string ;
    questionId: number ;
    isCorrectAnswer : boolean ;
  }
  export interface Newscore {
    id: number ;
    score:number;
    userId:number ;
    
  }
  export interface IditScore{
    score: number;
    id: any;

  }
