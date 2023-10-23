import { makeStyles } from "@material-ui/core/styles";
import background from "../../../../assets/image_2022_10_07T14_37_07_466Z.png";

export const useStyles = makeStyles((theme) => ({
  appbarr: {
    height: "150px",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
  },
  logo: {
    maxHeight: "100px",
    paddind: "10px",
  },

  notification: {
    fontSize: "50px",
  },

  badge: {
    top: "2px !important",
    right: "8px !important",
    color: "white",
  },
  translate: {
    width: "20px !important",
    height: "50px",
    borderRadius: "10px !important",
    minWidth: "40px ! important",
  },
  search: {
    display: "flex",
    height: "40px",
    border: "solid 1px white",
    background: "transparent !important",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",

    top: "0",
    bottom: "0",
    right: "0",
    backgroundColor: " rgba(0, 0, 0, 0.6) !important",
  },

  sticky: {
    position: "fixed",
    top: 0,
    zIndex: 2,

    width: "100%",
    marginBottom: "200px",
  },

  stickyTab: {
    position: "fixed",
    zIndex: 1,
    // width: "100%",
    // left: 0,
    // margin: 0,
    // padding: 0,
    top: "0",
    backgroundColor: "white",
    marginTop: "150px",
  },
 
  tablinks:{
    direction:'rtl',
  }
}));
