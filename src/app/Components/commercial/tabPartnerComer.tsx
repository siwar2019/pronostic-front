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
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {  desactivatePartnerByCommercial, getPartnerCommercial } from "../../../_redux/actions/users";

function TabPartnerCommercial() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { partnerCommercial } = useAppSelector((state) => state.usersSlice);
  const { t } = useTranslation();
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
      desactivatePartnerByCommercial({
        id: id,
        is_active: event.target.checked,
      })
    );
  };

  useEffect(() => {
     dispatch(getPartnerCommercial());
     
  }, [dispatch]);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
          >
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                SocialReason
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Email
              </TableCell>
             
            
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Phone
              </TableCell>
                <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Employee_number
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Is Active
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partnerCommercial?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.company.social_reason}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.company.phone}</TableCell>
                <TableCell align="center">{row.company.employee_number}</TableCell>
                <TableCell align="center">
                   <Switch {...label}
                    defaultChecked = {row.is_active}
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

export default TabPartnerCommercial;
