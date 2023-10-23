import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
// import { useStyles } from "../../../../styles/partner/events/displayAllEventsStyles";

function GameOptionsDetails(props: any) {
  let showDetailsForgot = props.showDetailsForgot;
  let showDetailsSuperPronostic = props.showDetailsSuperPronostic;
  let openOptionDetails = props.openOptionDetails;
  let showDetailsDoubleScore = props.showDetailsDoubleScore;
  let displayDoubleAndForgot = props.displayDoubleAndForgot;
  let displayDoubleAndSuper = props.displayDoubleAndSuper;
  // const classes = useStyles();
  const { t } = useTranslation();

  const quit = () => {
    props.setOpenOptionsDetails(false);
    setTimeout(() => {
      props.setShowDetailsForgot(false);
      props.setShowSuperPronostic(false);
    }, 500);
  };

  return (
    <Dialog open={openOptionDetails}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("employee.Pronostics.useJoker")}
        {showDetailsSuperPronostic && !displayDoubleAndSuper ? (
          <Typography
            variant="button"
            style={{ fontWeight: "bold", fontSize: 25 }}
          >
            {" "}
            Super Pronostics !
          </Typography>
        ) : showDetailsForgot && !displayDoubleAndForgot ? (
          <Typography
            variant="button"
            style={{ fontWeight: "bold", fontSize: 25 }}
          >
            {" "}
            Forgot Save !
          </Typography>
        ) : showDetailsDoubleScore &&
          !displayDoubleAndForgot &&
          !displayDoubleAndSuper ? (
          <Typography
            variant="button"
            style={{ fontWeight: "bold", fontSize: 25 }}
          >
            {" "}
            Double Score !
          </Typography>
        ) : showDetailsDoubleScore &&
          displayDoubleAndForgot &&
          showDetailsForgot ? (
          <Typography
            variant="button"
            style={{ fontWeight: "bold", fontSize: 25 }}
          >
            {" "}
            Double Score & Forgot save !
          </Typography>
        ) : showDetailsDoubleScore &&
          displayDoubleAndSuper &&
          showDetailsSuperPronostic ? (
          <Typography
            variant="button"
            style={{ fontWeight: "bold", fontSize: 25 }}
          >
            {" "}
            Double Score & Super Pronostic !
          </Typography>
        ) : (
          <></>
        )}
      </DialogTitle>
      <DialogContent>
        {showDetailsSuperPronostic && !displayDoubleAndSuper ? (
          <>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsSuperPronostic")}
            </Typography>
            <Typography color="error" style={{ fontWeight: "bold" }}>
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsForgot && !displayDoubleAndForgot ? (
          <>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsForgotSave")}
            </Typography>
            <Typography color="error" style={{ fontWeight: "bold" }}>
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsDoubleScore &&
          !displayDoubleAndForgot &&
          !displayDoubleAndSuper ? (
          <>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsDoubleScore")}
            </Typography>
            <Typography color="error" style={{ fontWeight: "bold" }}>
              {t("employee.Pronostics.validOnce")}
            </Typography>
          </>
        ) : showDetailsDoubleScore &&
          displayDoubleAndForgot &&
          showDetailsForgot ? (
          <Stack spacing={1}>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsDoubleScore")}
            </Typography>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsForgotSave")}
            </Typography>
            <Typography color="error" style={{ fontWeight: "bold" }}>
              {t("employee.Pronostics.validOnceTwo")}
            </Typography>
          </Stack>
        ) : showDetailsDoubleScore &&
          displayDoubleAndSuper &&
          showDetailsSuperPronostic ? (
          <Stack spacing={1}>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsDoubleScore")}
            </Typography>
            <Typography variant="h6">
              {t("employee.Pronostics.detailsSuperPronostic")}
            </Typography>
            <Typography color="error" style={{ fontWeight: "bold" }}>
              {t("employee.Pronostics.validOnceTwo")}
            </Typography>
          </Stack>
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
          {t("employee.Pronostics.cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GameOptionsDetails;
