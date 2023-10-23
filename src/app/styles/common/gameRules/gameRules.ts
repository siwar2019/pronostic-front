import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  pageRoot: {
    marginBottom: "200px !important",
    "@media (max-width: 400px)": {
      marginTop: "130px !important",
    },
    "@media (min-width: 400px) and (max-width: 700px)": {
      marginTop: "150px !important",
    },
    "@media (min-width: 700px) and (max-width: 900px)": {
      marginTop: "170px !important",
    },
    "@media (min-width: 900px) and (max-width: 950px)": {
      marginTop: "130px !important",
    },
    "@media (min-width: 950px) and (max-width: 1200px)": {
      marginTop: "140px !important",
    },
    "@media (min-width: 1200px) and (max-width: 1400px)": {
      marginTop: "170px !important",
    },
    "@media (min-width: 1400px) and (max-width: 1600px)": {
      marginTop: "200px !important",
    },
    "@media (min-width: 1600px) and (max-width: 2000px)": {
      marginTop: "230px !important",
    },
    "@media (min-width: 2000px) and (max-width: 2300px)": {
      marginTop: "250px !important",
    },
  },

  title: {
    color: "rgb( 1, 155, 253 )",
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: "0.00735em !important",
    fontSize: "3rem !important",
    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      letterSpacing: "0.00735em !important",
      fontSize: "2.125rem !important",
    },
  },

  subTitle: {
    fontWeight: 400,
    letterSpacing: "0.00735em !important",
    fontSize: "2.125rem !important",
    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      fontSize: "1.5rem !important",
      lineHeight: 1.334,
    },
  },

  rulesImg: {
    marginTop: "40px",
    marginBottom: "10px",
    width: "100%",
    height: "55vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      marginBottom: "5px",
      height: "30vh",
    },
  },

  label: {
    fontWeight: 500,
    fontSize: "1.25rem !important",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
    marginBottom: "80px !important",
    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
      fontSize: "1rem !important",
      lineHeight: 1.5,
      letterSpacing: "0.0.00938em",
    },
  },

  cases: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "300px",
    },
  },

  icons: {
    fontSize: "70px",
    backgroundColor: "#ffc107",
    padding: "20px",
    borderRadius: "50%",
    marginTop: "-50px",
  },

  case: {
    paddingBottom: "20px",
  },

  exampleImg: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "100%",
    height: "100px",
    "@media  (max-width: 900px)": {
      marginTop: "20px",
      marginBottom: "5px",
      height: "120px",
    },
    "@media  (max-width: 500px)": {
      height: "70px",
    },
  },

  example: {
    textDecoration: "underline",
    fontStyle: "italic",
    marginTop: "10px !important",
  },
}));
