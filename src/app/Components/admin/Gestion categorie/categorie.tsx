import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import { TableCategorie } from "../Gestion categorie/tableCategorie";
import {
  createCategorie,
  getAllCategories,
} from "../../../../_redux/actions/categories";
import { useEffect, useState } from "react";
import { ETranslateFR } from "../../../utils/translate/fr/translateFr.enum";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as Muicon from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sportsIcons = [
  { key: 1, icon: "SportsSoccer" },
  { key: 2, icon: "SportsBaseball" },
  { key: 3, icon: "SportsBasketball" },
  { key: 4, icon: "SportsCricket" },
  { key: 5, icon: "SportsFootball" },
  { key: 6, icon: "SportsGolf" },
  { key: 8, icon: "SportsHandball" },
  { key: 9, icon: "SportsHockey" },
  { key: 10, icon: "SportsKabaddi" },
  { key: 12, icon: "SportsMma" },
  { key: 14, icon: "SportsRugby" },
  { key: 15, icon: "SportsSoccer" },
  { key: 16, icon: "SportsTennis" },
  { key: 17, icon: "SportsVolleyball" },
  { key: 18, icon: "DirectionsBike" },
];

export default function AddNewCategorie() {
  const initialValues = { description: "", name: "", sport_icon: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = { description: "", name: "", sport_icon: "" };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  const validate = () => {
    let errors: any = {};
    if (!formValues.description) {
      errors.description = ETranslateFR.REQUIRED;
    }
    if (!formValues.name) {
      errors.name = ETranslateFR.REQUIRED;
    }

    if (!formValues.sport_icon) {
      errors.sport_icon = ETranslateFR.REQUIRED;
    }

    setFormErrors(errors);
    if (errors.description) return false;
    if (errors.name) return false;
    if (errors.sport_icon) return false;
    return true;
  };
  const handleChange = async (e: any) => {
    let { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handelsubmit = (e: any) => {
    e.preventDefault();
    formValues.sport_icon = icon;
    const validateErrors = validate();

    if (validateErrors) {
      dispatch(createCategorie(formValues));
      setFormValues(initialValues);
      setIcon("");
      setTimeout(() => dispatch(getAllCategories()), 600);
    }
    setFormValues(initialValues);
  };

  const [icon, setIcon] = useState("");
  let selectHandlChange = (event: SelectChangeEvent<typeof icon>) => {
    const {
      target: { value },
    } = event;
    setIcon(value);
  };

  const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName />;
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Container sx={{ mt: 6 }}>
      <Box style={{ marginTop: "30px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{direction:lang ==="ar"?"rtl":"ltr"}}
          >
            <Typography>{t("admin.Categories.createNewCategories")}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              direction:lang ==="ar"?"rtl":"ltr"
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={4} md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    id="filled-basic"
                    label={t("admin.Categories.description")}
                    variant="filled"
                    name="description"
                    error={
                      formErrors.description && formErrors.description !== ""
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    value={formValues.description}
                  />
                  {formErrors.description && formErrors.description !== "" ? (
                    <Typography color="error" variant="caption">
                      {formErrors.description}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}  md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    id="filled-basic"
                    label={t("admin.Categories.categorieName")}
                    variant="filled"
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
              <Grid item xs={12} sm={4}  md={4}>
                <Stack spacing={0.5}>
                  <FormControl>
                    <InputLabel id="demo-multiple-checkbox-label">
                      {t("admin.Categories.icon")}
                    </InputLabel>
                    <Select
                      variant="filled"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      value={icon}
                      onChange={selectHandlChange}
                      input={<OutlinedInput label="Icon" />}
                      renderValue={(selected) => selected}
                      MenuProps={MenuProps}
                    >
                      {sportsIcons.map((sportIcon) => (
                        <MenuItem key={sportIcon.key} value={sportIcon.icon}>
                          <>{GenerateIcon(sportIcon.icon)} </>
                          <ListItemText primary={sportIcon.icon} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {formErrors.sport_icon && formErrors.sport_icon !== "" ? (
                    <Typography color="error" variant="caption">
                      {formErrors.sport_icon}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Stack spacing={0.5}>
                  <Button
                    style={{
                      color: "black",
                      background: "#2185d0",
                      marginTop: "20px",
                      margin: "auto",
                      width: "50%",
                    }}
                    // variant="contained"
                    type="submit"
                    onClick={handelsubmit}
                  >
                    {t("admin.Categories.save")}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{direction:lang ==="ar"?"rtl":"ltr"}}
          >
            <Typography>{t("admin.Categories.categoriesList")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableCategorie />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
