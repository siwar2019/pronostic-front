import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStyles } from "./rankingPartnerStyle";
import { Button, Container} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import {
  getPointsPronosticsEmployeeByEventByAdmin,
  getPronosticsEmployeesForPartnerByAdmin,
  getTotalPronosticsEmployeeByAdmin,
} from "../../../../../_redux/actions/pronostics";
import CircleLoading from "../../../CircleLoading";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import {
  getTotalDrawScoreEmployeeByAdmin,
} from "../../../../../_redux/actions/draw";

function rankingEmploye() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { totalPronosticsEmployee, pronosticsMatchs } = useAppSelector(
    (state) => state.pronosticsSlice
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const totalDrawScoreEmployeeForAdmin = useAppSelector(
    ({ drawSlice: { totalDrawScoreEmployeeByAdmin } }) =>
      totalDrawScoreEmployeeByAdmin
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pointsPronosticsEmployeeForAdmin = useAppSelector(
    ({ pronosticsSlice: { pointsPronosticsEmployeeAdmin } }) =>
      pointsPronosticsEmployeeAdmin
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let params = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    dispatch(
      getTotalPronosticsEmployeeByAdmin({
        partner_id: params.partnerId as string,
        event_id: params.eventId as string,
      })
    );
    dispatch(
      getPronosticsEmployeesForPartnerByAdmin({
        partner_id: params.partnerId as string,
        event_id: params.eventId as string,
      })
    );
    dispatch(
      getPointsPronosticsEmployeeByEventByAdmin({
        partner_id: params.partnerId as string,
        event_id: params.eventId as string,
      })
    );
    dispatch(
      getTotalDrawScoreEmployeeByAdmin({
        partner_id: params.partnerId as string,
        event_id: params.eventId as string,
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.event_id]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  

 

 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleClick = (eventId: number, userId: number) => {
    console.log("in handleclick");
    navigate(
      `/Users/categories/events/pronostics/history/${params.partnerId}/${eventId}/${userId}`
    );
  };

 

  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      {loading &&
      pointsPronosticsEmployeeForAdmin &&
      totalDrawScoreEmployeeForAdmin &&
      totalDrawScoreEmployeeForAdmin.length > 0 &&
      pointsPronosticsEmployeeForAdmin.length > 0 &&
      totalPronosticsEmployee ? (
        <CircleLoading loading={loading} />
      ) : (
        <Paper elevation={0} sx={{ pb: 8 }}>
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
                        width: "20%",
                        position: "sticky",
                        left: 0,
                        background: "#2192ff",
                      }}
                      // className={classes.rankCell}
                      align="left"
                    >
                      <p>{t("partner.Ranking.rankUsers")}</p>
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "20%",
                      }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.pointsPronostics")}
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.pointsQualification")}
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                      className={classes.pointsCell}
                    >
                      {t("employee.Ranking.totalPoints")}
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      {t("partner.Ranking.difference")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "20% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.pronosticsHistory")}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        width: "20% !important",
                      }}
                      align="center"
                    >
                      {t("partner.Ranking.details")}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
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
                          {/* {index + 1}. {el.users.email} */}
                          {index + 1}. {el.users.email.split("@")[0]}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            color: "#0087FF",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {pointsPronosticsEmployeeForAdmin &&
                          pointsPronosticsEmployeeForAdmin.length > 0 &&
                          pointsPronosticsEmployeeForAdmin.find(
                            (res) => +res.emp.id === el.employee_id
                          ) ? (
                            pointsPronosticsEmployeeForAdmin.find(
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
                          {totalDrawScoreEmployeeForAdmin &&
                          totalDrawScoreEmployeeForAdmin.length > 0 &&
                          totalDrawScoreEmployeeForAdmin.find(
                            (res) => +res.emp.id === el.employee_id
                          ) ? (
                            totalDrawScoreEmployeeForAdmin.find(
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
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}

export default rankingEmploye;
