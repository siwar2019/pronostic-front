import { Container, Grid, Paper } from "@mui/material";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import InsertResult from "../Gestion Results/insertMatchResult";
import Results from "../Gestion Results/resultsmatchs";

function gestionresults() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  return (
    <Container sx={{ mt: 5 }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 900,
            },
          }}
        >
          <Paper elevation={3}>
            {" "}
            <InsertResult />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 900,
            },
          }}
        >
          <Paper elevation={3}>
            {" "}
            <Results />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default gestionresults;
