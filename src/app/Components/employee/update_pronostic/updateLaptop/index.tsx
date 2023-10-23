import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import {
  getPronosticEmployee,
  updatePronosticEmployee,
} from "../../../../../_redux/actions/pronostics";
import fire from "../../../../assets/fire.gif";
import { useStyles } from "./updatePronosticStyles";
import UndoIcon from "@mui/icons-material/Undo";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
// import noJoker from "../../../../assets/no-joker.gif";
import joker from "../../../../assets/joker.gif";
import { Stack } from "@mui/system";
import ValidationPopup from "../updateModels/validationPopup";
import { getEmployeeOptions } from "../../../../../_redux/actions/options";
import UnusedDoubleJoker from "../updateModels/unusedDoubleJoker";
import BoltIcon from "@mui/icons-material/Bolt";
import PsychologyIcon from "@mui/icons-material/Psychology";

interface IPronosticFormValues {
  equipe1: string;
  equipe2: string;
}

export default function UpdateLaptop() {
  const pronostic = useAppSelector(
    ({ pronosticsSlice: { pronostic } }) => pronostic
  );
  const dispatch = useAppDispatch();
  const { event_id, id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();
  const [disabledPronostic, setDisabledPronostic] = useState<boolean>(false);
  const [displaySuperPronostic, setDisplaySuperPronostic] =
    useState<boolean>(false);
  const [openValidationPopup, setOpenValidationPopup] = useState(false);
  const [showDetailsSuperPronostic, setShowSuperPronostic] = useState(false);
  const [gameProp, setGameProp] = useState({ equipe1: "", equipe2: "" });
  const [disabled, setDisabled] = useState(false);
  const [showDetailsDoubleScore, setShowDoubleScore] = useState(false);
  const [displayDoubleAndSuper, setDisplayDoubleAndSuper] = useState(false);

  const options = useSelector(
    (state: RootState) => state.optionsSlice.employeeOptions
  );
  const [openUnusedDoubleJoker, setOpenUnusedDoubleJoker] = useState(false);
  const [displayScoreDuplicated, setDisplayScoreDuplicated] =
    useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  let eleminateHours = (date: Date, hours: number) => {
    date.setHours(date.getHours() - hours);

    return date;
  };

  let addHours = (superDate: Date, hours: number, minutes: number) => {
    superDate.setHours(
      superDate.getHours() + hours,
      superDate.getMinutes() + minutes
    );
    return superDate;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentTime = new Date();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matchDate = new Date(pronostic?.matchs?.date);
  const date = new Date(matchDate);
  const superDate = new Date(matchDate);
  const lessThanHour = eleminateHours(date, 1);
  const superHour = addHours(superDate, 1, 30);

  useEffect(() => {
    if (currentTime > lessThanHour) {
      setDisabledPronostic(true);
    }

    if (currentTime < superHour && currentTime > matchDate) {
      setDisplaySuperPronostic(true);
      if (!options.double_score && !options.super_pronostic)
        setDisplayScoreDuplicated(true);
    }

    if (currentTime < lessThanHour) {
      setDisplayScoreDuplicated(true);
    }
  }, [
    currentTime,
    lessThanHour,
    matchDate,
    options.double_match_id,
    options.double_score,
    options.super_pronostic,
    pronostic,
    superHour,
  ]);

  useEffect(() => {
    if (!pronostic) {
      dispatch(getPronosticEmployee(id as string));
      dispatch(getEmployeeOptions(event_id as string));
    }
  }, [dispatch, event_id, id, pronostic]);

  useEffect(() => {
    if (
      currentTime > lessThanHour &&
      parseInt(options.double_match_id) === parseInt(pronostic?.match_id)
    ) {
      setDisabled(true);
    }
  }, [currentTime, lessThanHour, options.double_match_id, pronostic?.match_id]);

  useEffect(() => {
    if (
      !options.double_score &&
      !options.super_pronostic &&
      currentTime < superHour &&
      currentTime > matchDate
    )
      setDisplayDoubleAndSuper(true);
    else {
      setDisplayDoubleAndSuper(false);
    }
  }, [currentTime, lessThanHour, matchDate, options, superHour]);

  const formMethods = useForm<IPronosticFormValues>();
  const { register, handleSubmit } = formMethods;
  const _onSubmit: SubmitHandler<IPronosticFormValues> = (data) => {
    if (
      displaySuperPronostic &&
      !options.super_pronostic &&
      !displayDoubleAndSuper
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowSuperPronostic(true);
    } else if (
      displayScoreDuplicated &&
      !options.double_score &&
      checked &&
      !displayDoubleAndSuper
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowDoubleScore(true);
    } else if (
      displaySuperPronostic &&
      !options.super_pronostic &&
      displayDoubleAndSuper &&
      checked &&
      displayScoreDuplicated &&
      !options.double_score
    ) {
      setGameProp({ ...data });
      setShowSuperPronostic(true);
      setShowDoubleScore(true);
      setOpenValidationPopup(true);
    } else if (
      displaySuperPronostic &&
      !options.super_pronostic &&
      displayDoubleAndSuper &&
      !checked
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowSuperPronostic(true);
    } else {
      dispatch(updatePronosticEmployee({ ...data, match_id: id as string }));
      navigate(`/pronostics/${event_id}`);
    }
  };

  let handleChange = () => {
    setOpenUnusedDoubleJoker(true);
  };

  let handleChangeUseDouble = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ marginTop: "10%", marginLeft: "20px", marginRight: "20px" }}>
      <Container>
        <Button
          variant="contained"
          style={{
            background: "-webkit-linear-gradient(left, #4da7ff, #135799)",
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          onClick={() => navigate(-1)}
        >
          <UndoIcon fontSize="medium" cursor="pointer" />{" "}
          {t("employee.Pronostics.back")}
        </Button>
      </Container>
      <Container
        style={{
          marginTop: "15px",
          paddingTop: "20px",
          paddingBottom: "20px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          borderRadius: "30px",
        }}
      >
        {pronostic && (
          <FormProvider {...formMethods}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Box>
                {displaySuperPronostic &&
                !options.super_pronostic &&
                !displayDoubleAndSuper ? (
                  <Box>
                    <img className={classes.joker} src={joker} alt="Fire" />
                    <Typography
                      className={classes.coeff}
                      style={{ fontWeight: "bold" }}
                    >
                      {t("employee.Pronostics.useJoker")} Super Pronostic !{" "}
                      {t("employee.Pronostics.availability")}
                      {moment(superHour).format(" H:mm - DD/MM/YYYY")}
                    </Typography>
                  </Box>
                ) : displayScoreDuplicated &&
                  !options.double_score &&
                  !displayDoubleAndSuper ? (
                  <Box>
                    <img className={classes.joker} src={joker} alt="Fire" />
                    <Typography
                      className={classes.coeff}
                      style={{ fontWeight: "bold" }}
                    >
                      {t("employee.Pronostics.useJoker")} Double Score !{" "}
                      {t("employee.Pronostics.availability")}
                      {moment(lessThanHour).format(" H:mm - DD/MM/YYYY")}
                    </Typography>
                  </Box>
                ) : displaySuperPronostic &&
                  !options.super_pronostic &&
                  displayDoubleAndSuper &&
                  !options.double_score &&
                  displayScoreDuplicated ? (
                  <Box>
                    <img className={classes.joker} src={joker} alt="Fire" />
                    <Typography
                      className={classes.coeff}
                      style={{ fontWeight: "bold" }}
                    >
                      {t("employee.Pronostics.useJoker")} Double Score & Super
                      Pronostic ! {t("employee.Pronostics.availability")}
                      {moment(superHour).format(" H:mm - DD/MM/YYYY")}
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    {/* <img
                      className={classes.noJokerImg}
                      src={noJoker}
                      alt="Fire"
                    />
                    <Typography
                      className={classes.noJoker}
                      style={{ fontWeight: "bold" }}
                    >
                      {t("employee.Pronostics.noJoker")}
                    </Typography> */}
                  </Box>
                )}
              </Box>
              <>
                {parseInt(pronostic.matchs.coeff) !== 1 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      float: "right",
                      paddingRight: "20px",
                    }}
                  >
                    <img className={classes.flame} src={fire} alt="Fire"></img>
                    <p className={classes.coeff}>
                      Coefficient : {pronostic.matchs.coeff}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </>
            </Stack>
            <Box>
              {parseInt(options.double_match_id) ===
              parseInt(pronostic?.match_id) ? (
                <FormControlLabel
                  style={{ marginLeft: "21px" }}
                  control={
                    <Checkbox
                      name="doubleScore"
                      disabled={disabled}
                      checked={true}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography
                      style={{ fontWeight: "bold", color: "#757575" }}
                      variant="body1"
                    >
                      {t("employee.Pronostics.doubleJokerUsed")}
                    </Typography>
                  }
                />
              ) : (
                <></>
              )}{" "}
              {displayScoreDuplicated && !options.double_score ? (
                <FormControlLabel
                  style={{ marginLeft: "21px" }}
                  control={
                    <Checkbox
                      name="doubleScore"
                      checked={checked}
                      onChange={handleChangeUseDouble}
                    />
                  }
                  label={
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#757575" }}
                    >
                      {t("employee.Pronostics.useDoubleJoker")}
                    </Typography>
                  }
                />
              ) : (
                <></>
              )}
              {parseInt(options.super_match_id) ===
              parseInt(pronostic?.match_id) ? (
                <Stack
                  direction="row"
                  style={{ marginLeft: "21px" }}
                  alignItems="center"
                >
                  <BoltIcon fontSize="large" color="primary" />
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", color: "#757575" }}
                  >
                    SUPER PRONOSTIC {t("employee.Pronostics.isUsed")}
                  </Typography>
                </Stack>
              ) : (
                <></>
              )}
              {parseInt(options.forgot_match_id) ===
              parseInt(pronostic?.match_id) ? (
                <Stack
                  direction="row"
                  style={{ marginLeft: "21px" }}
                  alignItems="center"
                >
                  <PsychologyIcon fontSize="large" color="primary" />
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", color: "#757575" }}
                  >
                    FORGOT SAVE {t("employee.Pronostics.isUsed")}
                  </Typography>
                </Stack>
              ) : (
                <></>
              )}
            </Box>
            <form onSubmit={handleSubmit(_onSubmit)}>
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={2} direction="row">
                  <Grid
                    container
                    item
                    xs={12}
                    md={4}
                    direction="row"
                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                  >
                    <Grid
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="h6">
                        {pronostic.matchs.equipes[0].name}
                      </Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: "right" }}>
                      <img
                        // src={`https://flagcdn.com/64x48/${pronostic.matchs.equipes[0].icon.toLowerCase()}.png`}
                        src={
                          (process.env.REACT_APP_UPLOADS_LOGO +
                            pronostic.matchs.equipes[0].images) as any
                        }
                        style={{
                          maxWidth: 150,
                          minWidth: 150,
                          minHeight: 90,
                          maxHeight: 90,
                        }}
                        alt={pronostic.matchs.equipes[0].name}
                      ></img>
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{ textAlign: "center", marginTop: "30px" }}
                    >
                      <TextField
                        type="number"
                        required
                        defaultValue={pronostic?.equipe1}
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
                        {...register("equipe1")}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      {" "}
                      {pronostic.matchs.date
                        ? moment(pronostic.matchs.date).format(
                            "YYYY-MM-DD H:mm "
                          )
                        : "Date not set"}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    md={4}
                    direction="row"
                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                  >
                    <Grid xs={6} sx={{ textAlign: "left" }}>
                      <img
                        // src={`https://flagcdn.com/64x48/${pronostic.matchs.equipes[1].icon.toLowerCase()}.png`}
                        src={
                          (process.env.REACT_APP_UPLOADS_LOGO +
                            pronostic.matchs.equipes[1].images) as any
                        }
                        style={{
                          maxWidth: 150,
                          minWidth: 150,
                          minHeight: 90,
                          maxHeight: 90,
                        }}
                        alt={pronostic.matchs.equipes[1].name}
                      ></img>
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="h6">
                        {pronostic.matchs.equipes[1].name}
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{ textAlign: "center", marginTop: "30px" }}
                    >
                      <TextField
                        type="number"
                        required
                        defaultValue={pronostic?.equipe2}
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
                        {...register("equipe2")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {displaySuperPronostic && !options.super_pronostic ? (
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      marginTop: "15px",
                      background:
                        "-webkit-linear-gradient(left, #2192ff, #030e19)",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    {t("employee.Pronostics.updateWithSuper")}
                  </Button>
                ) : (
                  <Button
                    disabled={disabledPronostic}
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: "15px",
                      background:
                        "-webkit-linear-gradient(left, #2192ff, #030e19)",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    {t("employee.Pronostics.update")}
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        )}
      </Container>
      <ValidationPopup
        setOpenValidationPopup={setOpenValidationPopup}
        setShowSuperPronostic={setShowSuperPronostic}
        setShowDoubleScore={setShowDoubleScore}
        showDetailsDoubleScore={showDetailsDoubleScore}
        showDetailsSuperPronostic={showDetailsSuperPronostic}
        openValidationPopup={openValidationPopup}
        displayDoubleAndSuper={displayDoubleAndSuper}
        matchId={id}
        gameProp={gameProp}
        event_id={event_id}
        checked={checked}
      />
      <UnusedDoubleJoker
        openUnusedDoubleJoker={openUnusedDoubleJoker}
        setOpenUnusedDoubleJoker={setOpenUnusedDoubleJoker}
        matchId={id}
        event_id={event_id}
      />
    </div>
  );
}
