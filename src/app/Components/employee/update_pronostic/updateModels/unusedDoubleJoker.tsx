import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  getEmployeeOptions,
  updateUnusedDoubleScoreJoker,
} from "../../../../../_redux/actions/options";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { getPronosticEmployee } from "../../../../../_redux/actions/pronostics";

function UnusedDoubleJoker(props: any) {
  let openUnusedDoubleJoker = props.openUnusedDoubleJoker;
  let match_id = props.matchId;
  let event_id = props.event_id;
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const quit = () => {
    props.setOpenUnusedDoubleJoker(false);
  };

  const savePronostics = () => {
    dispatch(
      updateUnusedDoubleScoreJoker({
        match_id: match_id,
        event_id: event_id,
      })
    );
    setTimeout(() => {
      props.setOpenUnusedDoubleJoker(false);
      dispatch(getPronosticEmployee(match_id as string));
      dispatch(getEmployeeOptions(event_id as string));
    }, 300);
  };

  return (
    <Dialog open={openUnusedDoubleJoker}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("employee.Pronostics.validateAction")}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5" align="center">
          {t("employee.Pronostics.unusedDoubleJokerText")}
        </Typography>
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
          {t("employee.Pronostics.confirmAction")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UnusedDoubleJoker;
