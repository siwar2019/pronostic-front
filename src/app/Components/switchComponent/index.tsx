/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import RoyaumeUni from "../../assets/switch/royaume-uni.png";
import France from "../../assets/switch/france.png";
import tunisia from "../../assets/switch/tunis.png";
import "./Switch.css";
import {
  Button,
  Menu,
  MenuItem,
 
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLangue } from "../../../_redux/reducers/language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles } from "../../styles/common/navBarStyles";
import { useAppSelector } from "../../../hooks/reduxHooks";

const SwitchComponent = () => {
  // const { changeLanguage, lang } = useSwitch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const open = Boolean(anchorEl);
  const openLang = Boolean(anchorElLang);
  const classes = useStyles();
  const listLang = ["fr", "en", "ar"];
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  // const lang = localStorage.getItem("lang")
  const handleChangeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLang(event.currentTarget);
  };
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  
  function handleCloseLang(item: any) {
    setAnchorElLang(null);
    i18n.changeLanguage(item);
    dispatch(changeLangue(item));
  }
  return (
    <>
      {/* <div className="flag-center">
        <img src={France} alt="france flag" style={{ height: "20px", display: "flex", justifyContent: "center", alignItems: "center" }} />

        <Switch
          size="small"
          onChange={changeLanguage}
          checked={lang === "en"}
          color="default"
          style={{ marginInline: "0px" }}
        />


        <img
          src={RoyaumeUni}
          alt="royaume-uni flag"
          style={{ height: "20px" }}
        />
      </div> */}

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
        ) : lang === "en" ? (
          <img
            src={RoyaumeUni}
            alt="royaume-uni flag"
            style={{ height: "20px", marginRight: "5px" }}
          />
        ) : (
          <img
            src={tunisia}
            alt="tunisia flag"
            style={{ height: "20px", marginRight: "5px" }}
          />
        )}
        {lang.toUpperCase()}
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
            ) : item === "ar" ? (
              <img
                src={tunisia}
                alt="tunisia flag"
                style={{ height: "20px", marginRight: "5px" }}
              />
            ) : (
              <img
                src={RoyaumeUni}
                alt="royaume-uni flag"
                style={{ height: "20px", marginRight: "5px" }}
              />
            )}
            {item.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SwitchComponent;
