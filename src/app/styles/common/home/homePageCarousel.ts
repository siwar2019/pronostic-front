import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(
  (theme) => ({
    carousel: {
      marginTop: "-10px",
      "& .css-oxfx9-MuiPaper-root-MuiMobileStepper-root": {
        position: "relative !important",
      },
    },

    carouselImages: {
      flexGrow: 1,
      display: "block",
      overflow: "hidden",
      width: "100% !important",
      height: "100vh",
    },

    carouselImagesMobile: {
      flexGrow: 1,
      display: "block",
      overflow: "hidden",
      width: "100% !important",
      height: "85vh",
    },

    carouselSteppers: {
      marginTop: "-110px",
      marginLeft: "50% !important",
      background: "transparent !important",
      position: "relative",
      "& .MuiMobileStepper-dot": { backgroundColor: "#ffc107" },
      "& .MuiMobileStepper-dotActive": { backgroundColor: "#FFF" },
    },
  }),
  { index: 1 }
);
