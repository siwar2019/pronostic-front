import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import { GetPartnerSolde } from "../../../../_redux/actions/solde";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddSoldePartner from "./addSoldePartner";
import HistoryIcon from "@mui/icons-material/History";

const PartnerSolde = () => {
    const dispatch = useAppDispatch();
    const { partnerSolde } = useAppSelector((state) => state.soldeSlice);
    useEffect(() => {
        dispatch(GetPartnerSolde());
    }, [dispatch]);

    const [openUpdateSolde, setOpenUpdateSolde] = useState(false);
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={4}>
                <Paper
                    elevation={18}
                    sx={{
                        maxWidth: "100%",
                        p: 3,
                        minWidth: "100%",
                        maxHeight: 300,
                        minHeight: 300,
                        background: "#dcdcdc59",
                    }}
                >
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <MonetizationOnIcon
                            style={{ fontSize: 35 }}
                            color="secondary"
                        />
                        <Typography
                            variant="h4"
                            style={{ fontFamily: "fantasy" }}
                        >
                            Votre montant
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="flex-end"
                        justifyContent="center"
                        style={{
                            fontFamily: "fantasy",
                            color: "#767676",
                            marginTop: 67,
                        }}
                    >
                        <Typography
                            variant="h2"
                            align="center"
                            style={{
                                fontFamily: "fantasy",
                                color: "#767676",
                            }}
                        >
                            {partnerSolde
                                ? partnerSolde.totalSolde + " DT"
                                : "0 DT"}
                        </Typography>
                        <IconButton onClick={() => setOpenUpdateSolde(true)}>
                            <ModeEditIcon />
                        </IconButton>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Paper
                    elevation={18}
                    sx={{
                        maxWidth: "100%",
                        p: 3,
                        minWidth: "100%",
                        maxHeight: 300,
                        minHeight: 300,
                        background: "#dcdcdc59",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                        >
                            <HistoryIcon
                                style={{ fontSize: 35 }}
                                color="secondary"
                            />
                            <Typography
                                variant="h4"
                                style={{ fontFamily: "fantasy" }}
                            >
                                Historique
                            </Typography>
                        </Stack>{" "}
                        Show more
                    </Stack>
                </Paper>
            </Grid>
            <AddSoldePartner
                openUpdateSolde={openUpdateSolde}
                setOpenUpdateSolde={setOpenUpdateSolde}
            />
        </Grid>
    );
};
export default PartnerSolde;
