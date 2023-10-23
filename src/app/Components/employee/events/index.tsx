import { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getActiveEventsByCategoryForEmployee,
} from "../../../../_redux/actions/events";
import {
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate, useParams } from "react-router-dom";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import { getMatchNotificationForEmployee } from "../../../../_redux/actions/matchs";

export default function Events() {
  const events = useAppSelector(({ eventsSlice: { events } }) => events).filter(
    (event) => !event.is_deleted
  );

  const { notificationMatchs } = useAppSelector((state) => state.matchsSlice);

  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getActiveEventsByCategoryForEmployee(params.id as string));
    dispatch(getMatchNotificationForEmployee());
  }, [dispatch, params.id]);

  const handleClick = (eventId: string) => {
    navigate(`/categories/games/${eventId}`);
  };

  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "White",
      backgroundColor: "red",
      width: 20,
      height: 20,
      borderRadius: "50%",
      fontWeight: "bold",
      fontSize: "15px",
      paddingBottom: "2px",
    },
  };

  return (
    <Container>
      <Container style={{ marginTop: "50px", paddingBottom: "30px" }}>
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
                      sx={{
                        cursor: "pointer",
                        minWidth: 200,
                        maxWidth: 170,
                        minHeight: 150,
                        maxHeight: 150,
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
                        </Stack>
                      </CardContent>
                    </Card>
                    <Badge
                      sx={badgeStyle}
                      color="error"
                      badgeContent={
                        notificationMatchs &&
                        notificationMatchs.reduce(
                          (accumulator, currentValue) => {
                            if (currentValue.groupe.event_id === el.id) {
                              return accumulator + currentValue.matchs.length;
                            }
                            return accumulator;
                          },
                          0
                        )

                        // notificationMatchs &&
                        // notificationMatchs.map((elm) => elm.groupe.event_id === el.id)
                        // ).length === 0 ? (
                        //   <p>0</p>
                        // ) :
                        //  (
                        //   <>
                        //     <p>
                        //       {notificationMatchs &&
                        //         notificationMatchs.filter((element, indexA) =>
                        //           element.groupe.map(
                        //             (elm) => elm.event_id === el.id
                        //           )
                        //         ).length}
                        //     </p>
                        //   </>
                        // )
                      }
                    ></Badge>
                  </Item>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
