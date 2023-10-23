import { Container} from "@mui/material";
import { useStyles } from "./dashboardStyles";
import DashboardMain from "./dashboardMain";
import EventsStatistical from "./EventsStatistical";
import EmployeesStatistics from "./EmployeesStatisticsSection";
function Dashboard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <Container style={{marginBottom:"30px"}}>
      <DashboardMain />
      {/* <EventsStatistical /> */}
      <EmployeesStatistics />{" "}
    </Container>

    //   {/* <MainDashboard/> */}
    //   {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //   <Grid item xs={12} sm={12} md={12}> */}

    //   {/* </Grid> */}
    //   {/* <Grid item xs={12} sm={6} md={6}> */}
    //   {/* <TablePronosticsPerPoints /> */}
    //   {/* </Grid>
    //   <Grid sx={{ mt: 6 }} item xs={12} sm={3} md={4}> */}
    //   {/* <PieChart /> */}
    //   {/* </Grid>
    // </Grid> */}

    //   {/* <Grid
    //   sx={{ mt: 6 }}
    //   container
    //   rowSpacing={1}
    //   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    // >
    //   <Grid item xs={12} sm={3} md={3}>
    //     <PieChart />
    //   </Grid>
    //   <Grid item xs={12} sm={3} md={3}>
    //     <PieChartYellow />
    //   </Grid>
    //   <Grid item xs={12} sm={3} md={3}>
    //     <PieChartOrange />
    //   </Grid>
    //   <Grid item xs={12} sm={3} md={3}>
    //     <PieChartRed />
    //   </Grid>
    // </Grid> */}
  );
}

export default Dashboard;
