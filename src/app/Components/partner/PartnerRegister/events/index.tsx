import React, { useEffect, useState } from "react";

import { Container } from "@material-ui/core";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { getAllEventsByCategory } from "../../../../../_redux/actions/events";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useParams } from "react-router-dom";
import EmptyPageModal from "../../emptyPage/emptyPageModal";
import { useTranslation } from "react-i18next";

export default function Events() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0);
  const events = useAppSelector(({ eventsSlice: { events } }) => events);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  let params = useParams();

  useEffect(() => {
    dispatch(getAllEventsByCategory(params.id as string));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Container style={{ marginTop: "50px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            {t("partner.Events.eventsAvailable")}{" "}
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {events.length === 0 ? (
              <EmptyPageModal />
            ) : (
              events.map((el, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Item>
                    {" "}
                    <Card
                      //   onClick={() => handleClick(el.id)}
                      sx={{
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
