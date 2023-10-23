import { Card,  CardMedia, Grid } from "@mui/material";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { useStyles } from "./../drawPronocticsStyles";

const CartTeamA1B2 = (props) => {
  const classes = useStyles();
  const { handleOpenModal, groupIndex, roundData, roundDataTwo, name } = props;
  const draw = useAppSelector(({ drawSlice: { draw } }) => draw);
  const GroupesEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );

  const DrawA1 =
    draw &&
    GroupesEquipe.find((el) =>
      el.order.find((data) => +data.equipe_id === +draw["A1B2"])
    );

  const drawSetting32TeamEmployee = useAppSelector(
    ({ drawSlice: { drawSetting32TeamEmployee } }) => drawSetting32TeamEmployee
  );

  const equipe1 =
    DrawA1 && DrawA1.order.find((data) => +data.equipe_id === +draw["A1B2"]);

  const correctDraw = useAppSelector(
    ({ drawSlice: { correctDraw } }) => correctDraw
  );

  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);

  return (
    <Grid item xs={12}>
      {user.role === "employee" &&
        (draw &&
        GroupesEquipe &&
        correctDraw &&
        draw[roundData[groupIndex]] &&
        correctDraw &&
        correctDraw.A1B2 ? (
          <>
            {+draw[roundData[groupIndex]] === +correctDraw.A1B2 ? (
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
                  {equipe1 && draw && draw[roundData[groupIndex]] ? (
                    <img
                      // src={`https://flagcdn.com/w160/${equipe1.equipes.icon.toLowerCase()}.png`}
                      src={
                        (process.env.REACT_APP_UPLOADS_LOGO +
                          equipe1.equipes.images) as any
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
                  {equipe1 && draw && draw[roundData[groupIndex]] ? (
                    <img
                      // src={`https://flagcdn.com/w160/${equipe1.equipes.icon.toLowerCase()}.png`}
                      src={
                        (process.env.REACT_APP_UPLOADS_LOGO +
                          equipe1.equipes.images) as any
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
                  {equipe1 && draw && draw[roundData[groupIndex]] ? (
                    <img
                      // src={`https://flagcdn.com/w160/${equipe1.equipes.icon.toLowerCase()}.png`}
                      src={
                        (process.env.REACT_APP_UPLOADS_LOGO +
                          equipe1.equipes.images) as any
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
              {equipe1 && draw && draw[roundData[groupIndex]] ? (
                <img
                  // src={`https://flagcdn.com/w160/${equipe1.equipes.icon.toLowerCase()}.png`}
                  src={
                    (process.env.REACT_APP_UPLOADS_LOGO +
                      equipe1.equipes.images) as any
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
                // src={`https://flagcdn.com/w160/${equipe1.equipes.icon.toLowerCase()}.png`}
                src={
                  (process.env.REACT_APP_UPLOADS_LOGO +
                    equipe1.equipes.images) as any
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
        (draw && correctDraw && correctDraw.A1B2 ? (
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
                {drawSetting32TeamEmployee.correctPhase2} points
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
                {drawSetting32TeamEmployee.incorrectPhase2} points
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

export default CartTeamA1B2;
