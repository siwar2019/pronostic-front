import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  time: {
    fontSize: "small",
    margin: "auto",
  },

  team: {
    backgroundColor: "#2d314a !important",
    color: "white !important",
    fontSize: "14px !important",
  },

  teamGroupe: {
    width: "100%",
    color: "#363740 !important",
    fontSize: "12px !important",
    marginTop: "auto",
    "@media (max-width:450px)": {
      fontWeight: "bold",
      whiteSpace: "nowrap",

      fontSize: "10px !important",
    },
  },

  nameGroupes: {
    color: "#2d314a !important",
    fontSize: "14px !important",
    fontWeight: "bold",
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
  flagImgGroupe: {
    marginRight: "5px",
    "@media (max-width:450px)": {
      marginRight: "1px",
    },
  },

  pointsGreen: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#00a83f !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    margin: "auto",
    align: "center",
    alignContent: "center",
  },

  pointsGrey: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#c8cdcd !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    margin: "auto",
    align: "center",
    alignContent: "center",
  },

  pointsRed: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#dc0000 !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    margin: "auto",
    align: "center",
    alignContent: "center",
  },

  pointsOrange: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#f3a000 !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    margin: "auto",
    align: "center",
    alignContent: "center",
  },
}));
