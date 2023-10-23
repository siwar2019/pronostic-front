import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  services: {
    padding: "40px",
    marginTop: "80px",
    "@media (min-width:900px)": {
      clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
      backgroundColor: "#FFF",
    },
    "@media (max-width:340px)": {
      marginTop: "-120px !important",
    },
    "@media (min-width:341px) and (max-width:370px)": {
      marginTop: "-125px !important",
    },
    "@media (min-width:370px) and (max-width:430px)": {
      marginTop: "-140px !important",
    },
    "@media (min-width:430px) and (max-width:500px)": {
      marginTop: "-150px !important",
    },
    "@media(min-width:500px) and (max-width:620px)": {
      marginTop: "-170px !important",
    },
    "@media (min-width:620px) and (max-width:685px)": {
      marginTop: "-180px !important",
    },
    "@media (min-width:685px) and (max-width:760px)": {
      marginTop: "-200px !important",
    },
    "@media (min-width:760px) and (max-width:899px)": {
      marginTop: "-220px !important",
    },
  },
  servicesEvent: {
    padding: "40px",
    marginTop: "80px",
  },

  card: {
    // "& .css-46bh2p-MuiCardContent-root": {
    //   padding: "0px",
    //   paddingLeft: "3px",
    // },
  },
  cardContent: {
    "@media (min-width:900px)": {
      height: "210px",
    },
  },
  cardsIcons: {
    color: "white !important",
    "@media (max-width:900px)": {
      marginRight: "15px",
      marginLeft: "8px",
      marginTop: "7px",
    },
    "@media (min-width:900px)": {
      marginTop: "30px",
      marginBottom: "40px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  iconsSize: {
    "@media (min-width:900px)": {
      fontSize: "70px !important",
    },
    fontSize: "40px !important",
  },
  cardLabel: {
    fontFamily: "Anton !important",
    letterSpacing: "1.2px !important",
    color: "white",
    "@media (min-width:900px)": {
      position: "absolute",
      bottom: 2,
    },
  },
  detailsIcon: {
    color: "white",
    marginLeft: "auto",
    display: "flex",
    fontSize: "50px !important",
  },
}));
