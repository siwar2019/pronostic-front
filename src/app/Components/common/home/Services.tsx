import {
  Container,
  Typography,
  Grid,
  CardActionArea,
  Stack,
  Box,
} from "@mui/material";
import { useStyles } from "../../../styles/common/home/servicesStyles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as Muicon from "@material-ui/icons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useAppSelector } from "../../../../hooks/reduxHooks";

const Services = () => {
  const classes = useStyles();

  let servicesFr = [
    {
      key: "1",
      serviceIcon: "QueryBuilder",
      color: "rgb( 241, 108, 17 )",
      label: "Derniers Actus",
      serviceLink: "/",
    },
    {
      key: "2",
      serviceIcon: "EmojiEvents",
      color: "rgb( 0, 151, 216 )",
      label: "Résultats & Classements",
      serviceLink: "/",
    },
    {
      key: "3",
      serviceIcon: "Shuffle",
      color: "rgb( 255, 165, 0 )",
      label: "Info Mercato",
      serviceLink: "/",
    },
    {
      key: "4",
      serviceIcon: "SportsVolleyball",
      color: "rgb( 49, 58, 89 )",
      label: "LIGUE 1",
      serviceLink: "/",
    },
    {
      key: "5",
      serviceIcon: "ShoppingBasket",
      color: "rgb( 28, 198, 208 )",
      label: "BOUTIQUE-PHOTOS & TSHIRTS",
      serviceLink: "/",
    },
  ];

  let servicesAng = [
    {
      key: "1",
      serviceIcon: "QueryBuilder",
      color: "rgb( 241, 108, 17 )",
      label: "Latest News",
      serviceLink: "/",
    },
    {
      key: "2",
      serviceIcon: "EmojiEvents",
      color: "rgb( 0, 151, 216 )",
      label: "Result and Ranking",
      serviceLink: "/",
    },
    {
      key: "3",
      serviceIcon: "Shuffle",
      color: "rgb( 255, 165, 0 )",
      label: "Info Mercato",
      serviceLink: "/",
    },
    {
      key: "4",
      serviceIcon: "SportsVolleyball",
      color: "rgb( 49, 58, 89 )",
      label: "LIGUE 1",
      serviceLink: "/",
    },
    {
      key: "5",
      serviceIcon: "ShoppingBasket",
      color: "rgb( 28, 198, 208 )",
      label: "SHOP-PHOTOS & T-SHIRTS",
      serviceLink: "/",
    },
  ];


  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName className={classes.iconsSize} />;
  };

  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const lang = localStorage.getItem("lang")

  return (
    <Container className={classes.services}>
      {lang === "fr" ? (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {servicesFr.map((service, key) => (
            <Grid item xs={12} md={2.2} key={key}>
              <Card
                square={true}
                variant="outlined"
                style={{ backgroundColor: service.color }}
                className={classes.card}
              >
                <CardActionArea href={service.serviceLink}>
                  <CardContent
                    className={classes.cardContent}
                    style={{ padding: 0, paddingLeft: 2 }}
                  >
                    <Box
                      component={Stack}
                      direction="column"
                      sx={{
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <Box className={classes.cardsIcons}>
                        {GenerateIcon(service.serviceIcon)}
                      </Box>
                      <Typography
                        variant="h5"
                        align="left"
                        className={classes.cardLabel}
                      >
                        {service.label}
                      </Typography>
                    </Box>
                    <Box
                      component={Stack}
                      direction="row"
                      alignItems="center"
                      sx={{
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      <Box className={classes.cardsIcons}>
                        {GenerateIcon(service.serviceIcon)}
                      </Box>
                      <Typography variant="body1" className={classes.cardLabel}>
                        {service.label}
                      </Typography>
                      <ArrowRightAltIcon className={classes.detailsIcon} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {servicesAng.map((service, key) => (
            <Grid item xs={12} md={2.2} key={key}>
              <Card
                square={true}
                variant="outlined"
                style={{ backgroundColor: service.color }}
                className={classes.card}
              >
                <CardActionArea href={service.serviceLink}>
                  <CardContent
                    className={classes.cardContent}
                    style={{ padding: 0, paddingLeft: 2 }}
                  >
                    <Box
                      component={Stack}
                      direction="column"
                      sx={{
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <Box className={classes.cardsIcons}>
                        {GenerateIcon(service.serviceIcon)}
                      </Box>
                      <Typography
                        variant="h5"
                        align="left"
                        className={classes.cardLabel}
                      >
                        {service.label}
                      </Typography>
                    </Box>
                    <Box
                      component={Stack}
                      direction="row"
                      alignItems="center"
                      sx={{
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      <Box className={classes.cardsIcons}>
                        {GenerateIcon(service.serviceIcon)}
                      </Box>
                      <Typography variant="body1" className={classes.cardLabel}>
                        {service.label}
                      </Typography>
                      <ArrowRightAltIcon className={classes.detailsIcon} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
export default Services;
