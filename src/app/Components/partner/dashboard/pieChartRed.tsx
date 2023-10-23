import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function PieChartRed() {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [4, "Yellow", "Orange", "Red"],
    datasets: [
      {
        label: "Correct Score",
        data: [12, 8, 5, 3],
        backgroundColor: ["#ff0000", "#ff4d4d", "#ff9999", "#ffe6e6"],
        borderColor: ["#ff0000", "#ff4d4d", "#ff9999", "#ffe6e6"],
        borderWidth: 1,
        hoverBorderWidth: 10,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default PieChartRed;
