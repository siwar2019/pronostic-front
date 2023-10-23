import { Paper, Stack, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStyles } from "../../../styles/partner/dashboard/EmployeesStatistics";
import {
  getEmployeeDailyPointsDifference,
  getEmployeeDailyRang,
  getEmployeePointsDetails,
  getTotalPronosticsEmployee,
} from "../../../../_redux/actions/pronostics";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useEffect } from "react";
import { getEmployeeDailyPoints } from "../../../../_redux/actions/events";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";

export default function EmployeesStatistics(props: {
  event_id: string;
  employee_id: any;
}) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const totalPronosticsEmployee = useAppSelector(
    ({ pronosticsSlice: { totalPronosticsEmployee } }) =>
      totalPronosticsEmployee
  );

  let staticsDataDailyPoints = useSelector(
    (state: RootState) => state.eventsSlice.employeeDailyPoints
  );

  let staticsDataDailyRang = useSelector(
    (state: RootState) => state.pronosticsSlice.employeeDailyRang
  );

  let staticsDataDailyPointsDifference = useSelector(
    (state: RootState) => state.pronosticsSlice.employeeDailyPointsDifference
  );

  let staticsDataDailyPointsDetails = useSelector(
    (state: RootState) => state.pronosticsSlice.employeePointsDetails
  );

  useEffect(() => {
    dispatch(getTotalPronosticsEmployee(props.event_id));
  }, [dispatch, props.event_id]);

  useEffect(() => {
    dispatch(getEmployeeDailyPoints(props));
    dispatch(getEmployeeDailyRang(props));
    dispatch(getEmployeeDailyPointsDifference(props));
    dispatch(getEmployeePointsDetails(props));
  }, [dispatch, props]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const optionsPoints = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: t("partner.Dashboard.earnedPointsTitle"),
      },
    },
  };

  const optionsRang = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: t("partner.Dashboard.rankTitle"),
      },
    },
  };

  const optionsDifference = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: t("partner.Dashboard.DiffernceTitle"),
      },
    },
  };

  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: t("partner.Dashboard.pointsDetails"),
      },
    },
  };

  const dataPoints = {
    labels: staticsDataDailyPoints.map((dates) => dates.date),
    datasets: [
      {
        fill: true,
        label: "Points",
        data: staticsDataDailyPoints.map((points) => points.points),
        borderColor: "rgb(33, 146, 255)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const dataRang = {
    labels: staticsDataDailyRang.map((rangs) => rangs.date),
    datasets: [
      {
        fill: true,
        label: t("partner.Dashboard.rank"),
        data: staticsDataDailyRang.map((rangs) => rangs.rang),
        borderColor: "#ffc107",
        backgroundColor: "rgba(250, 210, 87, 0.5)",
      },
    ],
  };

  const dataDifference = {
    labels: staticsDataDailyPointsDifference.map(
      (difference) => difference.date
    ),
    datasets: [
      {
        fill: true,
        label: t("partner.Dashboard.difference"),
        data: staticsDataDailyPointsDifference.map(
          (difference: { difference: any }) => difference.difference
        ),
        borderColor: "#83BD1C",
        backgroundColor: "rgba(131, 189, 28, 0.5)",
      },
    ],
  };

  const dataDoughnut = {
    labels: [
      t("partner.Dashboard.correctScore"),
      t("partner.Dashboard.correctDifference"),
      t("partner.Dashboard.correctTeam"),
      t("partner.Dashboard.incorrect"),
    ],
    datasets: [
      {
        data: staticsDataDailyPointsDetails,
        backgroundColor: ["rgb(33, 146, 255)", "#ffc107", "#83BD1C", "#C25A89"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {totalPronosticsEmployee.map(
          (pronostic, index) =>
            pronostic.employee_id === props.employee_id && (
              <Typography key={index} align="left" variant="body1">
                <span style={{ fontWeight: "bold" }}>Points : </span>{" "}
                {pronostic.point}
              </Typography>
            )
        )}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Paper elevation={0} className={classes.chartsPaper}>
            <Line options={optionsPoints} data={dataPoints} />
          </Paper>
          <Paper elevation={0} className={classes.chartsPaper}>
            <Line options={optionsRang} data={dataRang} />
          </Paper>
        </Stack>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Paper elevation={0} className={classes.PieCharPaper}>
            <Doughnut data={dataDoughnut} options={optionsDoughnut} />
          </Paper>
          <Paper elevation={0} className={classes.differnceChartPaper}>
            <Line options={optionsDifference} data={dataDifference} />
          </Paper>
        </Stack>
      </Stack>
    </>
  );
}
