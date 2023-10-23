import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "./Newsstyle";
import NavBar from "../../../Components/common/Navbar";
import {  CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "semantic-ui-react";
import Footer from "../../../Components/common/home/Footer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function PageNews() {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Container>
                <Box sx={{ flexGrow: 1 }} className={classes.gridNews}>
                    <Box>
                        <Grid item xs={6} className={classes.gridd}>
                            <Box className={classes.BoxTitle}>
                                <Typography
                                    variant="h6"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Page d'accueil
                                </Typography>
                                <Typography variant="h4">Sport</Typography>
                            </Box>
                            <Box className={classes.boxTop}>
                                {/* <img
                                    src="https://cdn-i.pr.trt.com.tr/trtfrancais/w720/h405/q70/15499258_0-24-4877-2746.jpeg"
                                    alt=""
                                   
                                /> */}
                                <Typography className={classes.title}>
                                    Outre Ronaldo et Messi, quelles stars
                                    faudra-t-il suivre au mondial ?
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w720/h405/q70/15499297_0-566-5472-3081.jpeg"
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="h5">
                                                {" "}
                                                Coupe du monde: des chiffres
                                                records pour les caisses de la
                                                FIFA
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                This impressive paella is a
                                                perfect Lorem ipsum dolor, sit
                                                amet consectetur adipisicing
                                                elit. Corporis, sapiente fugiat
                                                inventore numquam laudantium
                                                dolores, aspernatur id rem
                                                consequuntur iusto alias. Iure,
                                                quod commodi hic fugit nisi eius
                                                ratione fuga!
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w480/h270/q70/15499137_0-213-3475-1957.jpeg"
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="h5">
                                                {" "}
                                                Mondial: Benzema forfait, le
                                                ciel tombe sur la tête des Bleus
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                This impressive paella is a
                                                perfect Lorem ipsum dolor, sit
                                                amet consectetur adipisicing
                                                elit. Placeat cum modi earum
                                                enim molestiae beatae sint
                                                quibusdam praesentium totam
                                                nobis nemo, quasi iste aliquam
                                                quam animi iusto aperiam rerum
                                                voluptatum.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "#8b80801c",
                                }}
                            >
                                <Grid item xs={12} md={3}>
                                    <div>
                                        <img
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w400/h300/q70/15498859_0-66-6085-3427.jpeg"
                                            alt=""
                                            style={{ maxWidth: "100%" }}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "15px",
                                    }}
                                >
                                    <div>
                                        <Typography variant="h5">
                                            Coupe du monde: le Cameroun, espère
                                            se réconcilier avec le mondial
                                        </Typography>
                                        <Typography>
                                            Pays africain comptant le plus de
                                            participations à la Coupe du monde,
                                            le Cameroun était absent du dernier
                                            mondial 2018. Les Lions Indomptables
                                            qui n'ont jamais fait mieux qu'un
                                            quart de finale en 1990, tenteront
                                            de redorer leur blason au Qatar
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "#8b80801c",
                                }}
                            >
                                <Grid item xs={12} md={3}>
                                    <div>
                                        <img
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w400/h300/q70/15499309_0-17-3103-1747.jpeg"
                                            alt=""
                                            style={{ maxWidth: "100%" }}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "15px",
                                    }}
                                >
                                    <div>
                                        <Typography variant="h5">
                                            En direct-Mondial 2022: l'Angleterre
                                            trop fort pour l'Iran, 3-0 à la
                                            pause
                                        </Typography>
                                        <Typography>
                                            Pays africain comptant le plus de
                                            participations à la Coupe du monde,
                                            le Cameroun était absent du dernier
                                            mondial 2018. Les Lions Indomptables
                                            qui n'ont jamais fait mieux qu'un
                                            quart de finale en 1990, tenteront
                                            de redorer leur blason au Qatar
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "#8b80801c",
                                }}
                            >
                                <Grid item xs={12} md={3}>
                                    <div>
                                        <img
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w400/h300/q70/15438786_0-216-2496-1405.jpeg"
                                            alt=""
                                            style={{ maxWidth: "100%" }}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "15px",
                                    }}
                                >
                                    <div>
                                        <Typography variant="h5">
                                            Mondial: une cérémonie d'ouverture à
                                            l'accent olympique
                                        </Typography>
                                        <Typography>
                                            Pays africain comptant le plus de
                                            participations à la Coupe du monde,
                                            le Cameroun était absent du dernier
                                            mondial 2018. Les Lions Indomptables
                                            qui n'ont jamais fait mieux qu'un
                                            quart de finale en 1990, tenteront
                                            de redorer leur blason au Qatar
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "#8b80801c",
                                }}
                            >
                                <Grid item xs={12} md={3}>
                                    <div>
                                        <img
                                            src="https://cdn-i.pr.trt.com.tr/trtfrancais/w400/h300/q70/15498571_0-155-3533-1990.jpeg"
                                            alt=""
                                            style={{ maxWidth: "100%" }}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "15px",
                                    }}
                                >
                                    <div>
                                        <Typography variant="h5">
                                            Manchester United: le contrat de
                                            Cristiano Ronaldo doit être résilié,
                                            selon Gary Neville
                                        </Typography>
                                        <Typography>
                                            Pays africain comptant le plus de
                                            participations à la Coupe du monde,
                                            le Cameroun était absent du dernier
                                            mondial 2018. Les Lions Indomptables
                                            qui n'ont jamais fait mieux qu'un
                                            quart de finale en 1990, tenteront
                                            de redorer leur blason au Qatar
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
}
