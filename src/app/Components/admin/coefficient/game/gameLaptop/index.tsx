import React, { useEffect } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hooks/reduxHooks";
import {
  cleanMatchByIdForEmployee,
  getAllMatchsForAdmin,
  getMatchByIdForAdmin,
  UpdateCoeffToMatch,
} from "../../../../../../_redux/actions/matchs";

interface ICoeffFormValues {
  coeff: string;
}

export default function GameLaptop() {
  const { match } = useAppSelector((state) => state.matchsSlice);
  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMatchByIdForAdmin(params.id as string));
    dispatch(getAllMatchsForAdmin(params.id as string));
    return () => {
      dispatch(cleanMatchByIdForEmployee());
    };
  }, [dispatch, params.id]);

  const formMethods = useForm<ICoeffFormValues>();
  const { register, handleSubmit, setValue } = formMethods;
  const _onSubmit: SubmitHandler<ICoeffFormValues> = (data) => {
    dispatch(UpdateCoeffToMatch({ ...data, matchId: params.id as string }));
    navigate(
      `/coeff/categories/games/${match?.equipes[0].groupes[0].event_id}`
    );
  };

  useEffect(() => {
    match && setValue("coeff", `${match.coeff}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  return (
    <div style={{ marginTop: "20%", marginLeft: "20px", marginRight: "20px" }}>
      <Container
        style={{
          marginTop: "10px",
          paddingBottom: "30px",
          paddingTop: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          borderRadius: "30px",
        }}
      >
        {match && (
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(_onSubmit)}>
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={2} direction="row">
                  <Grid
                    container
                    item
                    xs={12}
                    md={4}
                    direction="row"
                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                  >
                    <Grid
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="h6">
                        {match.equipes[0].name}
                      </Typography>
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
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
                      InputProps={{
                        inputProps: {
                          min: 0,
                          style: {
                            textAlign: "center",
                            backgroundColor: "#eef2f8",
                            width: "50px",
                          },
                        },
                      }}
                      {...register("coeff")}
                    />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    md={4}
                    direction="row"
                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                  >
                    <Grid xs={6} sx={{ textAlign: "left" }}>
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
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="h6">
                        {match.equipes[1].name}
                      </Typography>
                    </Grid>
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
                  Update Coeff
                </Button>
              </div>
            </form>
          </FormProvider>
        )}
      </Container>
    </div>
  );
}
