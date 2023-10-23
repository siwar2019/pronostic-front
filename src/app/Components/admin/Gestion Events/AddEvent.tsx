import { useState, useRef, Key } from "react";
import {
  Typography,
  Stack,
  Container,
  FormControlLabel,
  Box,
} from "@mui/material";
import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useEffect } from "react";
import { ETranslateFR } from "../../../utils/translate/fr/translateFr.enum";
import { TextField, Button, MenuItem } from "@material-ui/core";
import { getAllCategories } from "../../../../_redux/actions/categories";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Swal from "sweetalert2";
import { setEventAdded } from "../../../../_redux/reducers/events";
import { createEvent } from "../../../../_redux/actions/events";
import * as Muicon from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useStyles } from "../../../styles/admin/events/addEventStyles";

const AddNewEvent = () => {
  const initialValues = {
    name: "",
    categoryId: "",
    displayQualification: false,
    qualificationType: "",
    description: "",
    displayOrder: false,
  };
  const initialValuesErrors = {
    name: "",
    categoryId: "",
    qualificationType: "",
    description: "",
  };

  const classes = useStyles();
  const qualificationTypes = ["4", "8", "16", "24", "32"];
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [displayQualification, setDisplayQualification] = useState(false);
  const [displayErrorTypeQualification, setDisplayErrorTypeQualification] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [qualificationType, setQualificationType] = useState("");
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [showImageError, setShowImageError] = useState(false);
  const [descriptionLengthError, setDescriptionLengthError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>();
  const [displayOrder, setDisplayOrder] = useState(false);

  const validate = () => {
    let errors: any = {};
    if (!formValues.name) {
      errors.name = ETranslateFR.REQUIRED;
    }
    if (!formValues.categoryId) {
      errors.categoryId = ETranslateFR.REQUIRED;
    }
    if (!formValues.qualificationType && displayErrorTypeQualification) {
      errors.qualificationType = ETranslateFR.REQUIRED;
    }
    if (!formValues.description) {
      errors.description = ETranslateFR.REQUIRED;
    }

    setFormErrors(errors);
    if (errors.name) return false;
    if (errors.categoryId) return false;
    if (errors.qualificationType) return false;
    if (errors.description) return false;
    return true;
  };

  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayQualification(event.target.checked);
    setDisplayErrorTypeQualification(event.target.checked);
    setQualificationType("");
  };

  const handleChangeCheckboxOrder = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisplayOrder(event.target.checked);
  };

  let categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getAllCategories());
    }
  }, [categories.length, dispatch, formErrors, formValues]);

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
    if (formValues.description.length === 400) setDescriptionLengthError(true);
    else setDescriptionLengthError(false);
  }, [image, formValues.description]);

  const defaultImage =
    "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png";

  const SelectChangeEvent = (name: SelectChangeEvent) => {
    setSelectedCategory(name.target.value);
  };

  const SelectChangeEventQualificationType = (name: SelectChangeEvent) => {
    setQualificationType(name.target.value);
    setDisplayErrorTypeQualification(false);
  };

  const GenerateIcon = (variation: string, props = {}) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName {...props} />;
  };
  const renderItems = (item: any, index: Key) => (
    <MenuItem value={item.name} key={index}>
      {" "}
      {GenerateIcon(item.sport_icon)}
      {item.name}
    </MenuItem>
  );
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

  let isAdded = useSelector(
    (state: RootState) => state.categoriesSlice.eventAdded
  );

  let message = useSelector(
    (state: RootState) => state.categoriesSlice.message
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    categories.map((category) => {
      if (category.name === selectedCategory) {
        formValues.categoryId = category.id;
      }
      return formValues.categoryId;
    });

    qualificationTypes.map((type) => {
      if (type === qualificationType) {
        formValues.qualificationType = type;
      }
      return formValues.qualificationType;
    });

    formValues.displayQualification = displayQualification;

    formValues.displayOrder = displayOrder;

    const data = new FormData();
    const validateErrors = validate();
    if (validateErrors && image !== undefined) {
      data.append("name", formValues.name);
      data.append("categoryId", formValues.categoryId);
      data.append(
        "displayQualification",
        JSON.stringify(formValues.displayQualification)
      );
      data.append("qualificationType", formValues.qualificationType);
      data.append("description", formValues.description);
      data.append("file", image);
      data.append("displayOrder", JSON.stringify(formValues.displayOrder));
      dispatch(createEvent(data));
    } else setShowImageError(true);
  };
  if (isAdded === 1) {
    Swal.fire({
      icon: "success",
      title: "Événement créé avec succès",
      text: message,
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setEventAdded(0));
    setFormValues(initialValues);
    setSelectedCategory("");
    setDisplayQualification(false);
    setQualificationType("");
    setPreview(defaultImage);
    setImage(undefined);
  } else if (isAdded === -1) {
    Swal.fire({
      icon: "error",
      title: "échec de création",
      text: message,
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setEventAdded(0));
  }

  return (
    <Container>
      <Stack
        component="form"
        noValidate
        autoComplete="off"
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="column" alignItems="center" spacing={2}>
          <Box
            component="img"
            src={preview ? preview : defaultImage}
            alt="event image"
            className={classes.eventImage}
          />
          {showImageError && (
            <Typography
              color="error"
              variant="caption"
              style={{ marginRight: "auto" }}
            >
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
            className={classes.addPicture}
            onClick={(e) => selectPicture(e)}
          >
            {t("admin.Events.selectPicture")}
          </Button>
        </Stack>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Stack direction="column" spacing={3}>
            <Stack spacing={0.5}>
              <TextField
                className={classes.inputFields}
                size="small"
                color="primary"
                variant="outlined"
                name="name"
                type="text"
                placeholder={t("admin.Events.eventName")}
                value={formValues.name}
                onChange={handleChange}
                error={formErrors.name && formErrors.name !== "" ? true : false}
              />
              {formErrors.name && formErrors.name !== "" ? (
                <Typography color="error" variant="caption">
                  {formErrors.name}
                </Typography>
              ) : (
                <></>
              )}
            </Stack>
            <Stack>
              <Select
                className={classes.inputFields}
                size="small"
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Typography>
                      {value !== "" ? (
                        value
                      ) : (
                        <span style={{ color: "rgba(0, 0, 0, 0.35)" }}>
                          {t("admin.Events.categories")}
                        </span>
                      )}
                    </Typography>
                  );
                }}
                value={selectedCategory}
                onChange={SelectChangeEvent}
                error={
                  formErrors.categoryId && formErrors.categoryId !== ""
                    ? true
                    : false
                }
              >
                {categories.map((el, index) => {
                  return renderItems(el, index);
                })}
              </Select>

              {formErrors.categoryId && (
                <Typography color="error" variant="caption">
                  {formErrors.categoryId}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction={{ xs: "column-reverse", md: "column" }} spacing={3}>
            {" "}
            <FormControlLabel
              control={
                <Checkbox
                  checked={displayQualification}
                  onChange={handleChangeCheckbox}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={t("admin.Events.qualification")}
            />
            <Stack>
              <Select
                disabled={!displayQualification}
                className={classes.inputFields}
                size="small"
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Typography>
                      {value !== "" ? (
                        value
                      ) : (
                        <span style={{ color: "rgba(0, 0, 0, 0.35)" }}>
                          {t("admin.Events.qualificationType")}
                        </span>
                      )}
                    </Typography>
                  );
                }}
                value={qualificationType}
                onChange={SelectChangeEventQualificationType}
                error={
                  formErrors.qualificationType &&
                  formErrors.qualificationType !== ""
                    ? true
                    : false
                }
              >
                {qualificationTypes.map((el, index) => (
                  <MenuItem value={el} key={index}>
                    {el}
                  </MenuItem>
                ))}
              </Select>

              {formErrors.qualificationType && (
                <Typography color="error" variant="caption">
                  {formErrors.qualificationType}
                </Typography>
              )}
            </Stack>{" "}
          </Stack>
        </Stack>{" "}
        <FormControlLabel
          control={
            <Checkbox
              checked={displayOrder}
              onChange={handleChangeCheckboxOrder}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={t("admin.Events.displayOrder")}
        />
        <Stack spacing={0.5}>
          <TextField
            minRows={8}
            inputProps={{
              maxLength: "400",
            }}
            multiline
            className={classes.descriptionInput}
            size="small"
            color="primary"
            variant="outlined"
            name="description"
            type="text"
            placeholder={t("admin.Events.description")}
            value={formValues.description}
            onChange={handleChange}
            error={
              formErrors.description && formErrors.description !== ""
                ? true
                : false
            }
          />
          {formErrors.description && formErrors.description !== "" ? (
            <Typography color="error" variant="caption">
              {formErrors.description}
            </Typography>
          ) : descriptionLengthError ? (
            <Typography color="error" variant="caption">
              {t("admin.Events.maxLengthDescription")}
            </Typography>
          ) : null}
        </Stack>
        <Button
          endIcon={<SendIcon />}
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          className={classes.submitButton}
        >
          {t("admin.Categories.save")}
        </Button>
      </Stack>
    </Container>
  );
};

export default AddNewEvent;
