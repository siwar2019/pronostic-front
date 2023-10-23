import { Container} from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

function PieChart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [
      `${t("partner.Dashboard.correctScore")}`,
      `${t("partner.Dashboard.correctDifference")}`,
      `${t("partner.Dashboard.correctTeam")}`,
      `${t("partner.Dashboard.incorrect")}`,
    ],
    datasets: [
      {
        label: "Correct Score",
        data: [1, 1, 2, 1],
        backgroundColor: ["#07662b", "#3de565", "#d4d4d5", "#c50404"],
        borderColor: ["#07662b", "#3de565", "#d4d4d5", "#c50404"],
        borderWidth: 1,
        hoverBorderWidth: 10,
      },
    ],
  };

  return (
    <Container>
      <Doughnut data={data} />
    </Container>
  );
}

export default PieChart;
