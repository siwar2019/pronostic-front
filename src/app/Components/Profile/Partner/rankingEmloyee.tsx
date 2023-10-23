import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useStyles } from "./rankingEmployeStyle";
import { Button, Container, Grid, TablePagination } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllPronosticsHistoryEmployeesForPartner,
  getEachEventPronosticsForEmployee,
  getPointsPronosticsEmployeeByEvent,
  getPronosticsEmployeesForPartner,
  getTotalPointsPronosticsAllEventsForEmployee,
  getTotalPronosticsEmployee,
} from "../../../../_redux/actions/pronostics";
import CircleLoading from "../../CircleLoading";
import { useTranslation } from "react-i18next";
import { getTotalDrawScoreEmployee } from "../../../../_redux/actions/draw";
import SelectEventsForClassment from "./selectEventForClassment";
import events from "../../../../_redux/reducers/events";
import {
  getActiveEventsForPartner,
  getAllPartnerEvents,
} from "../../../../_redux/actions/events";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";

export default function RankingEmployee() {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);

  const { totalPronosticsEmployee, pronosticsMatchs } = useAppSelector(
    (state) => state.pronosticsSlice
  );
  const totalDrawScoreEmployee = useAppSelector(
    ({ drawSlice: { totalDrawScoreEmployee } }) => totalDrawScoreEmployee
  );
  const { events } = useAppSelector((state) => state.eventsSlice);

  const partner = useSelector((state: RootState) => state.auth.currentUser);

  const pointsPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { pointsPronosticsEmployee } }) =>
      pointsPronosticsEmployee
  );

  const totalPronosticsAllEvents = useAppSelector(
    ({ pronosticsSlice: { getTotalPronosticsEmployeeByPartnerAllEvents } }) =>
      getTotalPronosticsEmployeeByPartnerAllEvents
  );

  const eachPronosticsEvent = useAppSelector(
    ({ pronosticsSlice: { eachPronosticsEventEmployee } }) =>
      eachPronosticsEventEmployee
  );

  const activeEvents = useAppSelector(({ eventsSlice: { events } }) => events);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  let params = useParams();

  useEffect(() => {
    dispatch(getAllPartnerEvents(partner.id));
    dispatch(getActiveEventsForPartner());
    dispatch(getEachEventPronosticsForEmployee());
    dispatch(getAllPronosticsHistoryEmployeesForPartner());

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // dispatch(getPronosticsEmployeesForPartner(params.event_id as string));
    // dispatch(getPronosticsEmployeesForPartner(params.event_id as string));
    // dispatch(getPointsPronosticsEmployeeByEvent(params.event_id as string));
    // dispatch(getTotalDrawScoreEmployee(params.event_id as string));
    // dispatch(getTotalPointsPronosticsAllEventsForEmployee());
  }, [dispatch, partner.id]);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

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
  const navigate = useNavigate();

  // const handleClick = (eventId: number, userId: number) => {
  //   navigate(`/eventPronostic/${eventId}/${userId}`);
  // };

  const handleClick = (userId: string) => {
    navigate(`/pronosticHistory/${userId}`);
  };

  const handleClickDraw = (eventId: number, userId: number) => {
    navigate(`/drawHistory/${eventId}/${userId}`);
  };

  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      {loading &&
      eachPronosticsEvent &&
      totalPronosticsAllEvents &&
      activeEvents.length === 0 &&
      eachPronosticsEvent.length > 0 &&
      totalPronosticsAllEvents.length > 0 ? (
        <CircleLoading loading={loading} />
      ) : activeEvents.length === 0 ? (
        <p>dd</p>
      ) : (
        <Paper elevation={0} sx={{ pb: 8 }}>
          <SelectEventsForClassment />
          <TableContainer component={Paper} sx={{ mt: 8 }}>
            <div className={classes.borderCell}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" >
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
                        // background: "#2192ff",
                      }}
                      className={classes.rankCell}
                      align="left"
                    >
                      <p>{t("partner.Ranking.rankUsers")}</p>
                    </TableCell>
                    {eachPronosticsEvent.length > 0 &&
                      eachPronosticsEvent &&
                      eachPronosticsEvent[0].eventsData.map((evn, indexE) => (
                        <TableCell
                          style={{ fontWeight: "bold", color: "white" }}
                          align="center"
                          key={indexE}
                          className={classes.pointsCell}
                        >
                          <p>{evn.event.name}</p>

                          {/* {t("employee.Ranking.pointsPronostics")} */}
                        </TableCell>
                      ))}
                    {/* <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.pointsQualification")}
                    </TableCell> */}
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.totalPoints")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "10% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.difference")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "15% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.pronosticsHistory")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "10% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.details")}
                    </TableCell>
                  </TableRow>
                </TableHead>

                {/* <TableBody>
                  {totalPronosticsEmployee.length > 0 &&
                    totalPronosticsEmployee.map((el, index) => (
                      <TableRow className={classes.table} key={index}>
                        <TableCell
                          component="th"
                          align="left"
                          style={{
                            fontWeight: "bold",
                            fontSize: "10px",
                            color: "Grey",
                            width: "20% !important",
                            position: "sticky",
                            left: 0,
                            background: "white",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {index + 1}. {el.users.email}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {pointsPronosticsEmployee &&
                          pointsPronosticsEmployee.length > 0 &&
                          pointsPronosticsEmployee.find(
                            (res) => +res.emp.id === el.employee_id
                          ) ? (
                            pointsPronosticsEmployee.find(
                              (res) => +res.emp.id === el.employee_id
                            )?.pointsPronostics
                          ) : (
                            <p>0</p>
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#005199",
                            fontWeight: "bold",
                          }}
                        >
                          {totalDrawScoreEmployee &&
                          totalDrawScoreEmployee.length > 0 &&
                          totalDrawScoreEmployee.find(
                            (res) => +res.emp.id === el.employee_id
                          ) ? (
                            totalDrawScoreEmployee.find(
                              (res) => +res.emp.id === el.employee_id
                            ).pointsQualification
                          ) : (
                            <p>0</p>
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {el.point}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#005199",
                            fontWeight: "bold",
                          }}
                        >
                          {el.diff}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "10% !important",
                          }}
                        >
                          {pronosticsMatchs &&
                          pronosticsMatchs.filter(
                            (element) => element.employee_id === el.employee_id
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
                                      element.employee_id === el.employee_id
                                  )
                                  .map((last, index) => (
                                    <>
                                      {index <= 4 && (
                                        <div>
                                          {parseInt(
                                            last.matchs.pronosticsMatchs.point
                                          ) /
                                            parseInt(last.matchs.coeff) ===
                                          3 ? (
                                            <p className={classes.pointsGreen}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsRed}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              0 ? (
                                            <p className={classes.pointsRed}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsRed}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              1 ? (
                                            <p className={classes.pointsOrange}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsGrey}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              2 ? (
                                            <p className={classes.pointsYellow}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                            <p className={classes.pointsGrey}>
                                              -
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </>
                                  ))}
                            </>
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Button
                            onClick={() =>
                              handleClick(el.event_id, el.employee_id)
                            }
                            style={{
                              fontWeight: "bold",
                              textTransform: "capitalize",
                            }}
                            className={classes.buttonDetails}
                          >
                            {t("partner.Ranking.details")}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody> */}

                <TableBody>
                  {eachPronosticsEvent &&
                    eachPronosticsEvent.map((el, index) => (
                      <TableRow className={classes.table} key={index}>
                        <TableCell
                          component="th"
                          align="left"
                          style={{
                            fontWeight: "bold",
                            fontSize: "10px",
                            textTransform: "capitalize",
                            color: "Grey",
                            width: "50px !important",
                            position: "sticky",
                            left: 0,
                            background: "white",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {/* {index + 1}. {el.emp.email} */}
                          {index + 1}. {el.emp.email.split("@")[0]}
                        </TableCell>{" "}
                        {el.eventsData.map((ev, indexR) => (
                          <TableCell
                            key={indexR}
                            align="center"
                            style={{
                              color: "#0087FF",
                              fontWeight: "bold",
                            }}
                          >
                            <p>
                              {ev.totalpornosticsEmp.point &
                              ev.totalpornosticsEmp.point ? (
                                ev.totalpornosticsEmp.point
                              ) : (
                                <p>0</p>
                              )}
                            </p>
                          </TableCell>
                        ))}
                        <TableCell
                          align="center"
                          style={{
                            color: "#005199",
                            fontWeight: "bold",
                          }}
                        >
                          {/* {totalPronosticsAllEvents &&
                          totalPronosticsAllEvents.length > 0 &&
                          totalPronosticsAllEvents.find(
                            (res) => +res.emp.id === +el.emp.id
                          ) ? (
                            totalPronosticsAllEvents.find(
                              (res) => +res.emp.id === +el.emp.id
                            ).pointsPronostics
                          ) : (
                            <p>0</p>
                          )} */}
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
                          }}
                        >
                          {/* {totalPronosticsAllEvents &&
                          totalPronosticsAllEvents.length > 0 &&
                          totalPronosticsAllEvents.find(
                            (res) => +res.emp.id === +el.emp.id
                          ) ? (
                            totalPronosticsAllEvents.find(
                              (res) => +res.emp.id === +el.emp.id
                            ).difference
                          ) : (
                            <p>0</p>
                          )} */}
                          {el.difference}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "10% !important",
                          }}
                        >
                          {pronosticsMatchs &&
                          pronosticsMatchs.filter(
                            (element) => +element.employee_id === +el.emp.id
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
                                      +element.employee_id === +el.emp.id
                                  )
                                  .map((last, index) => (
                                    <>
                                      {index <= 4 && (
                                        <div>
                                          {parseInt(
                                            last.matchs.pronosticsMatchs.point
                                          ) /
                                            parseInt(last.matchs.coeff) ===
                                          3 ? (
                                            <p className={classes.pointsGreen}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsRed}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              0 ? (
                                            <p className={classes.pointsRed}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsRed}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              1 ? (
                                            <p className={classes.pointsOrange}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                              <p className={classes.pointsGrey}>
                                                -
                                              </p>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              2 ? (
                                            <p className={classes.pointsYellow}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </p>
                                          ) : (
                                            <p className={classes.pointsGrey}>
                                              -
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </>
                                  ))}
                            </>
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Button
                            // onClick={() =>
                            //   handleClick(el.event_id, el.employee_id)
                            // }
                            onClick={() => handleClick(el.emp.id)}
                            style={{
                              fontWeight: "bold",
                              textTransform: "capitalize",
                            }}
                            className={classes.buttonDetails}
                          >
                            {t("partner.Ranking.details")}
                          </Button>
                        </TableCell>
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
