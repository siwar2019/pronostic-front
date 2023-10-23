import { Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { useStyles } from "../../../styles/common/auth/registerStyles";
import { Stack } from "@mui/system";
// import TabCommercial from "./tablecommercial";
// import { createCommercial, getAllCommercial } from "../../../../_redux/actions/users";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useStyles } from "../../styles/common/auth/registerStyles";
import { createPartnerByCommecial, getPartnerCommercial } from "../../../_redux/actions/users";
import TabPartnerCommercial from "./tabPartnerComer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function AddPartnerCommer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const initialValues = {
    socialReason: "",
    email: "",
    phone: "",
    employeeNumber: "",
    
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    socialReason: "",
    email: "",
    phone: "",
    employeeNumber: "",
 
  };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formValues.employeeNumber = employeeNumberSelect;
    const validateErrors = validate();

    if (validateErrors) {
       dispatch(createPartnerByCommecial(formValues));
    }
    handleClose();
    setTimeout(() => {
       dispatch(getPartnerCommercial())
    }, 500);
  };

  useEffect(() => {}, [formErrors, formValues]);

  const validate = () => {
    let errors: any = {};
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneValidator = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*\d{6}$/;
    const passwordValidator =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (!formValues.socialReason) {
      errors.socialReason = t("client.login.REQUIRED_SOCIALREASON");
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

    if (!formValues.employeeNumber) {
      errors.employeeNumber = t("client.login.REQUIRED_EMPLOYEENUMBER");
    }

    setFormErrors(errors);
    if (errors.socialReason) return false;
    if (errors.email) return false;
    if (errors.phone) return false;
    if (errors.employeeNumber) return false;
    return true;
  };

  const [employeeNumberSelect, setEmployeeNumberSelect] = useState("");

  const SelectChangeEvent = (event: SelectChangeEvent) => {
    setEmployeeNumberSelect(event.target.value);
  };

  return (
    <Container>
      <Button
        style={{
          background: "-webkit-linear-gradient(left, #2192ff, #135799)",
          color: "white",
          textTransform: "capitalize",
        }}
        onClick={handleOpen}
        sx={{ mt: 4 }}
      >
        ajouter un partner
      </Button>
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
              // direction="column"
            >
              <Stack
                component="form"
                noValidate
                autoComplete="off"
                spacing={2.5}
              >
                <Stack spacing={0.5}>
                  <TextField
                    name="socialReason"
                    type="text"
                    variant="outlined"
                    placeholder={t("client.login.register")}
                    value={formValues.socialReason}
                    onChange={handleChange}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.noBorder,
                      },
                      className: classes.registerTextField,
                    }}
                  />
                  {formErrors.socialReason && (
                    <Typography
                      color="error"
                      className={classes.errorMessage}
                      variant="caption"
                    >
                      {formErrors.socialReason}
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
                <Stack>
              <Select
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Typography>
                      {value !== "" ? (
                        value
                      ) : (
                        <span className={classes.placeholderColor}>
                          {t("client.login.numberOfEmployees")}
                        </span>
                      )}
                    </Typography>
                  );
                }}
                value={employeeNumberSelect}
                onChange={SelectChangeEvent}
                className={classes.registerSelect}
              >
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"20"}>20</MenuItem>
                <MenuItem value={"50"}>50</MenuItem>
                <MenuItem value={"9999"}>9999</MenuItem>
              </Select>
              {formErrors.employeeNumber && (
                <Typography
                  color="error"
                  className={classes.errorMessage}
                  variant="caption"
                >
                  {formErrors.employeeNumber}
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
                  {/* {t("client.login.register")} */}
                  Ajouter
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <div style={{ marginTop: "20px" }}>
        <TabPartnerCommercial/>
        </div>
    </Container>
  );
}

export default AddPartnerCommer;
