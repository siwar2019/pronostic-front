import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  desactivateCommercial,
  getAllCommercial,
} from "../../../../_redux/actions/users";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";

function TabCommercial() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { commercial } = useAppSelector((state) => state.usersSlice);
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      desactivateCommercial({
        id: id,
        is_active: event.target.checked,
      })
    );
  };

  useEffect(() => {
    dispatch(getAllCommercial());
  }, [dispatch]);
  return (
    <Container>
      <TableContainer component={Paper} style={{direction:lang ==="ar"?"rtl":"ltr"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
          >
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
              {t("admin.commercial.firstName")}
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                {t("client.login.email")}
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                {t("admin.commercial.txCommison")}
                
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                {t("admin.commercial.mtCachout")}
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                {t("admin.commercial.phone")}
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
            {t("admin.commercial.validate")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commercial?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.commercial.firstName}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {row.commercial.commissionRate}
                </TableCell>
                <TableCell align="center">{row.commercial.cashOut}</TableCell>
                <TableCell align="center">{row.commercial.phone}</TableCell>
                <TableCell align="center">
                  <Switch
                    {...label}
                    defaultChecked={row.is_active}
                    onChange={(e) => handleChange(e, row.id)}
                  />

                  {row.is_active}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        size="small"
        component="div"
        count={10}
        labelRowsPerPage={t("partner.Employees.rows")}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default TabCommercial;
