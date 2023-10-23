import HomePageCarousel from "../../Components/common/home/HomePageCarousel";
import Packs from "../../Components/common/home/Packs";
import Navbar from "../../Components/common/Navbar";
import MobileAppSection from "../../Components/common/home/MobileAppSection";
import Services from "../../Components/common/home/Services";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "../../styles/common/home/index";
import News from "../../Components/common/home/news";
import Pub from "../../Components/common/home/Pub";
import Footer from "../../Components/common/home/Footer";
import CopyrightIcon from "@mui/icons-material/Copyright";
export default function Home() {
    let classes = useStyles();
    return (
        <>
            <Navbar />
            <HomePageCarousel />
            <Packs />
            <Box className={classes.itemBackground}>
                <MobileAppSection />
                <Services />
            </Box>
            <News />
            <Pub />
            <Footer />
            <Box className={classes.copyRight}>
                <Stack
                    direction="row"
                    className={classes.copyRightText}
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={1}
                >
                    <CopyrightIcon />
                    <Typography variant="body1">
                        2022 WIND PRONOS- tous droits réservés
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}
