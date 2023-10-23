import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  text: {
 display:"grid"
  },

  title:{
    display:"flex",
    justifyContent:"center",
    fontSize:"19px !important",
    fontWeight:"bold",
    alignItems:"center"
  },


  icon: {
    margin: "auto",
    width: "50%",
    padding: "10px",
  },
}));
