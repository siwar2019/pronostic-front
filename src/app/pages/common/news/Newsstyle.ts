import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  
  
    boxTop:{
        backgroundImage: `url(https://cdn-i.pr.trt.com.tr/trtfrancais/w720/h405/q70/15499258_0-24-4877-2746.jpeg)`,
        backgroundSize:'cover',


backgroundRepeat: 'no-repeat',
 height:'50vh',
display:"flex",
justifyContent:"center",
marginBottom:"20px",
backgroundPosition:'bottom'
    },
    title:{
color:'white',
fontSize:'30px ! important',
display:'flex',
justifyContent:"center",
alignItems:'end',
marginBottom:'15px  !important',
padding:'10px',
fontWeight:'bold'
    },
  
    boxNews:{
display:'flex',
margin:'auto'

},
    gridNews:{
        marginTop:'20vh',
     
    },
    BoxTitle:{

    },
    gridd:{
        margin:'auto !important',
        backgroundColor:"white !important",
    },
    boxImg:{
        
        // position:"absolute",
        width:"100%",
        height:"100%",
    }


}));
