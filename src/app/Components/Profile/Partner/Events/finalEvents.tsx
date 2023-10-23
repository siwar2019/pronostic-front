import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useStyles } from "../../../../styles/partner/events/displayAllEventsStyles";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { addEventsToPartners } from "../../../../../_redux/actions/users";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../_redux/store/configureStore";
import {
  activeEventsForPartner,
  desactiveEventsForPartner,
  getAllPartnerEvents,
} from "../../../../../_redux/actions/events";
import Swal from "sweetalert2";
import {
  setSuccessActived,
  setSuccessArchived,
} from "../../../../../_redux/reducers/events";
import { setSuccess } from "../../../../../_redux/reducers/users";

function FinalEvents(props: any) {
  let openSettingsPopup = props.openSettingsPopup;
  let eventsSelectedIds = props.eventsSelectedIds;
  let events = props.events;
  let partnerEvents = props.partnerEvents;
  let partnerId = props.partner.id;
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { t } = useTranslation();

  /***** Archived *****/

  let partnerActivedEventsIds = partnerEvents
    .map((partnerEvent: any) =>
      partnerEvent.isActive ? partnerEvent.eventId : null
    )
    .filter((partnerEvent: any) => partnerEvent !== null);

  let archivedEventsIds = partnerActivedEventsIds?.filter((element: any) => {
    return !eventsSelectedIds?.includes(element);
  });

  let archivedEvents = events.filter((item: any) => {
    return archivedEventsIds?.includes(item.id);
  });

  /***** Actived ****/

  let partnerArchivedEventsIds = partnerEvents
    .map((partnerEvent: any) =>
      !partnerEvent.isActive ? partnerEvent.eventId : null
    )
    .filter((partnerEvent: any) => partnerEvent !== null);

  let activedEventsIds = partnerArchivedEventsIds?.filter((element: any) => {
    return eventsSelectedIds?.includes(element);
  });

  let activedEvents = events.filter((item: any) => {
    return activedEventsIds?.includes(item.id);
  });
  /***** New *****/

  let newEventsIds = eventsSelectedIds?.filter((element: any) => {
    return (
      !partnerActivedEventsIds.includes(element) &&
      !partnerArchivedEventsIds?.includes(element)
    );
  });

  let newEvents = events.filter((item: any) => {
    return newEventsIds?.includes(item.id);
  });

  const handlSubmit = () => {
    if (newEventsIds?.length !== 0) {
      dispatch(
        addEventsToPartners({ eventIds: newEventsIds, partnerId: partnerId })
      );
    }
    dispatch(
      activeEventsForPartner({
        archivedEventsIds: activedEventsIds,
        partnerId: partnerId,
      })
    );
    dispatch(
      desactiveEventsForPartner({
        activedEventIds: archivedEventsIds,
        partnerId: partnerId,
      })
    );
  };

  let succesNewEvent = useSelector(
    (state: RootState) => state.usersSlice.success
  );

  let succesActivedEvent = useSelector(
    (state: RootState) => state.eventsSlice.successActived
  );

  let succesArchivedEvent = useSelector(
    (state: RootState) => state.eventsSlice.successArchived
  );

  if (
    (succesNewEvent || succesArchivedEvent || succesActivedEvent) === 1 &&
    (succesNewEvent || succesArchivedEvent || succesActivedEvent) !== -1
  ) {
    Swal.fire({
      icon: "success",
      title: "Action completed successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccessArchived(0));
    dispatch(setSuccessActived(0));
    dispatch(setSuccess(0));
    props.setOpenSettingsPopup(false);
    setTimeout(() => {
      dispatch(getAllPartnerEvents(partnerId));
    }, 500);
  } else if (
    (succesNewEvent || succesArchivedEvent || succesActivedEvent) === -1
  ) {
    Swal.fire({
      icon: "error",
      title: "A problem occurs",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccessArchived(0));
    dispatch(setSuccessActived(0));
    dispatch(setSuccess(0));
  }

  return (
    <Dialog open={openSettingsPopup} classes={{ paper: classes.paper }}>
      <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
        {t("partner.Events.validateAction")}
      </DialogTitle>
      {(archivedEvents.length || newEvents.length || activedEvents.length) !==
      0 ? (
        <DialogContent>
          {archivedEvents.length !== 0 ? (
            <>
              <Typography variant="h5" className={classes.title}>
                {t("partner.Events.archivedEvents")}
              </Typography>
              <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
              >
                {archivedEvents.map((archivedEvent: any, index: number) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card raised style={{ width: "100%" }}>
                      <CardMedia
                        component="img"
                        className={classes.cardImgLists}
                        style={{ objectFit: "fill" }}
                        image={
                          (process.env.REACT_APP_UPLOADS_IMAGES +
                            archivedEvent.image) as any
                        }
                        alt="event image"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="center"
                          style={{ height: "75px" }}
                        >
                          {archivedEvent.length > 33
                            ? archivedEvent.name.substring(0, 30) + "..."
                            : archivedEvent.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <></>
          )}
          {activedEvents.length !== 0 ? (
            <>
              <Typography variant="h5" className={classes.title}>
                {t("partner.Events.activedEvents")}
              </Typography>
              <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
              >
                {activedEvents.map((activedEvent: any, index: number) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card raised style={{ width: "100%" }}>
                      <CardMedia
                        component="img"
                        className={classes.cardImgLists}
                        style={{ objectFit: "fill" }}
                        image={
                          (process.env.REACT_APP_UPLOADS_IMAGES +
                            activedEvent.image) as any
                        }
                        alt="event image"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="center"
                          style={{ height: "75px" }}
                        >
                          {activedEvent.name.length > 33
                            ? activedEvent.name.substring(0, 30) + "..."
                            : activedEvent.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <></>
          )}
          {newEvents.length !== 0 ? (
            <>
              <Typography variant="h5" className={classes.title}>
                {t("partner.Events.newEvents")}
              </Typography>
              <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
              >
                {newEvents.map((newEvent: any, index: number) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card raised style={{ width: "100%" }}>
                      <CardMedia
                        component="img"
                        className={classes.cardImgLists}
                        style={{ objectFit: "fill" }}
                        image={
                          (process.env.REACT_APP_UPLOADS_IMAGES +
                            newEvent.image) as any
                        }
                        alt="event image"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="center"
                          style={{ height: "75px" }}
                        >
                          {newEvent.length > 33
                            ? newEvent.name.substring(0, 30) + "..."
                            : newEvent.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <></>
          )}
        </DialogContent>
      ) : (
        <Typography variant="h4" className={classes.noAction} align="center">
          {t("partner.Events.noActions")}
        </Typography>
      )}
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => props.setOpenSettingsPopup(false)}
        >
          {t("admin.Categories.cancel")}
        </Button>
        {(archivedEvents.length || newEvents.length || activedEvents.length) !==
        0 ? (
          <Button
            variant="contained"
            color="secondary"
            className={classes.validateButton}
            onClick={handlSubmit}
          >
            {" "}
            {t("partner.Events.validate")}
          </Button>
        ) : (
          <></>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default FinalEvents;
