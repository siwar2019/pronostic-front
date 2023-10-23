import { Box, Grid, Stack, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllEmployee, getCompany } from "../../../../_redux/actions/users";
import { getEventsbyPartner } from "../../../../_redux/actions/events";
import { useTranslation } from "react-i18next";
import { useStyles } from "../../../styles/partner/dashboard/dashboardMain";

function DashboardMain() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { employees } = useAppSelector((state) => state.usersSlice);
  const company = useAppSelector(({ usersSlice: { company } }) => company);
  const events = useAppSelector(({ categoriesSlice: { events } }) => events);

  useEffect(() => {
    dispatch(getAllEmployee());
    dispatch(getCompany());
    dispatch(getEventsbyPartner());
  }, [dispatch]);

  return (
    <Box style={{ overflowX: "hidden" }}>
      <Box className={classes.title}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {t("partner.Dashboard.dashboard")}
        </Typography>
      </Box>
      <Grid
        my={5}
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={0} className={classes.papers}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              py={2}
            >
              <GroupIcon color="primary" fontSize="large" />
              <Typography
                variant="h5"
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {t("partner.Dashboard.NumberEmployees")}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  display: { xs: "flex", sm: "none" },
                }}
              >
                {t("partner.Dashboard.employees")}
              </Typography>

              <Typography
                className={classes.numbersbox}
                variant="h5"
                gutterBottom
              >
                ({employees.length}/{company && company.employee_number})
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={0} className={classes.papers}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              py={2}
            >
              <EmojiEventsIcon color="primary" fontSize="large" />
              <Typography variant="h5">
                {t("partner.Dashboard.events")}
              </Typography>
              <Typography
                className={classes.numbersbox}
                variant="h5"
                gutterBottom
              >
                {events.length}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardMain;
