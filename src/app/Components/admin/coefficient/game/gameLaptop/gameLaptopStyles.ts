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
      fontSize: "12px",
      fontWeight: "bold",
    },
  },

  flame: {
    marginRight: "3px",
  },
  "@media (max-width:450px)": {
    fontSize: "10px",
    marginRight: "1px",
  },
}));
