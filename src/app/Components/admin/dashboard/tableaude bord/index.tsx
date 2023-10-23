import React from "react";
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

import { useSelector } from "react-redux";

import { RootState } from "../../../../../_redux/store/configureStore";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: "Tableau de bord",
    },
  },
};



export function Chart() {
  const partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );
  const labels = partnersData?.map((item) => item.company.social_reason);

  const data = {
    labels,
    datasets: [
      {
        label: "Nombre des employees par sociéte",
        data: partnersData?.map((item) => item.company.employee_number),
        backgroundColor: "#ABA0F9",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
