import Box from "@mui/material/Box";
import { useStyles } from "../../../styles/common/home/pubStyles";
import img1 from "../../../assets/pubImg.png";
import img2 from "../../../assets/pubImg2.jpg";
import { Container } from "@mui/material";

const Pub = () => {
  const classes = useStyles();

  return (
    <Container className={classes.pub}>
      <Box
        component="img"
        src={img1}
        alt="pub"
        sx={{
          width: "100%",
          display: { xs: "none", md: "flex" },
        }}
      />{" "}
      <Box
        component="img"
        src={img2}
        alt="pub"
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" },
        }}
      />
    </Container>
  );
};
export default Pub;
