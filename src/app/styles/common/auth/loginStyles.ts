import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  loginRoot: {
    background: "url(image_2022_10_07T14_37_07_466Z.png)",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  loginContainer: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    minHeight: "100vh !important",
    height: "102vh",
  },

  paper: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "50px",
    },
  },

  loginTextField: {
    backgroundColor: "rgba(223, 223, 223 )",
    borderRadius: "50px !important",
    paddingLeft: "0px !important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "130%",
    },
  },

  noBorder: {
    border: "none !important",
  },

  TextFieldIcons: {
    backgroundColor: "rgb( 0, 57, 115 )",
    padding: "27px 10px 27px 14px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",
  },

  form: {
    height: "90%",
  },

  authImages: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },

  formHeader: {
    height: "38%",
  },

  formHeaderImage: {
    width: "50%",
  },

  formHeaderLabel: {
    color: "rgb( 0, 57, 115 )",
  },

  formContent: {
    height: "55%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      left: " calc(50% + -54.5px)",
    },
  },

  formAction: {
    fontSize: "1.1rem  !important",
    borderRadius: "50px !important",
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
    backgroundColor: "rgb( 0, 57, 115 ) !important",
    marginTop: "30px !important",
    [theme.breakpoints.up("sm")]: {
      left: "60% !important",
    },
    [theme.breakpoints.down("xs")]: {
      left: "25% !important",
      bottom: "11% !important",
    },
  },
  forgotPasswordLink: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "210px !important",
      position: "absolute",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      marginTop: "15px !important",
    },

    fontSize: "15px",
    textDecoration: "underline !important",
  },

  buttonInscription: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "230px !important",
      position: "absolute",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      marginTop: "35px !important",
    },

    fontSize: "15px",
    textDecoration: "underline !important",
  },

  backIcon: {
    foat: "left",
    position: "absolute",
    marginTop: "10px",
    marginLeft: "10px",
  },
}));
