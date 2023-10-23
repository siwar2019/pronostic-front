import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  eventImage: {
    width: 500,
    height: 325,
    "@media (max-width:700px)": {
      width: 500,
      height: 250,
    },
    "@media (max-width:550px)": {
      width: 400,
      height: 200,
    },
    "@media (max-width:450px)": {
      width: 300,
      height: 170,
    },
    "@media (max-width:350px)": {
      width: 250,
      height: 150,
    },
  },
  inputFields: {
    width: "250px",
    "@media (min-width:450px) and (max-width:900px)": {
      width: "350px",
    },
  },
  descriptionInput: {
    width: "520px",
    "@media (max-width:450px)": {
      width: "250px",
    },
    "@media (min-width:450px) and (max-width:900px)": {
      width: "350px",
    },
  },
  submitButton: {
    marginLeft: "auto !important",
    marginTop: "25px",
    backgroundColor: "rgb(33, 146, 255) !important",
    color: "white !important",
  },
  addPicture: {
    backgroundColor: "#ffc107 !important",
    color: "white !important",
  },
}));
