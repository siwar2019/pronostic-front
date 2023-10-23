import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mobileAppSection: {
    "@media (min-width:1525px) and (max-width:1670px)": {
      marginBottom: "70px",
    },
    "@media (min-width:1670px) and (max-width:1770px)": {
      marginBottom: "80px",
    },
    "@media (min-width:1770px) and (max-width:1800px)": {
      marginBottom: "70px",
    },
    "@media (min-width:1800px) and (max-width:2000px)": {
      marginBottom: "120px",
    },
    "@media (min-width:2000px) and (max-width:2110px)": {
      marginBottom: "140px",
    },
    "@media (min-width:2110px) and (max-width:2200px)": {
      marginBottom: "185px",
    },
    "@media (min-width:2200px) and (max-width:2450px)": {
      marginBottom: "190px",
    },
    "@media (min-width:2450px) and (max-width:2510px)": {
      marginBottom: "230px",
    },
    "@media (min-width:2510px) and (max-width:2615px)": {
      marginBottom: "200px",
    },
    "@media (min-width:2615px) and (max-width:2800px)": {
      marginBottom: "290px",
    },
    "@media (min-width:2800px) and (max-width:3200px)": {
      marginBottom: "420px",
    },
    "@media (min-width:3200px) and (max-width:3400px)": {
      marginBottom: "420px",
    },
    "@media (min-width:3400px) and (max-width:3840px)": {
      marginBottom: "700px",
    },
    "@media (min-width:3841px)": {
      marginBottom: "800px",
    },
  },

  uploadCards: {
    borderRadius: "20% !important",
    height: 250,
    "@media (min-width:900px) and (max-width:1000px)": {
      borderRadius: "10% !important",
    },

    // "& .css-46bh2p-MuiCardContent-root": {
    //   padding: "0 !important",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "35%",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
  },
  pharagraphItem: {
    "@media (min-width:900px)": {
      width: "80%",
    },
    "@media (max-width:900px)": {
      textAlign: "center",
    },
  },
  cardHeader: {
    backgroundColor: "#000",
    color: "white",
    height: "75px !important",
    marginBottom: "20px",
  },
  appleIcon: {
    fontSize: "55px !important",
  },
  googlePlayIcon: {
    fontSize: "45px",
  },
  phoneImg: {
    maxWidth: "100%",
    "@media (min-width:900px)": {
      maxWidth: "120%",
    },
    "@media (min-width:1260px)": {
      maxWidth: "140%",
    },
    "@media (min-width:2200px)": {
      maxWidth: "160%",
    },
    "@media (min-width:2510px) ": {
      maxWidth: "180%",
    },
    "@media (min-width:2800px)": {
      maxWidth: "220%",
    },
    "@media (min-width:900px) and (max-width:1015px)": {
      height: "80%",
    },
    "@media (min-width:1015px) and (max-width:1155px)": {
      height: "90%",
    },
    "@media (min-width:1155px) and (max-width:1260px)": {
      height: "100%",
    },
  },
  rating: {
    "& .MuiRating-iconFilled": {
      color: "rgb( 1, 155, 253 )",
    },
  },
  ratingNumber: {
    fontFamily: "Anton !important",
  },
  phoneItem: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    "@media (max-width:340px)": {
      marginBottom: "-400px !important",
    },
    "@media (min-width:341px) and (max-width:370px)": {
      marginBottom: "-450px !important",
    },
    "@media (min-width:370px) and (max-width:400px)": {
      marginBottom: "-470px !important",
    },
    "@media (min-width:400px) and (max-width:430px)": {
      marginBottom: "-520px !important",
    },
    "@media (min-width:430px) and (max-width:470px)": {
      marginBottom: "-550px !important",
    },
    "@media (min-width:470px) and (max-width:500px)": {
      marginBottom: "-585px !important",
    },
    "@media (min-width:500px) and (max-width:545px)": {
      marginBottom: "-630px !important",
    },
    "@media (min-width:545px) and (max-width:580px)": {
      marginBottom: "-670px !important",
    },
    "@media (min-width:580px) and (max-width:620px)": {
      marginBottom: "-715px !important",
    },
    "@media (min-width:620px) and (max-width:685px)": {
      marginBottom: "-790px !important",
    },
    "@media (min-width:685px) and (max-width:760px)": {
      marginBottom: "-890px !important",
    },
    "@media (min-width:760px) and (max-width:835px)": {
      marginBottom: "-960px !important",
    },
    "@media (min-width:835px) and (max-width:899px)": {
      marginBottom: "-1100px !important",
    },
  },
}));
