import {
  Box,
  Grid,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useStyles } from "../../../styles/common/home/mobileAppSectionStyles";
import phoneImg from "../../../assets/image.png";
import playerImg from "../../../assets/player.png";
import AppleIcon from "@mui/icons-material/Apple";
import { FcGoogle } from "react-icons/fc";
import Rating from "@mui/material/Rating";
import backgroundImg from "../../../assets/mobile1.png";
import { useTranslation } from "react-i18next";

const MobileAppSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.mobileAppSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Stack spacing={1} className={classes.pharagraphItem}>
                  <Typography color="primary" variant="button">
                    {t("client.Home.application")} WIND PRONOSTICS
                  </Typography>
                  <Typography variant="h3">
                    {t("client.Home.applicationLabel")}
                  </Typography>
                  <Typography variant="body1">
                    {t("client.Home.applicationLabelDetails")}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  direction={{ xs: "column", sm: "row" }}
                  spacing={4}
                >
                  <Card elevation={6} className={classes.uploadCards}>
                    <CardContent style={{ padding: 0 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        className={classes.cardHeader}
                      >
                        <AppleIcon className={classes.appleIcon} />
                        <Stack direction="column">
                          <Box
                            variant="body1"
                            component={Typography}
                            sx={{
                              display: { xs: "flex", md: "none", lg: "flex" },
                            }}
                          >
                            {t("client.Home.downloadOn")}
                          </Box>
                          <Typography variant="h6">App Store</Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        spacing={1.5}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Rating
                          className={classes.rating}
                          value={5}
                          readOnly
                          size="large"
                          color="primary"
                        />
                        <Typography
                          variant="h3"
                          className={classes.ratingNumber}
                        >
                           {t("client.Home.soon")}
                        </Typography>
                        <Button variant="contained" size="medium">
                          {t("client.Home.download")}
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card elevation={6} className={classes.uploadCards}>
                    <CardContent style={{ padding: 0 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        className={classes.cardHeader}
                      >
                        <FcGoogle className={classes.googlePlayIcon} />
                        <Stack direction="column">
                          <Box
                            variant="body1"
                            component={Typography}
                            sx={{
                              display: { xs: "flex", md: "none", lg: "flex" },
                            }}
                          >
                            {t("client.Home.downloadOn")}
                          </Box>
                          <Typography variant="h6">Google Play</Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        spacing={1.5}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Rating
                          className={classes.rating}
                          value={5}
                          readOnly
                          size="large"
                          color="primary"
                        />
                        <Typography
                          variant="h3"
                          className={classes.ratingNumber}
                        >
                           {t("client.Home.soon")}
                        </Typography>
                        <Button variant="contained" size="medium">
                          {t("client.Home.download")}
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Box
                    sx={{
                      maxHeight: 275,
                      display: { xs: "none", md: "flex" },
                    }}
                    component="img"
                    src={playerImg}
                    alt="phone"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} className={classes.phoneItem}>
            <Box
              className={classes.phoneImg}
              component="img"
              src={phoneImg}
              alt="phone"
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        component="img"
        src={backgroundImg}
        alt="phone"
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" },
        }}
      />
    </Box>
  );
};
export default MobileAppSection;
