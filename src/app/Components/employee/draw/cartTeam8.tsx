import { Card,  CardMedia, Grid} from "@mui/material";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { useStyles } from "./drawPronocticsStyles";

const CartTeam8 = (props) => {
  const classes = useStyles();
  const { handleOpenModal, groupIndex, roundData, roundDataTwo, name } = props;
  const draw = useAppSelector(({ drawSlice: { draw } }) => draw);
  const GroupesEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );

 

  const drawSetting8TeamEmployee = useAppSelector(
    ({ drawSlice: { drawSetting8TeamEmployee } }) => drawSetting8TeamEmployee
  );

  const correctDraw = useAppSelector(
    ({ drawSlice: { correctDraw } }) => correctDraw
  );
  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);

  return (
    <Grid item xs={12}>
      {/* <span
        style={{
          paddingTop: "8px",
          paddingBottom: "5px",

          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: "#343434",
          fontSize: "10px",
        }}
      >
        {draw &&
          GroupesEquipe &&
          draw[roundData[groupIndex]] &&
          GroupesEquipe.length > 0 &&
          GroupesEquipe[groupIndex].order.find(
            (team) => +team.equipe_id === +draw[roundData[groupIndex]]
          ).equipes.name}
      </span> */}

      {user.role === "employee" &&
        (draw &&
        GroupesEquipe &&
        correctDraw &&
        draw[roundData[groupIndex]] &&
        correctDraw[roundData[groupIndex]] &&
        correctDraw ? (
          <>
            {+draw[roundData[groupIndex]] ===
            +correctDraw[roundData[groupIndex]] ? (
              <Card
                onClick={() => handleOpenModal(groupIndex, roundData)}
                sx={{
                  cursor: "pointer",
                  maxWidth: 70,
                  height: 45,
                  margin: "auto",
                  ":hover": {
                    boxShadow: 24,
                  },
                  textAlign: "center",
                  border: "1px dotted #fff",
                  boxShadow: "0px 1px 5px 3px #00a83f",
                }}
              >
                <CardMedia>
                  {GroupesEquipe[groupIndex] &&
                  draw &&
                  draw[roundData[groupIndex]] ? (
                    <img
                      // src={`http://localhost/pronostics/logo/${GroupesEquipe[
                      //   groupIndex
                      // ].order
                      //   .find(
                      //     (team) =>
                      //       +team.equipe_id === +draw[roundData[groupIndex]]
                      //   )
                      //   .equipes.images}.png`}

                      src={
                        process.env.REACT_APP_UPLOADS_LOGO +
                        `${
                          GroupesEquipe[groupIndex].order.find(
                            (team) =>
                              +team.equipe_id === +draw[roundData[groupIndex]]
                          ).equipes.images
                        }`
                      }
                      alt="Country flag"
                      className={classes.flagImgDraw}
                      width="70"
                      height="45"
                    ></img>
                  ) : (
                    <div
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      {name}
                    </div>
                  )}
                </CardMedia>
              </Card>
            ) : +draw[roundData[groupIndex]] ===
              +correctDraw[roundDataTwo[groupIndex]] ? (
              <Card
                onClick={() => handleOpenModal(groupIndex, roundData)}
                sx={{
                  cursor: "pointer",
                  maxWidth: 70,
                  height: 45,
                  margin: "auto",
                  ":hover": {
                    boxShadow: 24,
                  },
                  textAlign: "center",
                  border: "1px dotted #fff",
                  boxShadow: "0px 1px 5px 3px #f3a000",
                }}
              >
                <CardMedia>
                  {GroupesEquipe[groupIndex] &&
                  draw &&
                  draw[roundData[groupIndex]] ? (
                    <img
                      src={
                        process.env.REACT_APP_UPLOADS_LOGO +
                        `${
                          GroupesEquipe[groupIndex].order.find(
                            (team) =>
                              +team.equipe_id === +draw[roundData[groupIndex]]
                          ).equipes.images
                        }`
                      }
                      alt="Country flag"
                      className={classes.flagImgDraw}
                      width="70"
                      height="45"
                    ></img>
                  ) : (
                    <div
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      {name}
                    </div>
                  )}
                </CardMedia>
              </Card>
            ) : (
              <Card
                onClick={() => handleOpenModal(groupIndex, roundData)}
                sx={{
                  cursor: "pointer",
                  maxWidth: 70,
                  height: 45,
                  margin: "auto",
                  ":hover": {
                    boxShadow: 24,
                  },
                  textAlign: "center",
                  border: "1px dotted #fff",
                  boxShadow: "0px 1px 5px 3px #d6033f",
                }}
              >
                <CardMedia>
                  {GroupesEquipe[groupIndex] &&
                  draw &&
                  draw[roundData[groupIndex]] ? (
                    <img
                      src={
                        process.env.REACT_APP_UPLOADS_LOGO +
                        `${
                          GroupesEquipe[groupIndex].order.find(
                            (team) =>
                              +team.equipe_id === +draw[roundData[groupIndex]]
                          ).equipes.images
                        }`
                      }
                      alt="Country flag"
                      className={classes.flagImgDraw}
                      width="70"
                      height="45"
                    ></img>
                  ) : (
                    <div
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      {name}
                    </div>
                  )}
                </CardMedia>
              </Card>
            )}
          </>
        ) : (
          <Card
            onClick={() => handleOpenModal(groupIndex, roundData)}
            sx={{
              cursor: "pointer",
              maxWidth: 70,
              height: 45,
              margin: "auto",
              ":hover": {
                boxShadow: 24,
              },
              textAlign: "center",
            }}
          >
            <CardMedia>
              {GroupesEquipe[groupIndex] &&
              draw &&
              draw[roundData[groupIndex]] ? (
                <img
                  src={
                    process.env.REACT_APP_UPLOADS_LOGO +
                    `${
                      GroupesEquipe[groupIndex].order.find(
                        (team) =>
                          +team.equipe_id === +draw[roundData[groupIndex]]
                      ).equipes.images
                    }`
                  }
                  alt="Country flag"
                  className={classes.flagImgDraw}
                  width="70"
                  height="45"
                ></img>
              ) : (
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {name}
                </div>
              )}
            </CardMedia>
          </Card>
        ))}
      {user.role === "admin" && (
        <Card
          onClick={() => handleOpenModal(groupIndex, roundData)}
          sx={{
            cursor: "pointer",
            maxWidth: 70,
            height: 45,
            margin: "auto",
            ":hover": {
              boxShadow: 24,
            },
            textAlign: "center",
          }}
        >
          <CardMedia>
            {draw && draw[roundData[groupIndex]] ? (
              <img
                src={
                  process.env.REACT_APP_UPLOADS_LOGO +
                  `${
                    GroupesEquipe[groupIndex].order.find(
                      (team) => +team.equipe_id === +draw[roundData[groupIndex]]
                    ).equipes.images
                  }`
                }
                alt="Country flag"
                className={classes.flagImgDraw}
                width="70"
                height="45"
              ></img>
            ) : (
              <div
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                {name}
              </div>
            )}
          </CardMedia>
        </Card>
      )}
      {user.role === "employee" &&
        (correctDraw && draw ? (
          <>
            {+draw[roundData[groupIndex]] ===
            +correctDraw[roundData[groupIndex]] ? (
              <span
                style={{
                  paddingTop: "8px",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  color: "#00a83f",
                  fontSize: "11px",
                }}
              >
                {drawSetting8TeamEmployee.correctPhase1} points
              </span>
            ) : +draw[roundData[groupIndex]] ===
              +correctDraw[roundDataTwo[groupIndex]] ? (
              <span
                style={{
                  paddingTop: "8px",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  color: "#a76e00",
                  fontSize: "11px",
                }}
              >
                {drawSetting8TeamEmployee.incorrectPhase1} points
              </span>
            ) : (
              <span
                style={{
                  paddingTop: "8px",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  color: "#dc0000",
                  fontSize: "11px",
                }}
              >
                0 Point
              </span>
            )}
          </>
        ) : (
          <p style={{ display: "none" }}>-</p>
        ))}
    </Grid>
  );
};

export default CartTeam8;
