import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../../../../hooks/reduxHooks";

ChartJS.register(ArcElement, Tooltip, Legend);

export function MatchScoreStatistique() {
 
  const { pronosticsMatchsAdmin } = useAppSelector(
    (state) => state.pronosticsSlice
  );
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const labels = pronosticsMatchsAdmin.map(
    (el) => `${el.equipe1}-${el.equipe2}`
  );

  const data = {
    labels,
    datasets: [
      {
        data: pronosticsMatchsAdmin.map((el) => el.users.length),
        backgroundColor: () => randomRGB(),
        borderWidth: 1,
      },
    ],
  };
  <Typography>testst</Typography>;
  return <Pie data={data} />;
}
