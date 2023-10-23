import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { useEffect } from "react";
import { getAllTeams } from "../../../../../_redux/actions/teams";
import { Flag } from "semantic-ui-react";

const DisplayAllTeams = () => {
  let teams = useSelector((state: RootState) => state.teamsSlice.teams);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(getAllTeams());
    }
  }, [teams.length]);

  const flagRenderer = (item: any) => <Flag name={item.Country} />;

  return (
    <>
      <Typography
        color="primary"
        variant="subtitle1"
        style={{ marginBottom: "20px" }}
      >
        Liste des groupes
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "100px" }}
              >
                Pays
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "200px" }}
              >
                Nom
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <TableRow
                key={team.Id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{flagRenderer(team)}</TableCell>
                <TableCell align="center">{team.Name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default DisplayAllTeams;
