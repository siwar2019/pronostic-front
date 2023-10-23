import React, { useState } from "react";
import {
  Typography,
  Stack,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Table,
  Button,
} from "@mui/material";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useEffect } from "react";
import { TextField, Box, Switch } from "@material-ui/core";
import {
  archivedEventByAdmin,
  getAllEvents,
} from "../../../../_redux/actions/events";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "@mui/material/Modal";
import { useStyles } from "./gestion events";
import logo from "../../../assets/popUp.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container } from "@mui/system";
import { uploadEquipes } from "../../../../_redux/actions/equipes";
import Matchdate from "../Gestion Events/gererModules";
import {
  addDateToMatch,
  createMatches,
} from "../../../../_redux/actions/matchs";
import { GroupesListe } from "../Gestion Events/listeGroupe";
import { Match } from "../../../../types/matchs";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import { getMatchsByEventForAdmin } from "../../../../_redux/actions/groupes";
import { useTranslation } from "react-i18next";
import Quiz from "../Gestion Quiz";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  float: "left",
  maxHeight: "60%",
};
const label = { inputProps: { "aria-label": "Switch demo" } };

const steps = ["", "", ""];
const EventSettings = (props: any) => {
  const { events } = useAppSelector((state) => state.eventsSlice);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [matchsDates, setMatchsDates] = useState<Match[]>([]);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const [file, setFile] = useState("");
  const [eventSelected, setEventSelected] = useState("");
  const handleOpen = (id: string) => {
    setOpen(true);
    setEventSelected(id);
  };

  const handleClose = () => setOpen(false);
  const classes = useStyles();
  let event_id = props.eventId;

  // const archivedEvent = () => {
  //   // dispatch(archivedEventByAdmin());
  //   setTimeout(() => {}, 300);
  // };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    dispatch(
      archivedEventByAdmin({
        event_id: id,
        is_deleted: event.target.checked,
      })
    );
  };
  /////// stepper ///
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handelUpload = (e: any, id: string) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("equipeListe", file);
    dispatch(uploadEquipes({ value: formData, id: eventSelected }));
    handleNext();
  };
  const handleCreateMatches = (id: string) => {
    dispatch(createMatches(eventSelected));
    handleNext();
  };

  const handleGetMatchs = (id: string) => {
    dispatch(getMatchsByEventForAdmin(eventSelected));
  };
  const changeFile = (event: any) => {
    console.log("selected file", event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handeAddDate = () => {
    dispatch(addDateToMatch(matchsDates));
    handleNext();
  };

  return (
    <>
      <Stack component="form" noValidate autoComplete="off" spacing={4}>
        <Stack>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {t("admin.Events.name")}
                  </TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {t("admin.Events.details")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                {events.map((el, index) => (
                  <TableRow key={index}>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>
                      <Switch
                        checked={el.is_deleted}
                        {...label}
                        onChange={(e) => handleChange(e, el.id)}
                      />{" "}
                      {el.is_deleted}
                    </TableCell>
                    <TableCell>
                      <MoreHorizIcon onClick={() => handleOpen(el.id)} />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img src={logo} alt="logo" className={classes.logo} />
                          <Container
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Stepper activeStep={activeStep}>
                              {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                  optional?: React.ReactNode;
                                } = {};
                                if (isStepOptional(index)) {
                                  labelProps.optional = (
                                    <Typography variant="caption"></Typography>
                                  );
                                }
                                if (isStepSkipped(index)) {
                                  stepProps.completed = false;
                                }
                                return (
                                  <Step key={index} {...stepProps}>
                                    <StepLabel {...labelProps}>
                                      {label}
                                    </StepLabel>
                                  </Step>
                                );
                              })}
                            </Stepper>
                          </Container>
                          {activeStep === steps.length ? (
                            <React.Fragment>
                              <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                }}
                              >
                                <Box sx={{ flex: "1 1 auto" }} />
                                <Button onClick={handleReset}>Reset</Button>
                              </Box>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              {activeStep === 0 ? (
                                <Box
                                  component="form"
                                  onSubmit={(e) => handelUpload(e, el.id)}
                                >
                                  <Stack className={classes.boxTitle}>
                                    <Typography
                                      sx={{ mt: 2, mb: 1 }}
                                      id="modal-modal-title"
                                      variant="h6"
                                      component="h2"
                                    >
                                      UPLOAD LIST EQUIPES
                                    </Typography>
                                    <TextField
                                      required
                                      type="file"
                                      id="file"
                                      onChange={changeFile}
                                      name="file"
                                      variant="standard"
                                    />
                                  </Stack>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      pt: 2,
                                      justifyContent: "end",
                                    }}
                                  >
                                    <Button
                                      className={classes.btnEcrant1}
                                      type="submit"
                                    >
                                      Suivant
                                    </Button>
                                  </Box>
                                </Box>
                              ) : activeStep === 1 ? (
                                <Box>
                                  <Stack className={classes.boxTitle}>
                                    <Typography
                                      sx={{ mt: 2, mb: 1 }}
                                      id="modal-modal-title"
                                      variant="h6"
                                      component="h2"
                                    >
                                      créer les groupes
                                    </Typography>
                                    <Box>
                                      <GroupesListe eventId={eventSelected} />
                                    </Box>
                                  </Stack>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      pt: 2,
                                      justifyContent: "end",
                                    }}
                                  >
                                    <Button
                                      onClick={() =>
                                        handleCreateMatches(eventSelected)
                                      }
                                      // onClick={handleNext}
                                      className={classes.btnEcrant1}
                                    >
                                      {" "}
                                      Suivant
                                    </Button>
                                  </Box>
                                </Box>
                              ) : (
                                <>
                                  <Button
                                    variant="contained"
                                    component="label"
                                    className={classes.btnAfficherMatch}
                                    onClick={() => handleGetMatchs(el.id)}
                                  >
                                    <FileDownloadDoneIcon />
                                    Afficher les match pour ajouter les dates
                                  </Button>

                                  <Box>
                                    <Matchdate
                                      id={el.id}
                                      matchsDates={matchsDates}
                                      setMatchsDates={setMatchsDates}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      pt: 2,
                                      justifyContent: "end",
                                    }}
                                  >
                                    <Button
                                      onClick={handeAddDate}
                                      className={classes.btnEcran3}
                                    >
                                      {" "}
                                      Terminer
                                    </Button>
                                  </Box>
                                </>
                              )}
                            </React.Fragment>
                          )}
                        </Box>
                      </Modal>
                    </TableCell>
                  </TableRow>
           
                ))}
              
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </>
  );
};
export default EventSettings;
