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
      text: "Courbe d'Evolution: Nb Des Evénements" ,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export function EventsChart() {
  const events = useAppSelector(({ eventsSlice: { events } }) => events);
const EventsNumber=[];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Nb Evénements',
        data:EventsNumber.concat(events.length),
        borderColor: '#FF8051',
        backgroundColor: 'rgba(53, 162, 235, 0.25)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
