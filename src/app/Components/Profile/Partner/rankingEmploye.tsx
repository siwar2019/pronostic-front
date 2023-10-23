/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllPronosticsHistoryEmployeesForPartner,
  getEachEventPronosticsForEmployee,
} from "../../../../_redux/actions/pronostics";
import CircleLoading from "../../CircleLoading";
import { useTranslation } from "react-i18next";
import SelectEventsForClassment from "./selectEventForClassment";
import UndoIcon from "@mui/icons-material/Undo";

function RankingEmploye() {
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pronosticsMatchs } = useAppSelector((state) => state.pronosticsSlice);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const totalPronosticsAllEvents = useAppSelector(
    ({ pronosticsSlice: { getTotalPronosticsEmployeeByPartnerAllEvents } }) =>
      getTotalPronosticsEmployeeByPartnerAllEvents
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const eachPronosticsEvent = useAppSelector(
    ({ pronosticsSlice: { eachPronosticsEventEmployee } }) =>
      eachPronosticsEventEmployee
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true);
    dispatch(getEachEventPronosticsForEmployee());

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(getAllPronosticsHistoryEmployeesForPartner());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleClick = (userId: string) => {
    navigate(`/pronosticHistory/${userId}`);
  };

  const handleClickDraw = (eventId: number, userId: number) => {
    navigate(`/drawHistory/${eventId}/${userId}`);
  };

  let correct = 3;
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      {loading &&
      eachPronosticsEvent &&
      totalPronosticsAllEvents &&
      eachPronosticsEvent.length > 0 &&
      totalPronosticsAllEvents.length > 0 ? (
        <CircleLoading loading={loading} />
      ) : (
        <Paper elevation={0} sx={{ pb: 8 }}>
          <SelectEventsForClassment />
          {/* <SelectEventsToDisplay /> */}
          <TableContainer component={Paper} sx={{ mt: 1 }}>
            <div className={classes.borderCell}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
              >
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
                      <span>{t("partner.Ranking.rankUsers")}</span>
                    </TableCell>
                    {eachPronosticsEvent.length > 0 &&
                      eachPronosticsEvent &&
                      eachPronosticsEvent[0].eventsData.map((evn, indexE) => (
                        <>
                          {evn.event.id !== 0 ? (
                            <TableCell
                              style={{ fontWeight: "bold", color: "white" }}
                              align="center"
                              key={indexE}
                              className={classes.pointsCell}
                            >
                              <span>{evn.event.name}</span>
                              {/* {t("employee.Ranking.pointsPronostics")} */}
                            </TableCell>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
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
                        </TableCell>
                        {el.eventsData.map((ev, indexR) => (
                          <>
                            {ev.indexR !== 0 ? (
                              <TableCell
                                key={indexR}
                                align="center"
                                style={{
                                  color: "#0087FF",
                                  fontWeight: "bold",
                                }}
                              >
                                <span>
                                  {ev.totalpornosticsEmp.point &
                                  ev.totalpornosticsEmp.point ? (
                                    ev.totalpornosticsEmp.point
                                  ) : (
                                    <span>0</span>
                                  )}
                                </span>
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
                          }}
                        >
                          <span>
                            {el.pointsPronostics & el.pointsPronostics ? (
                              el.pointsPronostics
                            ) : (
                              <span>0</span>
                            )}
                          </span>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                          }}
                        >
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
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {t("partner.Ranking.noPronosticsYet")}
                            </span>
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
                                            <span
                                              className={classes.pointsGreen}
                                            >
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </span>
                                          ) : (
                                              <span
                                                className={classes.pointsRed}
                                              >
                                                -
                                              </span>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              0 ? (
                                            <span className={classes.pointsRed}>
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </span>
                                          ) : (
                                              <span
                                                className={classes.pointsRed}
                                              >
                                                -
                                              </span>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              1 ? (
                                            <span
                                              className={classes.pointsOrange}
                                            >
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </span>
                                          ) : (
                                              <span
                                                className={classes.pointsGrey}
                                              >
                                                -
                                              </span>
                                            ) &&
                                            parseInt(
                                              last.matchs.pronosticsMatchs.point
                                            ) /
                                              parseInt(last.matchs.coeff) ===
                                              2 ? (
                                            <span
                                              className={classes.pointsYellow}
                                            >
                                              {
                                                last.matchs.pronosticsMatchs
                                                  .point
                                              }
                                            </span>
                                          ) : (
                                            <span
                                              className={classes.pointsGrey}
                                            >
                                              -
                                            </span>
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

export default RankingEmploye;
