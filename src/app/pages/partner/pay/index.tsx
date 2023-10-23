import {
    Box,
    Container,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
    Button,
    Radio,
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
} from "@mui/material";
import { MouseEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllEmployee } from "../../../../_redux/actions/users";
import ConfirmResetPoints from "./resetPoints/ConfirmResetPoints";
import * as Yup from "yup";
import { FieldArray, Form, Formik, getIn } from "formik";
import { Stack } from "@mui/system";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { addInitialValueToEmployee } from "../../../../_redux/actions/pronostics";
import {
    assignmentSoldeToEmployee,
    GetPartnerSolde,
} from "../../../../_redux/actions/solde";
import PartnerSolde from "./partnerSolde";

function Success(props) {
    return (
        <>
            <Typography variant="h4" align="center" sx={{ p: 1 }}>
                Votre action est bien passé !
            </Typography>
            <Button
                style={{
                    display: "flex",
                    margin: "50px auto 10px auto",
                }}
                onClick={props.handleRest}
                variant="contained"
            >
                Recommencer
            </Button>
        </>
    );
}

function FirstStep(props: {
    handleNext: MouseEventHandler<HTMLButtonElement>;
}) {
    const [disableNextButton, setDisableNextButton] = useState(true);
    const [openConfirmPopup, setOpenCofirmPopup] = useState(false);
    return (
        <>
            <Button
                variant="contained"
                style={{ display: "flex", margin: "20px auto 10px auto" }}
                onClick={() => setOpenCofirmPopup(true)}
            >
                Réinitialiser les points pour tous les employés !
            </Button>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={props.handleNext}
                    disabled={disableNextButton}
                >
                    Next
                </Button>
            </Box>
            <ConfirmResetPoints
                setOpenCofirmPopup={setOpenCofirmPopup}
                openConfirmPopup={openConfirmPopup}
                setDisableNextButton={setDisableNextButton}
            />
        </>
    );
}
function SecondStep(props) {
    const dispatch = useAppDispatch();
    let employees = props.employees;

    const validationSchema = Yup.object().shape({
        points: Yup.array().of(
            Yup.object().shape({
                employee: Yup.string().required("Employee is required"),
                initialPoints: Yup.number()
                    .typeError("Must be a number")
                    .required("Points is required"),
            })
        ),
    });

    return (
        <>
            <Formik
                initialValues={{
                    points: [
                        {
                            employee: "",
                            initialPoints: "",
                        },
                    ],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(addInitialValueToEmployee(values.points));
                    props.handleNext();
                    resetForm();
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    isValid,
                    setFieldValue,
                }) => (
                    <>
                        <Form noValidate autoComplete="off">
                            <FieldArray name="points">
                                {({ push, remove }) => (
                                    <div>
                                        {values.points.map((p, index) => {
                                            const employee = `points[${index}].employee`;
                                            const touchedEmployee = getIn(
                                                touched,
                                                employee
                                            );
                                            const errorEmployee = getIn(
                                                errors,
                                                employee
                                            );
                                            const initialPoints = `points[${index}].initialPoints`;
                                            const touchedInitialPoints = getIn(
                                                touched,
                                                initialPoints
                                            );
                                            const errorInitialPoints = getIn(
                                                errors,
                                                initialPoints
                                            );

                                            return (
                                                <Stack
                                                    alignItems="flex-start"
                                                    justifyContent="center"
                                                    direction={{
                                                        xs: "column",
                                                        sm: "row",
                                                    }}
                                                    spacing={2}
                                                    style={{
                                                        marginTop: "20px",
                                                    }}
                                                    key={index}
                                                >
                                                    <Autocomplete
                                                        options={employees}
                                                        getOptionLabel={(
                                                            option: any
                                                        ) => option.email}
                                                        style={{ width: 270 }}
                                                        getOptionSelected={(
                                                            option,
                                                            value
                                                        ) =>
                                                            option.email ===
                                                            value.email
                                                        }
                                                        onChange={(
                                                            event,
                                                            value
                                                        ) => {
                                                            setFieldValue(
                                                                employee,
                                                                value
                                                                    ? value.id
                                                                    : ""
                                                            );
                                                        }}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                variant="outlined"
                                                                label="employees"
                                                                value={
                                                                    p.employee
                                                                }
                                                                required
                                                                helperText={
                                                                    touchedEmployee &&
                                                                    errorEmployee
                                                                        ? errorEmployee
                                                                        : ""
                                                                }
                                                                error={Boolean(
                                                                    touchedEmployee &&
                                                                        errorEmployee
                                                                )}
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                            />
                                                        )}
                                                    />
                                                    <TextField
                                                        style={{ width: 270 }}
                                                        variant="outlined"
                                                        label="Points"
                                                        name={initialPoints}
                                                        value={p.initialPoints}
                                                        required
                                                        helperText={
                                                            touchedInitialPoints &&
                                                            errorInitialPoints
                                                                ? errorInitialPoints
                                                                : ""
                                                        }
                                                        error={Boolean(
                                                            touchedInitialPoints &&
                                                                errorInitialPoints
                                                        )}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {index !== 0 ? (
                                                        <Button
                                                            type="button"
                                                            color="secondary"
                                                            variant="contained"
                                                            onClick={() =>
                                                                remove(index)
                                                            }
                                                        >
                                                            -
                                                        </Button>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        onClick={() =>
                                                            push({
                                                                employee: "",
                                                                initialPoints:
                                                                    "",
                                                            })
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </Stack>
                                            );
                                        })}
                                    </div>
                                )}
                            </FieldArray>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={
                                    !isValid || values.points.length === 0
                                }
                                style={{
                                    display: "flex",
                                    margin: "50px auto 10px auto",
                                }}
                            >
                                Enregistrer
                            </Button>
                        </Form>
                    </>
                )}
            </Formik>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Stack spacing={1} direction="row">
                    <Button onClick={props.handleNext} variant="contained">
                        Skip
                    </Button>
                </Stack>
            </Box>
        </>
    );
}

function ThirdStep(props) {
    let employees = props.employees;
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        soldes: Yup.array().of(
            Yup.object().shape({
                employee: Yup.string().required("Employee is required"),
                solde: Yup.number()
                    .typeError("Must be a number")
                    .required("Solde is required")
                    .test(
                        "Is positive?",
                        "The solde must be greater than 0!",
                        (value) => value > 0
                    ),
                action: Yup.string(),
            })
        ),
    });

    return (
        <>
            <Formik
                initialValues={{
                    soldes: [
                        {
                            employee: "",
                            solde: "",
                            action: "",
                        },
                    ],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(assignmentSoldeToEmployee(values.soldes));
                    dispatch(GetPartnerSolde());
                    props.handleNext();
                    resetForm();
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    isValid,
                    setFieldValue,
                }) => (
                    <>
                        <Form noValidate autoComplete="off">
                            <FieldArray name="soldes">
                                {({ push, remove }) => (
                                    <div>
                                        {values.soldes.map((p, index) => {
                                            const employee = `soldes[${index}].employee`;
                                            const touchedEmployee = getIn(
                                                touched,
                                                employee
                                            );
                                            const errorEmployee = getIn(
                                                errors,
                                                employee
                                            );
                                            const solde = `soldes[${index}].solde`;
                                            const touchedSolde = getIn(
                                                touched,
                                                solde
                                            );
                                            const errorSolde = getIn(
                                                errors,
                                                solde
                                            );
                                            const action = `soldes[${index}].action`;
                                            return (
                                                <Stack
                                                    alignItems="flex-start"
                                                    justifyContent="center"
                                                    direction={{
                                                        xs: "column",
                                                        sm: "row",
                                                    }}
                                                    spacing={2}
                                                    style={{
                                                        marginTop: "20px",
                                                    }}
                                                    key={index}
                                                >
                                                    <Autocomplete
                                                        options={employees}
                                                        getOptionLabel={(
                                                            option: any
                                                        ) => option.email}
                                                        style={{ width: 270 }}
                                                        getOptionSelected={(
                                                            option,
                                                            value
                                                        ) =>
                                                            option.email ===
                                                            value.email
                                                        }
                                                        onChange={(
                                                            event,
                                                            value
                                                        ) => {
                                                            setFieldValue(
                                                                employee,
                                                                value
                                                                    ? value.id
                                                                    : ""
                                                            );
                                                        }}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                variant="outlined"
                                                                label="employees"
                                                                value={
                                                                    p.employee
                                                                }
                                                                required
                                                                helperText={
                                                                    touchedEmployee &&
                                                                    errorEmployee
                                                                        ? errorEmployee
                                                                        : ""
                                                                }
                                                                error={Boolean(
                                                                    touchedEmployee &&
                                                                        errorEmployee
                                                                )}
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                            />
                                                        )}
                                                    />
                                                    <TextField
                                                        style={{ width: 270 }}
                                                        variant="outlined"
                                                        label="Solde"
                                                        name={solde}
                                                        value={p.solde}
                                                        required
                                                        helperText={
                                                            touchedSolde &&
                                                            errorSolde
                                                                ? errorSolde
                                                                : ""
                                                        }
                                                        error={Boolean(
                                                            touchedSolde &&
                                                                errorSolde
                                                        )}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <FormControl>
                                                        <FormLabel>
                                                            Action*
                                                        </FormLabel>
                                                        <RadioGroup
                                                            row
                                                            name={action}
                                                            value={p.action}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setFieldValue(
                                                                    action,
                                                                    event
                                                                        .currentTarget
                                                                        .value
                                                                );
                                                            }}
                                                        >
                                                            <FormControlLabel
                                                                value={"add"}
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="Add"
                                                            />
                                                            <FormControlLabel
                                                                value={"remove"}
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="Remove"
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    {index !== 0 ? (
                                                        <Button
                                                            type="button"
                                                            color="secondary"
                                                            variant="contained"
                                                            onClick={() =>
                                                                remove(index)
                                                            }
                                                        >
                                                            -
                                                        </Button>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        onClick={() =>
                                                            push({
                                                                employee: "",
                                                                solde: "",
                                                                action: "",
                                                            })
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </Stack>
                                            );
                                        })}
                                    </div>
                                )}
                            </FieldArray>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={
                                    !isValid || values.soldes.length === 0
                                }
                                style={{
                                    display: "flex",
                                    margin: "50px auto 10px auto",
                                }}
                            >
                                Enregistrer
                            </Button>
                        </Form>
                    </>
                )}
            </Formik>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Stack spacing={1} direction="row">
                    <Button variant="contained" onClick={props.handleBack}>
                        Back
                    </Button>
                </Stack>
            </Box>
        </>
    );
}

export default function Pay() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleRest = () => {
        setActiveStep(0);
    };

    const labels = [
        "Réinialisation des points",
        "Ajouter des valeurs initiales",
        "Effectation des soldes",
    ];

    const dispatch = useAppDispatch();

    const { employees } = useAppSelector((state) => state.usersSlice);
    useEffect(() => {
        dispatch(getAllEmployee());
    }, [dispatch]);

    const handleSteps = (step: number) => {
        switch (step) {
            case 0:
                return <FirstStep handleNext={handleNext} />;
            case 1:
                return (
                    <SecondStep
                        handleNext={handleNext}
                        employees={employees.filter(
                            (employee: any) => employee.is_active
                        )}
                    />
                );
            case 2:
                return (
                    <ThirdStep
                        handleNext={handleNext}
                        handleBack={handleBack}
                        employees={employees.filter(
                            (employee: any) => employee.is_active
                        )}
                    />
                );
            default:
                throw new Error("Unknown step");
        }
    };
    return (
        <Container style={{ marginTop: "50px", paddingBottom: "20px" }}>
            <PartnerSolde />
            <Paper
                elevation={18}
                style={{
                    padding: "50px",
                    marginTop: "40px",
                    background: "#dcdcdc59",
                    marginBottom: "40px",
                }}
            >
                {activeStep === labels.length ? (
                    <Success handleRest={handleRest} />
                ) : (
                    <>
                        <Box sx={{ my: 5 }}>
                            <Typography variant="h4" align="center">
                                Formulaire de réinitialisation & affection des
                                soldes
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                align="center"
                                sx={{ mt: 2 }}
                            >
                                Cette formulaire valable que le premier jour de
                                mois.
                            </Typography>
                        </Box>
                        <Stepper
                            activeStep={activeStep}
                            sx={{ py: 3 }}
                            alternativeLabel
                        >
                            {labels.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        {handleSteps(activeStep)}
                    </>
                )}
            </Paper>
        </Container>
    );
}
