import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  news: {
    "@media (min-width:900px)": {
      marginTop: "100px",
    },
    "& .css-46bh2p-MuiCardContent-root": {
      paddingLeft: "0px",
    },
  },
  newsMedia: {
    position: "relative",
  },
  newsCategory: {
    position: "absolute",
    top: "262px",
    left: "10px",
    color: "white !important",
  },
  card: {
    "@media (min-width:464px)": {
      marginLeft: "15px",
    },
  },
}));
