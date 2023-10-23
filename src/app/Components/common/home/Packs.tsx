import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useStyles } from "../../../styles/common/home/packsStyles";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

const Packs = () => {
  const classes = useStyles();

  let packs = [
    {
      key: "1",
      title: "Basic",
      price: "..",
      packLink: "",
      color: "rgb( 1, 155, 253 )",
      display: "block",
      packSettings: [
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
      ],
    },
    {
      key: "2",
      title: "Standard",
      price: "..",
      packLink: "",
      color: "rgb( 19, 95, 168 )",
      display: "block",
      packSettings: [
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
      ],
    },
    {
      key: "3",
      title: "Gold",
      price: "..",
      packLink: "",
      color: "rgb(255, 193, 7 )",
      display: "block",
      packSettings: [
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        "................... .",
      ],
    },
    {
      key: "4",
      title: "Premium",
      price: "..",
      packLink: "",
      color: "rgb(241, 108, 17)",
      display: "block",
      packSettings: [
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
        ".....................",
      ],
    },
  ];

  const { t } = useTranslation();

  return (
    <Box sx={{ mb: 8 }}>
      <Box className={classes.cardsBackground}></Box>
      <Container className={classes.sectionContent}>
        <Stack textAlign="center" spacing={0.5}>
          <Typography variant="h6" color="secondary">
            {t("client.Home.formulas")}
          </Typography>
          <Typography variant="h5" className={classes.infoText}>
            {t("client.Home.chooseOffer")}
          </Typography>
        </Stack>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {packs.map((pack) => (
            <Grid
              item
              lg={3}
              sx={{ display: { xs: pack.display, lg: "block" } }}
              key={pack.key}
            >
              <Box className={classes.cardsContainer}>
                <Card className={classes.cards} square={true}>
                  <CardHeader
                    component={Typography}
                    align="center"
                    title={pack.title}
                    className={classes.cardsTitle}
                    style={{ background: pack.color }}
                  />
                  <CardContent
                    className={classes.cardsContent}
                    style={{ padding: 0 }}
                  >
                    <Container>
                      <Stack direction="row">
                        <Typography variant="h1">{pack.price}</Typography>
                        <Stack direction="column" spacing={2.5}>
                          <Typography variant="h5">DT</Typography>
                          <Typography variant="h4">
                            /{t("client.Home.month")}
                          </Typography>
                        </Stack>
                      </Stack>
                      <List dense>
                        {pack.packSettings.map((settings, index) => (
                          <ListItem style={{ padding: 0 }} dense key={index}>
                            <ListItemIcon style={{ minWidth: "25px" }}>
                              <CheckIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={settings} />
                          </ListItem>
                        ))}
                      </List>
                    </Container>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Link
                      href={pack.packLink}
                      underline="none"
                      className={classes.cardActionLink}
                      style={{ background: pack.color }}
                    >
                      {t("client.Home.subscribe")}
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Packs;
