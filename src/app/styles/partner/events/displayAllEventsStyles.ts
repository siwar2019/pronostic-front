import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  cards: {
    marginBottom: "40px",
  },

  description: {
    height: "110px",
  },
  cardHeader: {
    height: "80px"
  },
  cardHeaderDefault: {
    height: "50px"
  },
  submitButton: {
    color: "white !important",
    marginBottom: "50px ! important",
  },
  settings: {
    height: "50px",
  },
  validateButton: {
    color: "white !important",
  },
  title: {
    marginBottom: "25px !important",
    marginTop: "25px !important",
  },
  noAction: {
    padding: "80px 40px",
  },
  paper: {
    "@media (max-width:1200px)": {
      minWidth: "90vw",
    },
    "@media (min-width:1200px)": {
      minWidth: "70vw",
    },
  },
  cardImg: {
    borderTop: "solid",
    borderBottom: "solid",
    borderColor: "#9e9e9e !important",
    borderWidth: "thin !important",
    width: "100%",
    height: "270px",
  },
  cardImgLists: {
    borderBottom: "solid",
    borderColor: "#9e9e9e !important",
    borderWidth: "thin !important",
    width: "100%",
    height: "270px",
  },

}));
