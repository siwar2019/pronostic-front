/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getActiveEventsForPartner,
  getCalculatedEventsForPartner,
  switchActiveEvent,
  switchHiddenEvent,
} from "../../../../_redux/actions/events";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IEvents, IEventsSelected } from "../../../../types/events";
import * as Muicon from "@material-ui/icons";
import { getEachEventPronosticsForEmployee } from "../../../../_redux/actions/pronostics";
import {
  updateCalclutedList,
  updateHiddenList,
} from "../../../../_redux/reducers/events";
import deepClone from "deep-clone";
import { t } from "i18next";

export default function SelectEventsForClassment() {
  const { eventsSelected } = useAppSelector((state) => state.eventsSlice);
  const { eventsCalculatedDisplay } = useAppSelector(
    (state) => state.eventsSlice
  );

  const [listDisplayEvent, setListDisplayEvent] = useState<IEventsSelected[]>();
  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName fontSize="small" htmlColor="rgb(33, 146, 255)" />;
  };

  const dispatch = useAppDispatch();
  const lang = useAppSelector(({languageSlice: {lang}})=>lang)
  useEffect(() => {
    dispatch(getActiveEventsForPartner());
    dispatch(getCalculatedEventsForPartner());
  }, [dispatch]);

  useEffect(() => {
    setListDisplayEvent(eventsCalculatedDisplay);
  }, [eventsCalculatedDisplay]);

  const handleChangeCalculated = (
    event: React.ChangeEvent<HTMLInputElement>,
    event_id: number,
    eventSelected: IEventsSelected
  ) => {
    let index = listDisplayEvent.find((e) => e.id === eventSelected.id);
    if (index === undefined) {
      let eventS = deepClone(eventSelected);
      eventS.user[0].UserEvents.is_hidden = true;
      setListDisplayEvent(listDisplayEvent.concat(eventS));
    } else {
      setListDisplayEvent(
        listDisplayEvent.filter(
          (event: IEventsSelected) => event.id !== eventSelected.id
        )
      );
    }
    dispatch(
      switchHiddenEvent({
        event_id: event_id,
        is_hidden: event.target.checked,
      })
    );
    dispatch(
      switchActiveEvent({
        event_id: event_id,
        is_calculated: event.target.checked,
      })
    );
    dispatch(updateCalclutedList(event_id));
    dispatch(getEachEventPronosticsForEmployee());
  };

  const handleChangeHidden = (
    event: React.ChangeEvent<HTMLInputElement>,
    event_id: number
  ) => {
    dispatch(
      switchHiddenEvent({
        event_id: event_id,
        is_hidden: event.target.checked,
      })
    );
    dispatch(updateHiddenList(event_id));
    dispatch(getCalculatedEventsForPartner());
    dispatch(getEachEventPronosticsForEmployee());
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      style={{direction : lang === "ar"?"rtl":"ltr" , gap:"20px"}}
    >
      <Stack>
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
              {/* Select The Events To Calculate */}
              {t("partner.Ranking.selecteventCalcul")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {eventsSelected &&
                eventsSelected?.length >= 0 &&
                eventsSelected?.map((el: IEvents) => {
                  const labelId = `checkbox-list-label-${el.name}`;
                  return (
                    <ListItem
                      key={el.name}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="comments"
                        ></IconButton>
                      }
                    >
                      <ListItemIcon>
                        <Switch
                          defaultChecked={el.user[0].UserEvents.is_calculated}
                          value={el.user[0].UserEvents.is_calculated}
                          size="small"
                          onChange={(e) =>
                            handleChangeCalculated(e, el.id as any, el)
                          }
                        />{" "}
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${el.name}`} />
                      <Chip
                        title="category"
                        icon={GenerateIcon(el.categories.sport_icon)}
                        label={el.categories.name}
                        color="primary"
                        size="small"
                        sx={{ marginLeft: "5px" }}
                      />
                    </ListItem>
                  );
                })}
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Stack>
        <Accordion sx={{ borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              background: "-webkit-linear-gradient(left, #2192ff, #79bdff)",
              borderRadius: "5px",
            }}
          >
            <Typography color="#f9f9f9" variant="body1">
              {/* Select The Events To Display */}
              {t("partner.Ranking.selecteventDisplay")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {listDisplayEvent &&
                listDisplayEvent?.map((el: IEvents) => {
                  const labelId = `checkbox-list-label-${el.name}`;
                  return (
                    <ListItem
                      key={el.id}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="comments"
                        ></IconButton>
                      }
                    >
                      <ListItemIcon>
                        <Switch
                          defaultChecked={el.user[0].UserEvents.is_hidden}
                          value={el.user[0].UserEvents.is_hidden}
                          size="small"
                          onChange={(e) => handleChangeHidden(e, el.id as any)}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${el.name}`} />
                      <Chip
                        title="category"
                        icon={GenerateIcon(el.categories.sport_icon)}
                        label={el.categories.name}
                        color="primary"
                        size="small"
                        sx={{ marginLeft: "5px" }}
                      />
                    </ListItem>
                  );
                })}
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
}
