import { Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container, Grid } from "semantic-ui-react";
import AddEquipes from "./CreateEquipes";
import EquipesList from "./equipesList";

const GestionEquipe = () => {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={8}
      >
        <EquipesList />
      </Stack>
    </Container>
  );
};

export default GestionEquipe;
