import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { useStyles } from "../../../styles/common/home/newsStyles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

const News = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const news = [
    {
      key: 1,
      image: "https://www.lequipe.fr/_medias/img-photo-jpg/fahid-ben-khalfallah-ici-en-2015-p-lahalle-l-equipe/1500000001714209/0:0,1993:1329-828-552-75/5b3dd.jpg",
      category: "FOOT",
      chipColor: "rgb( 28, 198, 208 )",
      content: "Pour Fahid Ben Khalfallah, l'Australie, adversaire des Bleus, est moins forte que la Tunisie Fahid Ben Khalfallah, Franco-tunisien parti terminer sa carrière en Australie, où il vit depuis, estime que les Socceroos, opposés à l'équipe de France ce mardi (20 heures), alignent l'équipe la plus faible du groupe D.",
    },
    {
      key: 2,
      image: "https://www.lequipe.fr/_medias/img-photo-jpg/les-fans-de-la-tunisie-dimanche-au-souk-de-doha-issei-kato-reuters/1500000001714157/0:0,1998:1332-828-552-75/8ad71.jpg",
      category: "FOOT",
      chipColor: "rgb( 255, 165, 0 )",
      content: "Pour le choc entre la Tunisie et le Danemark, ce mardi après-midi, le stade de la Cité de l'éducation va être rougeoyant.",
    },
    {
      key: 3,
      image: "https://assets-fr.imgfoot.com/media/cache/642x382/saka-637b88de07f79.jpg",
      category: "FOOT",
      chipColor: "rgb( 0, 151, 216 )",
      content:
        "Coupe du Monde : le temps additionnel au cœur des débats :Alors que la 22ème édition de la Coupe du Monde vient tout juste de commencer, le débat sur le temps additionnel fait déjà rage. Depuis le début de la compétition, 65 minutes supplémentaires ont été ajoutées en seulement quatre rencontres.",
    },
    {
      key: 4,
      image: "https://www.topmercato.com/wp-content/uploads/2022/11/Christian-Eriksen-Danemark-selection.jpg",
      category: "FOOT",
      chipColor: "rgb( 28, 198, 208 )",
      content:
        "Le Danemark et la Tunisie s'affrontent pour leurs débuts à la Coupe du monde 2022, mardi à 14 heures, dans un match du groupe D. Chaîne TV, compos probables… Voici les informations à connaître sur la rencontre.",
    },
    {
      key: 5,
      image: "https://www.topmercato.com/wp-content/uploads/2022/10/Endrick-Palmeiras.jpg",
      category: "FOOT",
      chipColor: "rgb( 0, 151, 216 )",
      content:
        "Le PSG aurait formulé une proposition de 80 millions d’euros pour s’attacher les services d’Endrick et de Messinho (aussi connu sous le nom de William Estevão). Les deux éléments évoluent sous la tunique de Palmeiras et sont convoités par les plus grands clubs européens.",
    },
    {
      key: 6,
      image: "https://www.topmercato.com/wp-content/uploads/2022/11/Jude-Bellingham-Angleterre.jpg",
      category: "FOOT",
      chipColor: "rgb( 28, 198, 208 )",
      content:
        "Le PSG fait face à une énorme concurrence, dans le dossier de Jude Bellingham. Liverpool et le Real Madrid seraient pour l’instant en pole pour s’attacher les services du milieu de terrain du Borussia Dortmund. Compte tenu de son début de Coupe du monde, les prix promettent de s’envoler.",
    },
  ];
  const responsive = {
    desktop1: {
      breakpoint: { max: 4000, min: 1000 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1000, min: 780 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 780, min: 464 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className={classes.news}>
      <Typography variant="h4" color="primary" align="center" mb={3}>
        {t("client.Home.newsSectionLabel")}
      </Typography>
      <Carousel responsive={responsive}>
        {news.map((row) => (
          <Card
            elevation={0}
            square={true}
            className={classes.card}
            key={row.key}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={row.image}
                alt="Image"
                className={classes.newsMedia}
              />
              <Chip
                label={row.category}
                className={classes.newsCategory}
                style={{
                  backgroundColor: row.chipColor,
                }}
              />
              <CardContent>
                <Typography variant="body2">
                  {row.content.length > 130
                    ? row.content.substring(0, 135) + "..."
                    : row.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};
export default News;
