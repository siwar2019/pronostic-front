import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  
    boxDrawer:{
        padding:"20px",
        display:"flex",
        justifyContent:"center",
    },
    btn:{
        // border:"2px solid !important",
        background:'white !important',
         color:"black !important",
        // padding:'10px'
        "&:hover": {
            backgroundColor: "rgb(33, 146, 255) !important",
            color: "#2d314a !important",
            transition: "all 1s ease",
          },
    }


}));
