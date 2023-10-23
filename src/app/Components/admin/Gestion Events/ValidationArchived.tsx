import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import {
  archivedEventByAdmin,
  getAllEvents,
} from "../../../../_redux/actions/events";

function ValidationArchived(props: any) {
  let openValidationPopup = props.openValidationPopup;
  let event_id = props.eventId;
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const quit = () => {
    props.setOpenValidationPopup(false);
  };

  const archivedEvent = () => {
    dispatch(archivedEventByAdmin(event_id));
    setTimeout(() => {
      props.setOpenValidationPopup(false);
      dispatch(getAllEvents());
    }, 300);
  };

  return (
    <Dialog open={openValidationPopup}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("employee.Pronostics.validateAction")}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5" align="center">
          {t("admin.Events.archivedEvents")}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{
            color: "white",
          }}
          color="secondary"
          onClick={quit}
        >
          {t("employee.Pronostics.quit")}
        </Button>
        <Button variant="contained" color="primary" onClick={archivedEvent}>
          {t("employee.Pronostics.confirmAction")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ValidationArchived;
