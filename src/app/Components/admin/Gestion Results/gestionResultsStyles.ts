import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  selectMatchText: {
    marginTop: "10px !important",
    fontSize: "14px !important",
    color: "#2d314a !important",
  },

  MatchText: {
    marginTop: "15px !important",
    marginBottom: "10px !important",
    fontSize: "14px !important",
    color: "#2d314a !important",
  },
  formControlTwo : {
    // margin: 2,
    width: "20ch",
    size: "10px",
    height: "5px"
  },

  coefficientText: {
    marginTop: "15px !important",
    marginBottom: "10px !important",
    fontSize: "14px !important",
    color: "Red !important",
    fontWeight: "bold",
  },

  tiret: {
    textAlign: "center",
    marginTop: "10px !important",
  },

  vs: {
    fontSize: "14px !important",

    textAlign: "center",
    marginTop: "10px !important",
  },

  bannier: {
    width: "100%",
  },

  botton: {
    marginTop: "20px !important",
    float: "right",
    backgroundColor: "#2d314a !important",
    color: "white !important",
    texttransform: "capitalize",
    fontSize: "14px !important",
    borderRadius: "5px",
    width: "80px",
    height: "30px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white !important",
      color: "#2d314a !important",
      transition: "all 1s ease",
    },
  },

  matchGrid: {
    textAlign: "center",
  },

  tiret2: {
    textAlign: "center",
    fontSize: "14px",
  },

  flag1: {
    float: "right",
  },

  flag2: {
    float: "left",
  },

  team: {
    backgroundColor: "#2d314a !important",
    color: "white !important",
    fontSize: "14px !important",
  },

  matchResultText: {
    marginTop: "10px !important",
  },
}));
