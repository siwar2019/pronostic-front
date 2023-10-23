import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
} from "@mui/material";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
    CreateNewSoldePartner,
    GetPartnerSolde,
} from "../../../../_redux/actions/solde";
import { ICreateSoldPartner } from "../../../../types/solde";

function AddSoldePartner(props: any) {
    let openUpdateSolde = props.openUpdateSolde;
    const dispatch = useAppDispatch();
    const quit = () => {
        props.setOpenUpdateSolde(false);
    };
    const validationSchema = Yup.object({
        solde: Yup.number()
            .typeError("Must be a number")
            .required("Solde is required")
            .test(
                "Is positive?",
                "The solde must be greater than 0!",
                (value) => value > 0
            ),
        action: Yup.string(),
    });

    const initialValues = {
        solde: "",
        action: "",
    };

    const handleSubmit = (values: ICreateSoldPartner) => {
        dispatch(
            CreateNewSoldePartner({
                solde: values.solde,
                action: values.action,
            })
        );
        dispatch(GetPartnerSolde());
        props.setOpenUpdateSolde(false);
    };

    return (
        <Dialog open={openUpdateSolde}>
            <DialogTitle style={{ fontWeight: "bold", fontSize: 25 }}>
                Modifier votre solde
            </DialogTitle>
            <DialogContent>
                <Formik
                    validateOnBlur={true}
                    validateOnChange={true}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    render={({ errors, touched, setFieldValue }) => (
                        <Form noValidate autoComplete="off">
                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                }}
                                spacing={5}
                                justifyContent="center"
                                alignItems="center"
                                mb={3}
                                mt={3}
                            >
                                <Field
                                    as={TextField}
                                    name="solde"
                                    variant="outlined"
                                    label="solde"
                                    helperText={<ErrorMessage name="solde" />}
                                    error={errors.solde && touched.solde}
                                />
                                <FormControl>
                                    <FormLabel>Action*</FormLabel>
                                    <RadioGroup
                                        row
                                        name="action"
                                        onChange={(event) => {
                                            setFieldValue(
                                                "action",
                                                event.currentTarget.value
                                            );
                                        }}
                                    >
                                        <FormControlLabel
                                            value={"add"}
                                            control={<Radio />}
                                            label="Add"
                                        />
                                        <FormControlLabel
                                            value={"remove"}
                                            control={<Radio />}
                                            label="Remove"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>

                            <DialogActions>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => quit()}
                                    style={{ color: "white" }}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                />
            </DialogContent>
        </Dialog>
    );
}

export default AddSoldePartner;
