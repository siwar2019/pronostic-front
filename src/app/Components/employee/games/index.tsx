import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
// import { useStyles } from "./gamesStyles";
import { useParams } from "react-router-dom";
import {
  getAllMatchsForEmployee,
  getGroupeEquipe,
  getMatchByIds,
} from "../../../../_redux/actions/matchs";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import "./games.css";
import CircleLoading from "../../CircleLoading";
import GamesCollapse from "./gamesCollapse";
import { getEmployeeOptions } from "../../../../_redux/actions/options";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import { Stack } from "@mui/system";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useTranslation } from "react-i18next";
import moment from "moment";
import BoltIcon from "@mui/icons-material/Bolt";
export default function Games() {
  const [loading, setLoading] = useState<boolean>(true);

  const { groupesMatchs, groupeEquipe } = useAppSelector(
    (state) => state.matchsSlice
  );

  const options = useSelector(
    (state: RootState) => state.optionsSlice.employeeOptions
  );

  const matchs = useSelector(
    (state: RootState) => state.matchsSlice.optionsMatchs
  ).filter((match) => match !== null);

  const dispatch = useAppDispatch();
  let params = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllMatchsForEmployee(params.id as string));
    dispatch(getGroupeEquipe(params.id as string));
    dispatch(getEmployeeOptions(params.id as string)).then((data) => {
      dispatch(
        getMatchByIds([
          parseInt(data.payload.double_match_id),
          parseInt(data.payload.super_match_id),
          parseInt(data.payload.forgot_match_id),
        ])
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, [dispatch, params.id]);

  let superPronosticMatch = matchs
    ?.map(
      (match) =>
        match.id === options.super_match_id &&
        match.equipes.map((equipe: { name: string }) => equipe.name)
    )
    .filter((match) => match !== false);

  let doublePronosticMatch = matchs
    ?.map(
      (match) =>
        match.id === options.double_match_id &&
        match.equipes.map((equipe: { name: string }) => equipe.name)
    )
    .filter((match) => match !== false);

  let forgotPronosticMatch = matchs
    ?.map(
      (match) =>
        match.id === options.forgot_match_id &&
        match.equipes.map((equipe: { name: string }) => equipe.name)
    )
    .filter((match) => match !== false);

  return (
    <Container style={{ marginTop: "50px", paddingBottom: "30px" }}>
      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <>
          {options.super_pronostic ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <BoltIcon style={{ fontSize: 30 }} color="disabled" />
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                "SUPER PRONOSTIC"
                {t("employee.Matchs.jokerUsed")}
                {moment(options.use_date_super).format("DD-MM-YYYY")} match{" "}
                {superPronosticMatch[0]?.map((equipe: string) => equipe + " ")}
              </Typography>{" "}
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <BoltIcon style={{ fontSize: 30 }} color="error" />
              <Typography
                variant="body1"
                color="error"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                "SUPER PRONOSTIC"
                {t("employee.Matchs.jokerAvailable")}
              </Typography>
            </Stack>
          )}
          {options.double_score ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <LooksTwoIcon style={{ fontSize: 30 }} color="disabled" />
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                "DOUBLE SCORE"
                {t("employee.Matchs.jokerUsed")}{" "}
                {moment(options.use_date_double).format("DD-MM-YYYY")} match{" "}
                {doublePronosticMatch[0]?.map((equipe: string) => equipe + " ")}
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <LooksTwoIcon style={{ fontSize: 30 }} color="error" />
              <Typography
                variant="body1"
                color="error"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                "DOUBLE SCORE"
                {t("employee.Matchs.jokerAvailable")}
              </Typography>
            </Stack>
          )}
          {options.forgot_save ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <PsychologyIcon style={{ fontSize: 30 }} color="disabled" />
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                "FORGOT SAVE"
                {t("employee.Matchs.jokerUsed")}{" "}
                {moment(options.use_date_forgot).format("DD-MM-YYYY")} match{" "}
                {forgotPronosticMatch[0]?.map((equipe: string) => equipe + " ")}
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <PsychologyIcon style={{ fontSize: 30 }} color="error" />
              <Typography
                variant="body1"
                color="error"
                style={{ fontWeight: "bold" }}
              >
                "FORGOT SAVE"
                {t("employee.Matchs.jokerAvailable")}
              </Typography>
            </Stack>
          )}
          <Grid item xs={12} sx={{ mt: 4 }}>
            {groupesMatchs.length === 0 && groupeEquipe.length === 0 ? (
              <EmptyPageModal />
            ) : (
              groupeEquipe.map((els, index) => (
                <GamesCollapse
                  groupe={els}
                  groupesMatchs={groupesMatchs}
                  key={index}
                  event_id={params.id}
                />
              ))
            )}
          </Grid>
        </>
      )}
    </Container>
  );
}
