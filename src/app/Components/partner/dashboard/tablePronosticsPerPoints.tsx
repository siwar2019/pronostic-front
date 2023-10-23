import {
  
  Container,
 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import React from "react";
import { useStyles } from "./dashboardStyles";
import { useTranslation } from "react-i18next";

function TablePronosticsPerPoints() {
  function createData(
    name: string,
    calories: number,
    fat: any,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const classes = useStyles();
  const { t } = useTranslation();

  const Points3 = (
    <Typography className={classes.box3Points} gutterBottom>
      {t("partner.Dashboard.correctScore")}
    </Typography>
  );

  const Points2 = (
    <Typography className={classes.box2Points} gutterBottom>
      {t("partner.Dashboard.correctDifference")}
    </Typography>
  );

  const Points1 = (
    <Typography className={classes.box1Points} gutterBottom>
      {t("partner.Dashboard.correctTeam")}
    </Typography>
  );

  const Points0 = (
    <Typography className={classes.box0Points} gutterBottom>
      {t("partner.Dashboard.incorrect")}
    </Typography>
  );

  const rows = [
    createData("User 1", 0, Points3, 0, 4.0),
    createData("User 2", 0, Points2, 0, 4.3),
    createData("User 3", 0, Points1, 0, 6.0),
    createData("User 4", 0, Points0, 0, 4.3),
  ];

  return (
    <Container sx={{ mt: 6 }}>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
        }}
      >
        <div className={classes.borderCell}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  background: "-webkit-linear-gradient(left, #D3D3D3, #808080)",
                }}
              >
                <TableCell style={{ width: 120 }}>
                  <Typography variant="h6" gutterBottom>
                    {t("partner.Dashboard.users")}
                  </Typography>
                </TableCell>
                <TableCell style={{ width: 50 }} align="center">
                  <Typography variant="h6" gutterBottom>
                    {t("partner.Dashboard.number")}
                  </Typography>
                </TableCell>
                <TableCell style={{ width: 150 }} align="center">
                  <Typography variant="h6" gutterBottom>
                    {t("partner.Dashboard.points")}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              style={{
                background: "-webkit-linear-gradient(left, #FFFFFF, #F5F5F5)",
              }}
            >
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </Container>
  );
}

export default TablePronosticsPerPoints;
