import { TableHead } from "@material-ui/core";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import React from "react";
import {
  deletePartner,
  getAllPartners,
  switchPartnerStatus,
  addEventsToPartners
} from "../../../../_redux/actions/users";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import { IPartnerSwitchStatus } from "../../../../types/users";
import InfoIcon from "@mui/icons-material/Info";
// import { setPartnerId } from "../../../../_redux/reducers/users";
import PartnersActions from "./PartnersActions";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { getPartnersEvents } from "../../../../_redux/actions/events";
import { Close } from "@material-ui/icons";
// import { useTranslation } from "react-i18next";
import { t } from "i18next";
import DeleteIcon from "@mui/icons-material/Delete";
// import { setPartnerId } from "../../../../_redux/reducers/users";


interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const ListPartners = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [partnersIdsHaveDefaultEvent, setPartnersIdsHaveDefaultEvent] =
    useState([]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useAppDispatch();

  let partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );

  let partnersHaveDefaultEvent = useSelector(
    (state: RootState) => state.eventsSlice.partnersEvents
  )
    .filter((partnerEvent) => partnerEvent.event_id === 0)
    .map((userId) => {
      return userId.user_id;
    });

  useEffect(() => {
    if (partnersHaveDefaultEvent.length !== 0)
      setPartnersIdsHaveDefaultEvent(partnersHaveDefaultEvent);
  }, [partnersHaveDefaultEvent.length]);

  let addDefaultEvent = (userId: string) => {
    dispatch(addEventsToPartners({ eventIds: ["0"], partnerId: userId }));
    setPartnersIdsHaveDefaultEvent(
      partnersIdsHaveDefaultEvent.concat(parseInt(userId))
    );
  };

  const [partnerStatus, setPartnerStatus] = useState<IPartnerSwitchStatus>({
    id: "",
    is_active: false,
  });

  useEffect(() => {
    if (partnersData.length === 0) {
      dispatch(getAllPartners());
    }
  }, [partnerStatus.id]);

    useEffect(() => {
    dispatch(getPartnersEvents());
  }, [partnersData.length]);

  const handleChangeStatus = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    setPartnerStatus({ id: id, is_active: event.target.checked });
    dispatch(switchPartnerStatus({ id: id, is_active: event.target.checked }));
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - partnersData.length) : 0;

  const [openActionPopup, setOpenActionPopup] = useState<boolean>(false);

  // const chooseEvent = (
  //   open: boolean | ((prevState: boolean) => boolean),
  //   id: number
  // ) => {
  //   setOpenActionPopup(open);
  //   dispatch(setPartnerId(id));
  // };

  const navigate = useNavigate();
  const handleOpen = (partnerId: number) => navigate(`/Users/${partnerId}`);
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);
  const [companyId, setCompanyid] = React.useState(0);
  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
const lang = useAppSelector (({languageSlice:{lang}})=>lang);
  // const chooseEvent = (
  //   open: boolean | ((prevState: boolean) => boolean),
  //   id: number
  // ) => {
  //   setOpenActionPopup(open);
  //   dispatch(setPartnerId(id));
  // };

  // const navigate = useNavigate();
  // const handleOpen = (partnerId: number) => navigate(`/Users/${partnerId}`);

  const handleShowDeleteUser = (id: number) => {
    console.log(id, "id show");
    setCompanyid(id);
    setShowConfirmDelete(true);
  };

  const handleNoDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleSubmitDeleteUser = () => {
    dispatch(deletePartner(companyId));
    handleNoDelete();
    setTimeout(() => dispatch(getAllPartners()), 1000);
  };

  return (
    <>
      <Container>
        <TableContainer
          component={Paper}
          elevation={6}
          style={{ marginTop: "50px" , direction: lang === "ar"?"rtl":"ltr" }}
        >
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.socialReason")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.email")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.phone")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.NumberEmployees")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.satuts")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.details")}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                Default Event
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                {t("admin.Users.delete")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? partnersData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : partnersData
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: 160 }}
                    align="center"
                  >
                    {row.company.social_reason}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.email}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.company.phone}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.company.employee_number}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    <Switch
                      defaultChecked={row.is_active}
                      onChange={(e) => handleChangeStatus(e, row.id)}
                      size="small"
                    />
                  </TableCell>
                  {/* <TableCell style={{ width: 160 }} align="center">
                  <IconButton onClick={() => chooseEvent(true, row.id)}>
                    <EmojiEventsIcon color="primary" />
                  </IconButton>
                </TableCell> */}
                  <TableCell style={{ width: 160 }} align="center">
                    <IconButton>
                      <InfoIcon
                        onClick={() => handleOpen(row.id)}
                        color="secondary"
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {partnersIdsHaveDefaultEvent.includes(row.id) ? (
                      <CheckIcon fontSize="large" color="success" />
                    ) : (
                      <IconButton
                        onClick={() => addDefaultEvent(row.id.toString())}
                      >
                        <CheckIcon fontSize="large" />
                      </IconButton>
                    )}{" "}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    <Button
                      style={{ color: "red" }}
                      className="mr10"
                      onClick={() => handleShowDeleteUser(row.company_id)}
                    >
                      <DeleteIcon />
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
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                  colSpan={10}
                  count={partnersData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <PartnersActions
          openActionPopup={openActionPopup}
          setOpenActionPopup={setOpenActionPopup}
        />
      </Container>
    </>
  );
};
export default ListPartners;
