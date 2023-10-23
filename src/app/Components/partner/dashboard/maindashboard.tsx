import { Container, Grid, Stack,Typography } from "@mui/material";
import { Paper } from "@mui/material";
import React, { useEffect} from "react";
import { useStyles } from "./dashboardStyles";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllEmployee, getCompany } from "../../../../_redux/actions/users";
import { getEventsbyPartner } from "../../../../_redux/actions/events";
import { useTranslation } from "react-i18next";
import { getAllCategories } from "../../../../_redux/actions/categories";

function MainDashboard() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { employees } = useAppSelector((state) => state.usersSlice);
  const company = useAppSelector(({ usersSlice: { company } }) => company);
  const events = useAppSelector(({ categoriesSlice: { events } }) => events);
  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);
  useEffect(() => {
    dispatch(getAllEmployee());
    dispatch(getCompany());
    dispatch(getEventsbyPartner());
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Container sx={{ mt: 6 }}>
    
      <Grid
        sx={{ mt: 4 }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{background:"rgb(0 0 0 / 27%)" , padding:"20px"}}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Paper
            sx={{
              borderRadius: "1px",
            }}
            elevation={3}
            className={classes.paperUsers}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                marginBottom: "30px ",
                marginTop: "30px ",
              }}
            >
              <GroupIcon color="primary" fontSize="large" />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                <Stack direction="row">
                  <Stack>
                    <Typography variant="h5" gutterBottom>
                      {t("partner.Dashboard.NumberEmployees")}&ensp;
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      className={classes.employeeNumberbox}
                      variant="h5"
                      gutterBottom
                    >
                      ({employees.length}/{company && company.employee_number})
                    </Typography>
                  </Stack>
                </Stack>
              </span>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper
            sx={{
                borderRadius: "1px",
            }}
            elevation={3}
            className={classes.paperUsers}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                marginBottom: "30px ",
                marginTop: "30px ",
              }}
            >
              <GroupIcon color="primary" fontSize="large" />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                <Stack direction="row">
                  <Stack>
                    <Typography variant="h5" gutterBottom>
                      {t("partner.Dashboard.catégorie")}&ensp;
                    </Typography>
                  </Stack>
                  <Stack>
                  <Typography
                      className={classes.employeeNumberbox}
                      variant="h5"
                      gutterBottom
                    >
                      {categories.length}
                    </Typography>
                  </Stack>
                </Stack>
              </span>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper
            sx={{
                borderRadius: "1px",
            }}
            elevation={3}
            className={classes.paperUsers}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                marginBottom: "30px ",
                marginTop: "30px ",
              }}
            >
              <EmojiEventsIcon color="primary" fontSize="large" />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                <Stack direction="row">
                  <Stack>
                    <Typography variant="h5" gutterBottom>
                      {t("partner.Dashboard.events")}&ensp;
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      className={classes.employeeNumberbox}
                      variant="h5"
                      gutterBottom
                    >
                      {events.length}
                    </Typography>
                  </Stack>
                </Stack>
              </span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainDashboard;
