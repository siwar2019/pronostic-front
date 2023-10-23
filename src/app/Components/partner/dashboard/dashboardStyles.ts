import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paperUsers: {
    fontSize: "16px !important",
    alignContent: "center",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },

  employeeNumberbox: {
    border: "1px solid",
    background: "-webkit-linear-gradient(left, #2192ff, #092B4C)",
    color: "white",
    borderRadius: "10px",
    marginLeft: "20px",
    marginRigh: "20px",
    float: "right",
    padding: "0 15px 0 15px",
  },

  borderCell: {
    "& .td, th": {
      border: "1px solid rgba(224, 224, 224, 1)",
    },
  },

  box3Points: {
    border: "1px solid #07662b",
    fontWeight: "bold",
    backgroundColor: "#07662b",
    color: "white",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },

  box2Points: {
    border: "1px solid #3de565",
    backgroundColor: "#3de565",
    color: "black",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },

  box1Points: {
    border: "1px solid #d4d4d5",
    backgroundColor: "#d4d4d5",
    color: "black",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },

  box0Points: {
    border: "1px solid",
    backgroundColor: "#c50404",
    color: "White",
    borderRadius: "10px",
    padding: "0 15px 0 15px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));
