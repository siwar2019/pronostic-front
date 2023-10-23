import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Events from "../../Components/Profile/Partner/events";
import { TableEmploye } from "../../Components/Profile/Partner/tableEmploye";
import RankingEmploye from "../../Components/Profile/Partner/rankingEmploye";
import LandingPage from "../../Components/admin/dashboard/landing page";
import { Container } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function PartnerHomePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Container>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="Add Employes" {...a11yProps(0)} />
                            <Tab label="Events" {...a11yProps(1)} />
                            <Tab label="Ranking" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <TableEmploye />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Events />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <RankingEmploye />
                    </TabPanel>
                </Box>
            </Container>
        </>
    );
}
