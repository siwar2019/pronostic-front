import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { userLogin } from "../../../_redux/actions/auth";
import {
    Box,
    Button,
    Container,
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from "@mui/material";
import { useStyles } from "../../styles/common/auth/loginStyles";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import img from "../../assets/LOGIN.png";
import logo from "../../assets/logo-login.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const navigate = useNavigate();

    const handleChange = async (e: any) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(userLogin({ value: formValues, navigate }));
    };

    const { t } = useTranslation();

    return (
        <Box className={classes.loginRoot}>
            <Container className={classes.loginContainer}>
                <Paper className={classes.paper} elevation={24} square>
                    <Link to="/">
                        <ArrowBackIcon
                            color="secondary"
                            fontSize="large"
                            className={classes.backIcon}
                        />
                    </Link>
                    <Grid container justifyContent="center">
                        <Grid item sm={6}>
                            <Box
                                component="img"
                                src={img}
                                className={classes.authImages}
                                sx={{
                                    display: { xs: "none", sm: "flex" },
                                }}
                            />
                        </Grid>

                        <Grid item xs={11} sm={6} className={classes.form}>
                            <Stack
                                spacing={2}
                                alignItems="center"
                                className={classes.formHeader}
                                mt={2}
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
                                    {t("client.login.login")}
                                </Typography>
                            </Stack>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                className={classes.formContent}
                            >
                                <Stack spacing={1}>
                                    <TextField
                                        variant="outlined"
                                        name="email"
                                        type="email"
                                        placeholder={t(
                                            "client.login.email"
                                        )}
                                        value={formValues.email}
                                        onChange={handleChange}
                                        InputProps={{
                                            classes: {
                                                notchedOutline:
                                                    classes.noBorder,
                                            },
                                            className: classes.loginTextField,
                                            startAdornment: (
                                                <InputAdornment
                                                    className={
                                                        classes.TextFieldIcons
                                                    }
                                                    position="start"
                                                >
                                                    <PersonIcon
                                                        color="secondary"
                                                        fontSize="large"
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        variant="outlined"
                                        name="password"
                                        type="password"
                                        placeholder={t(
                                            "client.login.password"
                                        )}
                                        value={formValues.password}
                                        onChange={handleChange}
                                        InputProps={{
                                            classes: {
                                                notchedOutline:
                                                    classes.noBorder,
                                            },
                                            className: classes.loginTextField,
                                            startAdornment: (
                                                <InputAdornment
                                                    className={
                                                        classes.TextFieldIcons
                                                    }
                                                    position="start"
                                                >
                                                    <LockIcon
                                                        color="secondary"
                                                        fontSize="large"
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Stack>
                                <Button
                                    className={classes.formAction}
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    onClick={handleSubmit}
                                    style={{ fontWeight: "bold" }}
                                >
                                    {t("client.login.login")}
                                </Button>{" "}
                            </Box>{" "}
                            <Link
                                to="/forgotPassword"
                                className={classes.forgotPasswordLink}
                                style={{ fontWeight: "bold" }}
                            >
                                {t("client.login.forgotPassword")}
                            </Link>
                            <Link
                                className={classes.buttonInscription}
                                to="/register"
                                style={{ fontWeight: "bold" }}
                            >
                                {t("client.login.register")}
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};
export default LoginPage;
