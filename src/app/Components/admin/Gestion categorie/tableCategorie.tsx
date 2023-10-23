import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import * as Muicon from "@material-ui/icons";
import GenerateIcon from "../../../../helpers/GenerateIcon";
import { useTranslation } from "react-i18next";

export const TableCategorie = () => {
  const { categories } = useAppSelector((state) => state.categoriesSlice);
  const { t } = useTranslation();

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <TableCell style={{ fontWeight: "bold" }}>
                {t("admin.Categories.name")}
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Categories.description")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow> */}
            {categories.map((el) => (
              <TableRow>
                <TableCell>
                  {GenerateIcon(el.sport_icon)} {el.name}
                </TableCell>
                <TableCell align="center">
                  <MoreHorizIcon />
                </TableCell>
              </TableRow>
            ))}
            {/* </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
