import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  setDisplayStep,
  setEventsFinalList,
} from "../../../../_redux/reducers/events";
import { Grid, Card, CardContent, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box } from "@mui/system";

const FinalListPartnerEvents = () => {
  const dispatch = useAppDispatch();

  let counter = useSelector(
    (state: RootState) => state.eventsSlice.eventCounter
  );

  let finalList = useSelector(
    (state: RootState) => state.eventsSlice.finalList
  );

  useEffect(() => {
    if (counter > finalList.length) {
      dispatch(setEventsFinalList());
    }
  }, [dispatch, counter, finalList.length]);

  const goBackToCategories = () => {
    dispatch(setDisplayStep(0));
  };

  const path = [
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "#21BA45" }}
      color="primary"
      onClick={goBackToCategories}
    >
      Categories
    </Typography>,
    <Typography key="2">Evènements</Typography>,
    <Typography key="3">Vos évènements</Typography>,
  ];

  return (
    <Container>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {path}
      </Breadcrumbs>

      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Votre liste des évènements finale{" "}
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="enter"
        justifyContent="center"
        mt={2}
      >
        {finalList.map((event) => (
          <Grid item key={event.id}>
            <Card
              sx={{
                minWidth: 170,
                maxWidth: 170,
                minHeight: 150,
                maxHeight: 150,
                paddingTop: 2,
              }}
            >
              <CardContent>
                <Stack spacing={3} justifyContent="center" alignItems="center">
                  <EmojiEventsIcon fontSize="large" color="primary" />
                  <Typography align="center" variant="h6" component="div">
                    {event.name}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default FinalListPartnerEvents;
