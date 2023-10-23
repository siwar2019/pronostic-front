import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useStyles } from "../../../styles/common/home/homePageCarousel";
import imgDesktop1 from "../../../assets/carousel-img1.png";
import imgMobile1 from "../../../assets/carousel-mobile-1.png";
import desktop1 from "../../../assets/BANNER1.png";
import desktop2 from "../../../assets/BANNER22.png";
import mobile1 from "../../../assets/BANNER2Mobbile.png";
import mobile2 from "../../../assets/mobile2.png";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    key: 1,
    label: "World Cup",
    imgDektopPath: imgDesktop1,
    imgMobilePath: imgMobile1,
  },
  {
    key: 2,
    label: "World Cup",
    imgDektopPath: desktop1,
    imgMobilePath: mobile1,
  },
  {
    key: 3,
    label: "World Cup",
    imgDektopPath: desktop2,
    imgMobilePath: mobile2,
  },
];

function HomePageCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const classes = useStyles();
  return (
    <Box className={classes.carousel}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.key}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  className={classes.carouselImages}
                  src={step.imgDektopPath}
                  alt={step.label}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                />
                <Box
                  component="img"
                  className={classes.carouselImagesMobile}
                  src={step.imgMobilePath}
                  alt={step.label}
                  sx={{
                    display: { xs: "flex", sm: "none" },
                  }}
                />
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        activeStep={activeStep}
        className={classes.carouselSteppers}
        style={{ position: "relative" }}
        nextButton={<></>}
        backButton={<></>}
      />
    </Box>
  );
}

export default HomePageCarousel;
