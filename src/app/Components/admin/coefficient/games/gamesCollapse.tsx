import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

import { useNavigate } from "react-router-dom";

// import { Item } from 'semantic-ui-react';
import moment from "moment";
import "./games.css";
import { useStyles } from "../games/gamesStyles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IGroupesEquipe, IGroupesMatchs } from "../../../../../types/groupes";

const GamesCollapse: React.FC<{
  groupe: IGroupesEquipe;
  groupesMatchs: IGroupesMatchs[];
}> = ({ groupe, groupesMatchs }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleGame = (gameId: string) => {
    navigate(`/coeff/categories/game/${gameId}`);
  };

  //   useEffect(()=>{
  // setData(groupesMatchs.map(el => return el.matchs.sort((x, y) => (y.date as any) - (x.date as any))))
  //   },[])
  const classes = useStyles();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
      color: theme.palette.common.white,
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
    <Grid item xs={12} md={12} sx={{ mt: 4, mb: 8 }}>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={
              open ? (
                <RemoveIcon sx={{ color: "white" }} />
              ) : (
                <AddIcon sx={{ color: "white" }} />
              )
            }
            sx={{
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
            onClick={() => setOpen(!open)}
          >
            <Typography
              style={{
                color: "white",
              }}
            >
              {groupe.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
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
                  {groupe.order.map((row, index) => (
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
                      <StyledTableCell align="center">{row.mp}</StyledTableCell>
                      <StyledTableCell align="center">{row.w}</StyledTableCell>
                      <StyledTableCell align="center">{row.d}</StyledTableCell>
                      <StyledTableCell align="center">{row.l}</StyledTableCell>
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
                            <p className={classes.pointsGrey}>{el.form}</p>
                          ))}
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        {groupesMatchs
          .filter((groupesMatch) => groupesMatch.groupe.id === groupe.id)
          .map((el, index) => (
            <>
              <Table aria-label="customized table">
                <TableBody>
                  {el.matchs
                    // .sort((x, y) => (y.date as any) - (x.date as any))
                    .map((match, index) => (
                      <>
                        <div
                          className="laptop-display"
                          onClick={() => handleGame(match.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <Grid
                            container
                            spacing={2}
                            direction="row"
                            sx={{ paddingTop: "15px", paddingBottom: "15px" }}
                          >
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
                              <Grid xs={7}>
                                <Typography variant="h6" component="h6">
                                  {match.equipes[0].name}
                                </Typography>
                              </Grid>
                              <Grid xs={5} sx={{ textAlign: "right" }}>
                                <img
                                  // src={`https://flagcdn.com/32x24/${match.equipes[0].icon.toLowerCase()}.png`}
                                  src={
                                    (process.env.REACT_APP_UPLOADS_LOGO +
                                      match.equipes[0].images) as any
                                  }
                                  width="32"
                                  height="24"
                                  alt={match.equipes[0].name}
                                ></img>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={4}
                              direction="row"
                              sx={{ textAlign: "center" }}
                            >
                              <Typography variant="h6" component="h6">
                                Coeff : {match.coeff}
                              </Typography>
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
                              <Grid xs={5} sx={{ textAlign: "left" }}>
                                <img
                                  // src={`https://flagcdn.com/32x24/${match.equipes[1].icon.toLowerCase()}.png`}
                                  src={
                                    (process.env.REACT_APP_UPLOADS_LOGO +
                                      match.equipes[1].images) as any
                                  }
                                  width="32"
                                  height="24"
                                  alt={match.equipes[1].name}
                                ></img>
                              </Grid>
                              <Grid xs={7}>
                                <Typography variant="h6" component="h6">
                                  {match.equipes[1].name}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          className="mobile-display"
                          onClick={() => handleGame(match.id)}
                        >
                          <Grid container spacing={2} direction="row">
                            <Grid
                              container
                              item
                              xs={12}
                              lg={4}
                              direction="row"
                              style={{
                                paddingLeft: "50px",
                                paddingRight: "50px",
                              }}
                            >
                              <Grid xs={7}>
                                <Typography variant="h6" component="h6">
                                  {match.equipes[0].name}
                                </Typography>
                              </Grid>
                              <Grid xs={5} sx={{ textAlign: "right" }}>
                                <img
                                  // src={`https://flagcdn.com/32x24/${match.equipes[0].icon.toLowerCase()}.png`}
                                  src={
                                    (process.env.REACT_APP_UPLOADS_LOGO +
                                      match.equipes[0].images) as any
                                  }
                                  width="32"
                                  height="24"
                                  alt={match.equipes[0].name}
                                ></img>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              direction="row"
                              sx={{ textAlign: "center" }}
                            >
                              <Typography variant="h6" component="h6">
                                {" "}
                                {match.date
                                  ? moment(match.date).format("YYYY-MM-DD H:mm")
                                  : "Date not set"}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              lg={4}
                              direction="row"
                              style={{
                                paddingLeft: "50px",
                                paddingRight: "50px",
                              }}
                            >
                              <Grid xs={7}>
                                <Typography variant="h6" component="h6">
                                  {match.equipes[1].name}
                                </Typography>
                              </Grid>
                              <Grid xs={5} sx={{ textAlign: "right" }}>
                                <img
                                  // src={`https://flagcdn.com/32x24/${match.equipes[1].icon.toLowerCase()}.png`}
                                  src={
                                    (process.env.REACT_APP_UPLOADS_LOGO +
                                      match.equipes[1].images) as any
                                  }
                                  width="32"
                                  height="24"
                                  alt={match.equipes[1].name}
                                ></img>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                      </>
                    ))}
                </TableBody>
              </Table>
            </>
          ))}
      </TableContainer>
    </Grid>
  );
};

export default GamesCollapse;
