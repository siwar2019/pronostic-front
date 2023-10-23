import { CardActionArea, CardActions, CardMedia, Container, FormControl, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import List from "@mui/material/List";

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

import { Button, CardContent, TableBody, TableCell, TableRow } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { createQuizByAdmin, getAllQuiz } from "../../../../_redux/actions/quiz";
import { param } from "jquery";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function QuizBuild() {
  const initialValues = {
    nom: "",
    category: "",
    description: "",
    image: "",

  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    overflow: "scroll",
    maxHeight: "60%",
  };
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>();
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState<File>();
  const { NewQuiz } = useAppSelector((state) => state.quizSlice);

  const [showImageError, setShowImageError] = useState(false);
  useEffect(() => {
    dispatch(getAllQuiz());
  },[dispatch]);
  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const setImageFunction = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
      setShowImageError(false);
    } else {
      setImage(null);
    }
  };
  const selectPicture = (e: any) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const generateQuiz = () => {

    navigate("/quiz")

  }
  const HandleGenerateQuestion = (QuizId: string, image: any) => {
    // navigate('/generate-quiz')
    navigate(`/generate-quiz/${QuizId}`);

  }
  const handleCreate = (e: any) => {
    e.preventDefault();
    const data = new FormData();
    if (image !== undefined) {
      data.append("nom", formValues.nom);
      data.append("category", formValues.category);

      data.append("description", formValues.description);
      data.append("file", image);

      dispatch(createQuizByAdmin(data));
    } else setShowImageError(true);

    // dispatch (

    //   createQuizByAdmin({
    //     id: uuid(),
    //     nom: formValues.nom,
    //     category: formValues.category,
    //     description: formValues.description,
    //     image: image,
    //     isDisplayedByPartner: false
    //   })
    // )
    Swal.fire({
      icon: "success",
      title: "Événement créé avec succès",
      // text: message,
      showConfirmButton: false,
      timer: 1500,
    });
    setFormValues(initialValues);

  }
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  return (

    <Container sx={{ mt: 8 }}>
      <AddCircleIcon className={classes.addMatch} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={classes.titModal}
            style={{ fontWeight: "bold" }}
          >
            {t("Quiz.create")}
          </Typography>
          <Grid container spacing={0.5}>

            <Grid xs={12} md={3} >
              <FormControl >

                <TextField
                  id="QuizText"
                  label="Quiz name"
                  name="nom"
                  onChange={handleChange}
                  value={formValues.nom}

                />
              </FormControl >


            </Grid>
            <Grid xs={12} md={3}>
              <FormControl >
                <TextField
                  id="QuizText"
                  label="Quiz categorie"
                  name="category"
                  onChange={handleChange}
                  value={formValues.category}

                  fullWidth
                />
              </FormControl >

            </Grid>
            <Grid xs={12} md={3}>
              <FormControl >
                <TextField
                  id="QuizText"
                  label="Description"
                  name="description"
                  onChange={handleChange}
                  value={formValues.description}

                  fullWidth
                />
              </FormControl>

            </Grid>
            <Grid md={3}>

              <input
                name="image"
                hidden
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={(e) => setImageFunction(e)}
              />
              <Button
                startIcon={<AddAPhotoIcon />}
                variant="contained"
                className={classes.addPicture}
                onClick={(e) => selectPicture(e)}
              >
                {t("admin.Events.selectPicture")}
              </Button>
            </Grid>
          </Grid>
          <Stack style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "blue",
                color: "white",
                fontWeight: "bold",
                display: "flex",
                margin: "auto",
              }}
              onClick={handleCreate}
            >
              Créer
            </Button>

          </Stack>
        </Box>

      </Modal>


      <Box style={{
        display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"

        //  justifyContent: "center"
      }}>
        {NewQuiz.map((el) => (

          <Grid direction="row"
          // xs={12}
          // md={12}

          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                marginTop: "7px",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
              }}
              aria-label="contacts"
            >

              <Card className={classes.root}>
                <CardActionArea>
                  {/* <CardMedia
                      className={classes.media}
                      image=
                      "data:image/jpeg;base64,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"
                      title="Contemplative Reptile"
                    /> */}
                  <CardMedia
                    component="img"
                    className={classes.media}
                    // style={{ objectFit: "fill" }}
                    image={
                      (process.env.REACT_APP_UPLOADS_IMAGES +
                        el.image) as any
                    }
                    alt="Quiz image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {el.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" onClick={() => HandleGenerateQuestion(el.id, el.image)} >

                    Add quiz details
                  </Button>
                  <Button size="small">
                    Supprimer
                  </Button>
                </CardActions>
              </Card>
            </List>
          </Grid>

        ))}
      </Box>


    </Container>
  );
}