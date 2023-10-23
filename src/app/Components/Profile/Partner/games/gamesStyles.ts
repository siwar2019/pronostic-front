import { borderRadius } from "@mui/system";
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
    marginTop: "auto",
    "@media (max-width:450px)": {
      fontWeight: "bold",
      whiteSpace: "nowrap",

      fontSize: "10px !important",
    },
  },
  coef : {
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

  nameGroupes: {
    color: "#2d314a !important",
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
  addMatch: {
    color: "#2196f3",
    display: "block !important",
    marginLeft: "auto !important",
    fontSize: "35px !important",
  },
  titModal: {
    padding: "10px",
    fontSize: "15px !important",
    display: "flex !important",
    justifyContent: "center !important",
    color: "#098aebf2 !important",
  },
  gridEquipe: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px !important",
  },
  gridVs: {
    display: "flex",
    justifyContent: "center",
  },
  vs: {
    fontWeight: "bold",
  },
  ClearIcon: {
    color: "red !important",
    marginTop: "15px",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto !important",
  },
  coefficientText: {
    marginTop: "15px !important",
    marginBottom: "10px !important",
    fontSize: "14px !important",
    color: "Red !important",
    fontWeight: "bold",
  },
  gridDate : {
    //  display: "flex",
     lineHeight: "100%",

  }
}));
