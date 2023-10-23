import { Grid } from '@mui/material'
import React from 'react'
import { Item } from 'semantic-ui-react'

function FactureFooter() {
  return (
<>
    <hr style={{fontWeight:'bold'}}></hr>
    <Grid container spacing={2}>
  <Grid item xs={6} md={4}>
    <Item>WindPronostics</Item>
    <Item>xs=8</Item>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>Contact</Item>
    <Item>Nom Prenom</Item>
    <Item>Téléphone</Item>
    <Item>Email</Item>
    
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>Détails Bancaires</Item>
    <Item>Banque</Item>
    <Item>Code Bnaque</Item>
    <Item>IBAN</Item>
    <Item>SWIFT </Item>
  </Grid>

    </Grid>
    </>
  )
}

export default FactureFooter