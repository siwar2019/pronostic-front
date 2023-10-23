import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  itemBackground: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (min-width:900px) and (max-width:1260px)": {
      backgroundImage: "url(app-background-2.png)",
      height: "845px",
    },
    "@media (min-width:1260px) and (max-width:1525px)": {
      backgroundImage: "url(app-background-2.png)",
      height: "910px",
    },
    "@media (min-width:1525px) and (max-width:1670px)": {
      backgroundImage: "url(app-background-2.png)",
      height: "940px",
    },
    "@media (min-width:1670px) and (max-width:1770px)": {
      backgroundImage: "url(mobile5.png)",
      height: "980px",
      paddingTop: "50px",
    },
    "@media (min-width:1770px) and (max-width:1800px)": {
      backgroundImage: "url(mobile5.png)",
      height: "994px",
      paddingTop: "70px",
    },
    "@media (min-width:1800px) and (max-width:2000px)": {
      backgroundImage: "url(mobile5.png)",
      height: "1119px",
      paddingTop: "90px",
    },
    "@media (min-width:2000px) and (max-width:2110px)": {
      backgroundImage: "url(mobile6.png)",
      height: "1170px",
      paddingTop: "120px",
    },
    "@media (min-width:2110px) and (max-width:2200px)": {
      backgroundImage: "url(mobile6.png)",
      height: "1230px",
      paddingTop: "120px",
    },
    "@media (min-width:2200px) and (max-width:2450px)": {
      backgroundImage: "url(mobile6.png)",
      height: "1350px",
      paddingTop: "160px",
    },
    "@media (min-width:2450px) and (max-width:2510px)": {
      backgroundImage: "url(mobile7.png)",
      height: "1428px",
      paddingTop: "160px",
    },
    "@media (min-width:2510px) and (max-width:2615px)": {
      backgroundImage: "url(mobile7.png)",
      height: "1449px",
      paddingTop: "180px",
    },
    "@media (min-width:2615px) and (max-width:2800px)": {
      backgroundImage: "url(mobile7.png)",
      height: "1540px",
      paddingTop: "180px",
    },
    "@media (min-width:2800px) and (max-width:3000px)": {
      backgroundImage: "url(mobile8.png)",
      height: "1661px",
      paddingTop: "200px",
    },
    "@media (min-width:3000px) and (max-width:3200px)": {
      backgroundImage: "url(mobile8.png)",
      height: "1773px",
      paddingTop: "270px",
    },
    "@media (min-width:3200px) and (max-width:3400px)": {
      backgroundImage: "url(mobile9.png)",
      height: "1874px",
      paddingTop: "270px",
    },
    "@media (min-width:3400px) and (max-width:3840px)": {
      backgroundImage: "url(mobile9.png)",
      height: "2107px",
      paddingTop: "340px",
    },
    "@media (min-width:3841px)": {
      backgroundImage: "url(mobile10.png)",
      height: "2300px",
      paddingTop: "380px",
    },
  },
  copyRight: {
    padding: "20px",
    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "-webkit-body",
    },
  },
  copyRightText: {
    color: "rgb( 49, 58, 89 )",
  },
}));
