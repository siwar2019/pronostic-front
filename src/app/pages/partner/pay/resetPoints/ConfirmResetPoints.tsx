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
import { resetAllEmployeesPoints } from "../../../../../_redux/actions/pronostics";

function ConfirmResetPoints(props: any) {
    let openConfirmPopup = props.openConfirmPopup;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();

    const quit = () => {
        props.setOpenCofirmPopup(false);
    };

    const confirmAction = () => {
        dispatch(resetAllEmployeesPoints());
        setTimeout(() => {
            props.setOpenCofirmPopup(false);
            props.setDisableNextButton(false);
        }, 600);
    };

    return (
        <Dialog open={openConfirmPopup}>
            <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
                {t("employee.Pronostics.validateAction")}
            </DialogTitle>
            <DialogContent>
                <DialogContent>
                    <Typography variant="h5" align="center">
                        Es-tu sûr de réinitialiser les points pour tous les
                        employés ?
                    </Typography>{" "}
                </DialogContent>
            </DialogContent>
            <DialogActions>
                {" "}
                <Button variant="contained" onClick={() => quit()}>
                    {t("partner.Events.cancel")}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={confirmAction}
                    style={{ color: "white" }}
                >
                    {" "}
                    {t("partner.Events.validate")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmResetPoints;
