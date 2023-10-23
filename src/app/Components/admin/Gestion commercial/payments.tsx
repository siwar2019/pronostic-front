import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch } from "../../../../hooks/reduxHooks";

import {
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@material-ui/icons";
import { paymentCommercial } from "../../../../_redux/actions/users";
import { useState } from "react";
import { useStyles } from "../../../styles/common/auth/registerStyles";
import { Stack } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: {
  id: number;
  commercialId: number;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const initialValues = {
    name: "",
    dateEchance: "",
    numDeCheque: "",
    typeDePayments: "",
    cachout: "",
    // nameBq:"",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const initialValuesErrors = {
    name: "",
    dateEchance: "",
    numDeCheque: "",
    typeDePayments: "",
    cachout: "",
    // nameBq:"",
  };
  const [formErrors, setFormErrors] = useState(initialValuesErrors);

  const validate = () => {
    let errors: any = {};
    if (!formValues.name) {
      errors.name = "Required";
    }

    if (!formValues.numDeCheque) {
      errors.numDeCheque = "Required";
    }

    if (!formValues.dateEchance) {
      errors.dateEchance = "Required";
    }

    if (!formValues.cachout) {
      errors.cachout = "Required";
    }
    // if (!formValues.nameBq) {
    //   errors.nameBq = "Required";
    // }
    

    setFormErrors(errors);
    if (errors.name) return false;
    if (errors.numDeCheque) return false;
    if (errors.dateEchance) return false;
    if (errors.cachout) return false;
    // if (errors.nameBq) return false;

    return true;
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    // setCommercialSelectetd(id)
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const handleChangevirment = async (e: any) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handelClick = (e: any) => {
    e.preventDefault();
    const validateErrors = validate();

    if (validateErrors) {
      dispatch(
        paymentCommercial({
          name: formValues.name,
          dateEchance: formValues.dateEchance,
          typeDePayments: selectedValue,
          numDeCheque: formValues.numDeCheque,
          cachout: formValues.cachout,
          commercial_id: props.commercialId,
          id: props.id,
        })
      );
      setFormValues(initialValues);
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        payer
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Payments
          </Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                checked={selectedValue === "Chéque"}
                onChange={handleChange}
                value="Chéque"
                control={<Radio />}
                label="Chéque"
              />
              <FormControlLabel
                checked={selectedValue === "Virment Bnacaire"}
                onChange={handleChange}
                value="Virment Bnacaire"
                control={<Radio />}
                label="Virment Bnacaire"
              />
              <FormControlLabel
                checked={selectedValue === "carte crédit"}
                onChange={handleChange}
                value="carte crédit"
                control={<Radio />}
                label="carte crédit"
              />
            </RadioGroup>
          </FormControl>
          {selectedValue === "Chéque" && (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      name="name"
                      label="Name"
                      id="filled-start-adornment"
                      sx={{ m: 2 }}
                      variant="filled"
                      onChange={handleChangevirment}
                      value={formValues.name}
                      error={
                        formErrors.name && formErrors.name !== "" ? true : false
                      }
                    />

                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      name="cachout"
                      id="outlined-number"
                      label="cashout"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ m: 2 }}
                      onChange={handleChangevirment}
                      value={formValues.cachout}
                      error={
                        formErrors.cachout && formErrors.cachout !== ""
                          ? true
                          : false
                      }
                    />
                    {formErrors.cachout && formErrors.cachout !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.cachout}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      name="numDeCheque"
                      label="Numero du cheque"
                      id="filled-start-adornment"
                      sx={{ m: 2 }}
                      variant="filled"
                      onChange={handleChangevirment}
                      value={formValues.numDeCheque}
                      error={
                        formErrors.numDeCheque && formErrors.numDeCheque !== ""
                          ? true
                          : false
                      }
                    />
                    {formErrors.numDeCheque && formErrors.numDeCheque !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.numDeCheque}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      name="dateEchance"
                      id="date"
                      value={formValues.dateEchance}
                      label="Date d'écheance"
                      type="date"
                      sx={{ m: 2 }}
                      onChange={handleChangevirment}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={
                        formErrors.dateEchance && formErrors.dateEchance !== ""
                          ? true
                          : false
                      }
                    />
                    {formErrors.dateEchance && formErrors.dateEchance !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.dateEchance}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          )}
          {selectedValue === "Virment Bnacaire" && (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                  <Stack>
                    <TextField
                      // name="name"
                      label="Name "
                      id="filled-start-adornment"
                      sx={{ m: 1}}
                      variant="filled"
                      value={formValues.name}
                      // onChange={handleChangeName}
                      onChange={handleChangevirment}
                      error={
                        formErrors.name && formErrors.name !== "" ? true : false
                      }
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={4}>
                  <Stack>
                    <TextField
                      id="outlined-number"
                      // onChange={handleChangeNum}
                      label="Amount"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ m: 1}}
                      onChange={handleChangevirment}
                      error={
                        formErrors.name && formErrors.name !== "" ? true : false
                      }
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={4}>
                  <Stack>
                    <TextField
                      // name="numDeCheque"
                      label="RIB"
                      id="filled-start-adornment"
                      sx={{ m: 1 }}
                      variant="filled"
                      onChange={handleChangevirment}
                      error={
                        formErrors.name && formErrors.name !== "" ? true : false
                      }
                      // value={formValues.numDeCheque}
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
              </Grid>




              <Grid container spacing={2}>

                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                    name="nameBq"
                      label="Nom du compte"
                      id="standard-start-adornment"
                      sx={{ m: 1}}
                      variant="standard"
                      onChange={handleChangevirment}
                      value={formValues.name}
                      error={
                        formErrors.name && formErrors.name !== "" ? true : false
                      }
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      label="Numéro du compte"
                      id="standard-start-adornment"
                      sx={{ m: 1 }}
                      variant="standard"
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      label="Nom de la Bnaque"
                      id="standard-start-adornment"
                      sx={{ m: 1}}
                      variant="standard"
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={3}>
                  <Stack>
                    <TextField
                      label="IBAN"
                      id="standard-start-adornment"
                      sx={{ m: 1 }}
                      variant="standard"
                    />
                    {formErrors.name && formErrors.name !== "" ? (
                      <Typography
                        color="error"
                        variant="caption"
                        className={classes.errorMessage}
                      >
                        {formErrors.name}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          )}

          {selectedValue === "carte crédit" && (
            <>
              <div>
                <TextField
                  label="Name On card "
                  id="filled-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                />
                <TextField
                  label="Email"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                />
                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">
                    Credir card umber
                  </InputLabel>
                  <FilledInput
                    startAdornment={
                      <InputAdornment position="start">
                        1111-2222-3333-4444
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div>
                <TextField
                  label="EXP Month"
                  id="standard-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="standard"
                />
                <TextField
                  label="CVV"
                  id="standard-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="standard"
                />
                <TextField
                  label="EXP Year"
                  id="standard-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="standard"
                />

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Amount
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">DNT</InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </>
          )}

          <Grid style={{ marginTop: "10px" }}>
            <Button
              style={{ display: "block", marginLeft: "auto" }}
              variant="contained"
              onClick={handelClick}
              type="submit"
            >
              Send
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
