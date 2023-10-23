import { useStyles } from "../../../../styles/partner/events/displayAllEventsStyles";
import { Box, Button, Chip, Grid, Stack, Switch } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import {
  getAllEvents,
  getAllPartnerEvents,
} from "../../../../../_redux/actions/events";
import { useEffect, useState } from "react";
import * as Muicon from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import FinalEvents from "./finalEvents";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal";
import DisplayQualificationValidation from "./displayQualificationValidation";
import CircleLoading from "../../../CircleLoading";

export default function DisplayAllPartnerEvents() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const partner = useSelector((state: RootState) => state.auth.currentUser);
  const events = useAppSelector(({ eventsSlice: { events } }) => events).filter(
    (event: any) => !event.is_deleted && event.id !== 0
  );
  const partnerEvents = useSelector(
    (state: RootState) => state.eventsSlice.partnerEvents
  );
  const [openSettingsPopup, setOpenSettingsPopup] = useState(false);
  const [eventsSelectedIds, setEventsSelectedIds] = useState<number[]>();
  const [checked, setChecked] = useState<boolean>();
  const [openQualificationPopup, setOpenQualificationPopup] =
    useState<boolean>(false);
  const [eventId, setEventId] = useState<number>();
  const [qualificationActiveIds, setQualificationActiveIds] =
    useState<number[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: any) => {
    setOpenQualificationPopup(true);
    setEventId(id);
    setChecked(e.target.checked);
  };

  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName fontSize="small" htmlColor="rgb(33, 146, 255)" />;
  };

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllPartnerEvents(partner.id));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, partner.id]);

  useEffect(() => {
    setEventsSelectedIds(
      partnerEvents
        .map((partnerEvent) =>
          partnerEvent.isActive ? partnerEvent.eventId : null
        )
        .filter((partnerEvent: any) => partnerEvent !== null)
    );
  }, [partnerEvents]);

  useEffect(() => {
    setQualificationActiveIds(
      partnerEvents
        .map((partnerEvent) =>
          partnerEvent.displayQualification ? partnerEvent.eventId : null
        )
        .filter((partnerEvent: any) => partnerEvent !== null)
    );
  }, [partnerEvents]);

  let checkboxChecked = (
    id: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = eventsSelectedIds.indexOf(id);
    if (index === -1) {
      setEventsSelectedIds(eventsSelectedIds.concat(id));
    } else {
      setEventsSelectedIds(eventsSelectedIds.filter((event) => event !== id));
    }
  };

  return (
    <>
      {" "}
      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <>
          {events.length === 0 ? (
            <EmptyPageModal />
          ) : (
            <Container>
              <Grid
                container
                columnSpacing={2}
                rowSpacing={0}
                justifyContent="center"
                alignItems="center"
              >
                {events.map((event, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={6} raised className={classes.cards}>
                      <Stack direction="row" justifyContent="space-between">
                        {/* //SIWAR */}
                        <CardHeader
                          className={classes.cardHeader}
                          title={
                            event.name.length > 45
                              ? event.name.substring(0, 42) + "..."
                              : event.name
                          }
                        />
                        <Checkbox
                          title={t("partner.Events.chooseEvent")}
                          icon={<TaskAltIcon fontSize="large" />}
                          checkedIcon={
                            <TaskAltIcon fontSize="large" color="primary" />
                          }
                          onChange={(e) => checkboxChecked(event.id, e)}
                          checked={
                            eventsSelectedIds?.includes(event.id as any)
                              ? true
                              : false
                          }
                        />
                      </Stack>
                      <CardMedia
                        component="img"
                        className={classes.cardImg}
                        style={{ objectFit: "fill" }}
                        image={
                          (process.env.REACT_APP_UPLOADS_IMAGES +
                            event.image) as any
                        }
                        alt="Event image"
                      />
                      <CardContent>
                        <Chip
                          title={t("partner.Events.category")}
                          icon={GenerateIcon(event.categories.sport_icon)}
                          label={event.categories.name}
                          color="primary"
                          size="small"
                          style={{ marginBottom: "10px" }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={classes.description}
                        >
                          {event.description}{" "}
                        </Typography>
                        {event.displayQualification ? (
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={0.5}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                              spacing={0.5}
                              className={classes.settings}
                            >
                              <AccountTreeIcon
                                fontSize="large"
                                color="secondary"
                              />{" "}
                              <Typography variant="body1">
                                {t("partner.Events.qualification")}
                              </Typography>
                            </Stack>{" "}
                            <Box>
                              {partnerEvents.map((partnerEvent, index) => (
                                <Box key={index}>
                                  {(event.id as any) ===
                                    (partnerEvent.eventId as any) &&
                                  partnerEvent.isActive ? (
                                    <>
                                      <Switch
                                        size="small"
                                        onChange={(e) =>
                                          handleChange(e, event.id)
                                        }
                                        checked={
                                          qualificationActiveIds?.includes(
                                            event.id as any
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                    </>
                                  ) : null}
                                </Box>
                              ))}
                            </Box>
                          </Stack>
                        ) : (
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                            className={classes.settings}
                          >
                            <SettingsIcon fontSize="large" color="secondary" />{" "}
                            <Typography variant="body1">
                              {t("partner.Events.noSettings")}
                            </Typography>
                          </Stack>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Button
                color="secondary"
                variant="contained"
                className={classes.submitButton}
                onClick={() => setOpenSettingsPopup(true)}
              >
                {t("partner.Events.finish")}
              </Button>
            </Container>
          )}
          <FinalEvents
            openSettingsPopup={openSettingsPopup}
            setOpenSettingsPopup={setOpenSettingsPopup}
            eventsSelectedIds={eventsSelectedIds}
            events={events}
            partnerEvents={partnerEvents}
            partner={partner}
            setEventsSelectedIds={setEventsSelectedIds}
          />
          <DisplayQualificationValidation
            openQualificationPopup={openQualificationPopup}
            setOpenQualificationPopup={setOpenQualificationPopup}
            partner={partner}
            qualificationActiveIds={qualificationActiveIds}
            eventId={eventId}
            handleChange={handleChange}
            checked={checked}
            setQualificationActiveIds={setQualificationActiveIds}
          />
        </>
      )}
    </>
  );
}
