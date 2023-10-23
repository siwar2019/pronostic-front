import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Grid, Typography } from "@mui/material";
import { Item } from "semantic-ui-react";
import logo from "../../../assets/logo-login.png";
import { Box } from "@mui/system";
import { ClassNames } from "@emotion/react";
import { useStyles } from "./factureStyle";
import TablesInvoices from "./tableFacture";
import FactureFooter from "./footerFacture";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfFile = () => {
  const classes = useStyles();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            eligendi libero nihil reiciendis aperiam accusantium repellat quas
            dolor rerum, porro reprehenderit obcaecati dolorum amet molestiae!
            Fuga exercitationem beatae nostrum praesentium.
            ibrahim @ gmail.com 
            
          </Text>

          <Grid container>
            <Grid item xs={12} md={6}>
              <Item>
                <img src={logo} alt="" />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} className={classes.numFac}>
              <Typography variant="h3" gutterBottom>
                Facture No.2023-08-0003
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12} md={6} className={classes.Box}>
              <Box>
                <Typography> Date de la facture 7/10/2023 </Typography>
                <Typography> Réfeerence de facture 2023-08-0003</Typography>
                <Typography> Numéro du client: 1</Typography>
                <Typography> Paimebnt du 7/23/2023</Typography>
                <Typography> Modalite de paiment 30jour</Typography>
                <Typography> Contact Client </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.Box1}>
              <Box>
                <Typography style={{ fontWeight: "bold" }}>
                  Destinaire:
                </Typography>
                <Typography>Ibrahim khouaja</Typography>
                <Typography>31 rue Zouila</Typography>
                <Typography>5100 Mahdia </Typography>
                <Typography>Tunis </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container paddingTop={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography style={{ fontWeight: "bold" }}>
                  Infos additionnelles
                </Typography>
                <Typography style={{ fontSize: "11px", marginTop: "15px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam dolorum, perspiciatis ex repellendus odit odio
                  repudiandae explicabo illum, nesciunt dicta quam suscipit modi
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container paddingTop={5} className={classes.tva}>
            <TablesInvoices />

            <Grid style={{ display: "flex" }} paddingTop={2}>
              <Grid style={{ marginRight: "30px" }}>
                <Box>
                  <Typography style={{ fontWeight: "bold" }}>
                    Total HT
                  </Typography>
                  <Typography style={{ fontWeight: "bold" }}>
                    Total TVA
                  </Typography>
                  <Typography style={{ fontWeight: "bold" }}>
                    Total TTC
                  </Typography>
                </Box>
              </Grid>
              <Grid>
                <Box>
                  <Typography style={{ fontWeight: "bold" }}>
                    1000 DNT
                  </Typography>
                  <Typography style={{ fontWeight: "bold" }}>20 DNT</Typography>
                  <Typography style={{ fontWeight: "bold" }}>
                    1020 DNT
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ padding: "40px" }}>
            <FactureFooter />
          </div>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
