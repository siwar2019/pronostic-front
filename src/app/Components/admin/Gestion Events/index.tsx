import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddNewEvent from "./AddEvent";
import {  useAppSelector } from "../../../../hooks/reduxHooks";

import EventSettings from "./EventListe";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function VerticalLinearStepper() {
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  return (
    <>
      <Container style={{ paddingBottom: "50px" }}>
        <Box>
          <Typography
            variant="h5"
            style={{ marginTop: "50px", marginBottom: "10px" ,direction:lang ==="ar"?"rtl":"ltr" }}
          >
            {t("admin.Events.NewEvent")}
          </Typography>
          <Accordion defaultExpanded elevation={4}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{direction:lang ==="ar"?"rtl":"ltr"}}
            >
              <Typography color="primary" variant="h6">
                {t("admin.Events.createNewEvent")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{direction:lang ==="ar"?"rtl":"ltr"}}>
              <AddNewEvent />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Typography
            variant="h5"
            style={{ marginTop: "50px", marginBottom: "10px", direction:lang ==="ar"?"rtl":"ltr" }}
          >
            {t("admin.Events.eventsList")}
          </Typography>
          <Accordion elevation={4}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{direction:lang ==="ar"?"rtl":"ltr"}}
            >
              <Typography color="primary" variant="h6">
                {t("admin.Events.events")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EventSettings />
              
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
}
