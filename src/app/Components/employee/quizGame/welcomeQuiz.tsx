import { Box, CardActionArea, CardActions, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, Card, CardContent, Container, Grid, List } from "semantic-ui-react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getAllQuiz } from "../../../../_redux/actions/quiz";
import { useSelector } from "react-redux";
import { RootState } from "../../../../_redux/store/configureStore";
import { useStyles } from "../../../Components/admin/Gestion Quiz/quizStyle"
import { useNavigate } from "react-router-dom";
export default function WelcomeGame() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  let navigate = useNavigate();

  const quizs = useSelector(
    (state: RootState) => state.quizSlice.NewQuiz
  );
  useEffect(() => {
    dispatch(getAllQuiz());
  }, [dispatch]);
  const startQuiz = (quizid) => {
    navigate(`/quizz/${quizid}`);

  }
  return (
    <Container sx={{ mt: 8 }}>
<h2 style={{justifyContent:"center",display:"flex",marginBottom:"10px"}}>veuillez choisir le quiz que vous voulez jouer</h2>
      <Box style={{
        display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"
      }}>
        {quizs.map((el) => (
          <Grid direction="row"

          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                marginTop:"10px" ,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 200,
                "& ul": { padding: 0 },
              }}
              aria-label="contacts"
            >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    // style={{ objectFit: "fill" }}
                    image={
                      (process.env.REACT_APP_UPLOADS_IMAGES +
                        el.image) as any
                    }
                    alt="Quiz image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {el.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" onClick={() => startQuiz(el.id)} >

                    Start Quiz
                  </Button>

                </CardActions>
              </Card>
            </List>
          </Grid>
        ))}
      </Box>
    </Container>
  )

}