import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  cardsBackground: {
    backgroundImage: "url(packBackground.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat ",
    backgroundSize: "cover",
    position: "relative",
    height: "600px",
    "@media (max-width:1500px)": {
      marginTop: "-200px",
    },
    "@media (min-width:1500px) and (max-width:1800px)": {
      marginTop: "-170px",
    },
    "@media (min-width:1800px) and (max-width:2200px)": {
      marginTop: "-330px",
      height: "1000px",
    },
    "@media (min-width:2200px) and (max-width:2850px)": {
      marginTop: "-350px",
      height: "1100px",
    },
    "@media (min-width:2850px) and (max-width:3000px)": {
      marginTop: "-350px",
      height: "1200px",
    },
    "@media (min-width:3000px) and (max-width:3400px)": {
      marginTop: "-390px",
      height: "1300px",
    },
    "@media (min-width:3400px) and (max-width:3840px)": {
      marginTop: "-480px",
      height: "1500px",
    },
    "@media (min-width:3841px)": {
      marginTop: "-480px",
      height: "1500px",
    },
  },
  sectionContent: {
    position: "relative",
    "@media (max-width:1700px)": {
      marginTop: "-350px",
    },
    "@media (min-width:1700px) and (max-width:1800px)": {
      marginTop: "-400px",
    },
    "@media (min-width:1800px) and (max-width:2900px)": {
      marginTop: "-600px",
    },
    "@media (min-width:2900px) and (max-width:3100px)": {
      marginTop: "-700px",
    },
    "@media (min-width:3100px) and (max-width:3840px)": {
      marginTop: "-820px",
    },
    "@media (min-width:3841px)": {
      marginTop: "-900px",
    },
  },
  infoText: {
    color: "white",
  },
  cardsContainer: {
    filter: "drop-shadow(0px 10px 5px rgba(0,0,0,0.3))",
    marginTop: "50px",
  },
  cards: {
    clipPath: "polygon(100% 0, 100% 91%, 82% 100%, 0 100%, 0 0)",
    padding: "15px",
    "& .css-46bh2p-MuiCardContent-root": {
      padding: "7px !important",
    },
    "& .css-1t6e9jv-MuiCardActions-root": {
      padding: "0px !important",
    },
    "& .css-h4y409-MuiList-root": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
 
  cardsTitle: {
    "& .css-1qvr50w-MuiTypography-root": { fontFamily: "Encode Sans !important" },
    padding: "20px",
    color: "white",
    clipPath: "polygon(100% 0, 100% 73%, 90% 100%, 0 100%, 0 0)",
  },
  cardsContent: {
    "& .css-cveggr-MuiListItemIcon-root": {
      minWidth: "25px !important",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.60)",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  cardActionLink: {
    color: "white !important",
    padding: "8px",
    fontSize: "0.9rem",
  },
}));
