import { CardActionArea, CardActions, CardMedia, Container, FormControl, FormControlLabel, FormLabel, RadioGroup, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import List from "@mui/material/List";
import { createQuestionResponse, createQuestionResponseSingle } from "../../../../_redux/actions/quiz"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkbox from '@material-ui/core/Checkbox';
import {
  getAllEvents,
} from "../../../../_redux/actions/events";
// import NumericInput from 'react-numeric-input';
import { useStyles } from "../Gestion Quiz/quizStyle";

import { Button, CardContent, Radio, TableBody, TableCell, TableRow } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { createQuizByAdmin, getAllQuiz } from "../../../../_redux/actions/quiz";
import { param } from "jquery";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import Quiz from "@mui/icons-material/Quiz";
import { useSelector } from 'react-redux'


import { useNavigate, useParams } from "react-router-dom";
export default function GenerateQ() {
  const QuizId = useParams();
  const idQuestion = uuid();

  const classes = useStyles();
  const [selects, setSselects] = React.useState<any>();
  const [yesOrNo, setYesOrNo] = React.useState<any>();
  const [oneCoice, setOneCoise] = React.useState<any>();
  const [inputFields, setInputFields] = useState([{
    choices: '', correctAnswer: false

  }]);



  const handleAddQuiz = () => {

    // setRows([
    //   ...rows,
    //   {
    //     equipesIds: "",
    //   },
    // ]);
    // setListEquipes([
    //   ...listEquipes,
    //   { equipe1: "", equipe2: "", date: "", coeff: 1 },
    // ]);

    // setFormErrors({
    //   ...formErrors,
    //   equipes: [
    //     ...formErrors.equipes,
    //     { equipe1: "", equipe2: "", date: "", coeff: 1 },
    //   ],
    // });

  }

  const initialValues = {
    id: "",
    dateStart: "",
    dateExpiration: "",
    points: "",
    QuizId: "",
    type: "",
    questionDescription: "",
    response: "",
    questionId: "",



  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = async (e: any) => {
    let { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const createDetailsQuiz = () => {
    {
      (() => {
        switch (true) {

          case (selects === 'yesNo'): {
            return (
              dispatch(

                createQuestionResponseSingle({
                  //id:idQuestion as string,
                  dateStart: formValues.dateStart,
                  dateExpiration: formValues.dateExpiration,
                  points: formValues.points,
                  QuizId: QuizId as unknown as string,
                  type: selects,
                  questionDescription: formValues.questionDescription,
                  response: yesOrNo,
                })

              )
            )
          }
            break;

          case (selects === 'list'): {
            return (

              dispatch(

                createQuestionResponse({
                  // id:uuid() as string,
                  dateStart: formValues.dateStart,
                  dateExpiration: formValues.dateExpiration,
                  points: formValues.points,
                  QuizId: QuizId as unknown as string,
                  type: selects,
                  questionDescription: formValues.questionDescription,
                  response: inputFields ,
                })

              )
            )
          }
            break;
          case (selects === 'multiple'): {
            return (
              dispatch(

                createQuestionResponse({
                  // id:uuid() as string ,
                  dateStart: formValues.dateStart,
                  dateExpiration: formValues.dateExpiration,
                  points: formValues.points,
                  QuizId: QuizId as unknown as string,
                  type: selects,
                  questionDescription: formValues.questionDescription,
                  response: inputFields,
                })

              )

            )
          }
            break;

          case (selects === 'oneChoice'): {
            return (
              dispatch(

                createQuestionResponseSingle({
                  // id:"18" ,
                  dateStart: formValues.dateStart,
                  dateExpiration: formValues.dateExpiration,
                  points: formValues.points,
                  QuizId: QuizId as unknown as string,
                  type: selects,
                  questionDescription: formValues.questionDescription,
                  response: oneCoice,
                })

              )
            )
          }
            break;

          default: {
            return (
              ""
            )
          }
            break;
        }
      })()

      Swal.fire({
        icon: "success",
        title: "Événement créé avec succès",
        // text: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }

  }
  const dispatch = useAppDispatch();
  const addInputField = () => {
    //add new

    setInputFields([...inputFields, {
      choices: '', correctAnswer: false
    }])

  }
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }
  const handleChangeChoice = (index, evnt) => {
    //on change input
    const { name, value } = evnt.target;

    const list = [...inputFields];
    if (name === "correctAnswer") {
      list[index][name] = !inputFields[index][name];

    } else {
      list[index][name] = value;

    }

    setInputFields(list);

    // setIsCorrectAnswer(true)


  }

  return (

    <Container sx={{ mt: 8 }}>

      <Box >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ fontWeight: "bold", margin: "20px" }}
        >
          details  quiz
        </Typography>
        <Grid container spacing={0.5}>
          <Grid md={2} xs={12}>
            <FormControl  >
              <FormLabel>Quiz Type</FormLabel>
              <select
                id="typeQuestion"
                name="typeQuestion"
                value={selects}
                onChange={e => setSselects(e.target.value)}
                style={{
                  width: "100%",
                  height: "45px",
                  border: "groove",
                  marginTop: "6px",
                  fontSize: "16px",
                }}>
                <option value="blank"></option>

                <option value="yesNo">Yes/No question</option>
                <option value="list">liste de choix unique</option>
                <option value="multiple">liste de choix multiple</option>

                <option value="oneChoice">question/reponse</option>
              </select>


            </FormControl >

          </Grid>
          <Grid md={3} xs={12}>
            <FormControl fullWidth>
              <FormLabel>Date de debut</FormLabel>

              <TextField
                id="datetime-local"
                type="datetime-local"
                name="dateStart"
                onChange={handleChange}

              />
            </FormControl>
          </Grid>
          <Grid md={1} xs={1}></Grid>
          <Grid md={3} xs={12}>

            <FormControl fullWidth>
              <FormLabel>Date d'expiration</FormLabel>

              <TextField
                id="datetime-local"
                type="datetime-local"
                name="dateExpiration"
                onChange={handleChange}

              />
            </FormControl>
          </Grid>
          {/* <Grid md={1}>

<FormLabel style={{    justifyContent: "center",display: "grid"}}>Score de quiz</FormLabel>
</Grid> */}
          <Grid md={2} style={{ display: "flex" }}>
            <FormLabel style={{ justifyContent: "center", display: "grid" }}>Score de quiz</FormLabel>

            <TextField style={{
              marginTop: "18px"
            }}
              type="number"
              name="points"
              onChange={handleChange}

              required
              InputProps={{
                inputProps: {
                  min: 0,
                  style: {
                    textAlign: "center",
                    backgroundColor: "#eef2f8",
                    width: "50px",
                  },
                },
              }}
            // defaultValue={1}
            />
          </Grid>

        </Grid>

      </Box>
      <br />

      <Box>
        {
          (() => {
            switch (true) {

              case (selects === 'yesNo'): {
                return (
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl >

                        <TextField
                          id="QuizText"
                          label=" entrer ta question quiz "
                          name="questionDescription"
                          onChange={handleChange}

                        // onChange={handleChange}
                        // value={formValues.nom}

                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Reponse</FormLabel>
                        <select
                          id="typeQuestion"
                          name="typeQuestion"
                          value={yesOrNo}
                          onChange={e => setYesOrNo(e.target.value)}
                        >
                          <option value="blank"></option>

                          <option value="Yes">Yes</option>
                          <option value="No">No</option>

                        </select>

                      </FormControl>

                    </Grid>
                  </Grid>
                )
              }
                break;

              case (selects === 'list'): {
                return (
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl >

                        <TextField
                          id="QuizText"
                          label=" entrer ta question quiz "
                          name="questionDescription"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                      <FormControl >

                        {/*multiple input one choice is correct answer */}
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-8">
                              {

                                inputFields.map((data, index) => {
                                  const { choices } = data;
                                  const { correctAnswer } = data
                                  return (
                                    <div className="row my-3" key={index}>
                                      <div className="col">
                                        <div className="form-group">
                                          <TextField type="text" onChange={(evnt) => handleChangeChoice(index, evnt)}
                                            value={choices} name="choices" className="form-control"
                                            placeholder="entrer les propositions " />
                                          <Box style={{ display: "flex" }}>
                                            {(inputFields.length !== 1) ?
                                              <Button
                                                style={{ color: "red", background: "transparent" }}
                                                className="mr10"
                                                onClick={removeInputFields}
                                              >
                                                <DeleteIcon />

                                              </Button> : ''}

                                            <Checkbox name="correctAnswer" value={correctAnswer} onChange={(evnt) => handleChangeChoice(index, evnt)} />


                                            < span style={{ marginTop: "14px" }}>is correct answer</span>
                                          </Box>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              }

                              <div className="row">
                                <div className="col-sm-12">

                                  <Button className="btn btn-outline-success " style={{ background: "transparent" }} onClick={addInputField}>

                                    Add New</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">

                          </div>
                        </div>
                      </FormControl>

                    </Grid>

                  </Grid>)
              }
                break;
              case (selects === 'multiple'): {
                return (
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <FormControl fullWidth  >
                        <TextField
                          id="QuizText"
                          label="votre question  quiz"
                          name="questionDescription"
                          onChange={handleChange}

                        />
                      </FormControl>

                    </Grid>
                    <Grid item xs={5}>
                      <FormControl fullWidth >
                        {/* //MULTIPLE */}
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-8">
                              {
                                inputFields.map((data, index) => {
                                  const { choices } = data;
                                  const { correctAnswer } = data;

                                  return (
                                    <div className="row my-3" key={index}>
                                      <div className="col">
                                        <div className="form-group">
                                          <TextField type="text" onChange={(evnt) => handleChangeChoice(index, evnt)}
                                            value={choices} name="choices" className="form-control"
                                            placeholder="entrer les propositions " />
                                          <Box style={{ display: "flex" }}>

                                            {(inputFields.length !== 1) ?

                                              <Button
                                                style={{ color: "red", background: "transparent" }}
                                                className="mr10"
                                                onClick={removeInputFields}
                                              >
                                                <DeleteIcon />
                                              </Button> : ''}
                                            <Checkbox name="correctAnswer" value={correctAnswer} onChange={(evnt) => handleChangeChoice(index, evnt)} />
                                            <span style={{ marginTop: "14px" }}>is correct answer</span>
                                          </Box>




                                        </div>
                                      </div>

                                    </div>
                                  )
                                })
                              }

                              <div className="row">
                                <div className="col-sm-12">

                                  <Button className="btn btn-outline-success " style={{ background: "transparent" }} onClick={addInputField}>

                                    Add New</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">

                          </div>
                        </div>

                      </FormControl>

                    </Grid>
                  </Grid>)
              }
                break;

              case (selects === 'oneChoice'): {
                return (
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl >

                        <TextField
                          id="QuizText"
                          label=" entrer ta question quiz "
                          name="questionDescription"
                          onChange={handleChange}

                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl >
                        <TextField
                          id="QuizText"
                          label="votre réponse au quiz"
                          name="reponse"
                          value={oneCoice}
                          onChange={e => setOneCoise(e.target.value)}

                        />
                      </FormControl>

                    </Grid>
                  </Grid>)
              }
                break;

              default: {
                return (
                  ""
                )
              }
                break;
            }
          })()
        }

      </Box>
      {/* <Box>
        <Grid>
          <Button
            style={{
              background: "-webkit-linear-gradient(left, #2192ff, #135799)",
              marginTop: "20px",
              marginRight: "10px",
              marginLeft: "-5px",
              color: "white",
              marginBottom: "70px",
              textTransform: "capitalize",
            }}
            onClick={handleAddQuiz}
            type="button"
            className="add-btn"
          >

            <Quiz style={{ width: "15px", paddingTop: "10px" }} />
            <span >Ajouter quiz  </span>


          </Button>
        </Grid>
      </Box> */}
      <Box>
        <Button
          variant="outlined"
          style={{
            background: "blue",
            color: "white",
            fontWeight: "bold",
            display: "flex",
            margin: "auto",
            marginTop: "10px"
          }}
          onClick={() => createDetailsQuiz()}
        >
          créer
        </Button>
      </Box>
    </Container>


  );
}
