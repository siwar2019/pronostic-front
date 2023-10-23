/* eslint-disable react/jsx-no-undef */
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Grid,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import { useStyles } from "../../../styles/common/auth/registerStyles";
import { Stack } from "@mui/system";
import TabCommercial from "./tablecommercial";
import {
  createCommercial,
  createUsersPrice,
  getAllCommercial,
  getPriceUsersForAdmin,
  UpdatePriceUsersForAdmin,
} from "../../../../_redux/actions/users";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListRequest from "../Gestion commercial/listRequestCachout";
import PdfFile from "../Gestion commercial/PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
// eslint-disable-next-line react-hooks/rules-of-hooks


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Commercial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    commissionRate: "",
    cashOut: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    firstName: "",
    email: "",
    phone: "",
    commissionRate: "",
    cashOut: "",
  };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SelectChangeEvent = (event: SelectChangeEvent) => {
    setEmployeeNumberSelect(event.target.value);
  };

  const [price, setPrice] = useState("");
  const [disabledAdd, setdisabledAdd] = useState<boolean>(false);
  const settings = useAppSelector(({ usersSlice: { settings } }) => settings);
  const classes = useStyles();

  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validateErrors = validate();

    if (validateErrors) {
      dispatch(createCommercial(formValues));
    }
    handleClose();
    setTimeout(() => {
      dispatch(getAllCommercial());
    }, 500);
  };

  useEffect(() => {}, [formErrors, formValues]);

  const validate = () => {
    let errors: any = {};
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneValidator = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*\d{6}$/;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const passwordValidator =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (!formValues.firstName) {
      errors.firstName = t("client.login.REQUIRED_NAME");
    }

    if (!formValues.email) {
      errors.email = t("client.login.REQUIRED_EMAIL");
    } else if (!emailValidator.test(formValues.email)) {
      errors.email = t("client.login.ERROR_REGEX_EMAIL");
    }

    if (!formValues.phone) {
      errors.phone = t("client.login.REQUIRED_PHONE");
    } else if (!phoneValidator.test(formValues.phone)) {
      errors.phone = t("client.login.ERROR_PHONE_VALIDATION");
    }
    if (!formValues.commissionRate) {
      errors.commissionRate = t("client.login.REQUIRED_COMISSION");
    }

    if (!formValues.cashOut) {
      errors.cashOut = t("client.login.REQUIRED_CASHOUT");
    }

    setFormErrors(errors);
    if (errors.firstName) return false;
    if (errors.email) return false;
    if (errors.phone) return false;
    if (errors.commissionRate) return false;
    if (errors.cashOut) return false;

    return true;
  };

  const [employeeNumberSelect, setEmployeeNumberSelect] = useState("");

  useEffect(() => {
    dispatch(getPriceUsersForAdmin());
    setPrice(settings?.prixUsers);
  }, [dispatch, settings?.prixUsers]);

  const handleChangePrice = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPrice(event.target.value);
  };

  const addPriceUsers = () => {
    dispatch(
      createUsersPrice({
        prixUsers: price,
      })
    );
    setdisabledAdd(true);
    setPrice("");
    setTimeout(() => {
      dispatch(getPriceUsersForAdmin());
    }, 500);
  };

  const UpdatePriceUsers = () => {
    dispatch(
      UpdatePriceUsersForAdmin({
        id: settings?.id,
        prixUsers: price,
      })
    );
    setPrice("");
  };

  return (
    <>
      {/* <PDFDownloadLink document = {<PdfFile/>} fileName="FORM">
   {({loading}) =>(loading? <Button variant="contained">loading document...</Button> : 'Donowload' )}
   </PDFDownloadLink> */}

      <Container>
        <Box style={{ background: "" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            >
              <Typography> {t("admin.commercial.settings")}</Typography>
            </AccordionSummary>
            <Grid container spacing={2} style={{ direction: lang === "ar" ? "rtl" : "ltr" }} >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                md={4}
              >
                <Typography style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  {t("admin.commercial.settingsUsers")}
                </Typography>
              </Grid>
              <Grid xs={12} md={4} style={{ padding: " 10px" }}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    label="Prix User"
                    type="number"
                    name="prixUsers"
                    value={price}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        style: {
                          textAlign: "center",
                          backgroundColor: "#eef2f8",
                        },
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangePrice}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    {!settings?.prixUsers ? (
                      <Button
                        variant="contained"
                        onClick={addPriceUsers}
                        disabled={disabledAdd}
                      >
                        {" "}
                        {t("admin.commercial.create")}
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={UpdatePriceUsers}>
                        {t("admin.commercial.update")}
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Grid>
              <Grid xs={12} md={4} style={{ display: "block", margin: "auto" }}>
                <Button
                  style={{
                    background:
                      "-webkit-linear-gradient(left, #2192ff, #135799)",
                    color: "white",
                    textTransform: "capitalize",
                    display: "flex",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  {settings?.prixUsers}
                </Button>
              </Grid>
            </Grid>
          </Accordion>
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <ListRequest />
        </Box>
<Grid style={{ direction: lang === "ar" ? "rtl" : "ltr" }}> 
  <Button
          style={{
            background: "-webkit-linear-gradient(left, #2192ff, #135799)",
            color: "white",
            textTransform: "capitalize",
          }}
          onClick={handleOpen}
          sx={{ mt: 4 }}
        >
          {t("admin.commercial.addCommercial")}
        </Button>
        </Grid>
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                //  className={classes.form}
                direction="column"
              >
                <Stack
                  component="form"
                  noValidate
                  autoComplete="off"
                  spacing={2.5}
                >
                  <Stack spacing={0.5}>
                    <TextField
                      name="firstName"
                      type="text"
                      variant="outlined"
                      placeholder="Nom"
                      value={formValues.firstName}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.noBorder,
                        },
                        className: classes.registerTextField,
                      }}
                    />
                    {formErrors.firstName && (
                      <Typography
                        color="error"
                        className={classes.errorMessage}
                        variant="caption"
                      >
                        {formErrors.firstName}
                      </Typography>
                    )}
                  </Stack>
                  <Stack spacing={0.5}>
                    <TextField
                      name="email"
                      type="email"
                      variant="outlined"
                      placeholder={t("client.login.email")}
                      value={formValues.email}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.noBorder,
                        },
                        className: classes.registerTextField,
                      }}
                    />
                    {formErrors.email && (
                      <Typography
                        color="error"
                        className={classes.errorMessage}
                        variant="caption"
                      >
                        {formErrors.email}
                      </Typography>
                    )}
                  </Stack>
                  <Stack spacing={0.5}>
                    <TextField
                      name="phone"
                      type="text"
                      variant="outlined"
                      placeholder={t("client.login.phoneNumber")}
                      value={formValues.phone}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.noBorder,
                        },
                        className: classes.registerTextField,
                      }}
                    />
                    {formErrors.phone && (
                      <Typography
                        color="error"
                        className={classes.errorMessage}
                        variant="caption"
                      >
                        {formErrors.phone}
                      </Typography>
                    )}
                  </Stack>
                  <Stack spacing={0.5}>
                    <TextField
                      name="commissionRate"
                      type="email"
                      variant="outlined"
                      placeholder="Tax de commision %"
                      value={formValues.commissionRate}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.noBorder,
                        },
                        className: classes.registerTextField,
                      }}
                    />
                    {formErrors.commissionRate && (
                      <Typography
                        color="error"
                        className={classes.errorMessage}
                        variant="caption"
                      >
                        {formErrors.commissionRate}
                      </Typography>
                    )}
                  </Stack>
                  <Stack spacing={0.5}>
                    <TextField
                      name="cashOut"
                      type="email"
                      variant="outlined"
                      placeholder="Cash-out"
                      value={formValues.cashOut}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.noBorder,
                        },
                        className: classes.registerTextField,
                      }}
                    />
                    {formErrors.cashOut && (
                      <Typography
                        color="error"
                        className={classes.errorMessage}
                        variant="caption"
                      >
                        {formErrors.cashOut}
                      </Typography>
                    )}
                  </Stack>

                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    sx={{ fontWeight: "bold" }}
                    className={classes.formAction}
                  >
                    {t("admin.commercial.save")}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Modal>
        <div style={{ marginTop: "20px" }}>
          <TabCommercial />
        </div>
      </Container>
    </>
  );
}

export default Commercial;
