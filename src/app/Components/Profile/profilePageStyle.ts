import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "26px",
    margin: "auto",
    paddingLeft: "50px",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",
  },

  informations: {
    fontSize: "14px",
    paddingTop: "50px !important",
    lineHeight: "3.5",
  },

  informations2: {
    fontSize: "14px",
    paddingTop: "50px !important",
    marginBottom: "50px !important",
    marginRight: "50px",
    lineHeight: "3.5",
  },

  paper: {
    background: "url(logo.png)",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center !important",
    alignItems: "center !important",
    backgroundColor: "rgba(241, 241, 241) !important",
    borderRadius: "15px 15px 0 0",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: "25vw !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw !important",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "50vw !important",
    },
    paddingTop: "0px !important",
    paddingRight: "0px !important",
    paddingLeft: "0px !important",
  },

  forgotPwdContainer: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    height: "100vh",
  },

  forgotPwdRoot: {
    background: "url(image_2022_10_07T14_37_07_466Z.png)",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },

  emailTextField: {
    "& .css-pmxn9h-MuiInputBase-root-MuiOutlinedInput-root": {
      background: "#FFFFFF !important",
    },
    width: "90%",
  },

  codeTextField: {
    "& .css-pmxn9h-MuiInputBase-root-MuiOutlinedInput-root": {
      background: "#FFFFFF !important",
    },
    width: "90%",
  },

  newPwdTextField: {
    "& .css-pmxn9h-MuiInputBase-root-MuiOutlinedInput-root": {
      background: "#FFFFFF !important",
    },
    width: "90%",
  },

  emailText: {
    marginTop: "30px",
    alignItems: "right !important",
    width: "90%",
    fontSize: "14px",
  },

  newPwdText: {
    alignItems: "right !important",
    width: "90%",
    fontSize: "14px",
  },

  codeText: {
    marginTop: "10px",

    alignItems: "right !important",
    width: "90%",
    fontSize: "14px",
  },

  buttonSubmitForgotPwd: {
    width: "90%",
    background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
  },

  buttonSubmitUpdatePwd: {
    width: "30%",
    background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
    marginLeft: "10px !important",
  },

  gridEmail: {
    width: "90%",
    marginBottom: "40px",
  },

  gridCode: {
    width: "90%",
    marginBottom: "20px",
  },

  gridnewPwd: {
    width: "90%",
    marginBottom: "40px",
  },

  gridSubmitForgotPwd: {
    width: "40%",
    marginBottom: "30px",
    marginTop: "20px",
  },
}));
