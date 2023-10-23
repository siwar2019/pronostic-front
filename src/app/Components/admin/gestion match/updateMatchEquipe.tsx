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
import $ from 'jquery'; 

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useStyles } from "../../Profile/Partner/games/gamesStyles";
import { Item } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { RootState } from "../../../../_redux/store/configureStore";
import { useNavigate, useParams } from "react-router-dom";
import {FaArrowsAltH,FaExchangeAlt } from "react-icons/fa";

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
import {
  EditMatchEquipe,
} from "../../../../_redux/actions/matchs";
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
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  border: "2px solid gray",
  boxShadow: 24,
  p: 2,
  overflow: "scroll",
  maxHeight: "60%",
  "@media (max-width:1400px)": {
    top: "66%",

  },
};

const styleDelete = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid gray",
  backgroundColor: "white",
  p: 4,
};

export default function UpdateMatchEquipe() {
  const initialValues = {
    groupeName: "",
    equipe1: "",
    equipe2: "",
    // date: "",
    // coeff: 1,
  };
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [listEquipes, setListEquipes] = React.useState<any>([
    { equipe1: "", equipe2: ""},
  ]);
const [coeff,setCoefficient]=React.useState(1) ;
const [reversed,setReversed]=React.useState(false) ;

  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);
const [Date,setDate]=React.useState("") ;
  const equipesEvents = useAppSelector(
    ({ equipesSlice: { equipesEvents } }) => equipesEvents
  );
const [reverseOne, setReverseOne] = useState({});
const [reverseTwo, setReverseTwo] = useState({});


  const { t } = useTranslation();
  const defaultProps = {
    options: equipesEvents,
  
    getOptionLabel: (option: any) => option.name,
  };

const handleSwapTeams = async () => {
 
  setListEquipes((listEquipes) => {
    return [{equipe1: listEquipes[0].equipe2, equipe2: listEquipes[0].equipe1}]
  })
}


  const handleChange = async (e: any) => {
    let { name, value } = e.target;

  };

  const handleUpdateMatch = () => {
    dispatch(
      EditMatchEquipe({
        listEquipes: listEquipes[0]?Object.values(listEquipes[0]):[],

        id: params.match_id as string,
        event_id: params.event_id as string,
        groupe_id: params.groupe_id as string,
        coeff:coeff,
        date:Date,
        
      })
    );

  };
  const handleChangeequipeOne = async (newValue1, i: number) => {
    setReverseOne(newValue1)
    let newListEquipe = [...listEquipes];
    let currentEquipe = listEquipes[i];

    currentEquipe.equipe1 = newValue1.id as string;
    newListEquipe[i] = currentEquipe;

    setListEquipes(newListEquipe);
  };

  const handleChangeequipeTwo = async (newValue, i: number) => {
    setReverseTwo(newValue)
    let newListEquipe = [...listEquipes];
    let currentEquipe = listEquipes[i];

    currentEquipe.equipe2 = newValue.id as string;
    newListEquipe[i] = currentEquipe;

    setListEquipes(newListEquipe);
  };

  const setDateMatch = (event: any, index: number) => {

    setDate(event.target.value);
  };
  const setCoeff = (event: any, index: number) => {

    let coeff=event.target.value
    setCoefficient(coeff) ;
  };

  const groupesMatch = useAppSelector(
    (state: RootState) => state.groupesSlice.groupesMatch
  );

  const navigate = useNavigate();
  const classes = useStyles();
  
  const dispatch = useAppDispatch();
  let params = useParams();

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
    <Container>
    <div>

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

  
        <Box sx={style}>
        <Typography
            style={{
              color: "#2185d0",
              display: "flex",
              justifyContent: "center",
              fontSize: "23px",
              fontWeight: "bold",
              textDecoration: "underline",
              
            }}
          >
            {/* {t("admin.Matchs.UpdateDateMatch")} */}
            Update Match
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
                      <>{console.log("equipesEvents",equipesEvents)}</>
                      <Autocomplete
                        {...defaultProps}
                        options={equipesEvents}
                        getOptionLabel={(option: any) => option.name}
                        id="grid-choose-pesticide"
                        clearOnEscape
                        onChange={(event, newValue1) => {
                          handleChangeequipeOne(newValue1 as any, i);
                        }}
                        value={equipesEvents.find((equipe) => listEquipes[0].equipe1 === equipe.id)  || null}
                        renderInput={(params) => (
                          <TextField {...params} label="Equipe 1" />
                        )}
                      />
                    </FormControl>
               
                  </Box>
                </Grid>
                <Grid xs={10} md={2} className={classes.gridVs}>
                <Button onClick={handleSwapTeams}> 
                <FaExchangeAlt fontSize="medium"/> 
                </Button>
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
                        value={equipesEvents.find((equipe) => listEquipes[0].equipe2 === equipe.id)  || null }
                        renderInput={(params) => (
                          <TextField {...params} label="Equipe 2" />
                        )}
                      />
                    </FormControl>
          
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
                          setDateMatch(e, i);
                        }}
                        name="date"
                      />
                    </FormControl>
               
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
                          setCoeff(e, i);
                        }}
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
           
              </Grid>
            );
          })}
        
      
            <Button
            variant="outlined"
            style={{
              background: "blue",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              margin: "auto",
            }}
            onClick={handleUpdateMatch}
          >
            Update Match
          </Button>
        </Box>
     </div>
    </Container>
  );
};
