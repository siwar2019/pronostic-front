import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { Container, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Item } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';
import { getAllCategories } from '../../../../../_redux/actions/categories';
import GenerateIcon from '../../../../../helpers/GenerateIcon';



export default function Categories() {
  
  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  const handleClick = (categorieId: string) => {
    navigate(`/coeff/categories/events/${categorieId}`);
  }


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
              <Item style={{display:"flex", justifyContent:"center"}}>
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
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container >
  );
}