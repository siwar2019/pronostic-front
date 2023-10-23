import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import useSticky from "../admin/dashboard/landing page/useSticky";
import { useStyles } from "../admin/dashboard/landing page/LandingStyle";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
  const { t } = useTranslation();
  const { sticky, stickyRef } = useSticky();
  const classes = useStyles();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pagesEmployee = [
    {
      name: `${t("tablink.employee.categories")}`,
      link: `${t("tablink.employee.categories-link")}`,
    },
    {
      name: `${t("tablink.employee.pronostics")}`,
      link: `${t("tablink.employee.pronostics-link")}`,
    },
    {
      name: `${t("tablink.employee.ranking")}`,
      link: `${t("tablink.employee.ranking-link")}`,
    },
    {
      name: `${t("tablink.employee.draw")}`,
      link: `${t("tablink.employee.draw-link")}`,
    },
    {
      name: `${t("tablink.employee.quiz")}`,
      link: `${t("tablink.employee.quiz-link")}`,
    },
  ];

  const pagesAdmin = [
    {
      name: `${t("tablink.admin.dashboard")}`,
      link: `${t("tablink.admin.dashboard-link")}`,
    },
    {
      name: `${t("tablink.admin.users")}`,
      link: `${t("tablink.admin.users-link")}`,
    },
    {
      name: `${t("tablink.admin.equipes")}`,
      link: `${t("tablink.admin.equipes-link")}`,
    },
    {
      name: `${t("tablink.admin.categories")}`,
      link: `${t("tablink.admin.categories-link")}`,
    },
    {
      name: `${t("tablink.admin.events")}`,
      link: `${t("tablink.admin.events-link")}`,
    },
    {
      name: `${t("tablink.admin.quiz")}`,
      link: `${t("tablink.admin.quizLink")}`,
      
    },

    {
      name: `${t("tablink.admin.results")}`,
      link: `${t("tablink.admin.results-link")}`,
    },
    {
      name: `${t("tablink.admin.matchs")}`,
      link: `${t("tablink.admin.matchs-link")}`,
    },
    // {
    //   name: `${t("tablink.admin.coeff")}`,
    //   link: `${t("tablink.admin.coeff-link")}`,
    // },
    {
      name: `${t("tablink.admin.draw")}`,
      link: `${t("tablink.admin.draw-link")}`,
    },
    {
      name: `${t("tablink.admin.commercial")}`,
      link: `${t("tablink.admin.commercial-link")}`,
    },
    
  ];

  const pagesPartner = [
    {
      name: `${t("tablink.partner.dashboard")}`,
      link: `${t("tablink.partner.dashboard-link")}`,
    },
    {
      name: `${t("tablink.partner.employees")}`,
      link: `${t("tablink.partner.employees-link")}`,
    },
    {
      name: `${t("tablink.partner.events")}`,
      link: `${t("tablink.partner.events-link")}`,
    },
    {
      name: `${t("tablink.partner.ranking")}`,
      link: `${t("tablink.partner.ranking-link")}`,
    },
    {
      name: `${t("tablink.partner.groups")}`,
      link: `${t("tablink.partner.groups-link")}`,
    },
    {
      name: `${t("tablink.partner.pay")}`,
      link: `${t("tablink.partner.pay-link")}`,
    },
    {
      name: `${t("tablink.partner.jokers")}`,
      link: `${t("tablink.partner.jokers-link")}`,
    },
  ];

  const pagesCommercial = [
    {
      name: `${t("tablink.commercial.dashboard")}`,
      link: `${t("tablink.commercial.dashboard-link")}`,
    },
    {
      name: `${t("tablink.commercial.Cash-out")}`,
      link: `${t("tablink.commercial.Cash-out-link")}`,
    },
    {
      name: `${t("tablink.commercial.partner")}`,
      link: `${t("tablink.commercial.partner-link")}`,
    },
  ];

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "white " }}>
        <span
          // maxWidth="xl"
          className={classes.stickyTab}
          style={{
            boxShadow: "inherit",
            width: "100%",
          }}
        >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <div
                style={{
                  height: sticky
                    ? `${stickyRef.current?.clientHeight}px`
                    : "0px",
                }}
              />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
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
                {user?.role === "admin" &&
                  pagesAdmin.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{
                          textDecoration: "inherit",
                          color: "black",
                          fontSize: "20px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          marginRight: "10px",
                          marginLeft: "10px",
                        }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                {user?.role === "partner" &&
                  pagesPartner.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{
                          textDecoration: "inherit",
                          color: "black",
                          fontSize: "20px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          marginRight: "10px",
                          marginLeft: "10px",
                        }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                {user?.role === "employee" &&
                  pagesEmployee.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{
                          textDecoration: "inherit",
                          color: "black",
                          fontSize: "20px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          marginRight: "10px",
                          marginLeft: "10px",
                        }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                {user?.role === "commercial" &&
                  pagesCommercial.map((page, index) => (
                    <div
                      className={
                        location.pathname === `/${page.link}`
                          ? "link-active"
                          : ""
                      }
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      style={{
                        padding: "10px",
                        color: "black",
                        display: "flex",
                        fontSize: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{ textDecoration: "inherit", color: "black" }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
              </Menu>
            </Box>

            <Container>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
              >
                {user?.role === "admin" &&
                  pagesAdmin.map((page, index) => (
                    <div
                      className={
                        location.pathname === `/${page.link}`
                          ? "link-active"
                          : ""
                      }
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      style={{
                        padding: "10px",
                        paddingLeft: "24px",
                        color: "black",
                        display: "flex",
                        fontSize: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        // direction:lang ==="ar"?"rtl":"ltr"
                      }}
                    >
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{ textDecoration: "inherit", color: "black" }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                {user?.role === "partner" &&
                  pagesPartner.map((page, index) => (
                    <div
                      className={
                        location.pathname === `/${page.link}`
                          ? "link-active"
                          : ""
                      }
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      style={{
                        padding: "10px",
                        color: "black",
                        display: "flex",
                        fontSize: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{
                          textDecoration: "red",
                          color: "black",
                        }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                {user?.role === "employee" &&
                  pagesEmployee.map((page, index) => (
                    <div
                      className={
                        location.pathname === `/${page.link}`
                          ? "link-active"
                          : ""
                      }
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      style={{
                        padding: "10px",
                        color: "black",
                        display: "flex",
                        fontSize: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{ textDecoration: "inherit", color: "black" }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                {user?.role === "commercial" &&
                  pagesCommercial.map((page, index) => (
                    <div
                      className={
                        location.pathname === `/${page.link}`
                          ? "link-active"
                          : ""
                      }
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      style={{
                        padding: "10px",
                        color: "black",
                        display: "flex",
                        fontSize: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Link
                        className={
                          location.pathname === `/${page.link}`
                            ? "link-hover"
                            : ""
                        }
                        to={page.link}
                        style={{ textDecoration: "inherit", color: "black" }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
              </Box>
            </Container>
          </Toolbar>
        </span>
      </AppBar>

      {/* <div className={classes.design}></div> */}
    </>
  );
};
export default ResponsiveAppBar;
