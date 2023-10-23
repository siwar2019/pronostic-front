import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";

// import Chart from "../../../Components/admin/dashboard/tableaude bord";
import { Chart } from "../../../Components/admin/dashboard/tableaude bord";
import { CategorieChart } from "../../../Components/admin/dashboard/tableaude bord/chartcategorie";
import { EventsChart } from "../../../Components/admin/dashboard/tableaude bord/chartEmploye";
import { EmployeParPartner } from "../../../Components/admin/dashboard/tableaude bord/chartpartner";
import BoxStatistiques from "../../../Components/admin/dashboard/tableaude bord/boxStatic";
import WinnersTable from "../../../Components/admin/dashboard/tableaude bord/tableWiner";
import { EventsParCategories } from "../../../Components/admin/dashboard/tableaude bord/eventsParCategorie";
import { EventsVendu } from "../../../Components/admin/dashboard/tableaude bord/eventsVendue";
import EmployeStatistique from "../../../Components/admin/dashboard/tableaude bord/statistiqueEmploye";
import { MatchScoreStatistique } from "../../../Components/admin/dashboard/tableaude bord/statisqueMatchScore";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function DashboardAdmin() {
    return (
        <React.Fragment>
            <Grid>
                <Container>
                    <BoxStatistiques />
                    <Chart />
                </Container>

                <Box
                    sx={{ flexGrow: 1 }}
                    style={{
                        // marginTop: "8vh",
                        paddingBottom: "50px",
                        paddingTop: "50px",
                    }}
                >
                    <Grid container>
                        <Grid xs={12} md={4} padding="10px">
                            <Item>
                                {" "}
                                <CategorieChart />
                            </Item>
                        </Grid>
                        <Grid xs={12} md={4} padding="10px">
                            <Item>
                                <EventsChart />
                            </Item>
                        </Grid>
                        <Grid xs={12} md={4} padding="10px">
                            <Item>
                                <EmployeParPartner />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                <div
                    style={{
                        background: "#F0F0F0",
                        paddingBottom: "50px",
                        paddingTop: "50px",
                    }}
                >
                    <Container>
                        <Box>
                            <WinnersTable />
                        </Box>
                    </Container>
                </div>
                <Container>
                    <div style={{ paddingBottom: "50px", paddingTop: "50px" }}>
                        <Grid
                            container
                            spacing={1}
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <Grid xs={12} md={6}>
                                <EventsParCategories />
                            </Grid>
                            <Grid
                                xs={12}
                                md={3}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <EventsVendu />
                            </Grid>
                            <Grid
                                xs={12}
                                md={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {" "}
                                <Typography
                                    style={{
                                        background: "#FFFAF1",
                                        fontWeight: "bold",
                                        padding: "6px",
                                    }}
                                >
                                    Revenu des Evenements Vendus
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <div
                    style={{
                        paddingBottom: "50px",
                        paddingTop: "50px",
                        background: "#F0F0F0",
                    }}
                >
                    <Container>
                        <EmployeStatistique />
                        <Grid>
                            <Grid
                                xs={4}
                                md={3}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <MatchScoreStatistique />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Grid>
        </React.Fragment>
    );
}
