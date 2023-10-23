/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useStyles } from "./gamesStyles";
import { useNavigate, useParams } from "react-router-dom";

// import { Item } from 'semantic-ui-react';
import "./games.css";
import GamesCollapse from "./gamesCollapse";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/reduxHooks";
import { getAllMatchsForAdmin, getGroupeEquipeForAdmin } from "../../../../../_redux/actions/matchs";
import CircleLoading from "../../../CircleLoading";
import EmptyPageModal from "../../../partner/emptyPage/emptyPageModal"


export default function Games() {
  const [loading, setLoading] = useState<boolean>(true);
  const { groupesMatchs, groupeEquipe } = useAppSelector(
    (state) => state.matchsSlice
  );

  const dispatch = useAppDispatch();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllMatchsForAdmin(params.id as string));
    dispatch(getGroupeEquipeForAdmin(params.id as string));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, params.id]);

 

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2d314a",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container style={{ marginTop: "50px", paddingBottom: "30px" }}>
      {loading ? (
        <CircleLoading loading={loading} />
      ) : (
        <Grid item xs={12} sx={{ mt: 4 }}>
          {groupesMatchs.length === 0 && groupeEquipe.length === 0 ? (
            <EmptyPageModal />
          ) : (
            groupeEquipe.map((els, index) => (
              <GamesCollapse
                groupe={els}
                groupesMatchs={groupesMatchs}
                key={index}
              />
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}
