import React, {  useState } from "react";
import { useStyles } from "../../Components/Profile/profilePageStyle";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { blue } from "@mui/material/colors";
import { ETranslateFR } from "../../utils/translate/fr/translateFr.enum";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../_redux/actions/auth";

function ForgotPassword() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const initialValues = { email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const initialValuesErrors = { email: "", password: "" };
    const [formErrors, setFormErrors] = useState(initialValuesErrors);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const validate = () => {
        let errors: any = {};
        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formValues.email) {
            errors.email = ETranslateFR.REQUIRED_EMAIL;
        } else if (!emailValidator.test(formValues.email)) {
            errors.email = ETranslateFR.ERROR_REGEX_EMAIL;
        }

        setFormErrors(errors);
        if (errors.email) return false;
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
            dispatch(forgotPassword({ value: formValues, navigate }));
        }
    };
    return (
        <Box className={classes.forgotPwdRoot}>
            <Container className={classes.forgotPwdContainer}>
                <Paper className={classes.paper} elevation={24}>
                    <div
                        style={{
                            lineHeight: "60px",
                            color: "#fff",
                            padding: "0 20px",
                            fontWeight: "500",
                            fontSize: "20px",
                            textAlign: "center",
                            background:
                                "-webkit-linear-gradient(left, #2192ff, #030e19)",
                            width: "100%",
                        }}
                    >
                        <span>Mot de passe oublié</span>
                    </div>
                    <EmailIcon
                        style={{
                            lineHeight: "60px",
                            fontWeight: "500",
                            fontSize: "80px",
                            opacity: "0.7",
                            color: blue[800],
                        }}
                    />
                    <p className={classes.emailText}>
                        Entrez votre adresse e-mail
                    </p>
                    <Grid className={classes.gridEmail}>
                        <TextField
                            color="primary"
                            className={classes.emailTextField}
                            size="small"
                            variant="outlined"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                            error={
                                formErrors.email && formErrors.email !== ""
                                    ? true
                                    : false
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <br></br>
                        {formErrors.email && formErrors.email !== "" ? (
                            <Typography color="error" variant="caption">
                                {formErrors.email}
                            </Typography>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid className={classes.gridSubmitForgotPwd}>
                        <Link to="/changePassword">
                            {" "}
                            <Button
                                className={classes.buttonSubmitForgotPwd}
                                variant="contained"
                                type="submit"
                                onClick={handleSubmit}
                                sx={{
                                    fontWeight: "bold",
                                    borderRadius: "20px",
                                }}
                            >
                                Envoyez
                            </Button>
                        </Link>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ForgotPassword;
