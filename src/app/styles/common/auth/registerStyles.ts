import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  registerImage: {
    background: "url(signUp.png)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat !important",
    minHeight: "100vh",
    width: "100%",
    position: "relative",
  },

  ImageLabel: {
    position: "absolute",
    top: "60px",
    left: "25%",
    transform: "translate(-50%, 0)",
    width: "350px",
    height: "140px",
    "@media (min-width: 2000px)": {
      width: "500px",
      height: "250px",
    },
  },

  form: {
    display: "flex",
    alignItems: "center !important",
    justifyContent: "center !important",
    marginTop: "5px !important",
    marginBottom: "5px !important",
    "@media (max-width: 900px)": {
      minHeight: "100vh",
    },
  },

  formHeader: {
    marginBottom: "20px",
  },

  formHeaderImage: {
    width: "200px",
    height: "100px",
    "@media (min-width: 2000px)": {
      width: "320px",
      height: "200px",
    },
  },

  formHeaderLabel: {
    color: "rgb( 0, 57, 115 )",
    "@media (min-width: 2000px)": {
      fontSize: "2rem",
    },
  },

  noBorder: {
    border: "none !important",
  },

  registerTextField: {
    backgroundColor: "rgba(223, 223, 223 )",
    borderRadius: "50px !important",
    paddingLeft: "0px !important",
    width: "400px",
    "@media (max-width: 459px)": {
      width: "300px",
    },
  },

  formAction: {
    fontSize: "1.1rem  !important",
    borderRadius: "50px !important",
    padding: "10px !important",
    backgroundColor: "rgb( 0, 57, 115 ) !important",
    width: "400px",
    "@media (max-width: 459px)": {
      width: "300px",
    },
  },

  registerSelect: {
    width: "400px",
    borderRadius: "50px !important",
    background: "rgba(223, 223, 223 ) !important",
    "& .MuiOutlinedInput-notchedOutline": { border: "0 !important" },
    "@media (max-width: 459px)": {
      width: "300px",
    },
  },

  placeholderColor: {
    color: "#a5a5a5 !important",
  },

  errorMessage: {
    marginLeft: "15px !important",
    "@media (max-width: 459px)": {
      maxWidth: "285px !important",
    },
  },
}));
