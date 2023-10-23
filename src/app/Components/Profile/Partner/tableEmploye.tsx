/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Container,
  Paper,
  TableContainer,
  Modal,
  Grid,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import EmailIcon from "@mui/icons-material/Email";

import Switch from "@mui/material/Switch";
import {
  deleteEmployee,
  desactivateEmployee,
  getAllEmployee,
  getCompany,
  getCurrentUser,
  SendEmployee,
} from "../../../../_redux/actions/users";
import { IconButton } from "@material-ui/core";
import TablePagination from "@mui/material/TablePagination";
import Swal from "sweetalert2";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useTranslation } from "react-i18next";
import { Close } from "@material-ui/icons";

// Creating styles
const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 400,
  },
  snackbar: {
    bottom: "104px",
    align: "center",
  },
});
const label = { inputProps: { "aria-label": "Switch demo" } };

export function TableEmploye() {
  const { employees, employeesExist } = useAppSelector(
    (state) => state.usersSlice
  );

  const company = useAppSelector(({ usersSlice: { company } }) => company);
  const dispatch = useAppDispatch();

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([{ Email: "" }]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(0);
  const [companyId, setCompanyid] = React.useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllEmployee());
    dispatch(getCurrentUser());
    dispatch(getCompany());
  }, [dispatch]);

  // Function For closing the alert snackbar
  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  // let  employeeNumber
  const handleAdd = () => {
    if (
      rows.length >=
      Number(company && company.employee_number) - employees.length
    ) {
      console.log("hello rows");
      Swal.fire({
        icon: "error",
        title: "nombre maximum est atteind",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setRows([
      ...rows,
      {
        Email: "",
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  // const handleEdit = (i: any) => {
  //   // If edit mode is true setEdit will
  //   // set it to false and vice versa
  //   setEdit(!isEdit);
  // };

  // Function to handle save
  // const handleSave = () => {
  //   setEdit(!isEdit);
  //   setRows(rows);
  //   console.log("saved : ", rows);
  //   setDisable(true);
  //   setOpen(true);
  // };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e: any, index: number) => {
    setDisable(false);
    const { name, value } = e.target;
    let list: any = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to  table users
  const handleConfirm = (i: number) => {
    setShowConfirm(true);
    setItemToDelete(i);
  };

  const handleShowDeleteUser = (id: number) => {
    setCompanyid(id);
    setShowConfirmDelete(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (id: any) => {
    const list = [...rows];
    list.splice(id, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

  const handleNoDelete = () => {
    setShowConfirmDelete(false);
  };

  // function to handle register
  const handleSubmit = () => {
    const emails = rows.map((el) => el.Email);
    dispatch(SendEmployee(emails));
    setTimeout(() => dispatch(getAllEmployee()), 2000);
    setRows([{ Email: "" }]);
    handleCloseModal();
  };

  const handleSubmitDeleteUser = () => {
    dispatch(deleteEmployee(companyId));
    handleNoDelete();
    setTimeout(() => dispatch(getAllEmployee()), 1500);
  };

  // const handleChange = () => {
  //   dispatch(desactivateEmployee());
  //   console.log("desactive emplyee");
  // };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      desactivateEmployee({
        id: id,
        is_active: event.target.checked,
      })
    );
  };
  // pagination table ///
  const [page, setPage] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  //////// modal add employee

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0px 15px 20px rgba(0,0,0,0.1)",
    transition: "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)",
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    if (
      (employees && employees.length) >=
      Number(company && company.employee_number)
    ) {
      Swal.fire({
        icon: "error",
        title: `${t("partner.Employees.maxEmployeesReached")}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setOpenModal(true);
    }
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleCaseAdd = () => {
    if (
      rows.length >=
      Number(company && company.employee_number) -
        (employees && employees.length)
    ) {
      console.log("hello rows");
      Swal.fire({
        icon: "error",
        title: `${t("partner.Employees.maxEmployeesReached")}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setRows([...rows, { Email: "" }]);
    }
  };

  return (
    <Container>
      <Button
        style={{
          background: "-webkit-linear-gradient(left, #2192ff, #135799)",
          color: "white",
          textTransform: "capitalize",
        }}
        onClick={handleOpenModal}
        sx={{ mt: 2 }}
      >
        {t("partner.Employees.addEmployees")} &nbsp; ({employees.length}/
        {company && company.employee_number})
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              lineHeight: "60px",
              color: "#fff",
              borderRadius: "15px 15px 0 0",
              padding: "0 20px",
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
          >
            {t("partner.Employees.addEmployees")}
          </div>
          <Grid>
            {" "}
            <p
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              {t("partner.Employees.addEmployees")} :
            </p>
          </Grid>
          <Grid
            className="t1"
            style={{
              maxHeight: "330px",
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            {rows.map((row, i) => {
              return (
                <Grid container spacing={2}>
                  <Grid item xs={9} md={9}>
                    <TextField
                      style={{
                        marginBottom: "5px",
                        marginTop: "8px",

                        marginLeft: "10px",
                      }}
                      id="outlined-basic"
                      label="Email"
                      name="Email"
                      variant="outlined"
                      fullWidth
                      value={row.Email}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <Button
                      style={{ color: "red", marginTop: "15px" }}
                      className="mr10"
                      onClick={() => handleConfirm(i)}
                    >
                      <ClearIcon />
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>

          <Grid>
            <Button
              style={{
                background: "-webkit-linear-gradient(left, #2192ff, #135799)",
                marginTop: "20px",
                marginRight: "10px",
                marginLeft: "10px",
                color: "white",
                marginBottom: "70px",
                textTransform: "capitalize",
              }}
              type="button"
              onClick={handleCaseAdd}
              className="add-btn"
            >
              <PersonAddAltIcon />
              &nbsp;
              <span>{t("partner.Employees.addOtherEmployees")}</span>
            </Button>
          </Grid>

          <Button
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              background: "-webkit-linear-gradient(left, #2192ff, #135799)",
              textTransform: "capitalize",
              marginTop: "20px",
              marginRight: "10px",
              color: "white",
              marginBottom: "20px",
            }}
            onClick={handleSubmit}
          >
            <HowToRegIcon /> &nbsp;{t("partner.Employees.send")}
          </Button>
        </Box>
      </Modal>

      <TableContainer
        style={{
          width: "100%",
          fontWeight: "bold",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component={Paper}
        sx={{ mt: 4 }}
      >
        <Table aria-label="simple table" size="small">
          <TableBody>
            <TableHead>
              <TableRow
                style={{
                  background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
                  color: "white",
                }}
              >
                <TableCell style={{ width: "50%", fontWeight: "bold" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "white",
                    }}
                  >
                    <EmailIcon
                      style={{
                        marginRight: "5px",
                      }}
                    />
                    <span>{t("partner.Employees.email")} :</span>
                  </div>
                </TableCell>
                <TableCell
                  style={{ width: "100%", fontWeight: "bold", color: "white" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <DoneIcon
                      style={{
                        marginRight: "5px",
                      }}
                      sx={{
                        display: { xs: "none" },
                      }}
                    />
                    <span>{t("partner.Employees.valid")} :</span>
                    {employees.length}/{company && company.employee_number}
                  </div>
                </TableCell>
                <TableCell
                  style={{ width: "100%", fontWeight: "bold", color: "white" }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => {
                return (
                  <TableRow>
                    {isEdit ? (
                      <TableCell padding="none">
                        <TextField
                          id="outlined-basic"
                          name="Email"
                          variant="outlined"
                          value={row.Email}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                    ) : (
                      <>
                        {/* <TableCell
                        component="th"
                        scope="row"
                        align="center"
                      ></TableCell> */}
                      </>
                    )}

                    {showConfirm && (
                      <>
                        <Dialog
                          open={showConfirm}
                          onClose={handleNo}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {t("partner.Employees.deleteConfirmation")}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {t("partner.Employees.deleteConfirmationMsg")}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => handleRemoveClick(itemToDelete)}
                              color="primary"
                              autoFocus
                            >
                              {t("partner.Employees.yes")}
                            </Button>
                            <Button
                              onClick={handleNo}
                              color="primary"
                              autoFocus
                            >
                              {t("partner.Employees.no")}
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </>
                    )}
                  </TableRow>
                );
              })}
              {employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((el) => (
                  <TableRow>
                    {employeesExist.find(
                      (employeeExist) => employeeExist.email === el.email
                    ) ? (
                      <TableCell sx={{ color: "red" }}>{el.email}</TableCell>
                    ) : (
                      <TableCell>{el.email}</TableCell>
                    )}
                    <TableCell>
                      {" "}
                      <Switch
                        checked={el.is_active}
                        {...label}
                        // defaultChecked={el.is_active}
                        onChange={(e) => handleChange(e, el.id)}
                      />{" "}
                      {el.is_active}
                    </TableCell>
                    <TableCell style={{ width: "100%", fontWeight: "bold" }}>
                      <Button
                        style={{ color: "red" }}
                        className="mr10"
                        onClick={() => handleShowDeleteUser(el.id)}
                      >
                        <ClearIcon />
                      </Button>
                    </TableCell>
                    {showConfirmDelete && (
                      <>
                        <Dialog
                          open={showConfirmDelete}
                          onClose={handleNoDelete}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          fullWidth
                        >
                          <DialogTitle id="alert-dialog-title">
                            {t("partner.Employees.deleteConfirmation")}
                          </DialogTitle>
                          <Box position="absolute" top={0} right={0}>
                            <IconButton>
                              <Close onClick={handleNoDelete} />
                            </IconButton>
                          </Box>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {t(
                                "partner.Employees.deleteEmployeeConfirmationMsg"
                              )}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={handleSubmitDeleteUser}
                              color="error"
                              autoFocus
                              variant="contained"
                            >
                              {t("partner.Employees.yes")}
                            </Button>
                            <Button
                              onClick={handleNoDelete}
                              color="primary"
                              autoFocus
                            >
                              {t("partner.Employees.no")}
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </>
                    )}
                  </TableRow>
                ))}
            </TableBody>

            {/* <Button
              style={{
                background: "#2192ff",
                marginTop: "20px",
                marginLeft: "10px",
                color: "white",
                marginBottom: "20px",
              }}
              onClick={handleSubmit}
            >
              <HowToRegIcon />
              Send Employee
            </Button> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        size="small"
        component="div"
        count={employees.length}
        labelRowsPerPage={t("partner.Employees.rows")}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default TableEmploye;
