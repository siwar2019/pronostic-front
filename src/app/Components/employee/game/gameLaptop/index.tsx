import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./gameLaptopStyles";
import moment from "moment";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import {
  cleanMatchByIdForEmployee,
  getMatchByIdForEmployee,
} from "../../../../../_redux/actions/matchs";
import { pronosticsEmployee } from "../../../../../_redux/actions/pronostics";
import fire from "../../../../assets/fire.gif";
import UndoIcon from "@mui/icons-material/Undo";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../_redux/store/configureStore";
import { Box } from "@mui/system";
import joker from "../../../../assets/joker.gif";
import GameOptionsDetails from "../gameOptions&Validation/GameOptionsDetails";
import ValidationUseOption from "../gameOptions&Validation/ValidationUseOption";
import noJoker from "../../../../assets/no-joker.gif";
import Checkbox from "@mui/material/Checkbox";
import { getEmployeeOptions } from "../../../../../_redux/actions/options";

interface IPronosticFormValues {
  equipe1: string;
  equipe2: string;
}

export default function GameLaptop() {
  const match = useAppSelector(({ matchsSlice: { match } }) => match);

  const options = useSelector(
    (state: RootState) => state.optionsSlice.employeeOptions
  );

  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();
  const [disabledPronostic, setDisabledPronostic] = useState<boolean>(false);
  const [displayForgotSave, setDisplayForgotSave] = useState<boolean>(false);
  const [displayScoreDuplicated, setDisplayScoreDuplicated] =
    useState<boolean>(false);
  const [displaySuperPronostic, setDisplaySuperPronostic] =
    useState<boolean>(false);
  const [showDetailsForgot, setShowDetailsForgot] = useState(false);
  const [showDetailsSuperPronostic, setShowSuperPronostic] = useState(false);
  const [showDetailsDoubleScore, setShowDoubleScore] = useState(false);
  const [openOptionDetails, setOpenOptionsDetails] = useState(false);
  const [openValidationPopup, setOpenValidationPopup] = useState(false);
  const [gameProp, setGameProp] = useState({ equipe1: "", equipe2: "" });
  const [checked, setChecked] = useState(false);
  const [displayDoubleAndForgot, setDisplayDoubleAndForgot] = useState(false);
  const [displayDoubleAndSuper, setDisplayDoubleAndSuper] = useState(false);
  const event_id = params.event_id;

  useEffect(() => {
    dispatch(getMatchByIdForEmployee(params.id as string));
    dispatch(getEmployeeOptions(params.event_id as string));

    return () => {
      dispatch(cleanMatchByIdForEmployee());
    };
  }, [dispatch, params.event_id, params.id]);

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

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentTime = new Date();
  console.log("curenttime",currentTime)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matchDate = new Date(match?.date);
  console.log("matchDate",matchDate)

  const date = new Date(matchDate);
  const superDate = new Date(matchDate);
  const lessThanHour = eleminateHours(date, 1);
  const superHour = addHours(superDate, 1, 30);
  useEffect(() => {
    if (currentTime > lessThanHour) {
      setDisabledPronostic(true);
    }

    if (currentTime < lessThanHour) {
      setDisplayScoreDuplicated(true);
    }

    if (currentTime < matchDate && currentTime > lessThanHour) {
      setDisplayForgotSave(true);
      if (!options.double_score && !options.forgot_save)
        setDisplayScoreDuplicated(true);
    }

    if (currentTime < superHour && currentTime > matchDate) {
      setDisplaySuperPronostic(true);
      if (!options.double_score && !options.super_pronostic)
        setDisplayScoreDuplicated(true);
    }
  }, [
    currentTime,
    displayDoubleAndForgot,
    lessThanHour,
    match,
    matchDate,
    options.double_score,
    options.forgot_save,
    options.super_pronostic,
    superHour,
  ]);

  const formMethods = useForm<IPronosticFormValues>();
  const { register, handleSubmit } = formMethods;
  const _onSubmit: SubmitHandler<IPronosticFormValues> = (data) => {
    if (displayForgotSave && !options.forgot_save && !displayDoubleAndForgot) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowDetailsForgot(true);
    } else if (
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
      !displayDoubleAndForgot &&
      !displayDoubleAndSuper
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowDoubleScore(true);
    } else if (
      displayForgotSave &&
      !options.forgot_save &&
      displayDoubleAndForgot &&
      !checked
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowDetailsForgot(true);
    } else if (
      displayForgotSave &&
      !options.forgot_save &&
      displayDoubleAndForgot &&
      checked &&
      displayScoreDuplicated &&
      !options.double_score
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowDetailsForgot(true);
      setShowDoubleScore(true);
    } else if (
      displaySuperPronostic &&
      !options.super_pronostic &&
      displayDoubleAndSuper &&
      !checked
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowSuperPronostic(true);
    } else if (
      displaySuperPronostic &&
      !options.super_pronostic &&
      displayDoubleAndSuper &&
      checked &&
      displayScoreDuplicated &&
      !options.double_score
    ) {
      setGameProp({ ...data });
      setOpenValidationPopup(true);
      setShowSuperPronostic(true);
      setShowDoubleScore(true);
    } else {
      dispatch(pronosticsEmployee({ ...data, match_id: params.id as string }));
      navigate(`/categories/games/${event_id}`);
    }
  };

  let ForgotSaveDetails = () => {
    setOpenOptionsDetails(true);
    setShowDetailsForgot(true);
  };

  let SuperPronostic = () => {
    setOpenOptionsDetails(true);
    setShowSuperPronostic(true);
  };

  let doubleScore = () => {
    setOpenOptionsDetails(true);
    setShowDoubleScore(true);
  };

  let doubleScoreAndForgotSave = () => {
    setOpenOptionsDetails(true);
    setShowDoubleScore(true);
    setShowDetailsForgot(true);
  };

  let doubleScoreAndSuperPronostic = () => {
    setOpenOptionsDetails(true);
    setShowDoubleScore(true);
    setShowSuperPronostic(true);
  };

  useEffect(() => {
    if (
      !options.double_score &&
      !options.forgot_save &&
      currentTime < matchDate &&
      currentTime > lessThanHour
    ) {
      setDisplayDoubleAndForgot(true);
    } else {
      setDisplayDoubleAndForgot(false);
    }

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
  }, [currentTime, lessThanHour, match, matchDate, options, superHour]);

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
          marginTop: "10px",
          paddingBottom: "20px",
          paddingTop: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          borderRadius: "30px",
        }}
      >
        {match && (
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(_onSubmit)}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  {displayForgotSave &&
                  !options.forgot_save &&
                  !displayDoubleAndForgot ? (
                    <Box
                      className={classes.optionDetails}
                      onClick={ForgotSaveDetails}
                    >
                      <img className={classes.joker} src={joker} alt="Fire" />
                      <Typography
                        className={classes.coeff}
                        style={{ fontWeight: "bold" }}
                      >
                        {t("employee.Pronostics.useJoker")} Forgot Save !{" "}
                        {t("employee.Pronostics.availability")}
                        {moment(matchDate).format(" H:mm - DD/MM/YYYY")}
                      </Typography>
                    </Box>
                  ) : displaySuperPronostic &&
                    !options.super_pronostic &&
                    !displayDoubleAndSuper ? (
                    <Box
                      className={classes.optionDetails}
                      onClick={SuperPronostic}
                    >
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
                    !displayDoubleAndForgot &&
                    !displayDoubleAndSuper ? (
                    <Box
                      className={classes.optionDetails}
                      onClick={doubleScore}
                    >
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
                  ) : displayDoubleAndForgot &&
                    displayScoreDuplicated &&
                    !options.double_score &&
                    displayForgotSave &&
                    !options.forgot_save ? (
                    <Box
                      className={classes.optionDetails}
                      onClick={doubleScoreAndForgotSave}
                    >
                      <img className={classes.joker} src={joker} alt="Fire" />
                      <Typography
                        className={classes.coeff}
                        style={{ fontWeight: "bold" }}
                      >
                        {t("employee.Pronostics.useJoker")} Double Score &
                        Forgot save ! {t("employee.Pronostics.availability")}
                        {moment(matchDate).format(" H:mm - DD/MM/YYYY")}
                      </Typography>
                    </Box>
                  ) : displayDoubleAndSuper &&
                    displayScoreDuplicated &&
                    !options.double_score &&
                    displaySuperPronostic &&
                    !options.super_pronostic ? (
                    <Box
                      className={classes.optionDetails}
                      onClick={doubleScoreAndSuperPronostic}
                    >
                      <img className={classes.joker} src={joker} alt="Fire" />
                      <Typography
                        className={classes.coeff}
                        style={{ fontWeight: "bold" }}
                      >
                        {/* //siwar */}
                        {t("employee.Pronostics.useJoker")} Double Score & Super
                        Pronostic ! {t("employee.Pronostics.availability")}
                        {moment(superHour).format(" H:mm - DD/MM/YYYY")}
                      </Typography>
                    </Box>
                  ) : (
                    <Box>
                      <img
                        className={classes.noJokerImg}
                        src={noJoker}
                        alt="Fire"
                      />
                      <Typography
                        className={classes.noJoker}
                        style={{ fontWeight: "bold" }}
                      >
                        {t("employee.Pronostics.noJoker")}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <>
                  {parseInt(match.coeff) !== 1 ? (
                    <Box>
                      <img className={classes.flame} src={fire} alt="Fire" />
                      <Typography
                        className={classes.coeff}
                        style={{ fontWeight: "bold" }}
                      >
                        Coefficient : {match.coeff}
                      </Typography>
                    </Box>
                  ) : (
                    <></>
                  )}
                </>
              </Stack>
              <Box>
                {displayScoreDuplicated && !options.double_score ? (
                  <FormControlLabel
                    style={{ marginLeft: "21px" }}
                    control={
                      <Checkbox
                        name="doubleScore"
                        checked={checked}
                        onChange={handleChange}
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
                )}{" "}
              </Box>
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
                        {match.equipes[0].name}
                      </Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: "right" }}>
                      <img
                        // src={`https://flagcdn.com/64x48/${match.equipes[0].icon.toLowerCase()}.png`}
                        src={
                          (process.env.REACT_APP_UPLOADS_LOGO +
                            match.equipes[0].images) as any
                        }
                        style={{
                          maxWidth: 150,
                          minWidth: 150,
                          minHeight: 90,
                          maxHeight: 90,
                        }}
                        alt={match.equipes[0].name}
                      ></img>
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{ textAlign: "center", marginTop: "30px" }}
                    >
                      <TextField
                        type="number"
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
                        defaultValue={0}
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
                      {match.date
                        ? moment(match.date).format("YYYY-MM-DD H:mm ")
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
                        // src={`https://flagcdn.com/64x48/${match.equipes[1].icon.toLowerCase()}.png`}
                        src={
                          (process.env.REACT_APP_UPLOADS_LOGO +
                            match.equipes[1].images) as any
                        }
                        style={{
                          maxWidth: 150,
                          minWidth: 150,
                          minHeight: 90,
                          maxHeight: 90,
                        }}
                        alt={match.equipes[1].name}
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
                        {match.equipes[1].name}
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{ textAlign: "center", marginTop: "30px" }}
                    >
                      <TextField
                        type="number"
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
                        defaultValue={0}
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
                {displayForgotSave && !options.forgot_save ? (
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
                    {t("employee.Pronostics.pronosticsWithForgotSave")}
                  </Button>
                ) : displaySuperPronostic && !options.super_pronostic ? (
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
                    {t("employee.Pronostics.pronosticsWithSuper")}
                  </Button>
                ) : (
                  <>
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
                      Pronostic
                    </Button>
                  </>
                )}
              </div>
            </form>
          </FormProvider>
        )}
      </Container>
      <GameOptionsDetails
        setOpenOptionsDetails={setOpenOptionsDetails}
        setShowDetailsForgot={setShowDetailsForgot}
        setShowSuperPronostic={setShowSuperPronostic}
        setShowDoubleScore={setShowDoubleScore}
        showDetailsForgot={showDetailsForgot}
        showDetailsSuperPronostic={showDetailsSuperPronostic}
        openOptionDetails={openOptionDetails}
        showDetailsDoubleScore={showDetailsDoubleScore}
        displayDoubleAndForgot={displayDoubleAndForgot}
        displayDoubleAndSuper={displayDoubleAndSuper}
      />
      <ValidationUseOption
        setOpenValidationPopup={setOpenValidationPopup}
        setShowDetailsForgot={setShowDetailsForgot}
        setShowSuperPronostic={setShowSuperPronostic}
        setShowDoubleScore={setShowDoubleScore}
        showDetailsDoubleScore={showDetailsDoubleScore}
        showDetailsForgot={showDetailsForgot}
        showDetailsSuperPronostic={showDetailsSuperPronostic}
        openValidationPopup={openValidationPopup}
        matchId={params.id}
        gameProp={gameProp}
        match={match}
        displayDoubleAndForgot={displayDoubleAndForgot}
        checked={checked}
        displayDoubleAndSuper={displayDoubleAndSuper}
        event_id={event_id}
      />
    </div>
  );
}
