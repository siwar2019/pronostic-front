import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getActiveEventsForPartner,
  getCalculatedEventsForPartner,
  switchActiveEvent,
} from "../../../../_redux/actions/events";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  getEachEventPronosticsForEmployee,
  getTotalPointsPronosticsAllEventsForEmployee,
} from "../../../../_redux/actions/pronostics";
import { IEvents } from "../../../../types/events";
import * as Muicon from "@material-ui/icons";

export default function SelectEventsToDisplay() {
  const { eventsCalculatedDisplay } = useAppSelector(
    (state) => state.eventsSlice
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [checked, setChecked] = useState([0]);
  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName fontSize="small" htmlColor="rgb(33, 146, 255)" />;
  };
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getCalculatedEventsForPartner());
  // }, [dispatch]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    event_id: number
  ) => {
    dispatch(
      switchActiveEvent({
        event_id: event_id,
        is_calculated: event.target.checked,
      })
    );

    dispatch(getEachEventPronosticsForEmployee());
  };

  return (
    <div className="App">
      <Accordion sx={{ mb: 8, borderRadius: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            background: "-webkit-linear-gradient(left, #2192ff, #bcdeff)",
            borderRadius: "5px",
          }}
        >
          <Typography color="#f9f9f9" variant="body1">
            Select The Events To Display
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {eventsCalculatedDisplay &&
              eventsCalculatedDisplay.map((el: IEvents) => {
                const labelId = `checkbox-list-label-${el.name}`;

                return (
                  <ListItem
                    key={el.name}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments"></IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(el.name as any)}
                      dense
                    >
                      <ListItemIcon>
                        <Switch
                          defaultChecked={el.user[0].UserEvents.is_calculated}
                          value={el.user[0].UserEvents.is_calculated}
                          onChange={(e) => handleChange(e, el.id as any)}
                        />{" "}
                      </ListItemIcon>

                      <ListItemText id={labelId} primary={`${el.name}`} />
                      <Chip
                        title="category"
                        icon={GenerateIcon(el.categories.sport_icon)}
                        label={el.categories.name}
                        color="primary"
                        size="small"
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
