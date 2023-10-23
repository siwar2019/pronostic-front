import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Radio from '@material-ui/core/Radio';

import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import {
    editScore,
    getAllQuestionQuiz, getAllQuiz, getAllResponsesQuiz
} from "../../../../_redux/actions/quiz";
import "./quizGameStyle.css"
import { useNavigate, useParams } from "react-router-dom";
export default function QuizGame() {
    const id = useParams();
    let navigate = useNavigate();

    console.log(id, "idddd")

    const dispatch = useAppDispatch();
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [showquiz, setshowquiz] = useState(true);

    const [count, setCount] = useState(0);

    const [IsCorrectAnswer, setisCorrectAnswer] = useState("");
    const [index, setIndex] = React.useState(0);

    const questions = useSelector(
        (state: RootState) => state.quizSlice.NewQuestionList
    );
    const responses = useSelector(
        (state: RootState) => state.quizSlice.NewResponse
    );
    const quizzs = useSelector(
        (state: RootState) => state.quizSlice.NewQuiz
    );
    const scoreEdit = useSelector(
        (state: RootState) => state.quizSlice.Newscore
    );
    
    useEffect(() => {
        if (quizzs.length > 0 && id)
            dispatch(getAllQuestionQuiz(id.id));

    }, [dispatch, quizzs]);
    useEffect(() => {
        if (questions.length > 0)
            dispatch(getAllResponsesQuiz(questions[index].id));


    }, [dispatch, index, questions]);
    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);
    useEffect(() => {
        
        if (showResults===true && showResults )
            dispatch(editScore({score,id}));

    }, [dispatch, showResults]);
    
    const restartGame = () => {
        setCount(0);
        setIndex(0);
        setScore(0);
        setShowResults(false);
        setshowquiz(true);
        setisCorrectAnswer("");

    }
    const nextQuestion = (isCorrectAnswer) => {

        if (isCorrectAnswer) {
            setScore(score + 1);
        }
        if (index + 1 < questions.length) {
            let i = index + 1;
            setIndex(i)

        } else {
            setShowResults(true);
            setshowquiz(false);
        }
    }

    const increaseCount = (correct) => {
        if (correct === true) {
            let countCorrectResponse = count + 1;
            setCount(countCorrectResponse);
        }
    }
    const nextQuestionMultiple = () => {
        let array = responses.filter(q => q.isCorrectAnswer === true)
        let numberMultiple = array.length;
        console.log(array, "array");

        if (count === numberMultiple) {
            if (index + 1 < questions.length) {
                let i = index + 1;
                setIndex(i)
                setScore(score + 1);

            } else {
                setShowResults(true);
                setshowquiz(false);

            }

        } else {
            if (index + 1 < questions.length) {
                let i = index + 1;
                setIndex(i)
            }
        }


    }
    const next = () => {
        if (index + 1 < questions.length) {
            let i = index + 1;
            setIndex(i)

        } else {
            setShowResults(true);
            setshowquiz(false);

        }
    }
    const oneChoice = (correctAnswer) => {
        if (index + 1 < questions.length) {

            if (correctAnswer === IsCorrectAnswer) {
                setScore(score + 1);

                let i = index + 1;
                setIndex(i)
            } else {
                let i = index + 1;
                setIndex(i)
            }

        } else {
            setShowResults(true);
            setshowquiz(false);

        }





    }

    const renderSwitch = (param) => {
        switch (param) {
            case 'yesNo':
                return (
                    responses.map((el, indexx) =>

                        <ul>
                            {/* {questions[index].type ==="yesNo"?  */}
                            <>
                                {el.response === "Yes" ?
                                    <>
                                        <li> <Button style={{ color: "white", fontWeight: "normal", fontSize: "14px", width: "100%" }} onClick={() => nextQuestion(el.isCorrectAnswer)}>  {el.response}  </Button></li>
                                        <li><Button style={{ color: "white", fontWeight: "normal", fontSize: "14px", width: "100%" }} onClick={() => next()}> No  </Button></li>
                                    </>
                                    :
                                    <>
                                        <li> <Button style={{ color: "white", fontWeight: "normal", fontSize: "14px", width: "100%" }} onClick={() => nextQuestion(el.isCorrectAnswer)}>  {el.response}  </Button></li>

                                        <li><Button style={{ color: "white", fontWeight: "normal", fontSize: "14px", width: "100%" }} onClick={() => next()}> yes  </Button></li>
                                    </>
                                }
                            </>
                            {/* :     */}

                            {/* } */}

                        </ul>


                    )
                );
            case "list": return (
                responses.map((el, indexx) =>
                    <ul>
                        <li key={indexx}><Button style={{ color: "white", fontWeight: "normal", fontSize: "14px", width: "100%" }} onClick={() => nextQuestion(el.isCorrectAnswer)}>  {el.response}  </Button></li>
                    </ul>
                )
            );
            case "multiple": return (
                <>
                    <span style={{ color: "red" }}>**Pleusieurs réponses peuvent etre correctes</span>
                   <br/>                    <br/>

                    {/* <ul> */}

                    {responses.map((el, indexx) =>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1">


                                <FormControlLabel value="female" control={<Radio />} label="Female" onClick={() => increaseCount(el.isCorrectAnswer)} />
                                <FormLabel style={{ marginTop: "-29px" }} component="legend">{el.response} </FormLabel>

                            </RadioGroup>
                        </FormControl>
                        // <li key={indexx}><Button style={{ color: "white", fontWeight: "normal", fontSize: "14px",width:"100%" }} onClick={() => increaseCount(el.isCorrectAnswer)} >  {el.response}  </Button></li>
                    )}

                    {/* </ul> */}



                    <Button onClick={() => nextQuestionMultiple()}
                        style={{ background: "2185d0" }} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </>



            );

            case "oneChoice": return (
                responses.map((el, indexx) =>

                    <Stack direction="row" spacing={2}>
                        <TextField fullWidth
                            id="filled-textarea"
                            style={{ background: "transparent" }}
                            label="Votre réponse ici"
                            placeholder="votre réponse ici"
                            value={IsCorrectAnswer}
                            onChange={e => setisCorrectAnswer(e.target.value)}
                            multiline
                            variant="filled"
                        />

                        <Button
                            onClick={() => oneChoice(el.response)}
                            style={{ background: "#2185d0" }} variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                )
            );

            default:
                return '';
        }
    }


    return (

        <Grid>

            {showquiz ?
                (questions.length > 0 && responses.length > 0) &&

                <div className="App">

                    <h1>WindConsulting  Quiz</h1>

                    {/* <h2>Score: {score}</h2> */}

                    <div className="question-card">
                        {/* Current Question  */}
                        <h2 style={{ color: "#2185d0" }}>
                            Question Numéro: {index + 1} de {questions.length}
                        </h2>
                        <>
                            <h3 className="question-text">{questions[index].questionDescription}</h3>

                            {/* List of possible answers  */}

                            {renderSwitch(questions[index].type as string)}




                        </>

                    </div>



                </div>

                : ""}

            {showResults ?

                <div className="final-results">
                    <h1 style={{ color: "#2185d0", justifyContent: "center", display: "flex" }}>Test terminé avec succées </h1>
                    {/* <h3 style={{ color: "#2185d0" }}> {score > (questions.length / 2) ? "Félicitations!!" : "Malhreusement :( !!"} </h3> */}
                    {/* <h3 style={{ color: "#000000" }}>Votre score est {score} /  {questions.length} <i style={{ color: "blue" }}> ({(score / questions.length) * 100}%)</i> </h3> */}
                    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                        <button onClick={() => restartGame()}>Restart game</button>
                        <button onClick={() => navigate(-1)}>Quiz suivant </button>

                    </div>
                </div>
                : ""}
        </Grid>


    )

}
