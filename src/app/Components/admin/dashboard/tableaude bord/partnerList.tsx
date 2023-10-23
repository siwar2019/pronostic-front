
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid} from "@mui/material";
import { getAllPartners } from "../../../../../_redux/actions/users";
import React, { useEffect} from "react";
import {
  useAppDispatch,
} from "../../../../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../_redux/store/configureStore";
// import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
export default function ListPartnerDash() {
  const partnersData = useSelector(
    (state: RootState) => state.usersSlice.partners
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPartners());
  }, [dispatch]);
  return (
    <>
      <Grid
        xs={12}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            marginTop: "7px",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
          aria-label="contacts"
        >
          {partnersData.map((el) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>{el.company.social_reason}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
}
