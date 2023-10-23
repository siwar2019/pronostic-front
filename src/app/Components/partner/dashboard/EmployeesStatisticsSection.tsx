import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "../../../styles/partner/dashboard/EmployeesStatistics";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmployeesStatistics from "./EmployeesStatistics";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllEmployee } from "../../../../_redux/actions/users";
import { getEventsbyPartner } from "../../../../_redux/actions/events";

export default function EmployeesStatisticsSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.usersSlice);
  const events = useAppSelector(
    ({ categoriesSlice: { events } }) => events
  ).filter((event: any) => event.id !== 0);

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([...employees]);
  const [event, setEvent] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");

  useEffect(() => {
    dispatch(getAllEmployee());
    dispatch(getEventsbyPartner());
  }, [dispatch]);

  useEffect(() => {
    if (search === "") {
      setSearchData([...employees]);
    } else {
      setSearchData(
        employees.filter((val) => {
          return val.email.toLowerCase().includes(search);
        })
      );
    }
  }, [search, employees]);

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  const handleChange = (event: SelectChangeEvent) => {
    setEvent(event.target.value);
  };

  const selectedEmpolyees = (employee: string, employeeId) => {
    if (employee === selectedEmployee) {
      setSelectedEmployee("");
      setSelectedEmployeeId("");
    } else setSelectedEmployee(employee);
    setSelectedEmployeeId(employeeId);
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={3}>
        {" "}
        <Paper elevation={0} className={classes.employeesSectionPaper}>
          {" "}
          {window.innerWidth < 900 ? (
            <FormControl className={classes.event} size="small">
              <Select
                displayEmpty
                labelId="demo-select-small"
                id="demo-select-small"
                value={event}
                onChange={handleChange}
                renderValue={(selected) => {
                  return (
                    <Stack direction="row" spacing={1}>
                      <EmojiEventsIcon className={classes.eventIcon} />{" "}
                      {selected.length === 0 ? (
                        <span className={classes.eventPlaceholder}>
                          {t("partner.Dashboard.events")}
                        </span>
                      ) : (
                        events.map(
                          (event, index) =>
                            selected === event.id && (
                              <span key={index}>{event.name}</span>
                            )
                        )
                      )}
                    </Stack>
                  );
                }}
              >
                {events.map((event, index) => (
                  <MenuItem key={index} value={event.id}>
                    {event.name}
                  </MenuItem>
                ))}{" "}
              </Select>
            </FormControl>
          ) : (
            <></>
          )}
          <TextField
            className={classes.searchEmpolyee}
            size="small"
            placeholder={t("partner.Dashboard.search")}
            id="input-with-icon-adornment"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearch("")}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <List className={classes.list}>
            {searchData.map((employee, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  selectedEmpolyees(employee.email, employee.id);
                }}
              >
                <ListItemAvatar>
                  <Avatar {...stringAvatar(employee.email)} />
                </ListItemAvatar>
                {window.innerWidth > 1000 && window.innerWidth < 1160 ? (
                  <ListItemText
                    className={
                      selectedEmployee === employee.email
                        ? classes.selectedEmpolyee
                        : null
                    }
                    primary={
                      employee.email.length > 10
                        ? employee.email.substring(0, 10) + "..."
                        : employee.email
                    }
                  />
                ) : window.innerWidth > 899 && window.innerWidth < 1000 ? (
                  <ListItemText
                    className={
                      selectedEmployee === employee.email
                        ? classes.selectedEmpolyee
                        : null
                    }
                    primary={
                      employee.email.length > 7
                        ? employee.email.substring(0, 7) + "..."
                        : employee.email
                    }
                  />
                ) : (
                  <ListItemText
                    className={
                      selectedEmployee === employee.email
                        ? classes.selectedEmpolyee
                        : null
                    }
                    primary={
                      employee.email.length > 15
                        ? employee.email.substring(0, 15) + "..."
                        : employee.email
                    }
                  />
                )}
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        {" "}
        <Paper elevation={0} className={classes.statisticsSectionPaper}>
          <Container>
            {window.innerWidth > 899 ? (
              <FormControl className={classes.event} size="small">
                <Select
                  displayEmpty
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={event}
                  onChange={handleChange}
                  renderValue={(selected) => {
                    return (
                      <Stack direction="row" spacing={1}>
                        <EmojiEventsIcon className={classes.eventIcon} />{" "}
                        {selected.length === 0 ? (
                          <span className={classes.eventPlaceholder}>
                            {t("partner.Dashboard.events")}
                          </span>
                        ) : (
                          events.map(
                            (event, index) =>
                              selected === event.id && (
                                <span key={index}>{event.name}</span>
                              )
                          )
                        )}
                      </Stack>
                    );
                  }}
                >
                  {events.map((event, index) => (
                    <MenuItem key={index} value={event.id}>
                      {event.name}
                    </MenuItem>
                  ))}{" "}
                </Select>
              </FormControl>
            ) : (
              <></>
            )}
            <Box className={classes.staticsBox}>
              {selectedEmployee === "" && event === "" ? (
                <Typography variant="h4">
                  {" "}
                  {t("partner.Dashboard.chooseEvent&Employee")}
                </Typography>
              ) : selectedEmployee === "" && event !== "" ? (
                <Typography variant="h4">
                  {" "}
                  {t("partner.Dashboard.chooseEmployee")}
                </Typography>
              ) : selectedEmployee !== "" && event === "" ? (
                <Typography variant="h4">
                  {" "}
                  {t("partner.Dashboard.chooseEvent")}
                </Typography>
              ) : (
                <EmployeesStatistics
                  event_id={event}
                  employee_id={selectedEmployeeId}
                />
              )}
            </Box>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
