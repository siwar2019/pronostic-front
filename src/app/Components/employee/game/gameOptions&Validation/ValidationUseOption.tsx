import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import {
  createPronosticWithDoubleScore,
  createPronosticWithDoubleScoreAndForgot,
  createPronosticWithDoubleScoreAndSuper,
  createPronosticWithForgotSave,
  createPronosticWithSuperPronostic,
} from "../../../../../_redux/actions/options";

function ValidationUseOption(props: any) {
  let showDetailsForgot = props.showDetailsForgot;
  let showDetailsSuperPronostic = props.showDetailsSuperPronostic;
  let showDetailsDoubleScore = props.showDetailsDoubleScore;
  let openValidationPopup = props.openValidationPopup;
  let match_id = props.matchId;
  let gameProp = props.gameProp;
  let displayDoubleAndForgot = props.displayDoubleAndForgot;
  let checked = props.checked;
  let displayDoubleAndSuper = props.displayDoubleAndSuper;

  let event_id = props.event_id;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const quit = () => {
    props.setOpenValidationPopup(false);
  };

  const savePronostics = () => {
    if (showDetailsForgot && !displayDoubleAndForgot) {
      dispatch(
        createPronosticWithForgotSave({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (showDetailsSuperPronostic && !displayDoubleAndSuper) {
      dispatch(
        createPronosticWithSuperPronostic({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (
      showDetailsDoubleScore &&
      !displayDoubleAndForgot &&
      !displayDoubleAndSuper
    ) {
      dispatch(
        createPronosticWithDoubleScore({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (
      showDetailsDoubleScore &&
      showDetailsForgot &&
      displayDoubleAndForgot &&
      checked
    ) {
      dispatch(
        createPronosticWithDoubleScoreAndForgot({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (showDetailsForgot && displayDoubleAndForgot && !checked) {
      dispatch(
        createPronosticWithForgotSave({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (
      showDetailsDoubleScore &&
      showDetailsSuperPronostic &&
      displayDoubleAndSuper &&
      checked
    ) {
      dispatch(
        createPronosticWithDoubleScoreAndSuper({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      setTimeout(() => {
        navigate(`/categories/games/${event_id}`);
        props.setOpenValidationPopup(false);
      }, 100);
    } else if (showDetailsSuperPronostic && displayDoubleAndSuper && !checked) {
      dispatch(
        createPronosticWithSuperPronostic({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
    }
    setTimeout(() => {
      navigate(`/categories/games/${event_id}`);
      props.setOpenValidationPopup(false);
    }, 100);
  };

  return (
    <Dialog open={openValidationPopup}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("employee.Pronostics.validateAction")}
      </DialogTitle>
      <DialogContent>
        {showDetailsSuperPronostic && !displayDoubleAndSuper ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextSuper")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsForgot && !displayDoubleAndForgot ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextForgot")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsDoubleScore &&
          !displayDoubleAndForgot &&
          !displayDoubleAndSuper ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationDoubleScore")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsDoubleScore &&
          showDetailsForgot &&
          displayDoubleAndForgot &&
          checked ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextForgotAndDouble")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnceTwo")}
            </Typography>
          </>
        ) : showDetailsForgot && displayDoubleAndForgot && !checked ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextForgot")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsDoubleScore &&
          showDetailsSuperPronostic &&
          displayDoubleAndSuper &&
          checked ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextForgotAndSuper")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnceTwo")}
            </Typography>
          </>
        ) : showDetailsSuperPronostic && displayDoubleAndSuper && !checked ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextSuper")}
            </Typography>
            <Typography
              color="error"
              style={{ fontWeight: "bold", marginTop: "14px" }}
            >
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : (
          <></>
        )}
      </DialogContent>
      <DialogActions>
        {" "}
        <Button
          variant="contained"
          style={{
            background: "-webkit-linear-gradient(left, #4da7ff, #135799)",
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          onClick={quit}
        >
          {t("employee.Pronostics.quit")}
        </Button>
        <Button
          variant="contained"
          style={{
            background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          onClick={savePronostics}
        >
          Pronostic
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ValidationUseOption;
