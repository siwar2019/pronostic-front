import React, { useEffect, useState } from "react";
import { getAllEventsForAdminByCatégorie } from "../../../../_redux/actions/events";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Card, CardContent, Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import CircleLoading from "../../CircleLoading";
import { useTranslation } from "react-i18next";
import { setSelectedEventsModal } from "../../../../_redux/reducers/events";
import UndoIcon from "@mui/icons-material/Undo";

function EventsAdmin() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const events = useSelector(
    (state: RootState) => state.eventsSlice.events
  ).filter((event) => !event.is_deleted);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { id } = useParams();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  /*useEffect(()=>{
    dispatch(setSelectedEventsModal(""));

  },[])*/
  useEffect(() => {
    setLoading(true);
    dispatch(getAllEventsForAdminByCatégorie(id));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, id]);

  const handleClick = (eventId: string) => {
    navigate(`/MatchGroup/${eventId}`);
    dispatch(setSelectedEventsModal(eventId));
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Grid>
        <Button
          variant="contained"
          style={{
            background: "-webkit-linear-gradient(left, #4da7ff, #135799)",
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: "bold",
            height: "30px",
            // direction:lang ==="ar"?"rtl":"ltr"
          }}
          onClick={() => navigate(-1)}
        >
          <UndoIcon fontSize="medium" cursor="pointer" />{" "}
          {t("employee.Pronostics.back")}
        </Button>
        <Typography
          variant="h6"
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {t("admin.Matchs.chooseEvent")}
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          {loading ? (
            <CircleLoading loading={loading} />
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {events.length === 0 ? (
                <EmptyPageModal />
              ) : (
                events.map((el, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <Item style={{ display: "flex", justifyContent: "center" }}>
                      <Card
                        onClick={() => handleClick(el.id)}
                        style={{
                          cursor: "pointer",
                          width: 170,
                          height: 170,

                          paddingTop: 1,

                          ":hover": {
                            boxShadow: 24,
                          },
                        }}
                      >
                        <CardContent
                          style={{ display: "flex", justifyContent: "center" }}
                        >
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
                          </Stack>
                        </CardContent>
                      </Card>
                    </Item>
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Box>
      </Grid>
    </Container>
  );
}

export default EventsAdmin;
