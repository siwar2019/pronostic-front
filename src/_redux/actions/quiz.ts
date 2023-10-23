import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewQuiz,IditScore } from "../../types/quiz";
import { clientApi } from "../../_clientApi";

import Swal from "sweetalert2";
import { INquestionResponse } from "../../types/quiz";
//create quiz
export const createQuizByAdmin = createAsyncThunk(
"quiz/createQuizByAdmin",
async (value: any, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("create-quiz", value);

      return res.data
      ;
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

//multiple choices
export const createQuestionResponse=createAsyncThunk(
  "quiz/createQuestionResponse",
async(value:INquestionResponse, {rejectWithValue}) => {
  try {
    const res= await clientApi.post("create-question-quiz",value)
  }catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    return rejectWithValue(error);
  }
}  
);
//one single choice
export const createQuestionResponseSingle=createAsyncThunk(
  "quiz/create-question-quiz-single",
async(value:INquestionResponse, {rejectWithValue}) => {
  try {
    const res= await clientApi.post("create-question-quiz-single",value)
  }catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    return rejectWithValue(error);
  }
}  
);
//get quiz liste
export const getAllQuiz = createAsyncThunk(
  "quiz/getAllQuiz",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-list-quiz");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//get list questions quiz
export const getAllQuestionQuiz = createAsyncThunk(
  "quiz/getAllQuestionQuiz",
  async (id:any, { rejectWithValue }) => {
    try {

      const response = await clientApi.post("/get-list-questions",{id:id});
      return response.data.data;

    } catch (error) {

      return rejectWithValue(error);
    }
  }
);
//get all reponses
export const getAllResponsesQuiz = createAsyncThunk(
  // questionId:any
  "quiz/getAllResponsesQuiz",
  async (id:any, { rejectWithValue }) => {
   console.log(id,"222222222")
    try {

      const response = await clientApi.post("/get-list-reponses",{id:id});
      return response.data.data;

    } catch (error) {

      return rejectWithValue(error);
    }
  }
);
//edit score
export const editScore = createAsyncThunk(
  "quiz/editScore",
  async (value:IditScore, { rejectWithValue }) => {
    try {
      const response = await clientApi.post("/update-score-quiz",value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);