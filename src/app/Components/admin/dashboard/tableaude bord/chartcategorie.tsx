import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {  useAppSelector } from "../../../../../hooks/reduxHooks";

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: "Courbe d'Evolution: Nb Des Catégories ",
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export function CategorieChart() {
  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);

const employeNumber = [];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Nb Categories',
        data: employeNumber.concat(categories.length),
        borderColor: '#CF4146',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
