import React, { useEffect } from "react";
import { getAllEvents } from "../../../../_redux/actions/events";
import { useAppDispatch} from "../../../../hooks/reduxHooks";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {  Card, CardContent, Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../../_redux/actions/categories";
import { useNavigate } from "react-router-dom";

function Events() {
  const dispatch = useAppDispatch();
  const events = useSelector((state: RootState) => state.eventsSlice.events);

  const navigate = useNavigate();

 

  console.log("events", events);
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleClick = (categorieId: string) => {
    navigate(`/events/${categorieId}`);
  };
  return (
    <Container sx={{ mt: 8 }}>
      <Grid>
        <Typography
          variant="h6"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          Votre liste des évènements{" "}
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {events.map((el, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Item>
                  {" "}
                  <Card
                    style={{
                      minWidth: 200,
                      maxWidth: 170,
                      minHeight: 180,
                      maxHeight: 180,
                      paddingTop: 1,

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
                          {el.name}
                        </Typography>
                        {/* <Typography align="center" component="div">
                          Football{" "}
                        </Typography> */}
                      </Stack>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default Events;
