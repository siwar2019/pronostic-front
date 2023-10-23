/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMatchByIdForAdmin,
  UpdateDateToMatch,
} from "../../../../_redux/actions/matchs";
import { Item } from "semantic-ui-react";
import { Stack } from "@mui/system";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import UndoIcon from "@mui/icons-material/Undo";

export default function UpdateMatchDate() {
  const match = useAppSelector(({ matchsSlice: { match } }) => match);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  let params = useParams();
  const [date, setDate] = useState<Date>();
  const [defaultDate, setDefaultDate] = useState<string>(match?.date);
  useEffect(() => {
    dispatch(getMatchByIdForAdmin(params.match_id as string)).then((data) => {
      setDefaultDate(data?.payload?.date);
    });
  }, [dispatch, params.match_id]);

  const changeDate = (event: any) => {
    setDate(event.target.value);
  };
  const navigate = useNavigate();
  const handeApdateDate = () => {
    if (new Date(date) < new Date()) {
      Swal.fire({
        icon: "error",
        title: "Date Invalide ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(
        UpdateDateToMatch({
          matchId: params.match_id as string,
          date: new Date(new Date(date).toUTCString()),
        })
      );
      // navigate(`/MatchGroup/`);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "30%" }}>
        <Button
          variant="contained"
          style={{
            background: "-webkit-linear-gradient(left, #4da7ff, #135799)",
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: "bold",
            height: "30px",
          }}
          onClick={() => navigate(-1)}
        >
          <UndoIcon fontSize="medium" cursor="pointer" />{" "}
          {t("employee.Pronostics.back")}
        </Button>
        <Container
          style={{
            marginTop: "50px",
            paddingTop: "20px",
            paddingBottom: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            borderRadius: "30px",
          }}
        >
          <Typography
            style={{
              color: "#2185d0",
              display: "flex",
              justifyContent: "center",
              fontSize: "23px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {t("admin.Matchs.UpdateDateMatch")}
          </Typography>
          {match && (
            <>
              <Stack>
                <Grid item xs={12} sx={{ mt: 4 }}>
                  <Grid container spacing={2} direction="row">
                    <Grid
                      xs={12}
                      md={4}
                      container
                      item
                      direction="row"
                      style={{ display: "grid", justifyItems: "center" }}
                    >
                      <Grid xs={6} sx={{ textAlign: "right" }}>
                        <img
                          // src={`https://flagcdn.com/112x84/${match.equipes[0].icon.toLowerCase()}.png`}
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              match.equipes[0].images) as any
                          }
                          width="112"
                          height="84"
                          alt={match.equipes[0].name}
                        ></img>
                      </Grid>
                      <Grid
                        xs={6}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Item>{match.equipes[0].name}</Item>
                      </Grid>
                    </Grid>

                    <Grid
                      xs={12}
                      md={4}
                      item
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Item>
                        <TextField
                          id="datetime-local"
                          type="datetime-local"
                          sx={{ width: 250 }}
                          onChange={changeDate}
                          name="date"
                        />
                        
                      </Item>
                    </Grid>

                    <Grid
                      xs={12}
                      md={4}
                      container
                      item
                      direction="row"
                      style={{ display: "grid", justifyItems: "center" }}
                    >
                      <Grid xs={6} sx={{ textAlign: "left" }}>
                        <img
                          // src={`https://flagcdn.com/112x84/${match.equipes[1].icon.toLowerCase()}.png`}
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              match.equipes[1].images) as any
                          }
                          width="112"
                          height="84"
                          alt={match.equipes[1].name}
                        ></img>
                      </Grid>
                      <Grid
                        xs={6}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Item>{match.equipes[1].name}</Item>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Stack>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={handeApdateDate}
                >
                  Update Date
                </Button>
              </div>
            </>
          )}
        </Container>
      </div>
    </Container>
  );
}
