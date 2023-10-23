import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Container } from "@mui/system";
import ListPartners from "../../admin/Gestion Partner/PartnersList";
import DisplayAllTeams from "./Teams/DisplayAllTeams";
import VerticalLinearStepper from "../../admin/Gestion Events";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const AdminHomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      {/* <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          padding: 3,
          minHeight: "50vw",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Partners" {...a11yProps(1)} />
          <Tab label="Teams" {...a11yProps(2)} />
          <Tab label="New Event" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}>
          <ListPartners />
        </TabPanel> 
        <TabPanel value={value} index={2}>
          <DisplayAllTeams/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <VerticalLinearStepper/>
        </TabPanel>

      </Box> */}
    </Container>
  );
};
export default AdminHomePage;
