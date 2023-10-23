import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  stack: {
    justifyContent: "space-between",
    alignItems: "flex-end !important"

  },
  tableContainer: {
    marginTop: "10px",
  },
  tableCell: {
    width: 120,
  },
  eventImage: {
    width: 400,
    height: 225,
    marginTop: "55px",
  },
  titModal: {
    // fontSize: "15px !important",
    display: "flex !important",
    justifyContent: "center !important",
    color: "#098aebf2 !important",
  },
  addTeam: {
    color: "#2196f3",
    display: "block !important",
    marginLeft: "auto !important",
    fontSize: "35px !important",
    width: "55px",
  },

  addPicture: {
    backgroundColor: "#ffc107 !important",
    color: "white !important",
  },
  th: {
    color: "white !important",
    fontWeight: "bold",
    alignContent: "center",
  },
  tableHead: {
    background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
  },
  img: {
    width: "32px",
    height: "24px",
  },


  /* styles pour create equipe */

  buttonCancel : {
    marginLeft: "550px",
    marginTop : "20px",
    color: "#d0021b",
    cursor: "pointer",
    
    
  },
  buttonAdd : {
    height: "50px",

  },
  stackSelectCountry : {
    columnGap: "5rem",
    width: "45ch",
    marginLeft: "20px"
    
  },

  grid: {
    columnGap: "5rem",
    padding: "30px 80px",
    margin: "auto",
    justifyContent: "inherit",
  },
  textField: {
    width: "25ch",
    columnGap: "12rem",
    paddingRight: "250px",
  },
  text : {
    width: "45ch",

  },
  gridImg: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  stackButton: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "50px",
    padding: "20px",
    columnGap: "2rem",
    marginBottom: "20px",
  },
  buttonClose: {
    background: "-webkit-linear-gradient(left, #d0021b, #d0021b)",
    color: "white ! important",
    textTransform: "capitalize",
  },
  buttonSave: {
    background: "-webkit-linear-gradient(left, #2192ff, #135799)",
    color: "white !important",
    textTransform: "capitalize",
  },
  stackSelect: {
    width: "25ch",
  },
}));

export default useStyles;
