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
  Typography,
} from "@mui/material";
import {  useParams } from "react-router-dom";
import {
  getPointsPronosticsEmployeeByEvent,
  getPronosticsEmployeesForPartner,
  getTotalPronosticsEmployee,
} from "../../../../../_redux/actions/pronostics";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import CircleLoading from "../../../CircleLoading";
import { useTranslation } from "react-i18next";
import { getTotalDrawScoreEmployee } from "../../../../../_redux/actions/draw";
import { getEventById } from "../../../../../_redux/actions/events";

function RankingEmployePerEvent() {
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const totalPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { totalPronosticsEmployee } }) =>
      totalPronosticsEmployee
  );
  const totalDrawScoreEmployee = useAppSelector(
    ({ drawSlice: { totalDrawScoreEmployee } }) => totalDrawScoreEmployee
  );

  const pointsPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { pointsPronosticsEmployee } }) =>
      pointsPronosticsEmployee
  );

  const eventById = useAppSelector(
    ({ eventsSlice: { eventById } }) => eventById
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let params = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true);
    dispatch(getEventById(params.event_id as string));
    dispatch(getTotalPronosticsEmployee(params.event_id as string));
    dispatch(getPointsPronosticsEmployeeByEvent(params.event_id as string));
    dispatch(getTotalDrawScoreEmployee(params.event_id as string));
    // dispatch(getTotalPointsPronosticsAllEventsForEmployee());
    dispatch(getPronosticsEmployeesForPartner(params.event_id as string));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, params.event_id]);

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

  const { pronosticsMatchs } = useAppSelector((state) => state.pronosticsSlice);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);

  return (
    <Container sx={{ mt: 8 }}>
      {loading &&
      pointsPronosticsEmployee &&
      totalDrawScoreEmployee &&
      totalDrawScoreEmployee.length > 0 &&
      pointsPronosticsEmployee.length > 0 &&
      totalPronosticsEmployee ? (
        <CircleLoading loading={loading} />
      ) : (
        <Paper elevation={0} sx={{ pb: 8 }}>
          <Typography mb={2} variant="h6" component="div">
            Ranking of {eventById && eventById.name} event
          </Typography>
          <TableContainer component={Paper}>
            <div className={classes.borderCell}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                        width: "25%",
                        position: "sticky",
                        left: 0,
                        background: "#2192ff",
                      }}
                      align="left"
                    >
                      <p>{t("employee.Ranking.rankUsers")}</p>
                    </TableCell>
                    {eventById && eventById.displayQualification === true ? (
                      <TableCell
                        style={{ fontWeight: "bold", color: "white" }}
                        align="center"
                        className={classes.pointsCell}
                      >
                        {t("employee.Ranking.pointsPronostics")}
                      </TableCell>
                    ) : (
                      <TableCell
                        style={{ fontWeight: "bold", color: "white" }}
                        align="center"
                        sx={{ display: "none" }}
                        className={classes.pointsCell}
                      >
                        {t("employee.Ranking.pointsPronostics")}
                      </TableCell>
                    )}

                    {eventById && eventById.displayQualification === true ? (
                      <TableCell
                        style={{ fontWeight: "bold", color: "white" }}
                        align="center"
                        className={classes.pointsCell}
                      >
                        {t("employee.Ranking.pointsQualification")}
                      </TableCell>
                    ) : (
                      <TableCell
                        sx={{ display: "none" }}
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          width: "10% !important",
                        }}
                        align="center"
                        className={classes.pointsCell}
                      >
                        {t("employee.Ranking.pointsQualification")}
                      </TableCell>
                    )}
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
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.difference")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "10% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.pronosticsHistory")}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pointsPronosticsEmployee &&
                    totalDrawScoreEmployee &&
                    totalDrawScoreEmployee.length > 0 &&
                    pointsPronosticsEmployee.length > 0 &&
                    totalPronosticsEmployee &&
                    totalPronosticsEmployee.map((el, index) => (
                      <TableRow className={classes.table} key={index}>
                        <TableCell
                          component="th"
                          align="left"
                          style={{
                            fontWeight: "bold",
                            fontSize: "10px",
                            textTransform: "capitalize",
                            color:
                              user.email === el.users.email ? "black" : "Grey",

                            width: "20% !important",
                            position: "sticky",
                            left: 0,
                            background: "white",
                            backgroundColor:
                              user.email === el.users.email
                                ? "#a6d3ff"
                                : "white",
                          }}
                        >
                          {index + 1}. {el.users.email.split("@")[0]}
                        </TableCell>

                        {eventById &&
                        eventById.displayQualification === true ? (
                          <TableCell
                            align="center"
                            style={{
                              color: "#0087FF",
                              fontWeight: "bold",
                              backgroundColor:
                                user.email === el.users.email ? "#a6d3ff" : "",
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
                        ) : (
                          <TableCell
                            align="center"
                            sx={{ display: "none" }}
                            style={{
                              color: "#0087FF",
                              fontWeight: "bold",
                              backgroundColor:
                                user.email === el.users.email ? "#a6d3ff" : "",
                            }}
                          ></TableCell>
                        )}
                        {eventById &&
                        eventById.displayQualification === true ? (
                          <TableCell
                            align="center"
                            style={{
                              color: "#005199",
                              fontWeight: "bold",
                              backgroundColor:
                                user.email === el.users.email ? "#a6d3ff" : "",
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
                        ) : (
                          <TableCell
                            align="center"
                            sx={{ display: "none" }}
                            style={{
                              color: "#005199",
                              fontWeight: "bold",
                              backgroundColor:
                                user.email === el.users.email ? "#a6d3ff" : "",
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
                        )}
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                            backgroundColor:
                              user.email === el.users.email ? "#a6d3ff" : "",
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
                            backgroundColor:
                              user.email === el.users.email ? "#a6d3ff" : "",
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
                            backgroundColor:
                              user.email === el.users.email ? "#a6d3ff" : "",
                          }}
                        >
                          {pronosticsMatchs &&
                          pronosticsMatchs.filter(
                            (element) => +element.employee_id === +el.users.id
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
                                      +element.employee_id === +el.users.id
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

export default RankingEmployePerEvent;
