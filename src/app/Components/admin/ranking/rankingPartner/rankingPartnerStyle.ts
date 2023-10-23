import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    fontSize: "12px",
    background: "-webkit-linear-gradient(left, #ffffff, #ececec)",
  },

  // rankCell: {
  //   width: "5% !important",
  // },

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
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },

  pointsRed: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "Red !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
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
    width: "20px",
    height: "20px",
    borderRadius: "4px",
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
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },

  pointsGrey: {
    fontSize: "14px",
    color: "white",
    backgroundColor: "Grey !important",
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    marginLeft: "8px",
    align: "center",
  },
}));
