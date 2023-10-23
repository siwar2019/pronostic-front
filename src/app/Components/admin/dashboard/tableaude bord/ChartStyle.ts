import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({

    design: {
        position: 'absolute',
        backgroundColor: 'rgb(33, 146, 255)',
        height: "38px",
        width: "51%",
        borderRadius: " 221% 34%/0% 0% 251% 61%",
    },
    container:{
        display:'flex !important',
        justifyContent:'center',
        width:"50% !important",
        margin: "auto"
      
    },
    box:{
        marginTop:'20px',
        // 
        
    },
    card1:{
        minWidth: 275 ,
        minHeight:200 ,
         background:"#DCDED6 !important",
         borderRadius:'0px !important'
    },
    card2:{
        minWidth: 275 ,
        minHeight:200 ,
         background:"#CED0C3 !important",
         borderRadius:'0px !important'
    },
    card3:{
        minWidth: 275 ,
        minHeight:200 ,
         background:"#B4BAB1 !important",
         borderRadius:'0px !important'
    },
    titCard:{
color:"black",
textAlign:"center",
fontFamily:"monospace !important",
    },
    cardNum:{
        fontSize:"70px !important",
        color:"black",
        textAlign:"center",
        fontWeight:'bold'
    }

}));
