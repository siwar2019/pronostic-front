import {
  Table,
  TableContainer,
  TableHead,
  tableCellClasses,
  TableCell,
  TableRow,
  TableBody,
  Grid,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import { useStyles } from "./gestion events";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getAllGroupeEquipeForAdmin } from "../../../../_redux/actions/groupes";

export const GroupesListe: React.FC<{ eventId: string }> = ({ eventId }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2d314a",
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

  const groupes = useSelector(
    (state: RootState) => state.groupesSlice.groupesEquipes
  );
  const classes = useStyles();

  const dispatch = useAppDispatch();

  // useEffect(()=>{
  // dispatch(getAllGroupeEquipeForAdmin(eventId))
  // }, [dispatch, eventId])

  const handelGetGroupe = () => {
    dispatch(getAllGroupeEquipeForAdmin(eventId));
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          gap: " 20px",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          component="label"
          className={classes.btUpload}
          onClick={() => {
            handelGetGroupe();
          }}
        >
          <FileDownloadDoneIcon />
          VALIDER
        </Button>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} sx={{ mt: 4 }}>
          {groupes.map((el, index) => (
            <TableContainer
              style={{ width: 400 }}
              component={Paper}
              sx={{ mb: 4 }}
              key={index}
            >
              <Table style={{ width: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>{el.name}</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {el.order.map((el) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {el.equipes.name}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
