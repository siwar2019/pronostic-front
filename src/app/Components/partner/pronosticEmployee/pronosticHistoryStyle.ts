import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "6vw !important",
  },
  team1: {
    textAlign: "center",
    float: "left",
    fontSize: "14px",
    fontWeight: "bold",
    marginLeft: "25px",
  },

  team2: {
    textAlign: "center",
    float: "right",
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "25px",
  },

  flag1: {
    float: "left",
    marginLeft: "20px",
    "@media (max-width:450px)": {
      marginLeft: "10px",
      width: "84px",
      height: "63px",
    },
  },

  flag2: {
    float: "right",
    marginRight: "20px",
    "@media (max-width:450px)": {
      marginRight: "5px",
      width: "84px",
      height: "63px",
    },
  },

  tiret1: {
    textAlign: "center",
    fontSize: "14px",
  },

  scoreGrid: {
    textAlign: "center",
    alignitems: "center",
    justifycontent: "center",
  },

  scoreBox: {
    width: "40px",
    backgroundColor: "#2d314a !important",
  },

  scoreBoxRed: {
    width: "40px",
    height: "30px",
    backgroundColor: "red !important",
    color: "white !important",
  },

  scoreBoxGreen: {
    width: "40px",
    height: "30px",
    backgroundColor: "green !important",
    color: "white !important",
  },

  stack: {
    marginBottom: "20px",
  },

  stackPoints: {
    marginBottom: "10px",
  },

  stackDifference: {
    marginBottom: "10px",
    marginLeft: "-10px !important",
  },

  score1: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },

  pointText: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  score2: {
    fontSize: "14px",
  },
  points: {
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "#A6A8B2 !important",
    width: "20px",
    height: "20px",
    marginTop: "5px !important",
    borderRadius: "50%",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingTop: "2px",
    paddingBottom: "2px",
  },

  historique: {
    fontSize: "16px",
  },

  datePronostique: {
    paddingTop: "10px",
    fontSize: "12px",
    marginLeft: "5px",
    marginBottom: "-2px !important",
  },

  dateMatch: {
    fontSize: "12px",
    float: "left",
    marginLeft: "5px",
  },

  coeff: {
    fontSize: "12px",
    float: "right",
    marginRight: "10px",
    marginTop: "10px !important",
    fontWeight: "bold",
    color: "red",
    "@media (max-width:450px)": {
      fontSize: "10px",
    },
  },

  flame: {
    marginRight: "3px",
  },
  "@media (max-width:450px)": {
    fontSize: "10px",
    marginRight: "1px",
  },
  formControl: {
    margin: 1,
    width: "30ch",
    size: "small"
  },
  formControlTwo: {
    margin: 2,
    width: "30ch",
    size: "small"
  },
  gridSelect: {
    justifyContent: "space-between",
    marginBottom: "10px"
    // alignItems: "flex-end !important"
    
  }
}));



