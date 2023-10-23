import { Container, Grid, Stack, styled, TablePagination } from "@mui/material";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getAllPronosticsEmployeeForPartner,
  getPronosticsEmployee,
} from "../../../../_redux/actions/pronostics";

import { useStyles } from "./pronosticHistoryStyle";
import moment from "moment";
import EmptyPageModal from "../emptyPage/emptyPageModal";
import fire from "../../../assets/fire.gif";
import { useTranslation } from "react-i18next";
import CircleLoading from "../../CircleLoading";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ITotalPronosticsEmployeePartner } from "../../../../types/pronostic";
export default function PronosticHistory() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // a.matchs.equipes[0].name < b.matchs.equipes[0].name ? -1 : 1

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let params = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pronosticsPartner = useAppSelector(
    ({ pronosticsSlice: { allPronosticsPartner } }) => allPronosticsPartner
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
  const pronostics = useAppSelector(
    ({ pronosticsSlice: { pronostics } }) => pronostics
  );
  const [searchEquipe, setSearchEquipe] = useState(pronosticsPartner);
  const [selectedValue, setSelectedValue] = React.useState<any>();
  const [selectedValue1, setSelectedValue1] = React.useState<any>();

  const [pronosticsFilter, setPronosticsFilter] = useState([]);

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    dispatch(
      getAllPronosticsEmployeeForPartner({
        id: params.id as string,
      })
    );

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch, params.id]);

  const sort = (
    pronosticsPartner: ITotalPronosticsEmployeePartner[],
    selectedValue: any
  ) => {
    switch (selectedValue) {
      case "ascending":
        return [...pronosticsPartner].sort((a, b) =>
          a.matchs.equipes[0].name < b.matchs.equipes[0].name ? -1 : 1
        );
      case "descending":
        return [...pronosticsPartner].sort((a, b) =>
          a.matchs.equipes[0].name > b.matchs.equipes[0].name ? -1 : 1
        );
      default:
        return [...pronosticsPartner];
    }
  };

  const getDataByEquipe = (
    pronosticsPartner: ITotalPronosticsEmployeePartner[],
    selectedValue1: any
  ) => {
    setSearchEquipe(
      selectedValue1
        ? pronosticsPartner.filter((pronostic) => {
            return (
              pronostic.matchs.equipes[0].id === selectedValue1 ||
              pronostic.matchs.equipes[1].id === selectedValue1
            );
          })
        : pronosticsPartner
    );
  };
  useEffect(() => {
    ////////
    let pronosticsFilterTmp = [
      ...pronosticsPartner.map((el) => el.matchs.equipes[0]),
      ...pronosticsPartner.map((el) => el.matchs.equipes[1]),
    ];
    setPronosticsFilter(
      pronosticsFilterTmp.filter(
        (a, i) => pronosticsFilterTmp.findIndex((s) => a.id === s.id) === i
      )
    );
  }, [pronosticsPartner]);

  useEffect(() => {
    if (!selectedValue && !selectedValue1) {
      setSearchEquipe(pronosticsPartner);
    } else {
      sort(pronosticsPartner, selectedValue);
      getDataByEquipe(sort(pronosticsPartner, selectedValue), selectedValue1);
    }
  }, [selectedValue, selectedValue1, pronosticsPartner]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
    setPage(0);
  };
  const handleChangeTwo = (event: SelectChangeEvent) => {
    setSelectedValue1(event.target.value as string);
  };

  return (
    <Container sx={{ mt: 8 }}>
      <p className={classes.historique}>
        {t("partner.Ranking.pronosticsHistory")}
      </p>
      <Stack direction="row" className={classes.gridSelect}>
        <FormControl className={classes.formControl}>
          <InputLabel className="" id="demo-simple-select-label">
            {t("partner.Ranking.SelectSortingTeam")}
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label={t("partner.Ranking.SelectSortingTeam")}
            onChange={handleChange}
          >
            <MenuItem value="">{t("partner.Ranking.Initialize")}</MenuItem>
            <MenuItem value="ascending">
              {t("partner.Ranking.ascending")}
            </MenuItem>
            <MenuItem value="descending">
              {t("partner.Ranking.descending")}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControlTwo}>
          <InputLabel className="" id="demo-simple-select-label">
            {t("partner.Ranking.SelectSortingTeam")}
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label={t("partner.Ranking.SelectSortingTeam")}
            onChange={handleChangeTwo}
          >
            <MenuItem value="">{t("admin.Equipes.AllEquipes")}</MenuItem>
            {pronosticsFilter.map((pronosticFilter, index) => (
              <MenuItem key={index} value={pronosticFilter.id}>
                {pronosticFilter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <>
          {searchEquipe.length === 0 ? (
            <EmptyPageModal />
          ) : (
            <>
              {searchEquipe &&
                searchEquipe
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
                          <img
                            className={classes.flame}
                            src={fire}
                            alt="Fire"
                          ></img>

                          <p className={classes.coeff}>
                            {t("partner.Ranking.coefficient")} :{" "}
                            {el.matchs.coeff}
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
                          <p className={classes.team1}>
                            {el.matchs.equipes[0].name}
                          </p>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5}>
                          <p className={classes.team2}>
                            {el.matchs.equipes[1].name}
                          </p>
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
                            {el.equipe1 === el.matchs.score.equipe1 ? (
                              <Item className={classes.scoreBoxGreen}>
                                <p className={classes.score2}>{el.equipe1}</p>
                              </Item>
                            ) : (
                              <Item className={classes.scoreBoxRed}>
                                <p className={classes.score2}>{el.equipe1}</p>
                              </Item>
                            )}

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
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                component="div"
                count={searchEquipe.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, page) => handleChangePage(event, page)}
                onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
                // eslint-disable-next-line no-useless-concat
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
        </>
      )}
    </Container>
  );
}
