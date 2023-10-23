import React from "react";
import { useStyles } from "./dashboardStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function PieChartOrange() {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [4, "Yellow", "Orange", "Red"],
    datasets: [
      {
        label: "Correct Score",
        data: [12, 8, 5, 3],
        backgroundColor: ["#ff6600", "#ff944d", "#ffc299", "#ffe0cc"],
        borderColor: ["#ff6600", "#ff944d", "#ffc299", "#ffe0cc"],
        borderWidth: 1,
        hoverBorderWidth: 10,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default PieChartOrange;
