import React, { useEffect, useState } from "react";
import {
  getAllEventsByCategory,
} from "../../../../_redux/actions/events";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {  useParams } from "react-router-dom";
import { Card, CardContent, Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import CircleLoading from "../../CircleLoading";
import { useTranslation } from "react-i18next";

function Events() {
  const dispatch = useAppDispatch();
  const events = useSelector(
    (state: RootState) => state.eventsSlice.events
  ).filter((event: any) => event.id !== 0);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  
  const navigate = useNavigate();
  let params = useParams();



  useEffect(() => {
    dispatch(getAllEventsByCategory(params.id as string));
    setTimeout(() => {
      setLoading(false);
    }, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (eventId: string) => {
    navigate(`/games/${eventId}`);
  };
  
  return (
    <Container sx={{ mt: 8 }}>
      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <Grid>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            {t("partner.Ranking.chooseEvent")}
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              alignItems="center"
              justifyContent="center"
              display="flex"
              mt={2}
            >
              {events.length === 0 ? (
                <EmptyPageModal />
              ) : (
                events.map((el, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <Item style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <Card
                        onClick={() => handleClick(el.id)}
                        style={{
                          cursor: "pointer",
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
                            <Typography
                              align="center"
                              variant="h6"
                              component="div"
                            >
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
                ))
              )}
            </Grid>
          </Box>
        </Grid>
      )}
    </Container>
  );
}

export default Events;
