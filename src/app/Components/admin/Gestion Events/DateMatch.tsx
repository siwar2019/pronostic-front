import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useStyles } from "../../Profile/Partner/groupesStyles";
import { Stack } from "@mui/system";
import { useState } from "react";
import { IMatchs } from "../../../../types/groupes";
import TextField from "@mui/material/TextField";

type Match = {
  id: string;
  date: Date;
};

const DateMatch: React.FC<{
  match: IMatchs;
  matchsDates: Match[];
  setMatchsDates: React.Dispatch<React.SetStateAction<Match[]>>;
}> = ({ match, matchsDates, setMatchsDates }) => {
  const dispatch = useAppDispatch();
  const [currentMatch, setCurrentMatch] = useState<IMatchs>(match);
  useEffect(() => {
    setCurrentMatch(match);
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const classes = useStyles();

  const [date, setDate] = useState();
  const [onblur, setOnBlur] = useState(false);

  const changeDateValue = (dates: any) => {
    if (onblur) {
      setDate(dates.target.value);
      setOnBlur(false);
    }
  };

  const changeDate = (dates: any, id: string) => {
    if (dates.target.value) {
      let newMatch = { ...currentMatch, date: dates.target.value };
      setCurrentMatch(newMatch);
      if (matchsDates.find((matchDate) => matchDate.id === id)) {
        setMatchsDates(
          matchsDates.map((matchDate) => {
            if (matchDate.id === id) {
              matchDate.date = new Date(
                new Date(dates.target.value).toUTCString()
              );
            }
            return matchDate;
          })
        );
      } else {
        setMatchsDates([...matchsDates, { id, date: dates.target.value }]);
      }
    }
  };
  return (
    <>
      <Stack>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mb: 0.5 }}
          id={match.id}
          style={{ alignItems: "center" }}
        >
          <Grid item xs={4}>
            <Item className={classes.team}>
              {match.equipes[0].name}
              <div className={classes.flag1}>
                {getUnicodeFlagIcon(match.equipes[0].icon)}
              </div>
            </Item>
          </Grid>
          <Grid item xs={4} style={{ justifyContent: "center" }}>
            <Item className={classes.time} style={{ padding: "0px" }}>
              <TextField
                id="datetime-local"
                type="datetime-local"
                onBlur={(e) => changeDate(e, match.id)}
                defaultValue={currentMatch?.date}
                style={{ padding: "8px" }}
                className={classes.time}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={classes.team}>
              <div className={classes.flag2}>
                {getUnicodeFlagIcon(match.equipes[1].icon)}
              </div>
              {match.equipes[1].name}
            </Item>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DateMatch;
