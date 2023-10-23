import { Box, Grid, Modal } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import {
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IPartnerActions } from "../../../../types/users";
import { RootState } from "../../../../_redux/store/configureStore";
import {
  getAllEvents,
  getAllEventsBuyedForAdmin,
  getAllEventsByCategory,
  getAllEventsByCategoryByAdmin,
  getAllEventsByCategoryForAdmin,
  getAllEventsByCategoryForPartnerByAdmin,
} from "../../../../_redux/actions/events";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import * as Muicon from "@material-ui/icons";
import Events from "./Events";
import {
  setDisplayStep,
  setEventsFinalList,
} from "../../../../_redux/reducers/events";
import FinalListPartnerEvents from "./FinalListPartnerEvents";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useState } from "react";
import { addEventsToPartners } from "../../../../_redux/actions/users";
import Swal from "sweetalert2";
import { setSuccess } from "../../../../_redux/reducers/users";
import { getAllCategories } from "../../../../_redux/actions/categories";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
   overflow: "scroll",
  float: "left",
  maxHeight: "60%",
};
const PartnersActions = ({
  openActionPopup,
  setOpenActionPopup,
}: IPartnerActions) => {

  const [categorieId, setCategorieId] = useState<string>()

  let categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories
  );

  let selectedEvents = useSelector(
    (state: RootState) => state.categoriesSlice.selectedEvents
  );

  let partnerId = useSelector((state: RootState) => state.usersSlice.partnerId);
  const dispatch = useAppDispatch();

  const value = { eventIds:selectedEvents, partnerId };

  const addEvents = () => {
    dispatch(addEventsToPartners(value));
    getAllEventsByCategoryForAdmin({id: categorieId, partnerId})
  };

  let success = useSelector((state: RootState) => state.usersSlice.success);

  if (success === 1) {
    setOpenActionPopup(false);
    dispatch(setDisplayStep(0));
    Swal.fire({
      icon: "success",
      title: "Bien ajouté",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccess(0));
  } else if (success === -1) {
    Swal.fire({
      icon: "error",
      title: "Réessayer",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setSuccess(0));
  }

  const path = [<Typography key="1">Categories</Typography>];

  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getAllCategories());
    }

    if (selectedEvents.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);

      dispatch(setEventsFinalList());
    }
  }, [dispatch, categories.length, selectedEvents.length, success]);

  const GenerateIcon = (variation: string, props = {}) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName {...props} color="primary" fontSize="large" />;
  };

  let displayEvents = useSelector(
    (state: RootState) => state.categoriesSlice.displayEvents
  );

  const handleClick = (id: string) => {
    setCategorieId(id)
    dispatch(setDisplayStep(1));
     dispatch(getAllEventsByCategoryForAdmin({id, partnerId}));
     dispatch(getAllEventsByCategoryByAdmin({ partner_id: partnerId, categorie_id: id }))  
  };

  const finishStep = () => {
    dispatch(setDisplayStep(2));
  };

  const Reset = () => {
    dispatch(setDisplayStep(0));
  };

  const closePopup = () => {
    setOpenActionPopup(false);
    dispatch(setDisplayStep(0));
  };

  return (
    <Modal open={openActionPopup} >
      <Box sx={style}>
        <IconButton
          style={{
            display: "block",
            marginLeft: "auto",
          }}
          onClick={() => {
            closePopup();
          }}
        >
          <CloseIcon />
        </IconButton>
        {displayEvents === 0 ? (
          <Container>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {path}
            </Breadcrumbs>
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              Choisissez une catégorie 
            </Typography>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
              mt={2}
            >
              {categories.map((category) => (
                <Grid item key={category.id}>
                  <Card
                    onClick={() => handleClick(category.id )}
                    sx={{
                      cursor: "pointer",
                      minWidth: 170,
                      maxWidth: 170,
                      minHeight: 150,
                      maxHeight: 150,
                      paddingTop: 2,
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
                        <>{GenerateIcon(category.sport_icon)}</>
                        <Typography variant="h5" component="div">
                          {category.name}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : displayEvents === 1 ? (
          <Container>
            <Events />
          </Container>
        ) : (
          <>
            <FinalListPartnerEvents />
            
          </>
        )}
        {displayEvents === 0 || displayEvents === 1 ? (
          <Button
            style={{
              // position: "absolute",
              bottom: "-8px",
            }}
            disabled={disabled}
            variant="contained"
            onClick={() => finishStep()}
          >
            <span style={{ textTransform: "none" }}>Sauvegardé</span>
          </Button>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            style={{
              // position: "fixed",
              bottom: "13px",
              color: "#FFF",
              marginTop : "25px",
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={() => Reset()}
            >
              <span style={{ textTransform: "none", color: "#FFF" }}>
                Retourner
              </span>
            </Button>

            <Button variant="contained" onClick={() => addEvents()}>
              <span style={{ textTransform: "none", color: "#FFF" }}>
                Confirmer
              </span>
            </Button>
          </Stack>
        )}
      </Box>
    </Modal>
  );
};
export default PartnersActions;
