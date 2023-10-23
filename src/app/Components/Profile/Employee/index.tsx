import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";
import { useStyles } from "../../../styles/admin/categories/categoriesStyles";
import Stack from "@mui/material/Stack";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
// import * as Icons from "@mui/icons-material";

// const DynamicIcon = ({ name : string }) => {
//   const IconComponent = Icons[name];

//   if (!IconComponent) { // Return a default one
//     return <Icons.Sports/>;
//   }

//   return <IconComponent />;
// };

const EmployeeHomePage = () => {
  // const userConnected = useAppSelector(
  //   ({ auth: { userConnected } }) => userConnected
  // );

  // const handleLogin = () => {
  //   navigate("/login");
  // };
  // const handleRegister = () => {
  //   navigate("/partner-register");
  // };
  const classes = useStyles();

  return (
    <Container>
      Emplyee
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsHandballIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Handball
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsSoccerIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Football
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsBaseballIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Baseball
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsTennisIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Tennis
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsBasketballIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Basketball
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 170,
              maxWidth: 170,
              minHeight: 150,
              maxHeight: 150,
              paddingTop: 2,
              ":hover": {
                boxShadow: 24,
              },
            }}
          >
            <CardContent>
              <Stack spacing={3} justifyContent="center" alignItems="center">
                <SportsVolleyballIcon fontSize="large" color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  className={classes.categoriesTitle}
                >
                  Volleyball
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EmployeeHomePage;
