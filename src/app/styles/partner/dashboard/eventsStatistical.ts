import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    padding: "5px 10px",
    textAlign: "center",
    background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
    width: "30%",
    borderRadius: "30px",
    "@media (min-width:450px) and (max-width:900px)": {
      width: "50%",
    },
    "@media (max-width:450px)": {
      width: "100%",
    },
  },
  papers: {
    borderRadius: "30px !important",
  },

  numbersbox: {
    background: "-webkit-linear-gradient(left, #2192ff, #092B4C)",
    color: "white",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
  },
}));
