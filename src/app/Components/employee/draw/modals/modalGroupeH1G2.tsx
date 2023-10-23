import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { updateDraw } from "../../../../../_redux/actions/draw";
import { useStyles } from "../drawPronocticsStyles";

const ModalGroupeH1G2 = (props) => {
  const { openModal, handleCloseModal, groupIndex, roundData } = props;

  const draw = useAppSelector(({ drawSlice: { draw } }) => draw);
  const [selectedTeam, setSelectedTeam] = useState(
    draw && roundData && groupIndex && draw[roundData[groupIndex]]
      ? draw[roundData[groupIndex]]
      : 0
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const GroupeEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );

  const DrawA1 =
    draw &&
    GroupeEquipe.find((el) =>
      el.order.find((data) => +data.equipe_id === +draw["H1"])
    );

  const equipe1 =
    DrawA1 && DrawA1.order.find((data) => +data.equipe_id === +draw["H1"]);

  const DrawB2 =
    draw &&
    GroupeEquipe.find((el) =>
      el.order.find((data) => +data.equipe_id === +draw["G2"])
    );

  const equipe2 =
    DrawB2 && DrawB2.order.find((data) => +data.equipe_id === +draw["G2"]);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0px 15px 20px rgba(0,0,0,0.1)",
    transition: "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)",
  };

  const selectTeam = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleSubmit = () => {
    let tempDraw = { ...draw };
    tempDraw[roundData[groupIndex]] = selectedTeam;
    tempDraw["F1E2H1G2"] = undefined;
    tempDraw["B1A2D1C2F1E2H1G2"] = undefined;
    tempDraw["champion"] = undefined;
    dispatch(updateDraw(tempDraw));
    setSelectedTeam(0);
    handleCloseModal();
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            lineHeight: "60px",
            color: "#fff",
            borderRadius: "15px 15px 0 0",
            padding: "0 20px",
            fontWeight: "500",
            fontSize: "20px",
            textAlign: "center",
            background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
          }}
        >
          Select a Team
        </div>
        <Grid>
          {" "}
          <p
            style={{
              fontSize: "16px",
              marginBottom: "10px",
              marginLeft: "50px",
              marginTop: "10px",
            }}
          >
            Select a Team :
          </p>
        </Grid>

        <Grid
          className="t1"
          style={{
            maxHeight: "330px",
            overflowX: "hidden",
            marginBottom: "60px",
            marginTop: "20px",
          }}
        >
          <Grid
            className="t1"
            style={{
              maxHeight: "330px",
              overflowX: "hidden",
              marginBottom: "60px",
              marginTop: "20px",
            }}
          >
            {equipe1 && equipe2 && (
              <Stack spacing={2}>
                <FormControl
                  style={{
                    marginLeft: "50px",
                    marginBottom: "20px",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedTeam}
                    name="radio-buttons-group"
                    onChange={selectTeam}
                  >
                    <FormControlLabel
                      value={equipe1.equipe_id}
                      control={<Radio />}
                      label={
                        <Stack direction="row" spacing={2}>
                          <img
                            // src={`https://flagcdn.com/h24/${equipe1.equipes.icon.toLowerCase()}.png`}
                            src={
                              (process.env.REACT_APP_UPLOADS_LOGO +
                                equipe1.equipes.images) as any
                            }
                            width="36"
                            height="24"
                            alt="Country flag"
                            className={classes.flagImgGroupe}
                          ></img>
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className={classes.teamGroupe}
                          >
                            {equipe1.equipes.name}
                          </p>
                        </Stack>
                      }
                    />
                    <FormControlLabel
                      value={equipe2.equipe_id}
                      control={<Radio />}
                      label={
                        <Stack direction="row" spacing={2}>
                          <img
                            // src={`https://flagcdn.com/h24/${equipe2.equipes.icon.toLowerCase()}.png`}
                            src={
                              (process.env.REACT_APP_UPLOADS_LOGO +
                                equipe2.equipes.images) as any
                            }
                            width="36"
                            height="24"
                            alt="Country flag"
                            className={classes.flagImgGroupe}
                          ></img>
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className={classes.teamGroupe}
                          >
                            {equipe2.equipes.name}
                          </p>
                        </Stack>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            )}
          </Grid>
        </Grid>

        <Button
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            background: "-webkit-linear-gradient(left, #2192ff, #135799)",
            textTransform: "capitalize",
            marginTop: "20px",
            marginRight: "10px",
            color: "white",
            marginBottom: "20px",
          }}
          onClick={handleSubmit}
        >
          Select
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalGroupeH1G2;
