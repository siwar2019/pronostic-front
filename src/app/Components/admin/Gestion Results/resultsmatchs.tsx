import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Bannier from "../../../assets/bannierResults.png";
import { useStyles } from "./gestionResultsStyles";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import { IGroupes } from "../../../../types/groupes";
import { getAllMatchs } from "../../../../_redux/actions/matchs";
import { getAllGroupes } from "../../../../_redux/actions/groupes";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { GETSCORE } from "../../../../_redux/actions/score";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/system";

function Resultsmatchs() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let groupes = useSelector((state: RootState) => state.groupesSlice.groupes);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let matchs = useSelector((state: RootState) => state.matchsSlice.matchs);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let score = useSelector((state: RootState) => state.scoreSlice.score);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const [pronosticsFilter, setPronosticsFilter] = useState([]);
  const [searchEquipe, setSearchEquipe] = useState(matchs);
  const [selectedValue, setSelectedValue] = useState();
  useEffect(() => {
    if (!selectedValue) {
      setSearchEquipe(matchs);
    } else if (selectedValue === "0") {
      setSearchEquipe(matchs);
    } else {
      setSearchEquipe(
        matchs.filter((pronostic) => {
          console.log("test", selectedValue);
          return (
            pronostic.equipes[0].id === selectedValue ||
            pronostic.equipes[1].id === selectedValue ||
            matchs === selectedValue
          );
        })
      );
    }
    ////////
    let pronosticsFilterTmp = [
      ...matchs.map((el) => el.equipes[0]),
      ...matchs.map((el) => el.equipes[1]),
    ];
    setPronosticsFilter(
      pronosticsFilterTmp.filter(
        (a, i) => pronosticsFilterTmp.findIndex((s) => a.id === s.id) === i
      )
    );
  }, [selectedValue, matchs]);
  const handleChangeOne = (e) => {
    setSelectedValue(e.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // dispatch(getAllGroupes());
    dispatch(GETSCORE());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [groupe2, setGroupe2] = React.useState<IGroupes>({
    id: "",
    name: "",
    event_id: "",
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    const data = groupes.find((groupe) => groupe.id === event.target.value);
    if (data) {
      setGroupe2(data);
      dispatch(getAllMatchs(data.id));
    }
  };

  const handleGame = (gameId: string) => {
    navigate(`/Resultats/${gameId}`);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div>
        <img className={classes.bannier} src={Bannier} alt="bannier" />
      </div>{" "}
      <Container>
        <Stack direction="row" spacing={22}>
          <p className={classes.matchResultText}>
            {t("admin.Results.matchsResults")}
          </p>

          <FormControl className={classes.formControlTwo}>
            <InputLabel className="" id="demo-simple-select-label">
              {t("partner.Ranking.SelectSortingTeam")}
            </InputLabel>
            <Select
              onChange={handleChangeOne}
              labelId="demo-select-small"
              id="demo-select-small"
              label={t("partner.Ranking.SelectSortingTeam")}
            >
              <MenuItem value="">{t("admin.Equipes.AllEquipes")}</MenuItem>
              {pronosticsFilter.map((pronosticFilter, index) => (
                <MenuItem key={index} value={pronosticFilter.id}>
                  {pronosticFilter.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        {searchEquipe.map((el, index) => (
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mt: 0.5 }}
            key={index}
            onClick={() => handleGame(el.id)}
            style={{ cursor: "pointer" }}
          >
            <Grid item xs={5}>
              <Item className={classes.team}>
                <div className={classes.flag1}>
                  <img
                    // src={`https://flagcdn.com/24x18/${el.equipes[0].icon.toLowerCase()}.png`}
                    src={
                      (process.env.REACT_APP_UPLOADS_LOGO +
                        el.equipes[0].images) as any
                    }
                    width="24"
                    height="18"
                    alt={el.equipes[0].name}
                  ></img>{" "}
                </div>

                {el.equipes[0].name}
              </Item>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              {el.score && el.score.equipe1}&nbsp;-&nbsp;
              {el.score && el.score.equipe2}
            </Grid>
            <Grid item xs={5}>
              <Item className={classes.team}>
                <div className={classes.flag2}>
                  <img
                    // src={`https://flagcdn.com/24x18/${el.equipes[1].icon.toLowerCase()}.png`}
                    src={
                      (process.env.REACT_APP_UPLOADS_LOGO +
                        el.equipes[1].images) as any
                    }
                    width="24"
                    height="18"
                    alt={el.equipes[1].name}
                  ></img>{" "}
                </div>
                {el.equipes[1].name}
              </Item>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}

export default Resultsmatchs;
