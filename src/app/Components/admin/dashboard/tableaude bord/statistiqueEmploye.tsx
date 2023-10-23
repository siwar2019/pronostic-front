import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { getAllPartners } from "../../../../../_redux/actions/users";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { useEffect} from "react";

import {
  getAllEventsForAdminByCatégorie,
 
} from "../../../../../_redux/actions/events";
import { getAllMatchsForAdminStatistiques } from "../../../../../_redux/actions/matchs";
import { getTotalPronosticsByMatchForAdmin } from "../../../../../_redux/actions/pronostics";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function EmployeStatistique() {
  const matchsSelected = useSelector(
    (state: RootState) => state.matchsSlice.matchs
  );

  const { events } = useAppSelector((state) => state.eventsSlice);
  const partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );
  const dispatch = useAppDispatch();
  const [event_id, setEventss] = React.useState("");
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [match_id, setMatchs] = React.useState("");

  const handleChangeEvents = (event: SelectChangeEvent) => {
    setEventss(event.target.value as string);
    dispatch(
      getAllMatchsForAdminStatistiques({
        event_id: event.target.value,
        dateStart: value,
        dateEnd: value2,
      })
    );
  };

  let handleChangeMatch = (event: SelectChangeEvent) => {
    setMatchs(event.target.value as string);
   
    dispatch(
      getTotalPronosticsByMatchForAdmin({
        event_id,
        match_id: event.target.value,
        company_id: societe,
      })
    );  
  };

  const [societe, setSociete] = React.useState("");
  const handleChangeSte = (event: SelectChangeEvent) => {
    setSociete(event.target.value as string);
    
    dispatch(
      getTotalPronosticsByMatchForAdmin({
        event_id,
        match_id,
        company_id: event.target.value,
      })
    );
  };

  

  const categories = useAppSelector(
    ({ categoriesSlice: { categories } }) => categories
  );
 
  const [categorie, setCategorie] = React.useState("");

  const handleChangeCategorie = (event: SelectChangeEvent) => {
    setCategorie(event.target.value as string);
    dispatch(getAllEventsForAdminByCatégorie(event.target.value as string));
  };

  useEffect(() => {
    dispatch(getAllPartners());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} lg={2}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categorie}
                label="Age"
                onChange={handleChangeCategorie}
              >
                {categories.map((el) => (
                  <MenuItem value={el.id}>{el.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Events</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={event_id}
                label="Age"
                onChange={handleChangeEvents}
              >
                {events.length >0  && events.map((el) => (
                  <MenuItem value={el.id}>{el.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sociétes</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={societe}
                onChange={handleChangeSte}
              >
                {partnersData.map((el) => (
                  <MenuItem value={el.company_id}>
                    {el.company.social_reason}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Match 1"
              value={value}
              onChange={(newValue) => {
                
                setValue(newValue);
                getAllMatchsForAdminStatistiques({
                  event_id: event_id,
                  dateStart: value,
                  dateEnd: value2,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Match 2"
              value={value2}
              onChange={(newValue) => {
                

                setValue2(newValue);
                getAllMatchsForAdminStatistiques({
                  event_id: event_id,
                  dateStart: value,
                  dateEnd: newValue,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} md={4} lg={2}>
          <Box >
            <FormControl fullWidth  style={{ height: "200px" }}>
              <InputLabel id="demo-simple-select-label"  style={{ height: "200px" }}>Matchs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={match_id}
                label="Age"
                onChange={handleChangeMatch}
               
              >
                {matchsSelected.map((el, index) => (
                  <MenuItem value={el.id}>
                    {el.equipes[0].name}-{el.equipes[1].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
