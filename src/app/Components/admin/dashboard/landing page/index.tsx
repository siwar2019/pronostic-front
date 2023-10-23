import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useStyles } from "./LandingStyle";
import logo from "../../../../assets/wind.png";
import { Container, Stack } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { logout } from "../../../../../_redux/actions/auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SwitchComponent from "../../../switchComponent";
import { useTranslation } from "react-i18next";
import useSticky from "./useSticky";
import EmployeeSolde from "./soldeEmployee";
import PartnerSolde from "./soldePartner";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector(
    ({ auth: { currentUser } }) => currentUser
  );
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const Logout = () => {
    dispatch(logout());
  };

  const handleClickProfile = () => {
    if (user.role === "employee") {
      navigate(`/profile/`);
      handleMenuClose();
    }

    if (user.role === "partner") {
      navigate(`/profile/`);
      handleMenuClose();
    }
    if (user.role === "admin") {
    }
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const { sticky, stickyRef } = useSticky();

  const { t } = useTranslation();
  const classes = useStyles();
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleClickProfile}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "15px",
              textTransform: "capitalize",
            }}
          >
            {currentUser.email.split("@")[0]}
          </span>
        </div>
      </MenuItem>
      <MenuItem onClick={() => Logout()}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "10px",
              direction: lang ==="ar"?"rtl":"ltr"
            }}
          >
            {t("Profile.logout")}
          </span>
        </div>
      </MenuItem>
      <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
        <SwitchComponent />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      anchorReference="anchorPosition"
      anchorPosition={{ top: 100, left: 400 }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleClickProfile}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
              marginRight: "10px",
            }}
          >
            {currentUser.email.split("@")[0]}
          </span>
        </div>
      </MenuItem>

      <MenuItem onClick={Logout}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {t("Profile.logout")}
          </span>
        </div>
      </MenuItem>
      <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
        <SwitchComponent />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 8 }} ref={stickyRef} className={classes.sticky}>
      <Stack direction="row" spacing={2}>
        <AppBar position="relative" className={classes.appbarr}>
          <div className={classes.overlay}></div>
          <div
            style={{
              height: sticky ? `${stickyRef.current?.clientHeight}px` : "100px",
            }}
          />
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" className={classes.logo} />
              </IconButton>

              <Box sx={{ flexGrow: 1 }} />

              <> {user.role === "employee" && <EmployeeSolde />}</>
              <> {user.role === "partner" && <PartnerSolde />}</>

              <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                className={classes.box}
              >
                {user.role === "admin" && (
                  <Search className={classes.search}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder={t("Profile.search")}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                )}

                {/* <IconButton
                  className={classes.notification}
                  // size="large"

                  aria-label="show 1 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={1}
                    color="secondary"
                    className={classes.badge}
                  >
                    <NotificationsIcon sx={{ fontSize: 40 }} />
                  </Badge>
                </IconButton>
                <IconButton>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.translate}
                  >
                    FR
                  </Button>
                </IconButton> */}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle sx={{ fontSize: 70 }} />
                </IconButton>
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Stack>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
