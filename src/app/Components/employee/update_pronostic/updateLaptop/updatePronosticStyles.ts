import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
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
  joker: {
    width: "60px",
    height: "40px",
  },

  optionDetails: {
    display: "flex",
  },

  noJoker: {
    color: "#898989",
    fontSize: "12px",
    float: "right",
    marginRight: "8px",
    marginTop: "25px !important",
    fontWeight: "bold",
    "@media (max-width:450px)": {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  noJokerImg: {
    width: "80px",
    height: "70px",
  },

}));
