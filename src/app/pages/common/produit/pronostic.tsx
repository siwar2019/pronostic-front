import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./fantasyStyle";
import { Box, CardContent, Typography } from "@mui/material";
import { Card, Container } from "@material-ui/core";
import img2 from "./../../../assets/image-carousel-pub.png";
import box1 from "./../../../assets/pronostic.jpeg";
import img4 from "./../../../assets/phone.png";
import NavBar from "../../../Components/common/Navbar";
import PieChartIcon from "@mui/icons-material/PieChart";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import Footer from "../../../Components/common/home/Footer";

export default function PronosticPage() {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div><img  src={box1} alt="" style={{width:"100%" , marginTop:'10vh'}}/></div>
            <div><img src={img2} alt="" style={{width:"100%"}}/></div>
                {/* <Paper className={classes.paper1}>
                    <img className={classes.imgpaper} src={img2} alt="" />
                </Paper> */}
          
            <div className={classes.box1}>
                <Box sx={{ flexGrow: 1 }}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <Typography className={classes.titleBox1}>
                                        Enregistrez tous vos produits ou
                                        services
                                    </Typography>
                                    <Typography >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Optio, molestias
                                        deserunt? Sed hic dolorem veniam alias
                                        animi placeat ab, quasi, laborum
                                        expedita vitae perspiciatis molestiae
                                        cumque ex, sint cupiditate! Fugit.
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div>
                                    <img
                                        src={box1}
                                        alt=""
                                        className={classes.imgBox1}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <div className={classes.box2}>
                <Box sx={{ flexGrow: 1 }}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div>
                                    <img
                                        src={img4}
                                        alt=""
                                        className={classes.imgBox1}
                                    />
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <Typography className={classes.titleBox1}>
                                        Enregistrez tous vos produits ou
                                        services
                                    </Typography>
                                    <Typography >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Optio, molestias
                                        deserunt? Sed hic dolorem veniam alias
                                        animi placeat ab, quasi, laborum
                                        expedita vitae perspiciatis molestiae
                                        cumque ex, sint cupiditate! Fugit.
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <div className={classes.box3}>
                <Box sx={{ flexGrow: 1 }}>
                    <Container>
                        <Typography
                            variant="h1"
                            gutterBottom
                            className={classes.titleBox2}
                        >
                            Les fonctionnalités qui s'adaptent à votre activité
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <PieChartIcon fontSize="large" />
                                        <Typography
                                            variant="h5"
                                            className={classes.titleCard}
                                        >
                                            Soyez averti
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatibus, placeat alias! Illum,
                                            quisquam sunt fugiat voluptas minima
                                            ducimus omnis maxime temporibus
                                            amet. Dolores voluptatibus ex nisi
                                            quas. Amet, nisi sed.{" "}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <PieChartIcon fontSize="large" />
                                        <Typography
                                            variant="h5"
                                            className={classes.titleCard}
                                        >
                                            Faites vos inventaires
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatibus, placeat alias! Illum,
                                            quisquam sunt fugiat voluptas minima
                                            ducimus omnis maxime temporibus
                                            amet. Dolores voluptatibus ex nisi
                                            quas. Amet, nisi sed.{" "}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <NotificationAddIcon fontSize="large" />
                                        <Typography
                                            variant="h5"
                                            className={classes.titleCard}
                                        >
                                            Ajoutez vos taxes
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatibus, placeat alias! Illum,
                                            quisquam sunt fugiat voluptas minima
                                            ducimus omnis maxime temporibus
                                            amet. Dolores voluptatibus ex nisi
                                            quas. Amet, nisi sed.{" "}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <PieChartIcon fontSize="large" />
                                        <Typography
                                            variant="h5"
                                            className={classes.titleCard}
                                        >
                                            Catégorisez vos
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatibus, placeat alias! Illum,
                                            quisquam sunt fugiat voluptas minima
                                            ducimus omnis maxime temporibus
                                            amet. Dolores voluptatibus ex nisi
                                            quas. Amet, nisi sed.{" "}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
