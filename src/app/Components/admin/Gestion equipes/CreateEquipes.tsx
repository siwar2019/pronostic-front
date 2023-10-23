import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ETranslateFR } from "../../../utils/translate/fr/translateFr.enum";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import {
  createNewEquipe,
  getAllEquipes,
} from "../../../../_redux/actions/equipes";
import CountrySelect from "./choosecountry";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { DialogTitle } from "@material-ui/core";
import useStyles from "../../../styles/admin/equipe/equipeStyle";
import CancelPresentationSharpIcon from "@material-ui/icons/CancelPresentationSharp";
import IconButton from "@mui/material/IconButton";

export default function AddEquipes() {
  const initialValues = { name: "", country: "", images: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = { name: "", country: "" };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const fileInputRef = React.useRef<HTMLInputElement>();
  const [showImageError, setShowImageError] = useState(false);
  const [showContryError, setShowContryError] = useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState<any>();
  const [isReset, setIsReset] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const validate = () => {
    let errors: any = {};
    if (!formValues.name) {
      errors.name = ETranslateFR.REQUIRED;
    }
    if (!formValues.country) {
      errors.country = ETranslateFR.REQUIRED;
    }
    setFormErrors(errors);
    if (errors.name) return false;
    if (errors.country) return false;
    return true;
  };
  const handleChange = async (e: any) => {
    let { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
  const defaultImage =
    "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png";

  const handelsubmit = (e: any) => {
    setIcon("");
    setFormValues({ name: "", country: "", images: "" });
    setPreview(defaultImage);
    let data = new FormData();
    const validateErrors = validate();

    data.append("name", formValues.name);
    data.append("country", selectedCountry);
    data.append("images", formValues.images);

    if (image !== undefined) {
      data.append("images", image);
    } else setShowImageError(true);

    dispatch(createNewEquipe(data));

    setSelectedCountry(undefined);
    setIsReset(!isReset);
    handleClose();
  };

  const [icon, setIcon] = useState("");

  ////// upload images ////

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(image);
    }
  }, [image]);
  const setImageFunction = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
      setShowImageError(false);
    } else {
      setImage(null);
    }
  };

  const selectPicture = (e: any) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <Container sx={{ mt: 1, mr: -3 }}>
      <Stack alignItems="end">
        <Button
          variant="contained"
          onClick={handleOpen}
          className={classes.buttonAdd}
        >
          {t("admin.Equipes.createNewEquipes")}
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <IconButton color="secondary" aria-label="add an alarm">
          <CancelPresentationSharpIcon
            className={classes.buttonCancel}
            onClick={handleClose}
          />
        </IconButton>
        <DialogTitle>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            className={classes.titModal}
          >
            {t("admin.Equipes.createNewEquipes")}
          </Typography>
        </DialogTitle>
        <Container>
          <Grid container rowSpacing={10} className={classes.grid}>
            <Grid item xs={12} sm={4} md={4}>
              <Stack spacing={2}>
                <TextField
                  className={classes.textField}
                  id="filled-basic"
                  label={t("admin.Equipes.equipeName")}
                  variant="outlined"
                  name="name"
                  error={
                    formErrors.name && formErrors.name !== "" ? true : false
                  }
                  onChange={handleChange}
                  value={formValues.name}
                />
                {formErrors.name && formErrors.name !== "" ? (
                  <Typography color="error" variant="caption">
                    {formErrors.name}
                  </Typography>
                ) : (
                  <></>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Stack spacing={0.5} className={classes.stackSelect}>
                <CountrySelect
                  setFormValues={setFormValues}
                  formValues={formValues}
                  isReset={isReset}
                  setSelectedCountry={setSelectedCountry}
                />
                {showContryError && (
                  <Typography
                    color="error"
                    variant="caption"
                    style={{ marginRight: "auto" }}
                  >
                    {/* Champs obligatoire */}
                    test
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>

          <Grid
            rowSpacing={90}
            item
            xs={8}
            sm={4}
            md={4}
            className={classes.gridImg}
          >
            <Stack direction="column" alignItems="center" spacing={2}>
              <Box
                component="img"
                src={preview ? preview : defaultImage}
                alt="event image"
                className={classes.eventImage}
              />
              {showImageError && (
                <Typography color="error" variant="caption">
                  {t("admin.Events.ErrorImage")}
                </Typography>
              )}
              <input
                name="image"
                hidden
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={(e) => setImageFunction(e)}
              />
              <Button
                startIcon={<AddAPhotoIcon />}
                variant="contained"
                onClick={(e) => selectPicture(e)}
                className={classes.addPicture}
              >
                {t("admin.Events.selectPicture")}
              </Button>
            </Stack>
          </Grid>
          <Stack direction="row" className={classes.stackButton}>
            <Button
              variant="outlined"
              className={classes.buttonClose}
              type="reset"
              onClick={handleClose}
            >
              {t("admin.Categories.cancel")}
            </Button>
            <Button variant="contained" type="submit" onClick={handelsubmit}>
              {t("admin.Categories.save")}
            </Button>
          </Stack>
        </Container>
        {/* </Grid> */}
      </Dialog>
    </Container>
  );
}
