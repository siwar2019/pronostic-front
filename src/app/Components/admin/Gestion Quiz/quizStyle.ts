import { borderRadius } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    Question: {
      color:"blue" ,
      fontSize: "15px" ,
        marginLeft: "-32px" ,
        justifyContent: "center",
        marginTop: "15px",
        fontWeight:"bold"
    },
    addMatch: {
        color: "#2196f3",
        display: "block !important",
        marginLeft: "auto !important",
        fontSize: "35px !important",
      },
      titModal: {
        padding: "10px",
        fontSize: "15px !important",
        display: "flex !important",
        justifyContent: "center !important",
        color: "#098aebf2 !important",
      },
      addPicture: {
        backgroundColor: "#ffc107 !important",
        color: "white !important",
      },
      quizCard: {
        padding: "20px" ,
        width: "100vh",
        margin: "20px",
        height: "100px",
      },
      root: {
        maxWidth: 345,
        // display:"flex",
      },
      media: {
        height: 140,
      }
  
    }));