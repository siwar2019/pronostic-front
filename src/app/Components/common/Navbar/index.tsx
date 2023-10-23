import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useStyles } from "../../../styles/common/navBarStyles";
import Stack from "@mui/material/Stack";
import { Button, Divider, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLangue } from "../../../../_redux/reducers/language";
import France from "../../../assets/switch/france.png";
import RoyaumeUni from "../../../assets/switch/royaume-uni.png";
import tunisia from "../../../assets/switch/tunis.png";
import { useAppSelector } from "../../../../hooks/reduxHooks";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const listLang = ["fr", "en", "ar"];
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  // const lang = localStorage.getItem("lang");
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const open = Boolean(anchorEl);
  const openLang = Boolean(anchorElLang);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  function handleCloseLang(item: any) {
    setAnchorElLang(null);
    i18n.changeLanguage(item);
    dispatch(changeLangue(item));
  }

  const { t } = useTranslation();

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="transparent"
      className={classes.appBar}
    >
      <Toolbar>
        {/* Mobile version */}
        <Grid container sx={{ display: { xs: "flex", md: "none" } }}>
          <Grid item xs={11} sm={11}></Grid>
          <Grid item xs={1} sm={1}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              style={{direction: lang === "ar"?"rtl":"ltr"}}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/" className={classes.links}>
                  {t("client.Home.home")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/pronostic" className={classes.links}>
                  {t("client.Home.pronostics")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/fantasy" className={classes.links}>
                  {t("client.Home.fantasy")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/game-rules" className={classes.links}>
                  {t("client.Home.rules")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/news" className={classes.links}>
                  {t("client.Home.news")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link to="/register" className={classes.links}>
                  {t("client.Home.signUp")}
                </Link>
              </MenuItem>
              <MenuItem dense onClick={handleCloseNavMenu}>
                <Link
                  to="/login"
                  color="primary"
                  className={classes.signInLink}
                >
                  {t("client.Home.signIn")}
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        {/* Desktop version */}
        <Grid
          container
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Grid item md={2.5}></Grid>
          <Grid
            item
            md={7.5}
            className={classes.linksBox}
            display={{ xs: "none", md: "flex" }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Link to="/" className={classes.linksHome}>
                {t("client.Home.home")}
              </Link>

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.productLink}
                disableRipple
                disableFocusRipple
              >
                {t("client.Home.products")}
                <KeyboardArrowDownIcon fontSize="small" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/pronostic" className={classes.links}>
                    {t("client.Home.pronostics")}
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/fantasy" className={classes.links}>
                    {t("client.Home.fantasy")}
                  </Link>
                </MenuItem>
              </Menu>
              <Link to="/game-rules" className={classes.links}>
                {t("client.Home.rules")}
              </Link>
              <Link to="/news" className={classes.links}>
                {t("client.Home.news")}
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link to="/register" className={classes.links}>
                {t("client.Home.signUp")}
              </Link>

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleChangeLanguage}
                className={classes.productLink}
                disableRipple
                disableFocusRipple
              >
                {lang === "fr" ? (
                  <img
                    src={France}
                    alt="france flag"
                    style={{
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                ) : lang === "en"?(
                  <img
                    src={RoyaumeUni}
                    alt="royaume-uni flag"
                     style={{ height: "20px", marginRight: "5px" }}
                  />
                ):(
                  <img
                  src={tunisia}
                  alt="tunisia flag"
                  style={{ height: "20px", marginRight: "5px" }}
                />
                )}
                {/* {lang.toUpperCase()} */}
                <KeyboardArrowDownIcon fontSize="small" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElLang}
                open={openLang}
                onClose={handleCloseLang}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {listLang.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleCloseLang(item)}>
                    {item === "fr" ? (
                      <img
                        src={France}
                        alt="france flag"
                        style={{
                          height: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      />
                    ) : item === "en"?(
                      <img
                        src={RoyaumeUni}
                        alt="royaume-uni flag"
                        style={{ height: "20px", marginRight: "5px" }}
                      />
                    ):(
                      <img
                      src={tunisia}
                      alt="tunisia flag"
                      style={{ height: "20px", marginRight: "5px" }}
                    />
                    )}
                    {/* {item.toUpperCase()} */}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Grid>
          <Grid item md={2} className={classes.signInBox}>
            {lang === "en" ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : null}
            {/* {lang === "ar" ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : null} */}
            <Link to="/login" className={classes.signInLink}>
              {t("client.Home.signIn")}
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
