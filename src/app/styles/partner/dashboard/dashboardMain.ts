import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  title: {
    color: "rgb(33, 146, 255)",
    width: "50%",
    "@media (min-width:450px) and (max-width:900px)": {
      width: "50%",
    },
    "@media (max-width:450px)": {
      width: "100%",
    },
  },
  papers: {
    backgroundColor: "#c9e3f3 !important",
  },

  numbersbox: {
    background: "#ffc107",
    color: "white",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
  },
}));
