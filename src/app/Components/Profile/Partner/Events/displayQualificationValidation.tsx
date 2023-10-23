import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useStyles } from "../../../../styles/partner/events/displayAllEventsStyles";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { displayQualificationForPartner } from "../../../../../_redux/actions/events";
import Swal from "sweetalert2";
import { setSuccessDisplayQualification } from "../../../../../_redux/reducers/events";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../_redux/store/configureStore";

function DisplayQualificationValidation(props: any) {
  let openQualificationPopup = props.openQualificationPopup;
  let displayQualification = props.checked;
  let partnerId = props.partner.id;
  let eventId = props.eventId;
  let qualificationActiveIds = props.qualificationActiveIds;

  let successUpdateQualification = useSelector(
    (state: RootState) => state.eventsSlice.successUpdateQualification
  );

  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { t } = useTranslation();

  const quit = () => {
    props.setOpenQualificationPopup(false);
  };

  const handlSubmit = () => {
    dispatch(
      displayQualificationForPartner({
        partnerId: partnerId,
        eventId: eventId,
        displayQualification: displayQualification,
      })
    );
  };

  if (successUpdateQualification === 1) {
    Swal.fire({
      icon: "success",
      title: "Action completed successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccessDisplayQualification(0));
    props.setOpenQualificationPopup(false);
    const index = qualificationActiveIds.indexOf(eventId);
    if (index === -1) {
      props.setQualificationActiveIds(qualificationActiveIds.concat(eventId));
    } else {
      props.setQualificationActiveIds(
        qualificationActiveIds.filter((event: any) => event !== eventId)
      );
    }
  } else if (successUpdateQualification === -1) {
    Swal.fire({
      icon: "error",
      title: "A problem occurs",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccessDisplayQualification(0));
  }

  return (
    <Dialog open={openQualificationPopup}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("partner.Events.validateAction")}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5" align="center">
          {" "}
          {t("partner.Events.validationMessage")}
        </Typography>
      </DialogContent>
      <DialogActions>
        {" "}
        <Button variant="contained" onClick={() => quit()}>
          {t("partner.Events.cancel")}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.validateButton}
          onClick={handlSubmit}
        >
          {" "}
          {t("partner.Events.validate")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisplayQualificationValidation;
