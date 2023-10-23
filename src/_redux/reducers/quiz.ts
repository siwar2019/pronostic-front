import {INewQuiz,INewQuestion,INewResponse,INquestionResponse,Newscore} from "../../types/quiz";
import { createSlice } from "@reduxjs/toolkit";
import { createQuizByAdmin,
    getAllQuiz,
    createQuestionResponse,
    createQuestionResponseSingle,
    getAllQuestionQuiz,
    getAllResponsesQuiz ,editScore
    } from "../actions/quiz";

export interface usersState {
    NewQuiz:Array <INewQuiz> ;
    NewQuestionResponse:Array <INquestionResponse>;
    NewQuestionResponseSingle:Array <INquestionResponse>;
    inputFields:[]  ;
    NewQuestionList:Array <INewQuestion> 
    NewResponse:Array<INewResponse> ;
    Newscore:Array <Newscore> ;

}
const initialState: usersState = {
    NewQuiz:[],
    NewQuestionResponse: [],
    NewQuestionResponseSingle: [] ,
    inputFields:[],
    NewQuestionList: [],
    NewResponse: [],
    Newscore: []

    
}

export const quizSlice = createSlice({
    name: "quizSlice" ,
    initialState,
    reducers: {
        setinput: ( state,action) => {
            state.inputFields = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(createQuizByAdmin.fulfilled, (state,{payload}:any) =>{
            state.NewQuiz=payload ;
            console.log("NewQuiz",payload
            ) 

        });
        builder.addCase(getAllQuiz.fulfilled,(state,{payload}) => {
            state.NewQuiz= payload.filter((Quiz: any)=>Quiz.id !==0) ;
        });
        builder.addCase(createQuestionResponse.fulfilled,(state,{payload}:any)=> {
              
        state.NewQuestionResponse=payload ;
        });
        builder.addCase(createQuestionResponseSingle.fulfilled,(state,{payload}:any)=> {
              
        state.NewQuestionResponse=payload ;
        }); 
        builder.addCase(getAllQuestionQuiz.pending,(state, {payload}:any) => {
            state.NewQuestionList=[]
            state.NewResponse= []

        });
        builder.addCase(getAllQuestionQuiz.fulfilled,(state,{payload}:any)=> {
            state.NewQuestionList= payload;
        });
       
        builder.addCase(getAllQuestionQuiz.rejected,(state, {payload}:any) => {
            state.NewQuestionList= []
            state.NewResponse= []

        });
        builder.addCase(getAllResponsesQuiz.fulfilled,(state, {payload}:any) => {
            state.NewResponse=payload ;
        })
        builder.addCase(editScore.fulfilled,(state,{payload}:any) => {
            state.Newscore=payload
        })
        
   
     
    },

})
export default quizSlice.reducer;
