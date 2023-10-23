import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    fontSize: "12px",
    background: "-webkit-linear-gradient(left, #ffffff, #ececec)",
  },

  rankCell: {
    width: "16% !important",
    "@media (max-width:450px)": {
      width: "20% !important",
    },
  },

  userCell: {
    width: "15% !important",
  },

  pointsCell: {
    width: "10vw !important",
  },

  idCell: {
    width: "1vw !important",
  },

  buttonDetails: {
    width: "10px",
    height: "16px",
    backgroundColor: "#005199 !important",
    color: "white !important",
    fontSize: "11px !important",
    justifyContent: "center",
    marginLeft: "20px !important",
  },

  borderCell: {
    "& .td, th": {
      border: "1px solid rgba(224, 224, 224, 1)",
    },
  },

  pointsGreen: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#00a83f !important",
    width: "25px",
    height: "20px",
    border: "solid 0.1px #cecdcb",
    borderRadius: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },

  pointsRed: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#dc0000 !important",
    width: "25px",
    height: "20px",
    border: "solid 0.1px #cecdcb",
    borderRadius: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },
  pointsYellow: {
    fontSize: "14px",
    color: "Black",
    backgroundColor: "Yellow !important",
    width: "25px",
    height: "20px",
    border: "solid 0.1px #cecdcb",
    borderRadius: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },

  pointsOrange: {
    fontSize: "14px",
    color: "Black",
    backgroundColor: "#f3a000 !important",
    width: "25px",
    height: "20px",
    border: "solid 0.1px #cecdcb",
    borderRadius: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },

  pointsGrey: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "#c154c1 !important",
    boxShadow: "0px 1px 5px 3px #933593",
    width: "25px",
    height: "20px",
    borderRadius: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },
}));
