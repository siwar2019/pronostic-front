import {
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TextField,
  Paper,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import React, { useEffect, useState } from "react";
import { Container, TableBody, TableRow } from "semantic-ui-react";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllEquipes } from "../../../../_redux/actions/equipes";
import AddEquipes from "./CreateEquipes";
import useStyles from "../../../styles/admin/equipe/equipeStyle";
import CountrySelect from "./choosecountry";

const EquipesList = () => {
  const { equipesEvents } = useAppSelector((state) => state.equipesSlice);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchEquipe, setSearchEquipe] = useState(equipesEvents);
  const [isReset, setIsReset] = useState(false);
  const initialValues = { name: "", country: "", images: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [selectedCountry, setSelectedCountry] = React.useState<any>();

  useEffect(() => {
    if (!search && !selectedCountry) {
      setSearchEquipe(equipesEvents);
    } else {
      setSearchEquipe(
        equipesEvents.filter((item) => {
          return !selectedCountry
            ? item.name.toLowerCase().includes(search)
            : item.name.toLowerCase().includes(search) &&
                item.country === selectedCountry;
        })
      );
    }
    setPage(0);
  }, [search, selectedCountry]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllEquipes()).then((data) => {
      setSearchEquipe(data.payload);
      setIsReset(!isReset);
    });
  }, []);

  return (
    <Container>
      <Stack direction="row" className={classes.stack}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label={t("admin.Equipes.search")}
          onChange={changeSearch}
          className={classes.text}
        />
        <Stack className={classes.stackSelectCountry}>
          <CountrySelect
            setFormValues={setFormValues}
            formValues={formValues}
            isReset={isReset}
            setSelectedCountry={setSelectedCountry}
          />
        </Stack>
        <AddEquipes />
      </Stack>
      <TableContainer
        component={Paper}
        elevation={6}
        className={classes.tableContainer}
      >
        <Table aria-label="custom pagination table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.th}>
                {t("admin.Equipes.Id")}
              </TableCell>
              <TableCell className={classes.th}>
                {t("admin.Equipes.equipeName")}
              </TableCell>
              <TableCell className={classes.th}>
                {t("admin.Equipes.Country")}
              </TableCell>
              <TableCell className={classes.th}>
                {t("admin.Categories.icon")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsPerPage > 0 && searchEquipe.length > 0 ? (
              searchEquipe
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className={classes.tableCell}>
                      {item.id}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.name}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.country}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <img
                        src={
                          (process.env.REACT_APP_UPLOADS_LOGO +
                            item.images) as any
                        }
                        className={classes.img}
                        alt="Country flag"
                      ></img>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell>{t("admin.Equipes.NoItemSelected")}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={equipesEvents.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={t("partner.Employees.rows")}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default EquipesList;
