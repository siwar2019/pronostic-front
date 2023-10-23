import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Button} from "semantic-ui-react";
import NavBar from "../../../Components/common/Navbar";
import { useStyles } from "./fantasyStyle";
import Footer from "../../../Components/common/home/Footer";
import box1 from "./../../../assets/fantasy.jpeg";
const FantasyPage = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div>
            <div><img src={box1} alt="" style={{width:"100%" , marginTop:'10vh'}}/></div>
                <Box sx={{ width: "100%" }} className={classes.box}>
                    <Container>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            className={classes.containerFantasy}
                        >
                            <Grid
                                item
                                xs={12}
                                className={classes.gridTitle}
                                md={6}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.title}
                                >
                                    Wind Fantasy
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img
                                    className={classes.imgfantasy}
                                    src="https://e0.365dm.com/22/08/2048x1152/skysports-fpl-fantasy-football_5869286.jpg"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <div>
                <Box sx={{ flexGrow: 1 }} className={classes.fantasyBOx2}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Typography
                                    variant="h6"
                                    className={classes.fantasyLogo}
                                >
                                    Fantasy
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div>
                                    <Typography
                                        className={classes.fantasyTitBox2}
                                    >
                                        Register to Play Fantasy Premier League
                                    </Typography>
                                    <p className={classes.paragBoxFantasy}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Optio, molestias
                                        <strong>
                                            deserunt? Sed hic dolorem veniam
                                            alias
                                        </strong>
                                    </p>
                                </div>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={3}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div>
                                    <Button className={classes.btnFantasy}>
                                        Register
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <div>
                <Container>
                    <Typography className={classes.titleBox2Fantasy}>
                        Latest from The Scout
                    </Typography>
                    <Box className={classes.fantasyBox3}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div>
                                    <img
                                        src="https://resources.premierleague.com/photos/2022/11/16/41cc15bc-839e-4274-be50-1273d016f83d/2022-10-19T203130Z_259663488_UP1EIAJ1L0HLC_RTRMADP_3_SOCCER-ENGLAND-NEW-EVE-REPORT.JPG?width=400&height=266,%20https://resources.premierleague.com/photos/2022/11/16/41cc15bc-839e-4274-be50-1273d016f83d/2022-10-19T203130Z_259663488_UP1EIAJ1L0HLC_RTRMADP_3_SOCCER-ENGLAND-NEW-EVE-REPORT.JPG?width=800&height=532%202x"
                                        alt=""
                                        className={classes.imgBox3}
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
                                    <Container>
                                        <Typography
                                            className={classes.titleBox3Fantasy}
                                        >
                                            FPL Lessons: Trippier an all-round
                                            star
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            className={classes.paragfantasy}
                                        >
                                            The Scout on the defenders who are
                                            benefiting most from the Bonus
                                            Points System
                                        </Typography>
                                        <Typography variant="caption">
                                            16/11/2022
                                        </Typography>
                                    </Container>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <div>
                <Box sx={{ flexGrow: 1 }} className={classes.fantasyBOx4}>
                    <Container>
                        <Grid container spacing={2}>
                             
                            <Grid item xs={12} md={2} className={classes.cardfantasy}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        // image="/static/images/cards/paella.jpg"
                                        src="https://sf.sports.fr/wp-content/uploads/2018/11/Sergio-Ramos-avec-le-Real-Madrid.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            This impressive paella is a perfect
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={2} className={classes.cardfantasy} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        // image="/static/images/cards/paella.jpg"
                                        src="https://sf.sports.fr/wp-content/uploads/2018/11/Sergio-Ramos-avec-le-Real-Madrid.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            This impressive paella is a perfect
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={2} className={classes.cardfantasy}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        // image="/static/images/cards/paella.jpg"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfb4WIjXgC1ajg5f5VY4FvYGU4RctUSN1cINGh535eSKdPHgJgiadPZ8K-0Q0n2DW1tE&usqp=CAU"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            This impressive paella is a perfect
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={2} className={classes.cardfantasy}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        // image="/static/images/cards/paella.jpg"
                                        src="https://i0.wp.com/real-france.fr/wp-content/uploads/2022/11/rb-leipzig-v-real-madrid-group-f-uefa-champions-league-1.jpg?fit=750%2C540&ssl=1"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            This impressive paella is a perfect
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            
                            <Grid
                                item
                                xs={12}
                                md={3}
                                className={classes.squad}
                                
                            >
                                <div>
                                    <Typography
                                        className={classes.squadtitle}
                                    >
                                        Pick Your Squad
                                    </Typography>
                                    <strong className={classes.paragBoxFantasy}>
                                        Use your budget of £100m to pick a squad
                                        of 15 players from the Premier League.
                                    </strong>
                                </div>
                            </Grid>

                            {/* <Grid
                                item
                                xs={12}
                                md={3}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div>
                                    <Button className={classes.btnFantasy}>
                                        Register
                                    </Button>
                                </div>
                            </Grid> */}
                        </Grid>
                    </Container>
                </Box>
            </div>
            <Footer />
        </div>
    );
};

export default FantasyPage;
