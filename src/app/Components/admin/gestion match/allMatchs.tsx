import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  TextField,
  Typography,
  SelectChangeEvent,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Autocomplete,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useStyles } from "../../Profile/Partner/games/gamesStyles";
import { Item } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { RootState } from "../../../../_redux/store/configureStore";
import { useNavigate, useParams } from "react-router-dom";
import {
  cleanMatchByEventsForAdmin,
  createGroupeEquipeForAdmin,
  deleteGroupeMatch,
  getMatchsByEvent,
} from "../../../../_redux/actions/groupes";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import CircleLoading from "../../CircleLoading";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getAllEquipes } from "../../../../_redux/actions/equipes";
import { ETranslateFR } from "../../../utils/translate/fr/translateFr.enum";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { setSelectedEventsModal } from "../../../../_redux/reducers/events";
import GroupeUpdate from "./updategroupe";
import UndoIcon from "@mui/icons-material/Undo";
import { Close } from "@material-ui/icons";

import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper, { PaperProps } from "@mui/material/Paper";
import {
  addDateToMatch,
  deleteMatchById,
} from "../../../../_redux/actions/matchs";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: "-webkit-linear-gradient(left, #2192ff, #092B4C)",
    color: theme.palette.common.white,
    borderRadius: "8px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  overflow: "scroll",
  maxHeight: "60%",
};

const styleDelete = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  backgroundColor: "white",
  p: 4,
};

export const MatchGroupesAdmin = () => {
  const initialValues = {
    groupeName: "",
    equipe1: "",
    equipe2: "",
    date: "",
    coeff: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    groupeName: "",
    equipes: [{ equipe1: "", equipe2: "", date: "", coeff: 1 }],
  };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [listEquipes, setListEquipes] = React.useState<any>([
    { equipe1: "", equipe2: "", date: "", coeff: 1 },
  ]);

  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);

  const equipesEvents = useAppSelector(
    ({ equipesSlice: { equipesEvents } }) => equipesEvents
  );
  const { t } = useTranslation();
  const defaultProps = {
    options: equipesEvents,
    getOptionLabel: (option: any) => option.name,
  };

  const validate = () => {
    let errors: any = {};
    let errorEquipe = false;
    errors.groupeName = !formValues.groupeName ? ETranslateFR.REQUIRED : "";
    errors.equipes = listEquipes.map((equipe) => {
      if (!equipe.equipe1 || !equipe.equipe2 || !equipe.date)
        errorEquipe = true;
      return {
        equipe1: !equipe.equipe1 ? ETranslateFR.REQUIRED : "",
        equipe2: !equipe.equipe2 ? ETranslateFR.REQUIRED : "",
        date: !equipe.date ? ETranslateFR.REQUIRED : "",
      };
    });

    setFormErrors(errors);
    // console.log("test equipe", errors.groupeName, errorEquipe, formValues);
    if (errors.groupeName || errorEquipe) return false;
    return true;
  };

  const handleChange = async (e: any) => {
    let { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  let handleChangeequipeOne = (newValue, i: number) => {
    setListEquipes((listEquipes) => {
      listEquipes[i].equipe1 = newValue ? newValue.id : "";
      return listEquipes;
    });
  };

  let handleChangeequipeTwo = (newValue, i: number) => {
    setListEquipes((listEquipes) => {
      listEquipes[i].equipe2 = newValue ? newValue.id : "";
      return listEquipes;
    });
  };

  const handleCreate = () => {
    const validateErrors = validate();
    if (validateErrors) {
      const formatData = listEquipes.map(el=>{
        console.log(el.date,"hhhh")
        el.date = new Date(new Date(el.date).toUTCString())
        return el
      })
      console.log(formatData)
      dispatch(
        //siwar
        createGroupeEquipeForAdmin({
          event_id: Number(params.id as string),
          groupeName: formValues.groupeName,
          listEquipes: listEquipes,
        })
      );
      setTimeout(() => dispatch(getMatchsByEvent(params.id as string)), 700);
      handleClose();
      setFormValues(initialValues);
      setListEquipes([{ equipe1: "", equipe2: "", date: "", coeff: 1 }]);
    }
  };

  const groupesMatch = useAppSelector(
    (state: RootState) => state.groupesSlice.groupesMatch
  );

  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  let params = useParams();

  const handleClick = (match_id: string) => {
    navigate(`/UpdateMatch/${match_id}`);
  };

  const handleClickUpdate = (match_id: string, groupe_id: string) => {
    navigate(`/UpdateMatchEquipe/${match_id}/${groupe_id}/${params.id}`);
  };

  /*const handleOpen = () => {
    setOpen(true);
    dispatch(setSelectedEventsModal(eventId));
  };*/
  // console.log("listEquipes", listEquipes);
  const addDate = (event: any, index: number) => {
    // console.log(event.target.value);

    setListEquipes((listEquipes) => {
      listEquipes[index].date = event.target.value ? event.target.value : "";
      return listEquipes;
    });

    // setDate(event.target.value);
  };
  const addCoeff = (event: any, index: number) => {
    setListEquipes((listEquipes) => {
      listEquipes[index].coeff = event.target.value ? event.target.value : "";
      return listEquipes;
    });
  };

  const [rows, setRows] = useState([{ equipesIds: "" }]);
  const eventId = useSelector(
    (state: RootState) => state.eventsSlice.selectedEventModal
  );
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(0);

  // Showing delete confirmation to  table users
  const handleConfirm = (i: number) => {
    setShowConfirm(true);
    setItemToDelete(i);
  };

  // Handle the case of delete confirmation where
  const handleRemoveClick = (i: any) => {
    const list = [...rows];
    list.splice(i, 1);

    //////
    let newListEquipe = [...listEquipes];
    newListEquipe.splice(i, 1);
    setListEquipes(newListEquipe);
    /////

    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  const handleNo = () => {
    setShowConfirm(false);
    setOpenDelete(false);
  };
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        equipesIds: "",
      },
    ]);

    //////////
    setListEquipes([
      ...listEquipes,
      { equipe1: "", equipe2: "", date: "", coeff: 1 },
    ]);
    // console.log("first", listEquipes);

    setFormErrors({
      ...formErrors,
      equipes: [
        ...formErrors.equipes,
        { equipe1: "", equipe2: "", date: "", coeff: 1 },
      ],
    });
  };

  ///// modal delete /////
  const [openDelete, setOpenDelete] = React.useState(false);
  const [matchDelete, setMatchDelete] = React.useState("");

  const handleOpenDelete = (id: string) => {
    setOpenDelete(true);
    setMatchDelete(id);
  };
  const handleCloseDelete = () => setOpenDelete(false);

  const handeldeleteMatch = () => {
    dispatch(deleteMatchById(matchDelete));
    setOpenDelete(false);
    setTimeout(() => {
      dispatch(getMatchsByEvent(params.id as string));
    }, 500);
  };
  const handleShowDeleteGroupeMatchs = () => {
    setShowConfirmDelete(true);
  };

  const handleNoDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleSubmitDeleteGroupeMatchs = (id: any) => {
    dispatch(deleteGroupeMatch(id as any));
    handleNoDelete();
    setTimeout(() => dispatch(getMatchsByEvent(params.id as string)), 1000);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getMatchsByEvent(params.id as string));
    dispatch(getAllEquipes());
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      dispatch(cleanMatchByEventsForAdmin());
    };
  }, [dispatch, params.id]);

  return (
    <Container sx={{ mt: 8 }}>
      <Button
        variant="contained"
        style={{
          background: "-webkit-linear-gradient(left, #4da7ff, #135799)",
          borderRadius: "8px",
          textTransform: "capitalize",
          fontWeight: "bold",
          height: "30px",
        }}
        onClick={() => navigate(-1)}
      >
        <UndoIcon fontSize="medium" cursor="pointer" />{" "}
      {t("employee.Pronostics.back")}
      </Button>

      <AddCircleIcon className={classes.addMatch} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={classes.titModal}
            style={{ fontWeight: "bold" }}
          >
            {t("admin.Matchs.createMatch")}
          </Typography>

          <Grid xs={12}>
            <Stack spacing={1}>
              <TextField
                id="filled-basic"
                label="Groupe Name"
                variant="filled"
                name="groupeName"
                error={
                  formErrors.groupeName && formErrors.groupeName !== ""
                    ? true
                    : false
                }
                onChange={handleChange}
                value={formValues.groupeName}
              />
              {formErrors.groupeName && formErrors.groupeName !== "" ? (
                <Typography color="error" variant="caption">
                  {formErrors.groupeName}
                </Typography>
              ) : (
                <></>
              )}
            </Stack>
          </Grid>
          {listEquipes.map((row: { equipe1: any }, i: number) => {
            return (
              <Grid
                container
                // rowSpacing={1}
                sx={{ mb: 1 }}
                className={classes.gridEquipe}
              >
                <Grid xs={10} md={2}>
                  <Box>
                    <FormControl fullWidth>
                      <Autocomplete
                        {...defaultProps}
                        options={equipesEvents}
                        getOptionLabel={(option: any) => option.name}
                        id="grid-choose-pesticide"
                        clearOnEscape
                        onChange={(event, newValue) => {
                          handleChangeequipeOne(newValue as any, i);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label="Equipe 1" />
                        )}
                      />
                    </FormControl>
                    {formErrors.equipes[i].equipe1 &&
                    formErrors.equipes[i].equipe1 !== "" ? (
                      <Typography color="error" variant="caption">
                        {formErrors.equipes[i].equipe1}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Grid>
                <Grid xs={10} md={2} className={classes.gridVs}>
                  <p className={classes.vs}>Vs</p>
                </Grid>
                <Grid xs={10} md={2} marginBottom="5px">
                  <Box>
                    <FormControl fullWidth>
                      <Autocomplete
                        {...defaultProps}
                        options={equipesEvents}
                        getOptionLabel={(option: any) => option.name}
                        id="grid-choose-pesticide"
                        clearOnEscape
                        onChange={(event, newValue) => {
                          handleChangeequipeTwo(newValue as any, i);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label="Equipe 2" />
                        )}
                      />
                    </FormControl>
                    {formErrors.equipes[i].equipe2 &&
                    formErrors.equipes[i].equipe2 !== "" ? (
                      <Typography color="error" variant="caption">
                        {formErrors.equipes[i].equipe2}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Grid>
                <Grid
                  xs={13}
                  md={4}
                  item
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  <Stack spacing={0.5}>
                    <FormControl fullWidth>
                      <TextField
                        id="datetime-local"
                        type="datetime-local"
                        onChange={(e) => {
                          addDate(e, i);
                        }}
                        name="date"
                      />
                    </FormControl>
                    {formErrors.equipes[i].date &&
                    formErrors.equipes[i].date !== "" ? (
                      <Typography color="error" variant="caption">
                        {formErrors.equipes[i].date}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>

                <Grid
                  md={0.8}
                  sm={2}
                  xs={2}
                  sx={{ mb: 1 }}

                  // style={{ width: "5px" }}
                >
                  <Stack spacing={0.5}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        InputProps={{
                          inputProps: {
                            style: {
                              textAlign: "center",
                              backgroundColor: "#eef2f8",
                              fontSize: "15px",
                            },
                          },
                        }}
                        type="number"
                        defaultValue="1"
                        onChange={(e) => {
                          addCoeff(e, i);
                        }}
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Button
                    className={classes.ClearIcon}
                    onClick={() => handleConfirm(i)}
                  >
                    <ClearIcon />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
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
              type="submit"
              onClick={handleAdd}
              className="add-btn"
            >
              <SportsSoccerIcon />
              &nbsp;
              <span>{t("admin.Matchs.addMatch")}</span>
            </Button>
          </Grid>
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
                    yes
                  </Button>
                  <Button onClick={handleNo} color="primary" autoFocus>
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
          <Button
            variant="outlined"
            style={{
              background: "blue",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              margin: "auto",
            }}
            onClick={handleCreate}
          >
            Créer
          </Button>
        </Box>
      </Modal>

      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <Grid item xs={12} md={9} sx={{ mt: 4 }}>
          {groupesMatch.length === 0 ? (
            <EmptyPageModal />
          ) : (
            groupesMatch.map((el, index) => (
              <Table key={index} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ alignItems: "center" }}>
                      {" "}
                      <Stack
                        display="flex"
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Stack
                          display="flex"
                          direction="row"
                          alignItems="center"
                          justifyContent="flex-start"
                        >
                          <Item>Matchs {el.groupe.name}</Item>

                          <IconButton
                            style={{
                              display: "flex-start !important",
                              alignItems: "left !important",
                            }}
                          >
                            <GroupeUpdate groupe={el.groupe} />
                          </IconButton>
                        </Stack>
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
                                    "partner.Employees.deleteGroupeMatchsConfirmationMsg"
                                  )}
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  onClick={() =>
                                    handleSubmitDeleteGroupeMatchs(el.groupe.id)
                                  }
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
                        <Stack
                          justifyContent="flex-end"
                          display="flex"
                          direction="row"
                          alignItems="center"
                        >
                          <Button
                            style={{ color: "white" }}
                            className="mr10"
                            onClick={handleShowDeleteGroupeMatchs}
                          >
                            <DeleteIcon />
                          </Button>
                        </Stack>
                      </Stack>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {el.matchs.map((match, index) => (
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 4, sm: 2, md: 3 }}
                      sx={{ mb: 0.5 }}
                      key={index}
                    >
                      <Grid item xs={3}>
                        <Item className={classes.team}>
                          {match.equipes[0].name}
                          <div className={classes.flag1}>
                            <img
                              src={
                                (process.env.REACT_APP_UPLOADS_LOGO +
                                  match.equipes[0].images) as any
                              }
                              width="32"
                              height="24"
                              alt="Country flag"
                              className={classes.flagImg}
                            ></img>
                          </div>
                        </Item>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        className={classes.time}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          style={{
                            cursor: "pointer",
                            background: "#d4d4d536",
                            border: "none",
                          }}
                          onClick={() => handleClick(match.id)}
                        >
                          <Item
                            className={classes.time}
                            sx={{
                              ":hover": {
                                color: "red !important",
                              },
                            }}
                          >
                            {moment(match.date).format("YYYY-MM-DD / HH:mm:ss")}

                            <EditIcon
                              style={{ marginLeft: "10px", fontSize: "medium" }}
                            />
                          </Item>
                        </button>
                      </Grid>
                      <Grid item xs={1} className={classes.coef}>
                        <Item>{match.coeff}</Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item className={classes.team}>
                          <div className={classes.flag2}>
                            <img
                              // src={`http://localhost/pronostics/logo/${match.equipes[1].images}`}
                              src={
                                (process.env.REACT_APP_UPLOADS_LOGO +
                                  match.equipes[1].images) as any
                              }
                              width="32"
                              height="24"
                              alt="Country flag"
                              className={classes.flagImg}
                            ></img>
                          </div>
                          {match.equipes[1].name}
                        </Item>
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        style={{ display: "flex", justifyContent: "right" }}
                      >
                        <Stack
                          direction={{ xs: "column", md: "row" }}
                          spacing={2}
                        >
                          <IconButton
                            style={{
                              background: "#d4d4d536",
                              border: "none",
                            }}
                            onClick={() =>
                              handleClickUpdate(match.id, el.groupe.id)
                            }
                          >
                            <EditIcon color="success" fontSize="small" />
                          </IconButton>
                          <IconButton
                            onClick={() => handleOpenDelete(match.id)}
                            style={{
                              background: "#d4d4d536",
                              border: "none",
                            }}
                          >
                            <DeleteIcon color="error" fontSize="small" />
                          </IconButton>
                        </Stack>
                        <Modal
                          open={openDelete}
                          onClose={handleCloseDelete}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={styleDelete}>
                            <Typography id="modal-modal-title" variant="body1">
                              Êtes-vous sûr de vouloir supprimer ce match
                            </Typography>
                            <Stack
                              justifyContent="center"
                              direction="row"
                              mt={3}
                              // style={{
                              //   display: "flex",
                              //   justifyContent: "center",
                              // }}
                            >
                              <Button
                                // onClick={() =>
                                //   handeldeleteMatch()
                                // }
                                // onClick={handeldeleteMatch}
                                onClick={handeldeleteMatch}
                                // color="error"
                                variant="contained"
                                color="error"
                                autoFocus
                              >
                                yes
                              </Button>
                              <Button
                                onClick={handleNo}
                                color="error"
                                autoFocus
                              >
                                No
                              </Button>
                            </Stack>
                          </Box>
                        </Modal>
                      </Grid>
                    </Grid>
                  ))}
                </TableBody>
              </Table>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
};
