import React, { useEffect, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchById } from "../../../../_redux/actions/matchs";
import { Item } from "semantic-ui-react";
import moment from "moment";
import { useForm, SubmitHandler } from "react-hook-form";
import { pronosticsEmployee } from "../../../../_redux/actions/pronostics";
import { FormProvider } from "react-hook-form";
import { updateScoreMatch } from "../../../../_redux/actions/score";

interface IScoreFormValues {
  equipe1: string;
  equipe2: string;
  coeff: string;
}

export default function EditMatchResultMobile() {
  const match = useAppSelector(({ matchsSlice: { match } }) => match);
  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMatchById(params.id as string));
  }, [dispatch, params.id]);

  const formMethods = useForm<IScoreFormValues>();
  const { register, handleSubmit } = formMethods;
  const _onSubmit: SubmitHandler<IScoreFormValues> = (data) => {
    dispatch(updateScoreMatch({ ...data, match_id: params.id as string }));
  };

  return (
    <div style={{ marginTop: "6%" }}>
      <Container>
        <div
          style={{
            lineHeight: "60px",
            color: "#fff",
            padding: "0 20px",
            fontWeight: "500",
            fontSize: "20px",
            textAlign: "center",
            background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            width: "20%%",
            borderRadius: "30px",
            marginTop: "40px",
          }}
        >
          <span> Modifier le score du match</span>
        </div>
      </Container>
      {/* <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        Modifier le score du match
      </p> */}
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
        {match && (
          <div className="mobile-display-game">
            <FormProvider {...formMethods}>
              <form onSubmit={handleSubmit(_onSubmit)}>
                <Grid item xs={12} sx={{ mt: 4 }}>
                  <Grid container spacing={2} direction="row">
                    <Grid
                      container
                      item
                      xs={12}
                      lg={4}
                      direction="row"
                      style={{ paddingLeft: "50px", paddingRight: "50px" }}
                    >
                      <Grid
                        xs={6}
                        sx={{
                          textAlign: "left",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        <Item>{match.equipes[0].name}</Item>
                      </Grid>
                      <Grid xs={6} sx={{ textAlign: "right" }}>
                        <img
                          // src={`https://flagcdn.com/64x48/${match.equipes[0].icon.toLowerCase()}.png`}
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              match.equipes[0].images) as any
                          }
                          width="64"
                          height="48"
                          alt={match.equipes[0].name}
                        ></img>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ textAlign: "center", marginTop: "30px" }}
                      ></Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        type="number"
                        required
                        inputProps={{
                          min: 0,
                          style: {
                            textAlign: "center",
                            backgroundColor: "#eef2f8",
                            width: "50px",
                          },
                        }}
                        defaultValue={0}
                        {...register("equipe1")}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      <Item>
                        {" "}
                        {match.date
                          ? moment(match.date).format("YYYY-MM-DD H:mm ")
                          : "Date not set"}
                      </Item>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        type="number"
                        required
                        inputProps={{
                          min: 0,
                          style: {
                            textAlign: "center",
                            backgroundColor: "#eef2f8",
                            width: "50px",
                          },
                        }}
                        defaultValue={0}
                        {...register("equipe2")}
                      />
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      lg={4}
                      direction="row"
                      style={{ paddingLeft: "50px", paddingRight: "50px" }}
                    >
                      <Grid
                        xs={6}
                        sx={{
                          textAlign: "left",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        <Item>{match.equipes[1].name}</Item>
                      </Grid>
                      <Grid xs={6} sx={{ textAlign: "right" }}>
                        <img
                          // src={`https://flagcdn.com/64x48/${match.equipes[1].icon.toLowerCase()}.png`}
                          src={
                            (process.env.REACT_APP_UPLOADS_LOGO +
                              match.equipes[1].images) as any
                          }
                          width="64"
                          height="48"
                          alt={match.equipes[1].name}
                        ></img>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ textAlign: "center", marginTop: "30px" }}
                      ></Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
                    style={{
                      marginTop: "15px",
                      background:
                        "-webkit-linear-gradient(left, #2192ff, #030e19)",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Modifier
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        )}
      </Container>
    </div>
  );
}
