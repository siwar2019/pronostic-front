import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useStyles } from "./gestionResultsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import { getAllMatchs } from "../../../../_redux/actions/matchs";
import { getMatchById } from "../../../../_redux/actions/matchs";

import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getAllGroupes,
  getgroupeByEvents,
} from "../../../../_redux/actions/groupes";
import moment from "moment";
import { IEvents } from "../../../../types/events";
import { IGroupes } from "../../../../types/groupes";
import { IMatchs } from "../../../../types/matchs";
import { GETSCORE, scoreMatch } from "../../../../_redux/actions/score";
import { useParams } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { getAllEvents } from "../../../../_redux/actions/events";
import { addHours } from "../../../utils/hours";

interface IScoreFormValues {
  equipe1: string;
  equipe2: string;
  coeff: string;
}
let currentTime = new Date();

function InsertMatchResult() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  // let  events  = useAppSelector((state) => state.eventsSlice);
  let events = useSelector(
    (state: RootState) => state.eventsSlice.events
  ).filter((event) => !event.is_deleted);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let groupes = useSelector((state: RootState) => state.groupesSlice.groupes);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let matchs = useSelector(
    (state: RootState) => state.matchsSlice.matchs
  ).filter(
    (match) =>
      currentTime > new Date(match.date) &&
      currentTime < addHours(new Date(match.date), 48, 0)
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let matchId = useSelector((state: RootState) => state.matchsSlice.matchId);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let params = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   dispatch(getAllMatchs());
  // }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [event, setEventss] = React.useState<IEvents>;

  const [groupe, setGroupe] = React.useState<IGroupes>({
    id: "",
    name: "",
    event_id: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [match, setMatch] = React.useState<IMatchs>({
    id: "",
    date: "",
    time: "",
    groupe_id: "",
    equipes: [
      {
        id: "",
        name: "",
        country: "",
        icon: "",
        images: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        id: "",
        name: "",
        country: "",
        icon: "",
        images: "",
        createdAt: "",
        updatedAt: "",
      },
    ],
    score: {
      equipe1: "",
      equipe2: "",
      id: "",
      match_id: "",
    },
    coeff: 1,
  });

  const handleChangeEvents = (e: SelectChangeEvent) => {
    const data1 = events.find((event) => event.id === e.target.value);
    if (data1) {
      dispatch(getgroupeByEvents({ event_id: data1.id }));
    }
  };

  const handleChange = (event: SelectChangeEvent) => {

   const data = groupes.find((groupe) => groupe.id === event.target.value);
    if (data) {
      setGroupe(data);
      dispatch(getAllMatchs(data.id as string));
    }

    //[dispatch, groupe.id as string];

  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleChange2 = (event: SelectChangeEvent) => {
    const data2 = matchs.find((match) => match.id === event.target.value);
    if (data2) {
      setMatch(data2);
      dispatch(getMatchById(data2.id as string));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [dispatch, match.id as string];
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#eef2f8",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#2d314a",
  }));

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formMethods = useForm<IScoreFormValues>({
    defaultValues: {
      equipe1: "0",
      equipe2: "0",
      coeff: "1",
    },
  });
  const { register, handleSubmit, setValue } = formMethods;
  const _onSubmit: SubmitHandler<IScoreFormValues> = (dataEquipe) => {
    dispatch(scoreMatch({ ...dataEquipe, match_id: match.id as string }));
    Swal.fire({
      icon: "success",
      title: "Crée avec succès",
      text: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(getAllMatchs(groupe.id));
    setValue("equipe1", "0");
    setValue("equipe2", "0");
    setValue("coeff", "1");
    setMatch({
      id: "",
      date: "",
      time: "",
      groupe_id: "",
      equipes: [
        {
          id: "",
          name: "",
          country: "",
          icon: "",
          images: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "",
          name: "",
          country: "",
          icon: "",
          images: "",
          createdAt: "",
          updatedAt: "",
        },
      ],
      score: {
        equipe1: "",
        equipe2: "",
        id: "",
        match_id: "",
      },
      coeff: 1,
    });
  };

  useEffect(() => {
    setValue("coeff", `${match.coeff}`);
  }, [match]);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <Container>
      {match && (
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(_onSubmit)}>
            <p className={classes.selectMatchText}>
              {t("admin.Results.selectEvent")}
            </p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("admin.Results.event")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="events"
                onChange={handleChangeEvents}
              >
                {events.map((el, index) => (
                  <MenuItem key={index} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>

              <p className={classes.MatchText}>
                {t("admin.Results.selectGroup")}
              </p>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("admin.Results.groups")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={groupe.name}
                defaultValue={groupe.name}
                label="Match"
                onChange={handleChange}
              >
                {groupes.length > 0 &&
                  groupes.map((el, index) => (
                    <MenuItem key={index} value={el.id}>
                      {el.name}
                    </MenuItem>
                  ))}
              </Select>

              <p className={classes.MatchText}>
                {t("admin.Results.selectMatch")}
              </p>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("admin.Results.matchs")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={match.date}
                label="Match"
                onChange={handleChange2}
              >
                {matchs.map(
                  (el, index) =>
                    !el.score && (
                      <MenuItem key={index} value={el.id}>
                        {" "}
                        {el.equipes[0].name}{" "}
                        <img
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              el.equipes[0].images) as any
                          }
                          width="24"
                          height="18"
                          style={{ marginLeft: "5px" }}
                          alt="Country flag"
                        ></img>
                        &ensp; Vs &ensp;
                        <img
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              el.equipes[1].images) as any
                          }
                          width="24"
                          height="18"
                          style={{ marginRight: "5px" }}
                          alt="Country flag"
                        ></img>{" "}
                        {el.equipes[1].name}&ensp;
                        <b>{moment(el.date).format("YYYY-MM-DD")}</b>
                      </MenuItem>
                    )
                )}
              </Select>

              <p className={classes.MatchText}>{t("admin.Results.match")}</p>
            </FormControl>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mb: 0.5 }}
            >
              <Grid item xs={5}>
                <Item>
                  <b>
                    {match.equipes[0].name &&
                    match.equipes[0].name.length > 0 ? (
                      match.equipes[0].name
                    ) : (
                      <p>Equipe 1</p>
                    )}
                  </b>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <p className={classes.vs}>Vs</p>
              </Grid>
              <Grid item xs={5}>
                <Item>
                  <b>
                    {match.equipes[1].name &&
                    match.equipes[1].name.length > 0 ? (
                      match.equipes[1].name
                    ) : (
                      <p>Equipe 2</p>
                    )}
                  </b>
                </Item>
              </Grid>
            </Grid>

            <p className={classes.MatchText}>{t("admin.Results.date")}</p>

            <Item>
              <b>
                {match.date && match.date.length > 0 ? (
                  moment(match.date).format("YYYY-MM-DD")
                ) : (
                  <p>Date du match</p>
                )}
              </b>
            </Item>
            <p className={classes.MatchText}>{t("admin.Results.event")}</p>
            <Item>
              <p>
                <b>Coupe du monde</b>
              </p>
            </Item>
            <p className={classes.MatchText}>{t("admin.Results.categorie")}</p>
            <Item>
              <p>
                <b>Football</b>
              </p>
            </Item>
            <p className={classes.coefficientText}>
              {t("admin.Results.coefficient")}
            </p>

            <Grid
              container
              component="form"
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mb: 0.5 }}
              noValidate
              autoComplete="off"
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputProps={{
                    inputProps: {
                      min: match.score,
                      style: {
                        textAlign: "center",
                        backgroundColor: "#eef2f8",
                        fontSize: "20px",
                      },
                    },
                  }}
                  type="number"
                  required
                  {...register("coeff")}
                />{" "}
              </Grid>
            </Grid>

            <p className={classes.MatchText}>{t("admin.Results.results")}</p>
            <Grid
              container
              component="form"
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mb: 0.5 }}
              noValidate
              autoComplete="off"
            >
              <Grid item xs={5}>
                <TextField
                  InputProps={{
                    inputProps: {
                      min: 0,
                      style: {
                        textAlign: "center",
                        backgroundColor: "#eef2f8",
                        fontSize: "20px",
                      },
                    },
                  }}
                  type="number"
                  required
                  {...register("equipe1")}
                />{" "}
              </Grid>
              <Grid item xs={2}>
                <p className={classes.tiret}>-</p>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  InputProps={{
                    inputProps: {
                      min: 0,
                      style: {
                        textAlign: "center",
                        backgroundColor: "#eef2f8",
                        fontSize: "20px",
                      },
                    },
                  }}
                  type="number"
                  required
                  {...register("equipe2")}
                />
              </Grid>
            </Grid>

            {/* <button className={classes.botton}>Envoyer</button> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: "15px" }}
              >
                {t("admin.Results.send")}
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </Container>
  );
}

export default InsertMatchResult;
