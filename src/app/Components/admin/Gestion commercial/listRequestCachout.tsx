import {
  Accordion,
  AccordionSummary,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getRequestCommercial } from "../../../../_redux/actions/users";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import BasicModal from "./payments";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function ListRequest() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { requestcashoutAdmin } = useAppSelector((state) => state.usersSlice);
  const { t } = useTranslation();
  const lang = useAppSelector(({ languageSlice: { lang } }) => lang);

  useEffect(() => {
    dispatch(getRequestCommercial());
  }, [dispatch]);

  return (
    <>
      {/* <Box> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{direction:lang ==="ar"?"rtl":"ltr"}}
        >
          <Typography>{t("admin.commercial.cashoutPartner")}</Typography>
        </AccordionSummary>
        <TableContainer component={Paper} style={{direction:lang ==="ar"?"rtl":"ltr"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              style={{
                background: "-webkit-linear-gradient(left, #2192ff, #030e19)",
              }}
            >
              <TableRow>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  {/* First Name */}
                  {t("admin.commercial.firstName")}
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                 {t("client.login.email")}
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  
                  {t("admin.commercial.mtCachout")}
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                 {t("admin.commercial.phone")}
                </TableCell>
                <TableCell
                  style={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  {t("admin.commercial.validate")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestcashoutAdmin?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.User.commercial.firstName}
                  </TableCell>

                  <TableCell align="center">{row.User.email}</TableCell>
                  <TableCell align="center">{row.MtCashout}</TableCell>
                  <TableCell align="center">
                    {row.User.commercial.phone}
                  </TableCell>
                  <TableCell align="center">
                    <BasicModal id={row.id} commercialId={row.User.id}/>
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Accordion>
    </>
  );
}

export default ListRequest;
