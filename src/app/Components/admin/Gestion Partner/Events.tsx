import { Box, Button, Chip, Grid, Modal } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  setDisplayStep,
  setSelectedEvents,
} from "../../../../_redux/reducers/events";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useStyles } from "../../../styles/admin/categories/categoriesStyles";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import { useState } from "react";
import CircleLoading from "../../CircleLoading";
import { Item } from "semantic-ui-react";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EventsAction = () => {
  const dispatch = useAppDispatch();
  // let events = useSelector(
  //   (state: RootState) => state.eventsSlice.eventsById
  // );
 

  const {events, eventsBuyed, selectedEvents} = useSelector(
    (state: RootState) => state.eventsSlice
  );

 
  const classes = useStyles();

  const goBack = () => {
    dispatch(setDisplayStep(0));
  };

  const path = [
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "#21BA45" }}
      onClick={goBack}
    >
      Categories
    </Typography>,
    <Typography key="2">Evènements</Typography>,
  ];

  const addEvent = (id: string) => {
    dispatch(setSelectedEvents(id));
  };
  const [loading, setLoading] = useState<boolean>(true);

   const handleDelete = () => {
    console.log('You clicked the delete event.');
    
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {path}
      </Breadcrumbs>
      <Box>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Partners Events  :
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {eventsBuyed.length === 0 ? (
            <EmptyPageModal />
          ) : (
            eventsBuyed.map((el, index) => (
              <Grid item key={index}>
                <Item>
                  {" "}
                  <Card>
                    <CloseIcon
                      fontSize="small"
                      style={{ display: "block", marginLeft: "auto" }}
                      onClick={handleOpen}
                    />
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          style={{padding:"10px" , fontSize:"15px", fontWeight:"bold"}}
                        >
                         vous avez sure se supprime l'événement
                        </Typography>
                        <Button
                          variant="outlined"
                          color="error"
                          style={{
                            background: "red",
                            color: "white",
                            fontWeight: "bold",
                            display: "flex",
                            margin: "auto",
                          }}
                         
                          onClick={handleDelete}
                          
                          >
                            Supprimer
                        </Button>
                      </Box>
                    </Modal>
                    <CardContent>
                      <Stack
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <EmojiEventsIcon fontSize="large" color="primary" />
                        <Typography align="center" variant="h6" component="div">
                          {el.name}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Choisissez une ou plusieurs évènement :{" "}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          {events.length === 0 ? (
            <EmptyPageModal />
          ) : (
            events.map((event) => (
              <Grid item key={event.id}>
                <Card
                  onClick={() => addEvent(event.id)}
                  className={
                    selectedEvents.includes(event.id)
                      ? classes.card
                      : classes.defaultCard
                  }
                  sx={{
                    cursor: "pointer",
                    minWidth: 170,
                    maxWidth: 170,
                    minHeight: 150,
                    maxHeight: 150,
                    paddingTop: 2,
                    ":hover": {
                      boxShadow: 24,
                    },
                  }}
                >
                  <CardContent>
                    <Stack
                      spacing={3}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <EmojiEventsIcon fontSize="large" color="primary" />
                      <Typography align="center" variant="h6" component="div">
                        {event.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        {/* )} */}
      </Box>
    </Container>
  );
};
export default EventsAction;
