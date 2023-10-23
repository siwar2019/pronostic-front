import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  // ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useStyles } from "../../../styles/common/home/footerStyles";
import logo from "../../../assets/logo.png";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import * as Muicon from "@material-ui/icons";
import { Stack } from "@mui/system";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const classes = useStyles();

  let firstListFr = [
    { key: 1, label: "Accueil", link: "/" },
    { key: 2, label: "Produits", link: "/" },
    { key: 3, label: "Règles", link: "/" },
    { key: 4, label: "Actualités", link: "/" },
    { key: 5, label: "Demo", link: "/" },
  ];
  let firstListAng = [
    { key: 1, label: "Home", link: "/" },
    { key: 2, label: "Products", link: "/" },
    { key: 3, label: "Rules", link: "/" },
    { key: 4, label: "News", link: "/" },
    { key: 5, label: "Demo", link: "/" },
  ];
  let secondList = [
    { key: 1, label: "Application Android", link: "/" },
    { key: 2, label: "Application IOS", link: "/" },
    { key: 3, label: "Mentions légales", link: "/" },
    { key: 4, label: "CGUV", link: "/" },
    { key: 5, label: "Charte", link: "/" },
  ];
  let thirdList = [
    { key: 1, label: "Pronostic Foot", link: "/" },
    { key: 2, label: "Pronostic Tennis", link: "/" },
    { key: 3, label: "Ligue des champions", link: "/" },
    { key: 4, label: "Pronostic NBA", link: "/" },
    { key: 5, label: "Comment parier", link: "/" },
  ];
  let forthList = [
    { key: 1, label: "Wind pronos", link: "/", icon: "WhatsApp" },
    { key: 2, label: "Wind pronos", link: "/", icon: "Facebook" },
    { key: 3, label: "Wind pronos", link: "/", icon: "Instagram" },
    { key: 4, label: "Wind pronos", link: "/", icon: "YouTube" },
    { key: 5, label: "Wind pronos", link: "/", icon: "Twitter" },
  ];

  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return (
      <Avatar sx={{ bgcolor: "white" }}>
        <IconName className={classes.icons} />
      </Avatar>
    );
  };
  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const lang = localStorage.getItem("lang")
  const { t } = useTranslation();

  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4.5}>
            <Typography variant="h4" mb={1}>
              WIND PRONOSTICS{" "}
            </Typography>
            <Typography variant="body1" style={{ width: "90%" }}>
              {t("client.Home.about")}
            </Typography>

            <Box
              className={classes.logo}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              component="img"
              src={logo}
              alt="pub"
              width="200"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={2.5}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {lang === "fr" ? (
              <List dense className={classes.list}>
                {firstListFr.map((item) => (
                  <ListItem dense key={item.key}>
                    <ListItemIcon>
                      <FiberManualRecordIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemButton
                      dense
                      href={item.link}
                      className={classes.listLinks}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            ) : (
              <List dense className={classes.list}>
                {firstListAng.map((item) => (
                  <ListItem dense key={item.key}>
                    <ListItemIcon>
                      <FiberManualRecordIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemButton
                      dense
                      href={item.link}
                      className={classes.listLinks}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={2.5}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <List dense className={classes.list}>
              {secondList.map((item) => (
                <ListItem dense key={item.key}>
                  <ListItemIcon>
                    <FiberManualRecordIcon className={classes.listItem} />
                  </ListItemIcon>
                  <ListItemButton
                    dense
                    href={item.link}
                    className={classes.listLinks}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={2.5}
            sm={4}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <List dense className={classes.list}>
              {thirdList.map((item) => (
                <ListItem dense key={item.key}>
                  <ListItemIcon>
                    <FiberManualRecordIcon className={classes.listItem} />
                  </ListItemIcon>
                  <ListItemButton
                    dense
                    href={item.link}
                    className={classes.listLinks}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4" mb={1}>
              Suivez-nous
            </Typography>
            <Stack direction="row" spacing={1}>
              {/* <List dense className={classes.list}> */}
              {forthList.map((item) => (
                // <ListItem dense key={item.key}>
                // <ListItemAvatar>
                <Avatar>{GenerateIcon(item.icon)}</Avatar>
                // </ListItemAvatar>

                // <ListItemButton
                //   href={item.link}
                //   className={classes.listLinks}
                // >
                //   <ListItemText primary={item.label} />
                // </ListItemButton>
                // </ListItem>
              ))}
            </Stack>
            {/* </List> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
