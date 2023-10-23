import React, { useEffect, useState } from "react";

import { Container } from "@material-ui/core";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { getAllEventsForAdminByCatégorie } from "../../../../../_redux/actions/events";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal";

export default function Events() {
  const events = useAppSelector(({ eventsSlice: { events } }) => events).filter(
    (event) => !event.is_deleted
  );
  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllEventsForAdminByCatégorie(params.id as string));
  }, []);

  const handleClick = (eventId: string) => {
    navigate(`/coeff/categories/games/${eventId}`);
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
