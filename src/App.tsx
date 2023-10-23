import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@material-ui/core";
import RouterConfig from "./app/routes";
import "./App.css";
import "./locales";
import { useEffect } from "react";
import { changeLanguageAction } from "./_redux/reducers/language";
import { useAppDispatch } from "./hooks/reduxHooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(33, 146, 255)",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#ffc107",
    },
    info: {
      main: "#FFF !important",
    },
  },
});

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      changeLanguageAction(
        localStorage.getItem("i18nextLng")
          ? localStorage.getItem("i18nextLng")
          : "en"
      )
    );
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterConfig />
    </ThemeProvider>
  );
};
export default App;
