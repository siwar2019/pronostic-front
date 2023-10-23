import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function EventsStatistical() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Intertaction avec les évènements par mois en %",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "évènement 1",
        data: [20, 44, 47, 64, 44, 55, 10, 52, 40, 55, 30, 48],
        backgroundColor: "#ffc107",
      },
      {
        label: "évènement 2",
        data: [30, 44, 52, 70, 20, 15, 64, 52, 40, 70, 37, 60],
        backgroundColor: "rgb(33, 146, 255)",
      },
    ],
  };

  return (
    <Paper
      elevation={0}
      sx={{ padding: "20px", marginBottom: "50px", background: "#c9e3f3" }}
    >
      <Bar options={options} data={data} />;
    </Paper>
  );
}
