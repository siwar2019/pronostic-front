import React, { useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { Container, Typography } from "@material-ui/core";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllCategories } from "../../../../_redux/actions/categories";
import { Badge, Box, Grid } from "@mui/material";
import { Item } from "semantic-ui-react";
import GenerateIcon from "../../../../helpers/GenerateIcon";
import { getMatchNotificationForEmployee } from "../../../../_redux/actions/matchs";

export default function Categories() {
  const categories = useAppSelector(
    ({ categoriesSlice: { categories } }) => categories
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { notificationMatchs } = useAppSelector((state) => state.matchsSlice);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getMatchNotificationForEmployee());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (categorieId: string) => {
    navigate(`/categories/events/${categorieId}`);
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
          {categories.map((el, index) => (
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
                      {GenerateIcon(el.sport_icon)}
                      <Typography align="center" variant="h6" component="div">
                        {el.name}
                      </Typography>
                      {/* <Typography align="center" component="div">
                        {el.description}
                      </Typography> */}
                    </Stack>
                  </CardContent>
                </Card>
                <Badge
                  sx={badgeStyle}
                  color="error"
                  badgeContent={
                    notificationMatchs &&
                    notificationMatchs.reduce((accumulator, currentValue) => {
                      if (currentValue.groupe.events.categorieId === el.id) {
                        return accumulator + currentValue.matchs.length;
                      }
                      return accumulator;
                    }, 0)
                  }
                ></Badge>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
