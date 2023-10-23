import React from "react";
import { useStyles } from "./dashboardStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function PieChartYellow() {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [4, "Yellow", "Orange", "Red"],
    datasets: [
      {
        label: "Correct Score",
        data: [12, 8, 5, 3],
        backgroundColor: ["#ffff00", "#ffff4d", "#ffff99", "#ffffe6"],
        borderColor: ["#ffff00", "#ffff4d", "#ffff99", "#ffffe6"],
        borderWidth: 1,
        hoverBorderWidth: 10,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default PieChartYellow;
