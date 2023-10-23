import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { useStyles } from "../games/gamesStyles";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllMatchsForPartner,
  getGroupeEquipe,
} from "../../../../../_redux/actions/matchs";
import { Item } from "semantic-ui-react";
import moment from "moment";
import CollapseGroupes from "./collapseGroupes";
import CircleLoading from "../../../CircleLoading";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal";

export default function Games() {
  const groupesMatchs = useAppSelector(
    ({ matchsSlice: { groupesMatchs } }) => groupesMatchs
  );
  const GroupesEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );
  const dispatch = useAppDispatch();
  let params = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllMatchsForPartner(params.id as string));
    dispatch(getGroupeEquipe(params.id as string));
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [dispatch, params.id]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: "-webkit-linear-gradient(left, #2192ff, #092B4C)",
      color: theme.palette.common.white,
      borderRadius: "8px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {},
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <Container style={{ marginTop: "10px" }}>
      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <Grid container spacing={2} item xs={12} md={12} sx={{ mt: 1 }}>
          <Grid item xs={12} md={12} sx={{ mb: 8 }}>
            {GroupesEquipe.length === 0 ? (
              <EmptyPageModal />
            ) : (
              GroupesEquipe.map((el, index) => (
                <>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ mt: 4, mb: 8 }}
                    borderRight={1}
                    borderLeft={1}
                    borderBottom={1}
                    borderTop={0}
                    borderColor="grey.500"
                    borderRadius={2}
                  >
                    {el.order.length > 2 ? (
                      <CollapseGroupes data={el} index={index}>
                        <TableContainer component={Paper} key={index}>
                          <Table aria-label="customized table">
                            <TableHead>
                              <TableRow
                                style={{
                                  fontWeight: "bold",
                                  color: "black",
                                  background: "#eee",
                                }}
                              >
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                    width: "50%",
                                    position: "sticky",
                                    left: 0,
                                    background: "#eee",
                                  }}
                                  align="left"
                                >
                                  <p>Equipes</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>MP</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>W</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>D</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>L</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>G</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>PTS</p>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                  align="center"
                                >
                                  <p>FORM</p>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {el.order.map((row, index) => (
                                <StyledTableRow key={index}>
                                  <StyledTableCell
                                    component="th"
                                    scope="row"
                                    style={{
                                      position: "sticky",
                                      left: 0,
                                      background: "white",
                                      width: "40%",
                                      alignContent: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        // src={`https://flagcdn.com/w20/${row.equipes.icon.toLowerCase()}.png`}
                                        src={
                                          (process.env.REACT_APP_UPLOADS_LOGO +
                                            row.equipes.images) as any
                                        }
                                        width="20"
                                        height="13"
                                        alt="Country flag"
                                        className={classes.flagImgGroupe}
                                      ></img>
                                      <p className={classes.teamGroupe}>
                                        {row.equipes.name}
                                      </p>
                                    </div>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.mp}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.w}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.d}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.l}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.but}:{row.o_but}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <b>{row.pt}</b>
                                  </StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    style={{
                                      alignContent: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                      }}
                                    >
                                      {row.equipes.order_match.map((el) => (
                                        <p className={classes.pointsGrey}>
                                          {el.form}
                                        </p>
                                      ))}
                                    </div>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CollapseGroupes>
                    ) : (
                      <>
                        <Table key={index} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>{el.name}</StyledTableCell>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </>
                    )}
                    {groupesMatchs
                      .filter((groupematch) => groupematch.groupe.id === el.id)
                      .map((el, index) => (
                        <Table key={index} aria-label="customized table">
                          <TableBody>
                            {el.matchs.map((match, index) => (
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                sx={{ mb: 0.5 }}
                                key={index}
                              >
                                <Grid item xs={5}>
                                  <Item className={classes.team}>
                                    {match.equipes[0].name}
                                    <div className={classes.flag1}>
                                      <img
                                        // src={`https://flagcdn.com/28x21/${match.equipes[0].icon.toLowerCase()}.png`}
                                        src={
                                          (process.env.REACT_APP_UPLOADS_LOGO +
                                            match.equipes[0].images) as any
                                        }
                                        width="28"
                                        height="21"
                                        alt="Country flag"
                                        className={classes.flagImg}
                                      ></img>
                                    </div>
                                  </Item>
                                </Grid>
                                <Grid item xs={2} className={classes.time}>
                                  <Item className={classes.time}>
                                    {match.date
                                      ? moment(match.date).format(
                                          "YYYY-MM-DD H:mm "
                                        )
                                      : "Date not set"}
                                  </Item>
                                </Grid>
                                <Grid item xs={5}>
                                  <Item className={classes.team}>
                                    <div className={classes.flag2}>
                                      <img
                                        // src={`https://flagcdn.com/28x21/${match.equipes[1].icon.toLowerCase()}.png`}
                                        src={
                                          (process.env.REACT_APP_UPLOADS_LOGO +
                                            match.equipes[1].images) as any
                                        }
                                        width="28"
                                        height="21"
                                        alt="Country flag"
                                        className={classes.flagImg}
                                      ></img>
                                    </div>
                                    {match.equipes[1].name}
                                  </Item>
                                </Grid>
                              </Grid>
                            ))}
                          </TableBody>
                        </Table>
                      ))}
                  </Grid>
                </>
              ))
            )}
          </Grid>

          {/* <Grid item xs={12} md={9} sx={{ mt: 4 }}>
          {groupesMatchs.map((el, index) => (
            <Table key={index} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Matchs {el.groupe.name}</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {el.matchs.map((match, index) => (
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ mb: 0.5 }}
                    key={index}
                  >
                    <Grid item xs={5}>
                      <Item className={classes.team}>
                        {match.equipes[0].name}
                        <div className={classes.flag1}>
                          <img
                            src={`https://flagcdn.com/28x21/${match.equipes[0].icon.toLowerCase()}.png`}
                            alt="Country flag"
                            className={classes.flagImg}
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                    <Grid item xs={2} className={classes.time}>
                      <Item className={classes.time}>
                        {moment(match.date).format("YYYY-MM-DD")}
                      </Item>
                    </Grid>
                    <Grid item xs={5}>
                      <Item className={classes.team}>
                        <div className={classes.flag2}>
                          <img
                            src={`https://flagcdn.com/28x21/${match.equipes[1].icon.toLowerCase()}.png`}
                            alt="Country flag"
                            className={classes.flagImg}
                          ></img>
                        </div>
                        {match.equipes[1].name}
                      </Item>
                    </Grid>
                  </Grid>
                ))}
              </TableBody>
            </Table>
          ))}
        </Grid> */}
        </Grid>
      )}
    </Container>
  );
}
