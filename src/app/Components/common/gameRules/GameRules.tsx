import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import img from "../../../assets/site-pronostic-foot-fiable.jpg";
import { useStyles } from "../../../styles/common/gameRules/gameRules";
import * as Muicon from "@material-ui/icons";
import img1 from "../../../assets/gameRules/Score_correcte.png";
import img2 from "../../../assets/gameRules/twoPoints.png";
import img3 from "../../../assets/gameRules/onePoint.png";
import img4 from "../../../assets/gameRules/zeroPoints.png";
import img5 from "../../../assets/gameRules/coff2.png";

const GameRules = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const casesFr = [
    {
      key: 1,
      title: "Gagnez 3 points",
      icon: "LooksOne",
      content: "Vous gagnez 3 points si le score est correct .",
      example: img1,
    },
    {
      key: 2,
      title: "Gagnez 2 points",
      icon: "LooksTwo",
      content:
        "Vous gagnez 2 points si la différence entre les points du score ajouté et la différence entre les points du résultat sont équivalents et l'équipe gagnante est correcte.",
      example: img2,
    },
    {
      key: 3,
      title: "Gagnez 1 point",
      icon: "Looks3",
      content: "Vous gagnez une seule point si l'équipe gagnante est correcte.",
      example: img3,
    },
    {
      key: 4,
      title: "Obtenez 0 points",
      icon: "Looks4",
      content:
        "Vous obtenez 0 points si la différence de buts est incorrecte, le score est  incorrecte et l'équipe gagnante est incorrecte ou si l'employé ne fait pas de pronostic, l'employé obtient également une différence de -5 points.",
      example: img4,
    },
  ];

  const casesEng = [
    {
      key: 1,
      title: "Earn 3 points",
      icon: "LooksOne",
      content: "You earn 3 points if the score is correct.",
      example: img1,
    },
    {
      key: 2,
      title: "Earn 2 points",
      icon: "LooksTwo",
      content:
        "You earn 2 points if the difference between the points of the added score and the difference between the points of the result are equal and the winning team is correct.",
      example: img2,
    },
    {
      key: 3,
      title: "Earn 1 point",
      icon: "Looks3",
      content: "You earn a single point if the winning team is correct.",
      example: img3,
    },
    {
      key: 4,
      title: "Get 0 points",
      icon: "Looks4",
      content:
        "You get 0 points if the goal difference is incorrect, the score is incorrect and the winning team is incorrect or if the employee does not make a prediction, the employee also gets a difference of -5 points.",
      example: img4,
    },
  ];
  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName className={classes.icons} />;
  };

  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const lang = localStorage.getItem("lang")

  return (
    <Container className={classes.pageRoot}>
      <Typography className={classes.title}>
        {t("client.gameRules.title")}
      </Typography>
      <Typography className={classes.subTitle}>
        {t("client.gameRules.subTitle")}
      </Typography>
      <Box className={classes.rulesImg} component="img" src={img} />
      <Typography className={classes.label}>
        {t("client.gameRules.label")}{" "}
      </Typography>

      {lang === "fr" ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          {casesFr.map((item) => (
            <Grid item xs={12} md={6} key={item.key}>
              <Paper elevation={8} className={classes.cases}>
                <Stack direction="column" alignItems="center" mb={1}>
                  <Box>{GenerateIcon(item.icon)}</Box>
                  <Typography variant="h5">{item.title}</Typography>
                </Stack>
                <Container className={classes.case}>
                  <Typography variant="body1">{item.content}</Typography>
                  <Typography variant="subtitle2" className={classes.example}>
                    {" "}
                    {t("client.gameRules.example")}:
                  </Typography>
                  <Box
                    className={classes.exampleImg}
                    component="img"
                    src={item.example}
                  />
                </Container>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          {casesEng.map((item) => (
            <Grid item xs={12} md={6} key={item.key}>
              <Paper elevation={12} className={classes.cases}>
                <Stack direction="column" alignItems="center" mb={1}>
                  <Box>{GenerateIcon(item.icon)}</Box>
                  <Typography variant="h5">{item.title}</Typography>
                </Stack>
                <Container className={classes.case}>
                  <Typography variant="body1">{item.content}</Typography>
                  <Typography variant="subtitle2" className={classes.example}>
                    {" "}
                    {t("client.gameRules.example")}:
                  </Typography>
                  <Box
                    className={classes.exampleImg}
                    component="img"
                    src={item.example}
                  />
                </Container>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      <Stack mt={4} direction={{ xs: "column", sm: "row" }}>
        <Box component="img" src={img5} width="150px" height="50px" />
        <Typography variant="h6" mt={1}>
          {" "}
          {t("client.gameRules.doublePoints")}
        </Typography>
      </Stack>
    </Container>
  );
};
export default GameRules;
