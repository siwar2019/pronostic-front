import React from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Courbe d'Evolution: Nb Des Partners",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function EmployeParPartner() {
  const partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );

  const companyNumbers = [];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Nb Partners",
        data: companyNumbers.concat(partnersData.length),
        borderColor: "#BD3100",
        backgroundColor: "rgba(53, 162, 235, 0.1)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
