import React, { useEffect } from "react";
import { getAllEvents } from "../../../../_redux/actions/events";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Navigate, Routes } from "react-router-dom";
import { Button, Card, CardContent, Item } from "semantic-ui-react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../../_redux/actions/categories";
import { useNavigate } from "react-router-dom";
import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
import { useTranslation } from "react-i18next";
import UndoIcon from "@mui/icons-material/Undo";
import { addHours } from "../../../utils/hours";

let currentTime = new Date();

function CategorieAdmin() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    ({ categoriesSlice: { categories } }) => categories
  );
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  // let categories = useSelector(
  //   (state: RootState) => state.categoriesSlice.categories
  // ).filter(
  //   (categorie) =>
  //     currentTime > new Date(categorie.createdAt) &&
  //     currentTime < addHours(new Date(categorie.createdAt), 48, 0)
  // );
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleClick = (categoryId: string) => {
    navigate(`/allEvents/${categoryId}`);
  };
  return (
    <Container sx={{ mt: 8 }}>
      <Grid>
        <Typography
          variant="h6"
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {t("admin.Matchs.chooseCategory")}
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
            {categories.length === 0 ? (
              <EmptyPageModal />
            ) : (
              categories.map((el, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Item style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      onClick={() => handleClick(el.id)}
                      style={{
                        cursor: "pointer",
                        // minWidth: 200,
                        // maxWidth: 170,
                        // minHeight: 180,
                        // maxHeight: 180,
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
        </Box>
      </Grid>
    </Container>
  );
}

export default CategorieAdmin;
