import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import profilePhoto from "../../../assets/profilePhoto.png";
import { useStyles } from "./rankingEmployeStyle";
import {

  Container,
} from "@mui/material";
import {
  getAllPronosticsHistoryEmployeesForPartner,
  getEachEventPronosticsEmployeeForEmployee,
} from "../../../../../_redux/actions/pronostics";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import CircleLoading from "../../../CircleLoading";
import { useTranslation } from "react-i18next";
import EventSelect from "./eventSelect";

function RankingEmploye() {
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { totalPronosticsEmployee } }) =>
      totalPronosticsEmployee
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalDrawScoreEmployee = useAppSelector(
    ({ drawSlice: { totalDrawScoreEmployee } }) => totalDrawScoreEmployee
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pointsPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { pointsPronosticsEmployee } }) =>
      pointsPronosticsEmployee
  );

  const eachPointsPronostics = useAppSelector(
    ({ pronosticsSlice: { eachPronosticsEventEmployeeForEmployee } }) =>
      eachPronosticsEventEmployeeForEmployee
  );
  const { pronosticsMatchs } = useAppSelector((state) => state.pronosticsSlice);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  const { t } = useTranslation();



  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true);
    dispatch(getEachEventPronosticsEmployeeForEmployee());
    dispatch(getAllPronosticsHistoryEmployeesForPartner());

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const [page, setPage] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
  const lang =useAppSelector(({languageSlice : {lang}})=> lang)
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      {loading && eachPointsPronostics && eachPointsPronostics.length > 0 ? (
        <CircleLoading loading={loading} />
      ) : (
        <Paper elevation={0} sx={{ pb: 8 }}>
          <EventSelect />
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <div className={classes.borderCell} style={{direction: lang === "ar"?"rtl":"ltr"}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction: lang ==="ar"?"rtl":"ltr"}}>
                <TableHead>
                  <TableRow
                    style={{
                      background:
                        "-webkit-linear-gradient(left, #2192ff, #135799)",
                    }}
                  >
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "20%",
                        position: "sticky",
                        left: 0,
                        background: "#2192ff",
                      }}
                      className={classes.rankCell}
                      align="left"
                    >
                      <p>{t("partner.Ranking.rankUsers")}</p>
                    </TableCell>
                    {eachPointsPronostics &&
                      eachPointsPronostics[0].eventsData.map((evn, indexE) => (
                        <>
                          {evn.event.id !== 0 ? (
                            <TableCell
                              style={{ fontWeight: "bold", color: "white" }}
                              align="center"
                              key={indexE}
                              className={classes.pointsCell}
                            >
                              <p>{evn.event.name}</p>
                              {/* {t("employee.Ranking.pointsPronostics")} */}
                            </TableCell>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    {/* <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.pointsQualification")}
                    </TableCell> */}
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.totalPoints")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "15%",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.difference")}
                    </TableCell>
                    {eachPointsPronostics &&
                      eachPointsPronostics[0].eventsData.map((evn, indexE) => (
                        <>
                          {evn.event.id !== 0 ? (
                            <TableCell
                              style={{ fontWeight: "bold", color: "white" }}
                              align="center"
                              key={indexE}
                              className={classes.pointsCell}
                            >
                              <p>Historique {evn.event.name}</p>

                              {/* {t("employee.Ranking.pointsPronostics")} */}
                            </TableCell>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}

                    {/* <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "15% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.pronosticsHistory")}
                    </TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {eachPointsPronostics &&
                    eachPointsPronostics.map((el, index) => (
                      <TableRow className={classes.table} key={index}>
                        <TableCell
                          component="th"
                          align="left"
                          style={{
                            fontWeight: "bold",
                            fontSize: "10px",
                            textTransform: "capitalize",
                            color:
                              user.email === el.emp.email ? "black" : "Grey",

                            width: "20% !important",
                            position: "sticky",
                            left: 0,
                            background: "white",
                            backgroundColor:
                              user.email === el.emp.email ? "#a6d3ff" : "white",
                          }}
                        >
                          {/* {index + 1}. {el.emp.email} */}
                          {index + 1}. {el.emp.email.split("@")[0]}
                        </TableCell>{" "}
                        {el.eventsData.map((ev, indexR) => (
                          <>
                            {ev.event.id !== 0 ? (
                              <TableCell
                                align="center"
                                style={{
                                  color: "#0087FF",
                                  fontWeight: "bold",
                                  backgroundColor:
                                    user.email === el.emp.email
                                      ? "#a6d3ff"
                                      : "",
                                }}
                              >
                                {ev.totalpornosticsEmp &&
                                ev.totalpornosticsEmp.point &
                                  ev.totalpornosticsEmp.point ? (
                                  ev.totalpornosticsEmp.point
                                ) : (
                                  <p>0</p>
                                )}
                              </TableCell>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                        <TableCell
                          align="center"
                          style={{
                            color: "#005199",
                            fontWeight: "bold",
                            backgroundColor:
                              user.email === el.emp.email ? "#a6d3ff" : "",
                          }}
                        >
                          <p>
                            {el.pointsPronostics & el.pointsPronostics ? (
                              el.pointsPronostics
                            ) : (
                              <p>0</p>
                            )}
                          </p>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                            backgroundColor:
                              user.email === el.emp.email ? "#a6d3ff" : "",
                          }}
                        >
                          {el.difference}
                        </TableCell>
                        {el.eventsData.map((ev, indexR) => (
                          <>
                            {ev.event.id !== 0 ? (
                              <TableCell
                                align="center"
                                style={{
                                  color: "#0087FF",
                                  fontWeight: "bold",
                                  backgroundColor:
                                    user.email === el.emp.email
                                      ? "#a6d3ff"
                                      : "",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderLeft: "solid",
                                      height: "1%",
                                      left: "50%",
                                    }}
                                  ></div>
                                  {pronosticsMatchs &&
                                  pronosticsMatchs.filter(
                                    (element) =>
                                      +element.employee_id === +el.emp.id &&
                                      element.matchs.groupes &&
                                      +element.matchs.groupes.event_id ===
                                        +ev.event.id
                                  ).length === 0 ? (
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {t("partner.Ranking.noPronosticsYet")}
                                    </p>
                                  ) : (
                                    <>
                                      {pronosticsMatchs &&
                                        pronosticsMatchs.length > 0 &&
                                        pronosticsMatchs
                                          .filter(
                                            (element) =>
                                              +element.employee_id ===
                                                +el.emp.id &&
                                              element.matchs.groupes &&
                                              +element.matchs.groupes
                                                .event_id === +ev.event.id
                                          )
                                          .map((last, index) => (
                                            <>
                                              {index <= 4 && (
                                                <div>
                                                  {parseInt(
                                                    last.matchs.pronosticsMatchs
                                                      .point
                                                  ) /
                                                    parseInt(
                                                      last.matchs.coeff
                                                    ) ===
                                                    3 &&
                                                  last.matchs
                                                    .score_duplicate === 1 ? (
                                                    <p
                                                      className={
                                                        classes.pointsGreen
                                                      }
                                                    >
                                                      {
                                                        last.matchs
                                                          .pronosticsMatchs
                                                          .point
                                                      }
                                                    </p>
                                                  ) : (
                                                      <p
                                                        className={
                                                          classes.pointsRed
                                                        }
                                                      >
                                                        -
                                                      </p>
                                                    ) &&
                                                    parseInt(
                                                      last.matchs
                                                        .pronosticsMatchs.point
                                                    ) /
                                                      parseInt(
                                                        last.matchs.coeff
                                                      ) ===
                                                      0 &&
                                                    last.matchs
                                                      .score_duplicate === 1 ? (
                                                    <p
                                                      className={
                                                        classes.pointsRed
                                                      }
                                                    >
                                                      {
                                                        last.matchs
                                                          .pronosticsMatchs
                                                          .point
                                                      }
                                                    </p>
                                                  ) : (
                                                      <p
                                                        className={
                                                          classes.pointsRed
                                                        }
                                                      >
                                                        -
                                                      </p>
                                                    ) &&
                                                    parseInt(
                                                      last.matchs
                                                        .pronosticsMatchs.point
                                                    ) /
                                                      parseInt(
                                                        last.matchs.coeff
                                                      ) ===
                                                      1 &&
                                                    last.matchs
                                                      .score_duplicate === 1 ? (
                                                    <p
                                                      className={
                                                        classes.pointsOrange
                                                      }
                                                    >
                                                      {
                                                        last.matchs
                                                          .pronosticsMatchs
                                                          .point
                                                      }
                                                    </p>
                                                  ) : (
                                                      <p
                                                        className={
                                                          classes.pointsGrey
                                                        }
                                                      >
                                                        -
                                                      </p>
                                                    ) &&
                                                    parseInt(
                                                      last.matchs
                                                        .pronosticsMatchs.point
                                                    ) /
                                                      parseInt(
                                                        last.matchs.coeff
                                                      ) ===
                                                      2 &&
                                                    last.matchs
                                                      .score_duplicate === 1 ? (
                                                    <p
                                                      className={
                                                        classes.pointsYellow
                                                      }
                                                    >
                                                      {
                                                        last.matchs
                                                          .pronosticsMatchs
                                                          .point
                                                      }
                                                    </p>
                                                  ) : (
                                                      <p
                                                        className={
                                                          classes.pointsGrey
                                                        }
                                                      >
                                                        {
                                                          last.matchs
                                                            .pronosticsMatchs
                                                            .point
                                                        }
                                                      </p>
                                                    ) &&
                                                    last.matchs
                                                      .score_duplicate === 2 ? (
                                                    <p
                                                      className={
                                                        classes.pointsGrey
                                                      }
                                                    >
                                                      {
                                                        last.matchs
                                                          .pronosticsMatchs
                                                          .point
                                                      }
                                                    </p>
                                                  ) : (
                                                    <p
                                                      className={
                                                        classes.pointsGrey
                                                      }
                                                    >
                                                      -
                                                    </p>
                                                  )}
                                                </div>
                                              )}
                                            </>
                                          ))}
                                    </>
                                  )}
                                </div>{" "}
                              </TableCell>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}

export default RankingEmploye;
