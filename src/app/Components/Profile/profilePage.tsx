import React, { useEffect, useState } from "react";
import { useStyles } from "./profilePageStyle";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LockIcon from "@mui/icons-material/Lock";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import GroupsIcon from "@mui/icons-material/Groups";
import { getAllEmployee, getCompany } from "../../../_redux/actions/users";
import { useNavigate } from "react-router-dom";
import { ETranslateFR } from "../../utils/translate/fr/translateFr.enum";
import { updatePwd } from "../../../_redux/actions/auth";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(
    ({ auth: { currentUser } }) => currentUser
  );
  const company = useAppSelector(({ usersSlice: { company } }) => company);
  const { employees } = useAppSelector((state) => state.usersSlice);
  useEffect(() => {
    {
      currentUser?.role === "partner" && dispatch(getAllEmployee());
    }
    dispatch(getCompany());
  }, [dispatch]);
  console.log("object");
  const navigate = useNavigate();
  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const initialValuesErrors = { oldPassword: "", newPassword: "" };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);
  const validate = () => {
    let errors: any = {};

    if (!formValues.oldPassword || !formValues.newPassword) {
      errors.password = ETranslateFR.REQUIRED_PASSWORD;
    }
    setFormErrors(errors);
    if (errors.oldPassword) return false;
    // if (errors.password) return false;n
    return true;
  };

  const handleChange = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validateErrors = validate();
    if (validateErrors) {
      dispatch(updatePwd({ value: formValues, navigate }));
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ mt: 8 }}>
      {company && (
        <Paper
          elevation={4}
          sx={{
            minHeight: "50vh",
            minWidth: "10vh",
            maxWidth: "100vh",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2%",
          }}
        >
          <div
            style={{
              lineHeight: "60px",
              color: "#fff",
              borderRadius: "15px 15px 0 0",
              padding: "0 20px",
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
          >
            {t("Profile.profileInformation")}
          </div>
          <Grid
            container
            spacing={1}
            sx={{ justifyContent: "center", ml: "5px" }}
          >
            <Grid className={classes.informations} item md={3} xs={6}>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <EmailIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span>{t("Profile.email")} :</span>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginRight: "25px",
                  }}
                >
                  <ApartmentIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span>{t("Profile.socialReason")} :</span>
                </div>
              </Grid>
              <Grid>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginRight: "25px",
                  }}
                >
                  <PhoneIphoneIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span>{t("Profile.phone")} :</span>
                </div>
              </Grid>
              {currentUser?.role === "partner" && (
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginRight: "25px",
                    }}
                  >
                    <GroupsIcon
                      style={{
                        marginRight: "5px",
                      }}
                    />
                    <span>{t("Profile.employees")} :</span>
                  </div>
                </Grid>
              )}
            </Grid>
            <Grid className={classes.informations2} md={8} item xs={6}>
              <Grid>{currentUser.email}</Grid>
              <Grid>{company.social_reason}</Grid>
              <Grid>{company.phone}</Grid>
              {currentUser?.role === "partner" && (
                <Grid>
                  {employees.length}/{company && company.employee_number}
                </Grid>
              )}
            </Grid>
          </Grid>
          <div
            style={{
              lineHeight: "60px",
              color: "#fff",
              padding: "0 20px",
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
              background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
            }}
          >
            {t("Profile.changePassword")}
          </div>
          <Grid
            container
            spacing={0}
            sx={{ justifyContent: "center", ml: "5px" }}
          >
            <Grid className={classes.informations} item md={3} xs={7}>
              <Grid sx={{ mb: 5 }} item xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginRight: "25px",
                  }}
                >
                  <LockIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span>{t("Profile.currentPassword")} :</span>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginRight: "25px",
                  }}
                >
                  <LockResetIcon
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <span>{t("Profile.newPassword")} :</span>
                </div>
              </Grid>
            </Grid>
            <Grid className={classes.informations2} item md={8} xs={5}>
              <Grid>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <TextField
                    id="outlined-adornment-password"
                    type="password"
                    name="oldPassword"
                    value={formValues.oldPassword}
                    sx={{ mb: 1 }}
                    onChange={handleChange}
                    error={
                      formErrors.oldPassword && formErrors.oldPassword !== ""
                        ? true
                        : false
                    }
                    label={t("Profile.currentPassword")}
                  />
                  {formErrors.oldPassword && formErrors.oldPassword !== "" ? (
                    <Typography color="error" variant="caption">
                      {formErrors.oldPassword}{" "}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </Grid>
              <Grid>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <TextField
                    id="outlined-adornment-password"
                    type="password"
                    name="newPassword"
                    value={formValues.newPassword}
                    sx={{ mb: 3 }}
                    onChange={handleChange}
                    error={
                      formErrors.newPassword && formErrors.newPassword !== ""
                        ? true
                        : false
                    }
                    label={t("Profile.newPassword")}
                  />
                  {formErrors.newPassword && formErrors.newPassword !== "" ? (
                    <Typography color="error" variant="caption">
                      {formErrors.newPassword}{" "}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </Grid>
              <Button
                className={classes.buttonSubmitUpdatePwd}
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{ fontWeight: "bold", borderRadius: "40px" }}
              >
                {t("Profile.send")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

export default ProfilePage;
