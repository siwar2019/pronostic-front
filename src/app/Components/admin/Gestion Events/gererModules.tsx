import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useStyles } from "../../Profile/Partner/groupesStyles";
import { getMatchsByEvent } from "../../../../_redux/actions/groupes";
import DateMatch from "./DateMatch";
import { Match } from "../../../../types/matchs";

const Matchdate: React.FC<{
  id: string;
  matchsDates: Match[];
  setMatchsDates: React.Dispatch<React.SetStateAction<Match[]>>;
}> = ({ id, matchsDates, setMatchsDates }) => {
  const groupesMatch = useSelector(
    (state: RootState) => state.groupesSlice.groupesMatch
  );

  const classes = useStyles();

  return (
    <Container sx={{ mt: 8 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          {groupesMatch.length !== 0 &&
            groupesMatch.map((el, index) => (
              <Box key={index} style={{ backgroundColor: "#f1eaeaa3 " }}>
                <AccordionSummary
                  id={el.groupe.id}
                  aria-controls="panel1a-content"
                  sx={{ mt: 4 }}
                  className={classes.accordianGroup}
                >
                  <Typography className={classes.nameGroupes}>
                    {el.groupe.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {el.matchs.map((match, index) => (
                    <DateMatch
                      key={index}
                      match={match}
                      matchsDates={matchsDates}
                      setMatchsDates={setMatchsDates}
                    />
                  ))}
                </AccordionDetails>
              </Box>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Matchdate;
