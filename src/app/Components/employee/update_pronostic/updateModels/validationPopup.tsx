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
  updatePronosticWithDoubleAndSuper,
  updatePronosticWithDoubleScore,
  updatePronosticWithSuperPronostic,
} from "../../../../../_redux/actions/options";

function ValidationPopup(props: any) {
  let showDetailsSuperPronostic = props.showDetailsSuperPronostic;
  let openValidationPopup = props.openValidationPopup;
  let showDetailsDoubleScore = props.showDetailsDoubleScore;
  let displayDoubleAndSuper = props.displayDoubleAndSuper;
  let match_id = props.matchId;
  let gameProp = props.gameProp;
  let event_id = props.event_id;
  let checked = props.checked;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const quit = () => {
    props.setOpenValidationPopup(false);
  };

  const savePronostics = () => {
    if (showDetailsSuperPronostic && !displayDoubleAndSuper) {
      dispatch(
        updatePronosticWithSuperPronostic({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      navigate(`/pronostics/${event_id}`);
    } else if (showDetailsDoubleScore && !displayDoubleAndSuper) {
      dispatch(
        updatePronosticWithDoubleScore({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      navigate(`/pronostics/${event_id}`);
    } else if (
      showDetailsDoubleScore &&
      showDetailsSuperPronostic &&
      displayDoubleAndSuper &&
      checked
    ) {
      dispatch(
        updatePronosticWithDoubleAndSuper({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      navigate(`/pronostics/${event_id}`);
    } else if (showDetailsSuperPronostic && displayDoubleAndSuper && !checked) {
      dispatch(
        updatePronosticWithSuperPronostic({
          equipe1: gameProp.equipe1,
          equipe2: gameProp.equipe2,
          match_id: match_id,
          event_id: event_id,
        })
      );
      navigate(`/pronostics/${event_id}`);
    }
    setTimeout(() => props.setOpenValidationPopup(false), 600);
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
        ) : showDetailsDoubleScore && !displayDoubleAndSuper ? (
          <>
            <Typography variant="h5" align="center">
              {t("employee.Pronostics.ValidationTextDouble")}
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

export default ValidationPopup;
