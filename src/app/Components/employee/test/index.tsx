import { Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import countryImg from "../../../assets/countryImg.png";

const DrawTest = () => {
  return (
    <Container>
      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          <Grid justifyContent="flex-start" item xs={6} sm={4} md={2}>
            <Card
              sx={{
                cursor: "pointer",
                MaxWidth: 40,
                MaxHeight: 60,
                ":hover": {
                  boxShadow: 24,
                },
              }}
            >
              <CardContent>
                <img
                  src={countryImg}
                  alt="Flag Country"
                  width="40"
                  height="20"
                ></img>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row-reverse" item xs={6}>
          <Grid item xs={6} sm={4} md={2}>
            <Card
              sx={{
                cursor: "pointer",
                MaxWidth: 40,
                MaxHeight: 60,
                ":hover": {
                  boxShadow: 24,
                },
              }}
            >
              <CardContent>
                <img
                  src={countryImg}
                  alt="Flag Country"
                  width="40"
                  height="20"
                ></img>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DrawTest;
