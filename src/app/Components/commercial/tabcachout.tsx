import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  getAllEmployeeForCommercial,
  getHistoriqueCommercial,
  getPartnerCommercial,
  requestCashout,
} from "../../../_redux/actions/users";
import { useEffect, useState } from "react";
import {
  Box,
  Modal,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import { Button, Container } from "semantic-ui-react";
import { useStyles } from "../../styles/common/auth/registerStyles";
import { useTranslation } from "react-i18next";
import PdfFile from "../admin/Gestion commercial/PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CachoutTable() {
  const dispatch = useAppDispatch();
  const { historique } = useAppSelector((state) => state.usersSlice);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const initialValues = {
    MtCashout: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    MtCashout: "",
  };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);

  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
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
  useEffect(() => {
    dispatch(getPartnerCommercial());
    dispatch(getAllEmployeeForCommercial());
    dispatch(getHistoriqueCommercial());
  }, [dispatch]);

  const validate = () => {
    let errors: any = {};
    if (!formValues.MtCashout) {
      errors.MtCashout = t("client.login.REQUIRED_CASHOUT");
      setFormErrors(errors);
      if (errors.MtCashout) return false;
    }
  };
  const handleSubmit = (e: any) => {
    dispatch(requestCashout(formValues));
    e.preventDefault();
    const validateErrors = validate();

    if (validateErrors) {
    }
    // handleClose();
  };
  // const handleSubmit = ()=>{
  //   const validateErrors = validate();
  //   if (validateErrors) {
  //     dispatch(requestCashout(formValues))
  //     setFormValues(initialValues);

  //   }

  //
  // }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead
            style={{
              background: "-webkit-linear-gradient(left, #767676, #00b5adb8)",
            }}
          >
            <TableRow>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="left"
              >
                Company
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Nb d'employés
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Px.users/an
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Tx.commision
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Total
              </TableCell>
              {/* <TableCell
              style={{ color: "white", fontWeight: "bold" }}
              align="center"
            >
             Date
            </TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {historique?.historiqueSoldeData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.company.social_reason}</TableCell>
                <TableCell align="center">{row.employee_number}</TableCell>

                <TableCell align="center">{row.priceUser}</TableCell>
                <TableCell align="center">{row.commissionRate}</TableCell>
                <TableCell align="center">
                  {/* {priceRow(row.email.length, 30)} */}
                  {row.solde}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell
                style={{ fontWeight: "bold", background: "#d4d4d5" }}
                colSpan={2}
              >
                Revenu
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  background:
                    "-webkit-linear-gradient(left, #767676, #00b5adb8)",
                }}
                align="center"
              >
                Cash-out &nbsp;
                {/* <Typography>Cash-out</Typography> */}
                {/* (-{historique?.commercialSolde.solde}) */}
                (-10)
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", background: "#767676e3" }}
                align="center"
              >
                {historique?.commercialSolde.solde}
              </TableCell>
            </TableRow>

            {/* <TableRow>
              <TableCell rowSpan={4} />
              <TableCell
                style={{ fontWeight: "bold", background: "#d4d4d5" }}
                colSpan={2}
              >
                Revenu
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", background: "#767676e3" }}
                align="center"
              >
                {historique?.commercialSolde.solde}
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        size="small"
        component="div"
        count={10}
        labelRowsPerPage={"lignes"}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button
        style={{
          display: "block",
          marginLeft: "auto",
          background: "darkseagreen",
          color: "white",
          marginTop: "10px",
        }}
        onClick={handleOpen}
      >
        Demande Cash-Out
      </Button>
      {/* <PdfFile/> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Demande de cash-out
          </Typography>
          <TextField
            name="MtCashout"
            type="text"
            variant="outlined"
            placeholder={"Mt Cash-Out"}
            value={formValues.MtCashout}
            onChange={handleChange}
            InputProps={{
              classes: {
                notchedOutline: classes.noBorder,
              },
              className: classes.registerTextField,
            }}
          />
          {formErrors.MtCashout && (
            <Typography
              color="error"
              className={classes.errorMessage}
              variant="caption"
            >
              {formErrors.MtCashout}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            style={{
              display: "block",
              marginLeft: "auto",
              background: "darkseagreen",
              color: "white",
              marginTop: "10px",
            }}
          >
            Demande
          </Button>
        </Box>
      </Modal>

      {/* <PDFDownloadLink document = {<PdfFile/>} fileName="FORM">
   {({loading}) =>(loading? <Button variant="contained">loading document...</Button> : <Button>Download</Button> )}
   <Button>Download</Button>
   </PDFDownloadLink> */}

      <PDFDownloadLink document={<PdfFile />} fileName="Facture">
        <Button>Download</Button>
      </PDFDownloadLink>
    </Container>
  );
}
