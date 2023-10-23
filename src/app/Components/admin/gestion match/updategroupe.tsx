import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  Autocomplete,
  TextField,
  Stack,
} from "@mui/material";
import { useStyles } from "../../Profile/Partner/games/gamesStyles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import ClearIcon from "@mui/icons-material/Clear";
import {
  addMatchForAdmin,
  getMatchsByEvent,
} from "../../../../_redux/actions/groupes";
import { useParams } from "react-router-dom";
import { IGroupe, INewMatch } from "../../../../types/groupes";
import { ETranslateFR } from "../../../utils/translate/fr/translateFr.enum";
import { Item } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CodeOff } from "@mui/icons-material";
import { number } from "yup/lib/locale";
import { t } from "i18next";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  maxHeight: "60%",
};

export default function GroupeUpdate(props: { groupe: IGroupe }) {
  const initialValues = { equipe1: "", equipe2: "", date: "", coeff: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    equipes: [{ equipe1: "", equipe2: "", date: "", coeff: 1 }],
  };

  const [formErrors, setFormErrors] = useState(initialValuesErrors);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  let params = useParams();
  const [listEquipes, setListEquipes] = React.useState<any>([
    { equipe1: "", equipe2: "", date: "", coeff: 1 },
  ]);
  const [coeff, setCoeff] = useState(1);
  const classes = useStyles();
  const [rows, setRows] = useState([{ equipesIds: "" }]);
  const eventId = useSelector(
    (state: RootState) => state.eventsSlice.selectedEventModal
  );
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(0);
  const [equipeOne, setEquipeOne] = React.useState("");
  const [equipeTwo, setEquipeTwo] = React.useState("");
  const equipesEvents = useAppSelector(
    ({ equipesSlice: { equipesEvents } }) => equipesEvents
  );

  const validate = () => {
    let errors: any = {};
    let errorEquipe = false;
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
    if (errorEquipe) return false;
    return true;
  };

  const addDate = (event: any, index: number) => {
    setListEquipes((listEquipes) => {
      listEquipes[index].date = event.target.value ? event.target.value : "";
      return listEquipes;
    });
  };
  const addCoeff = (event: any, index: number) => {
    setListEquipes((listEquipes) => {
      listEquipes[index].coeff = event.target.value ? event.target.value : "";
      return listEquipes;
    });
  };

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
  };
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        equipesIds: "",
      },
    ]);
    setListEquipes([
      ...listEquipes,
      { equipe1: "", equipe2: "", date: "", coeff: 1 },
    ]);

    setFormErrors({
      ...formErrors,
      equipes: [
        ...formErrors.equipes,
        { equipe1: "", equipe2: "", date: "", coeff: 1 },
      ],
    });
  };

  const defaultProps = {
    options: equipesEvents,
    getOptionLabel: (option: any) => option.name,
  };
  let handleChangeequipeOne = (newValue, i: number) => {
    setEquipeOne(newValue.id);
    let newListEquipe = [...listEquipes];
    let currentEquipe = listEquipes[i];

    currentEquipe.equipe1 = newValue.id as string;
    newListEquipe[i] = currentEquipe;

    setListEquipes(newListEquipe);
  };

  let handleChangeequipeTwo = (newValue, i: number) => {
    setEquipeTwo(newValue.id);
    let newListEquipe = [...listEquipes];
    let currentEquipe = listEquipes[i];

    currentEquipe.equipe2 = newValue.id as string;
    newListEquipe[i] = currentEquipe;

    setListEquipes(newListEquipe);
  };
  const handleCreate = () => {
    const validateErrors = validate();

    if (validateErrors) {
      dispatch(
        addMatchForAdmin({
          listEquipes: listEquipes,
          event_id: Number(params.id as string),
          groupe_id: props.groupe.id,
          coeff: coeff,
        })
      );
      setTimeout(() => dispatch(getMatchsByEvent(params.id as string)), 700);
      handleClose();
      setListEquipes([{ equipe1: "", equipe2: "", date: "", coeff: "" }]);
    }
    setFormValues(initialValues);
  };

  useEffect(() => {
    dispatch(getMatchsByEvent(params.id as string));
  }, [dispatch, params.id]);
  return (
    <Grid>
      <Button onClick={handleOpen}>
        <AddCircleIcon style={{ color: "white" }} />
      </Button>
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
            Créer Un Match
          </Typography>

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
                              fontSize: "10px",
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
              type="button"
              onClick={handleAdd}
              className="add-btn"
            >
              <SportsSoccerIcon />
              &nbsp;
              <span>Add Match </span>
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
                  {/* {t("partner.Employees.deleteConfirmation")} */}
                  Are you sure you want to delete
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {/* {t("partner.Employees.deleteConfirmationMsg")} */}
                    Confirm delete
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
    </Grid>
  );
}
