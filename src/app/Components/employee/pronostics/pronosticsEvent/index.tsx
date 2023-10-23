import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import {
  getPronosticEmployee,
  getPronosticsEmployee,
} from "../../../../../_redux/actions/pronostics";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal";
import "./pronosticsEvent.css";
import CircleLoading from "../../../CircleLoading";
import fire from "../../../../assets/fire.gif";
import { useStyles } from "./pronosticsEventStyles";
import { useTranslation } from "react-i18next";
import { getEmployeeOptions } from "../../../../../_redux/actions/options";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../_redux/store/configureStore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { getAllEquipes } from "../../../../../_redux/actions/equipes";

export default function PronosticsEvent() {
  const pronostics = useAppSelector(
    ({ pronosticsSlice: { pronostics } }) => pronostics
  );
  const options = useSelector(
    (state: RootState) => state.optionsSlice.employeeOptions
  );
  // const { equipesEvents } = useAppSelector((state) => state.equipesSlice);

  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();

  const [searchEquipe, setSearchEquipe] = useState([]);
  const [pronosticsFilter, setPronosticsFilter] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState<any>();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState<boolean>(true);
  // const changeSelect = (e) => {
  //   setSelectedValue(e.target.value);
  // };
  useEffect(() => {
    setLoading(true);
    dispatch(getEmployeeOptions(params.id as string));
    dispatch(getPronosticsEmployee(params.id as string));
    // dispatch(getAllEquipes());
    setTimeout(() => {
      setLoading(false);
    }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (!selectedValue) {
      setSearchEquipe(pronostics);
    } else if (selectedValue === "0") {
      setSearchEquipe(pronostics);
    } else {
      setSearchEquipe(
        pronostics.filter((pronostic) => {
          console.log("test", selectedValue);
          return (
            pronostic.matchs.equipes[0].id === selectedValue ||
            pronostic.matchs.equipes[1].id === selectedValue ||
            pronostics === selectedValue
          );
        })
      );
    }
    let pronosticsFilterTmp = [
      ...pronostics.map((pronostic) => pronostic.matchs.equipes[0]),
      ...pronostics.map((pronostic) => pronostic.matchs.equipes[1]),
    ];
    setPronosticsFilter(
      pronosticsFilterTmp.filter(
        (a, i) => pronosticsFilterTmp.findIndex((s) => a.id === s.id) === i
      )
    );
  }, [selectedValue, pronostics]);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
    setPage(0);
  };
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

  const updatePronostic = async (match_id: string) => {
    await dispatch(getPronosticEmployee(match_id as string));
    navigate(`/pronostics/game/${params.id}/${match_id}`);
  };
  return (
    <Container
      style={{
        marginTop: "75px",
        paddingBottom: "30px",
      }}
    >
      <Stack>
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-simple-select-label">
            {t("partner.Ranking.SelectSortingTeam")}
          </InputLabel>
          <Select
            onChange={handleChange}
            labelId="demo-select-small"
            id="demo-select-small"
            label={t("partner.Ranking.SelectSortingTeam")}
            className={classes.inputSelect}
          >
            <MenuItem value="0">{t("admin.Equipes.AllEquipes")}</MenuItem>
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
              {searchEquipe
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pronostic, index) => (
                  <Box key={index}>
                    <Box
                      className="laptop-display-pronostics-event"
                      onClick={() => {
                        // const matchDate = new Date(pronostic.matchs.date);
                        // matchDate.setHours(matchDate.getHours() - 1);
                        // new Date() < matchDate
                        //   ?
                        updatePronostic(pronostic.match_id);
                        // : Swal.fire({
                        //     icon: "error",
                        //     title: "YOU_CAN'T_UPDATE_PREDICATE",
                        //     showConfirmButton: false,
                        //     timer: 1500,
                        //     width: 500,
                        //   });
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sx={{
                          my: 4,
                          pb: 2,
                          boxShadow:
                            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                          borderRadius: "30px",
                        }}
                      >
                        {parseInt(pronostic.matchs.coeff) !== 1 ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                              float: "right",
                              paddingRight: "20px",
                              paddingTop: "10px",
                            }}
                          >
                            <img
                              className={classes.flame}
                              src={fire}
                              alt="Fire"
                            ></img>

                            <p className={classes.coeff}>
                              Coefficient : {pronostic.matchs.coeff}
                            </p>
                          </div>
                        ) : (
                          <></>
                        )}

                        <Grid container spacing={2} direction="row">
                          <Grid
                            container
                            item
                            xs={12}
                            md={4}
                            direction="row"
                            style={{
                              paddingLeft: "50px",
                              paddingRight: "50px",
                            }}
                          >
                            <Grid
                              xs={7}
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
                            <Grid
                              xs={5}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                              }}
                            >
                              <img
                                // src={`https://flagcdn.com/32x24/${pronostic.matchs.equipes[0].icon.toLowerCase()}.png`}

                                src={
                                  (process.env.REACT_APP_UPLOADS_LOGO +
                                    pronostic.matchs.equipes[0].images) as any
                                }
                                width="32"
                                height="24"
                                alt={pronostic.matchs.equipes[0].name}
                              ></img>
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
                            <Grid
                              xs={3}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                              }}
                            >
                              <h3>{pronostic.equipe1}</h3>
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
                                {" "}
                                {pronostic.matchs.date
                                  ? moment(pronostic.matchs.date).format(
                                      "YYYY-MM-DD H:mm "
                                    )
                                  : "Date not set"}
                              </Typography>
                            </Grid>

                            <Grid
                              xs={3}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                              }}
                            >
                              <h3>{pronostic.equipe2}</h3>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            item
                            xs={12}
                            md={4}
                            direction="row"
                            style={{
                              paddingLeft: "50px",
                              paddingRight: "50px",
                            }}
                          >
                            <Grid
                              xs={5}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                              }}
                            >
                              <img
                                // src={`https://flagcdn.com/32x24/${pronostic.matchs.equipes[1].icon.toLowerCase()}.png`}
                                src={
                                  (process.env.REACT_APP_UPLOADS_LOGO +
                                    pronostic.matchs.equipes[1].images) as any
                                }
                                width="32"
                                height="24"
                                alt={pronostic.matchs.equipes[1].name}
                              ></img>
                            </Grid>
                            <Grid
                              xs={7}
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
                          </Grid>
                        </Grid>

                        <Container
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h6" component="h6">
                            {t("employee.Pronostics.result")} :{" "}
                          </Typography>
                          <div
                            style={{
                              textDecoration: "underline #2d314a",
                              marginLeft: "5px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {pronostic.matchs.score.match_id
                                ? `${pronostic.matchs.score.equipe1}-${pronostic.matchs.score.equipe2}`
                                : `${t("employee.Pronostics.notYet")}`}
                            </Typography>
                          </div>
                        </Container>
                        <Container
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "nowrap",
                            marginTop: "10px",
                          }}
                        >
                          <Typography variant="h6" component="h6">
                            {" "}
                            {t("employee.Pronostics.points")}:{" "}
                          </Typography>
                          <div
                            style={{
                              color: "white",
                              marginLeft: "5px",
                              paddingTop: "2px",
                              paddingBottom: "2px",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              backgroundColor: "#6c6e80",
                              borderRadius: "50%",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {" "}
                              {pronostic.matchs.pronosticsMatchs.match_id
                                ? pronostic.matchs.pronosticsMatchs.point
                                : "-"}
                            </Typography>
                          </div>{" "}
                          &nbsp;
                          <Typography variant="h6" component="h6">
                            {" "}
                            Diff :{" "}
                          </Typography>
                          <div
                            style={{
                              color: "white",
                              marginLeft: "5px",
                              paddingTop: "2px",
                              paddingBottom: "2px",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              backgroundColor: "#6c6e80",
                              borderRadius: "50%",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {pronostic.matchs.pronosticsMatchs.match_id
                                ? pronostic.matchs.pronosticsMatchs.diff
                                : "-"}
                            </Typography>
                          </div>
                          &nbsp;
                          <Typography variant="h6" component="h6">
                            {" "}
                            Bonus:{" "}
                          </Typography>
                          <div
                            style={{
                              color: "white",
                              marginLeft: "5px",
                              paddingTop: "2px",
                              paddingBottom: "2px",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              backgroundColor: "#6c6e80",
                              borderRadius: "50%",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {pronostic.matchs.pronosticsMatchs.match_id &&
                              pronostic.matchs.pronosticsMatchs.match_id !==
                                options.double_match_id &&
                              parseInt(pronostic.matchs.coeff) !== 1
                                ? parseInt(
                                    pronostic.matchs.pronosticsMatchs.point
                                  ) -
                                  parseInt(
                                    pronostic.matchs.pronosticsMatchs.point
                                  ) /
                                    parseInt(pronostic.matchs.coeff)
                                : pronostic.matchs.pronosticsMatchs.match_id &&
                                  pronostic.matchs.pronosticsMatchs.match_id ===
                                    options.double_match_id &&
                                  parseInt(pronostic.matchs.coeff) !== 1
                                ? (parseInt(
                                    pronostic.matchs.pronosticsMatchs.point
                                  ) -
                                    parseInt(
                                      pronostic.matchs.pronosticsMatchs.point
                                    ) /
                                      parseInt(pronostic.matchs.coeff)) /
                                  2
                                : "-"}
                            </Typography>
                          </div>{" "}
                        </Container>
                      </Grid>
                    </Box>
                    <Box
                      className="mobile-display-pronostics-event"
                      onClick={() => {
                        // const matchDate = new Date(pronostic.matchs.date);
                        // matchDate.setHours(matchDate.getHours() - 1);
                        // new Date() < matchDate
                        //   ?
                        updatePronostic(pronostic.match_id);
                        // : Swal.fire({
                        //     icon: "error",
                        //     title: "YOU_CAN'T_UPDATE_PREDICATE",
                        //     showConfirmButton: false,
                        //     timer: 1500,
                        //     width: 500,
                        //   });
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sx={{
                          my: 4,
                          pb: 2,
                          boxShadow:
                            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                          borderRadius: "30px",
                        }}
                      >
                        {parseInt(pronostic.matchs.coeff) !== 1 ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                              float: "right",
                              paddingRight: "20px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            <img
                              className={classes.flame}
                              src={fire}
                              alt="Fire"
                            ></img>

                            <p className={classes.coeff}>
                              Coefficient : {pronostic.matchs.coeff}
                            </p>
                          </div>
                        ) : (
                          <p></p>
                        )}
                        <Grid
                          container
                          item
                          xs={12}
                          direction="row"
                          style={{ paddingLeft: "50px", paddingRight: "50px" }}
                        >
                          <Grid
                            xs={7}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "start",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {pronostic.matchs.equipes[0].name}
                            </Typography>
                          </Grid>
                          <Grid
                            xs={3}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "end",
                            }}
                          >
                            <img
                              // src={`https://flagcdn.com/32x24/${pronostic.matchs.equipes[0].icon.toLowerCase()}.png`}
                              src={
                                (process.env.REACT_APP_UPLOADS_LOGO +
                                  pronostic.matchs.equipes[0].images) as any
                              }
                              width="32"
                              height="24"
                              alt={pronostic.matchs.equipes[0].name}
                            ></img>
                          </Grid>
                          <Grid
                            xs={2}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "end",
                            }}
                          >
                            <h3>{pronostic.equipe1}</h3>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={12}
                          direction="row"
                          style={{ paddingLeft: "50px", paddingRight: "50px" }}
                        >
                          <Grid
                            xs={7}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "start",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              {pronostic.matchs.equipes[1].name}
                            </Typography>
                          </Grid>
                          <Grid
                            xs={3}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "end",
                            }}
                          >
                            <img
                              // src={`https://flagcdn.com/32x24/${pronostic.matchs.equipes[1].icon.toLowerCase()}.png`}
                              src={
                                (process.env.REACT_APP_UPLOADS_LOGO +
                                  pronostic.matchs.equipes[1].images) as any
                              }
                              width="32"
                              height="24"
                              alt={pronostic.matchs.equipes[1].name}
                            ></img>
                          </Grid>
                          <Grid
                            xs={2}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "end",
                            }}
                          >
                            <h3>{pronostic.equipe2}</h3>
                          </Grid>
                        </Grid>
                        <div
                          style={{
                            margin: "30px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid
                            item
                            xs={12}
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

                          <Container
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              Result :{" "}
                            </Typography>
                            <div
                              style={{
                                textDecoration: "underline #2d314a",
                                marginLeft: "5px",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                paddingLeft: "15px",
                                paddingRight: "15px",
                              }}
                            >
                              <Typography variant="h6" component="h6">
                                {pronostic.matchs.score.match_id
                                  ? `${pronostic.matchs.score.equipe1}-${pronostic.matchs.score.equipe2}`
                                  : " Not yet"}
                              </Typography>
                            </div>
                          </Container>
                          <Container
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexWrap: "nowrap",
                              marginTop: "10px",
                            }}
                          >
                            <Typography variant="h6" component="h6">
                              Point
                            </Typography>
                            <div
                              style={{
                                color: "white",
                                marginLeft: "5px",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                backgroundColor: "#6c6e80",
                                borderRadius: "50%",
                              }}
                            >
                              <Typography variant="h6" component="h6">
                                {" "}
                                {pronostic.matchs.pronosticsMatchs.match_id
                                  ? pronostic.matchs.pronosticsMatchs.point
                                  : "-"}
                              </Typography>
                            </div>{" "}
                            <Typography variant="h6" component="h6">
                              Diff
                            </Typography>
                            <div
                              style={{
                                color: "white",
                                marginLeft: "5px",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                backgroundColor: "#6c6e80",
                                borderRadius: "50%",
                              }}
                            >
                              <Typography variant="h6" component="h6">
                                {pronostic.matchs.pronosticsMatchs.match_id
                                  ? pronostic.matchs.pronosticsMatchs.diff
                                  : "-"}
                              </Typography>
                            </div>
                            <Typography variant="h6" component="h6">
                              Bonus
                            </Typography>
                            <div
                              style={{
                                color: "white",
                                marginLeft: "5px",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                backgroundColor: "#6c6e80",
                                borderRadius: "50%",
                              }}
                            >
                              <Typography variant="h6" component="h6">
                                {pronostic.matchs.pronosticsMatchs.match_id &&
                                pronostic.matchs.pronosticsMatchs.match_id !==
                                  options.double_match_id &&
                                parseInt(pronostic.matchs.coeff) !== 1
                                  ? parseInt(
                                      pronostic.matchs.pronosticsMatchs.point
                                    ) -
                                    parseInt(
                                      pronostic.matchs.pronosticsMatchs.point
                                    ) /
                                      parseInt(pronostic.matchs.coeff)
                                  : pronostic.matchs.pronosticsMatchs
                                      .match_id &&
                                    pronostic.matchs.pronosticsMatchs
                                      .match_id === options.double_match_id &&
                                    parseInt(pronostic.matchs.coeff) !== 1
                                  ? (parseInt(
                                      pronostic.matchs.pronosticsMatchs.point
                                    ) -
                                      parseInt(
                                        pronostic.matchs.pronosticsMatchs.point
                                      ) /
                                        parseInt(pronostic.matchs.coeff)) /
                                    2
                                  : "-"}
                              </Typography>
                            </div>{" "}
                          </Container>
                        </div>
                      </Grid>
                    </Box>
                  </Box>
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
                labelRowsPerPage={`${t("partner.Employees.rows")}` + ":"}
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
