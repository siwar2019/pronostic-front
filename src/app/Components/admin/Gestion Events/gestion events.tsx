import { makeStyles } from "@material-ui/core/styles";
import { Margin } from "@mui/icons-material";
export const useStyles = makeStyles((theme) => ({
 

  logo: {
    // backgroundImage: `url(${background})`,
    background: "black",
    // height: "280px",
    width: "-webkit-fill-available",
  },

  btUpload: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black !important",
    color: "white",
  },
  boxTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  btnEcrant1: {
    color: " #665c5c !important",
    fontWeight: "bold",
  },

  btnEcran3: {
    backgroundColor: "#bf1515bf !important",
    color: "white ! important",
    
  },
  btnAfficherMatch:{
    backgroundColor:"black !important",
    display:"flex !important",
    // width:"fitContent !important",
    // // justifyContent:'center !important',
   Margin:"auto !important",
    marginTop:"30px !important",
    width:'fitContent'

    
  },
 
}));
