


import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../../../../hooks/reduxHooks';

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Statistique des Evénements par Catégories',
    },
  },
};


//  /const labels = ['Football', 'Handball', 'Basketball', 'Rugby', 'Tennis', 'Hochey', 'SportsMotors', 'SportsMMA', 'Material Art'];



export function EventsParCategories() {
  const events = useAppSelector(({ eventsSlice: { events } }) => events);

  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);
const labels = categories?.map((item)=>item.name)
const EventsNumber=[];
  const data = {
    labels,
    datasets: [
      
      {
        label: 'Nombre des Evenements par Catégories',
        data:EventsNumber.concat(events.length),
        backgroundColor: '#82C9D1',
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
}
