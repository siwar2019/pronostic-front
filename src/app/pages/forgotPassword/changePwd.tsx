import React, { useState } from "react";
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
import PasswordIcon from "@mui/icons-material/Password";
import LockIcon from "@mui/icons-material/Lock";
import { blue } from "@mui/material/colors";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../_redux/actions/auth";

function ChangePassword() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const initialValues = { code: "", newPassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const initialValuesErrors = { code: "", newPassword: "" };
    const [formErrors, setFormErrors] = useState(initialValuesErrors);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = async (e: any) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(changePassword({ value: formValues, navigate }));
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
                        <span>Changer votre mot de passe</span>
                    </div>
                    <LockIcon
                        style={{
                            marginTop: "10px",
                            fontWeight: "500",
                            fontSize: "80px",
                            opacity: "0.7",
                            color: blue[800],
                        }}
                    />
                    <p className={classes.codeText}>Entrez le code</p>
                    <Grid className={classes.gridCode}>
                        <TextField
                            color="primary"
                            className={classes.codeTextField}
                            size="small"
                            variant="outlined"
                            name="code"
                            type="text"
                            placeholder="Code"
                            value={formValues.code}
                            onChange={handleChange}
                            error={
                                formErrors.code && formErrors.code !== ""
                                    ? true
                                    : false
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PasswordIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {formErrors.code && formErrors.code !== "" ? (
                            <Typography color="error" variant="caption">
                                {formErrors.code}
                            </Typography>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <p className={classes.newPwdText}>Nouveau mot de passe</p>
                    <Grid className={classes.gridnewPwd}>
                        <TextField
                            color="primary"
                            className={classes.newPwdTextField}
                            size="small"
                            variant="outlined"
                            name="newPassword"
                            type="password"
                            placeholder="Nouveau mot de passe"
                            value={formValues.newPassword}
                            onChange={handleChange}
                            error={
                                formErrors.newPassword &&
                                formErrors.newPassword !== ""
                                    ? true
                                    : false
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {formErrors.newPassword &&
                        formErrors.newPassword !== "" ? (
                            <Typography color="error" variant="caption">
                                {formErrors.newPassword}
                            </Typography>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid className={classes.gridSubmitForgotPwd}>
                        <Button
                            className={classes.buttonSubmitForgotPwd}
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            sx={{ fontWeight: "bold", borderRadius: "20px" }}
                        >
                            Envoyez
                        </Button>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ChangePassword;
