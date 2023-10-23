import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  time: {
    fontSize: "small",
    margin: "auto",
    display: "flex",
    textAlign: "center",
    "@media (max-width:450px)": {
      fontWeight: "bold",
      fontSize: "10px",
    },
  },

  team: {
    color: "#363740 !important",
    fontSize: "14px !important",
    fontWeight: "bold",
    height: "30px",
    textAlign: "center",
    marginTop: "auto",
    padding: "5px",
    "@media (max-width:450px)": {
      fontWeight: "bold",
      fontSize: "11px !important",
    },
  },

  teamGroupe: {
    width: "100%",
    color: "#363740 !important",
    fontSize: "12px !important",
    fontWeight: "bold",
    marginTop: "auto",
    whiteSpace: "nowrap",
    "@media (max-width:450px)": {
      fontWeight: "bold",
      whiteSpace: "nowrap",

      fontSize: "10px !important",
    },
  },

  nameGroupes: {
    color: "white !important",
    fontSize: "14px !important",
    fontWeight: "bold",
    borderRadius: "8%",
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

  flagImg: {
    borderRadius: "1%",
  },

  flagImgGroupe: {
    marginRight: "5px",
    "@media (max-width:450px)": {
      marginRight: "1px",
    },
  },

  flagImgDraw: {
    width: "80",
    height: "40",
    marginBottom: "-6px",
    paddingBottom: "-10px !important",
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

  paperSetting: {
    background: "#fcfcfc !important",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "20px !important",
    margin: "auto",
    paddingBottom: "20px",
    // paddingTop: "10px",
    "@media (min-width: 600px)": {
      width: "50%",
    },
  },
}));
