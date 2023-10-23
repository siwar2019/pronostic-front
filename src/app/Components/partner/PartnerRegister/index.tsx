import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { partnerSingnUp } from "../../../../_redux/actions/auth";
import { Button, Stack, TextField, Typography, Box, Grid } from "@mui/material";
import { useStyles } from "../../../styles/common/auth/registerStyles";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import img from "../../../assets/imgLabel.png";
import logo from "../../../assets/logo-login.png";
import { useTranslation } from "react-i18next";

const InscriptionPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const initialValues = {
    socialReason: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    employeeNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = {
    socialReason: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
      dispatch(partnerSingnUp({ value: formValues, navigate }));
    }
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

    if (!formValues.password) {
      errors.password = t("client.login.REQUIRED_PASSWORD");
    } else if (!passwordValidator.test(formValues.password)) {
      errors.password = t("client.login.ERROR_REGEX_PASSWORD");
    } else if (
      formValues.confirmPassword &&
      formValues.password !== formValues.confirmPassword
    ) {
      errors.password = t("client.login.CONFIRM_PASSWORD");
    }

    if (!formValues.confirmPassword) {
      errors.confirmPassword = t("client.login.CONFIRM_PASSWORD");
    } else if (!passwordValidator.test(formValues.confirmPassword)) {
      errors.confirmPassword = t("client.login.REGEX_CONFIRM_PASSWORD");
    } else if (
      formValues.confirmPassword &&
      formValues.password !== formValues.confirmPassword
    ) {
      errors.confirmPassword = t("client.login.REGEX_CONFIRM_PASSWORD");
    }

    if (!formValues.employeeNumber) {
      errors.employeeNumber = t("client.login.REQUIRED_EMPLOYEENUMBER");
    }

    setFormErrors(errors);
    if (errors.socialReason) return false;
    if (errors.email) return false;
    if (errors.phone) return false;
    if (errors.password) return false;
    if (errors.confirmPassword) return false;
    if (errors.employeeNumber) return false;
    return true;
  };

  const [employeeNumberSelect, setEmployeeNumberSelect] = useState("");

  const SelectChangeEvent = (event: SelectChangeEvent) => {
    setEmployeeNumberSelect(event.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid item md={6} display={{ xs: "none", md: "flex" }}>
          <Box className={classes.registerImage} />
          <Box
            component="img"
            alt=""
            src={img}
            className={classes.ImageLabel}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.form} direction="column">
          <Stack
            spacing={2.5}
            alignItems="center"
            className={classes.formHeader}
          >
            <Box
              component="img"
              src={logo}
              alt=""
              className={classes.formHeaderImage}
            />
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              className={classes.formHeaderLabel}
            >
              {t("client.login.register")}
            </Typography>
          </Stack>
          <Stack component="form" noValidate autoComplete="off" spacing={2.5}>
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

            <Stack spacing={0.5}>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                placeholder={t("client.login.password")}
                value={formValues.password}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.noBorder,
                  },
                  className: classes.registerTextField,
                }}
              />
              {formErrors.password && (
                <Typography
                  color="error"
                  className={classes.errorMessage}
                  variant="caption"
                >
                  {formErrors.password}
                </Typography>
              )}
            </Stack>
            <Stack spacing={0.5}>
              <TextField
                name="confirmPassword"
                type="password"
                variant="outlined"
                placeholder={t("client.login.confirmPassword")}
                value={formValues.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.noBorder,
                  },
                  className: classes.registerTextField,
                }}
              />
              {formErrors.confirmPassword && (
                <Typography
                  color="error"
                  className={classes.errorMessage}
                  variant="caption"
                >
                  {formErrors.confirmPassword}
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
              {t("client.login.register")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
export default InscriptionPage;
