import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllPartners } from "../../../../../_redux/actions/users";
import React, { useEffect} from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { getTotalPronosticsAdmin } from "../../../../../_redux/actions/pronostics";
import { FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import { Box } from "@mui/system";
import { SelectChangeEvent } from "@mui/material/Select";
import { getAllCategories } from "../../../../../_redux/actions/categories";
// import { getAllEventsByCatégorieTableWinner } from "../../../../../_redux/actions/events";
import { getAllEventsByCatégorieTableWinner} from "../../../../../_redux/actions/events";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));





export default function WinnersTable() {
  const totalPronosticsAdmin = useAppSelector(
    ({ pronosticsSlice: { totalPronosticsAdmin } }) => totalPronosticsAdmin
  );

 
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllPartners());
   
  }, [dispatch]);
  const { eventsTabWinner } = useAppSelector((state) => state.eventsSlice);
  const [eventss, setEvents] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEvents(event.target.value as string);
    dispatch(getTotalPronosticsAdmin(event.target.value as string));
  };
  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);
  const [categorie, setCategorie] = React.useState("");

  const handleChangeCategorie = (event: SelectChangeEvent) => {
    setCategorie(event.target.value as string);
    dispatch(getAllEventsByCatégorieTableWinner(event.target.value as string));
  };

  return (
    <>
    
    <Grid container spacing={4} mb={2}>
    <Grid item xs={12} md={6}>
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
    <Grid item xs={12} md={6}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Events</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={eventss}
                label="Age"
                onChange={handleChange}
              >
                 {eventsTabWinner.map((el) => (
                <MenuItem value={el.id}>{el.name}</MenuItem>
              
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
     
    </Grid>
    <TableContainer component={Paper}>
     
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>society Name</StyledTableCell>
            <StyledTableCell align="right">Winners Name</StyledTableCell>
            <StyledTableCell align="right">Tot Points</StyledTableCell>
            <StyledTableCell align="right">Différence</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {totalPronosticsAdmin.length >0 && totalPronosticsAdmin.map((el, index) => (
            <StyledTableRow key={el.users.email}>
             
              
                <StyledTableCell >{el.users.company.social_reason}</StyledTableCell>
              
               
              <StyledTableCell align="right">{el.users.email}</StyledTableCell>
               <StyledTableCell align="right">{el.point}</StyledTableCell>
              <StyledTableCell align="right">{el.diff}</StyledTableCell>
            </StyledTableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
