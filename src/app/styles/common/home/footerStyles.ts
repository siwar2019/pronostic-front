import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white !important",
    marginTop: "50px",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: "rgb( 49, 58, 89 )",
    "& .css-escpob-MuiTypography-root": {
      fontFamily: "system-ui",
    },
    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "system-ui",
    },
    "& .MuiTypography-body1": {
      fontFamily: "system-ui",
    },
  },

  logo: {
    opacity: "0.1",
    position: "relative",
    marginTop: "-120px",
    width: "100%",
  },
  list: {
    "& .MuiListItemIcon-root": {
      minWidth: "0px",
    },
    "& .css-1e9lk82-MuiListItemAvatar-root": {
      minWidth: "0px",
    },

    "& .css-1ne01x3-MuiListItem-root": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
  listItem: {
    color: "white",
    fontSize: "10px !important",
  },
  listLinks: {
    color: "white !important",
    textDecoration: "none",
  },
  icons: {
    color: "rgb( 49, 58, 89 )",
  },
}));
