import { Container, Grid, Stack, styled, TablePagination } from "@mui/material";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useStyles } from "./pronosticHistoryStyle";
import moment from "moment";
import fire from "../../../../assets/fire.gif";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { getPronosticsEmployeeForPartnerByAdmin } from "../../../../../_redux/actions/pronostics";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal";

function PronosticHistory() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let params = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pronosticsPartner = useAppSelector(
    ({ pronosticsSlice: { pronosticsPartner } }) => pronosticsPartner
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page, setPage] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(
      getPronosticsEmployeeForPartnerByAdmin({
        event_id: params.eventId as string,
        employee_id: params.employeeId as string,
      })
    );
  }, [dispatch, params.event_id, params.id]);

  return (
    <Container sx={{ mt: 8 }}>
      <p className={classes.historique}>
        {t("partner.Ranking.pronosticsHistory")}
      </p>

      {pronosticsPartner.length === 0 ? (
        <EmptyPageModal />
      ) : (
        <>
          {pronosticsPartner
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((el) => (
              <Paper elevation={4}>
                {" "}
                {parseInt(el.matchs.coeff) !== 1 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "white",
                      float: "right",
                    }}
                  >
                    <img className={classes.flame} src={fire} alt="Fire"></img>

                    <p className={classes.coeff}>
                      {t("partner.Ranking.coefficient")} : {el.matchs.coeff}
                    </p>
                  </div>
                ) : (
                  <p></p>
                )}
                <p className={classes.datePronostique}>
                  {t("partner.Ranking.pronosticDate")} :
                  <b>
                    {el.matchs.date
                      ? moment(el.createdAt).format("YYYY-MM-DD H:mm ")
                      : "Date not set"}
                  </b>
                </p>
                <p className={classes.dateMatch}>
                  {t("partner.Ranking.MatchDate")} :{" "}
                  <b>
                    {el.matchs.date
                      ? moment(el.matchs.date).format("YYYY-MM-DD H:mm ")
                      : "Date not set"}
                  </b>
                </p>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                >
                  <Grid item xs={5}>
                    <p className={classes.team1}>{el.matchs.equipes[0].name}</p>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                    <p className={classes.team2}>{el.matchs.equipes[1].name}</p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                  sx={{ mt: 0.5, mb: 8 }}
                >
                  <Grid item xs={5}>
                    <img
                      // src={`https://flagcdn.com/96x72/${el.matchs.equipes[0].icon.toLowerCase()}.png`}
                      src={
                        (process.env.REACT_APP_UPLOADS_LOGO +
                          el.matchs.equipes[0].images) as any
                      }
                      width="96"
                      height="72"
                      alt="Country flag"
                      className={classes.flag1}
                    ></img>
                    {/* <p className={classes.team1}>{el.matchs.equipes[0].name}</p> */}
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    // sx={{ textAlign: "center" }}
                    className={classes.scoreGrid}
                  >
                    <Stack
                      direction="row"
                      spacing={4}
                      className={classes.stack}
                    >
                      <Item className={classes.scoreBox}>
                        <p className={classes.score1}>
                          {el.matchs.score.equipe1 &&
                          el.matchs.score.equipe1.length > 0 ? (
                            el.matchs.score.equipe1
                          ) : (
                            <p>-</p>
                          )}
                        </p>
                      </Item>
                      <Item className={classes.scoreBox}>
                        <p className={classes.score1}>
                          {el.matchs.score.equipe2 &&
                          el.matchs.score.equipe2.length > 0 ? (
                            el.matchs.score.equipe2
                          ) : (
                            <p>-</p>
                          )}
                        </p>
                      </Item>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={4}
                      className={classes.stack}
                    >
                      {/* <Item className={classes.scoreBoxGreen}>
                  <p className={classes.score2}>{el.equipe1}</p>
                </Item> */}

                      {el.equipe1 === el.matchs.score.equipe1 ? (
                        <Item className={classes.scoreBoxGreen}>
                          <p className={classes.score2}>{el.equipe1}</p>
                        </Item>
                      ) : (
                        <Item className={classes.scoreBoxRed}>
                          <p className={classes.score2}>{el.equipe1}</p>
                        </Item>
                      )}

                      {/* <Item className={classes.scoreBoxGreen}>
                  <p className={classes.score2}>{el.equipe2}</p>
                </Item> */}

                      {el.equipe2 === el.matchs.score.equipe2 ? (
                        <Item className={classes.scoreBoxGreen}>
                          <p className={classes.score2}>{el.equipe2}</p>
                        </Item>
                      ) : (
                        <Item className={classes.scoreBoxRed}>
                          <p className={classes.score2}>{el.equipe2}</p>
                        </Item>
                      )}
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.stackPoints}
                      >
                        <p className={classes.pointText}>
                          {t("partner.Ranking.points")}
                        </p>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.stack}
                      >
                        <p className={classes.points}>
                          {el.matchs.pronosticsMatchs.point !== undefined
                            ? el.matchs.pronosticsMatchs.point
                            : "-"}
                        </p>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.stackDifference}
                      >
                        <p className={classes.pointText}>
                          {t("partner.Ranking.difference")}
                        </p>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.stack}
                      >
                        <p className={classes.points}>
                          {el.matchs.pronosticsMatchs.diff !== undefined
                            ? el.matchs.pronosticsMatchs.diff
                            : "-"}
                        </p>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={5}>
                    {/* <Stack
                      direction={{ xs: "column", md: "row-reverse" }}
                      spacing={4}
                    > */}
                    <img
                      // src={`https://flagcdn.com/96x72/${el.matchs.equipes[1].icon.toLowerCase()}.png`}
                      src={
                        (process.env.REACT_APP_UPLOADS_LOGO +
                          el.matchs.equipes[1].images) as any
                      }
                      width="96"
                      height="72"
                      alt="Country flag"
                      className={classes.flag2}
                    ></img>
                    {/* <p className={classes.team2}>{el.matchs.equipes[1].name}</p> */}
                    {/* </Stack> */}
                  </Grid>
                </Grid>
              </Paper>
            ))}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={pronosticsPartner.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, page) => handleChangePage(event, page)}
            onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
            labelRowsPerPage={"Row Page" + ":"}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
          />
        </>
      )}
    </Container>
  );
}

export default PronosticHistory;
