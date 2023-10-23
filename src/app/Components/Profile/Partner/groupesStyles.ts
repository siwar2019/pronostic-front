import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  time: {
    fontSize: "small",
    margin: "auto",
    display: "flex",
  },

  team: {
    backgroundColor: "#2d314a !important",
    color: "white !important",
    fontSize: "14px !important",
  },

  nameGroupes: {
    color: "white !important",
    fontSize: "14px !important",
    fontWeight: "bolder",
  },
  accordianGroup: {
    background: "-webkit-linear-gradient(left, #2192ff, #135799)",
  },

  flag1: {
    float: "right",
  },

  flag2: {
    float: "left",
  },

  worldcup: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "normal",
    color: "#2d314a !important",
  },

  worldcupImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
