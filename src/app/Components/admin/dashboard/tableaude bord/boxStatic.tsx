import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/reduxHooks";
import { getAllCategories } from "../../../../../_redux/actions/categories";
import { getAllEvents } from "../../../../../_redux/actions/events";
import { getAllPartners } from "../../../../../_redux/actions/users";
import { RootState } from "../../../../../_redux/store/configureStore";
import { useStyles } from "./ChartStyle";

const BoxStatistiques = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const events = useAppSelector(({ eventsSlice: { events } }) => events);
  const categories = useAppSelector(({ categoriesSlice: { categories } }) => categories);
  const lang =  useAppSelector(({languageSlice: {lang}})=>lang);

  const partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );
  useEffect(()=>{
    dispatch(getAllEvents());
    dispatch(getAllCategories());
    dispatch(getAllPartners());
  },[dispatch])
  return (
    <div>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{direction : lang === "ar"?"rtl":"ltr"}} >
        <Grid xs={12} md={4}>
        <Card className={classes.card1}>
            <CardContent>
              <Typography variant="h6" component="div" className={classes.titCard}>
               {t("admin.Dashboard.NbPartner")}
          
              </Typography>
              <Typography sx={{ mb: 1.5 }} className={classes.cardNum}>
                {partnersData.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
        <Card className={classes.card2} >
            <CardContent>
              <Typography variant="h6" component="div" className={classes.titCard}>
              {t("admin.Dashboard.NbEvents")}
              </Typography>
              <Typography sx={{ mb: 1.5 }} className={classes.cardNum}>
              {categories.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
        <Card className={classes.card3} >
            <CardContent>
              <Typography variant="h6" component="div" className={classes.titCard}>
              {t("admin.Dashboard.NbCategorie")}
              </Typography>
              <Typography sx={{ mb: 1.5 }} className={classes.cardNum}>
              {events.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

    
    </div>
  );
};

export default BoxStatistiques;
