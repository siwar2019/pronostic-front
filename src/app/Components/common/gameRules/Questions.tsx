import { Container, Typography } from "@mui/material";
import { useStyles } from "../../../styles/common/gameRules/questions";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => {
  const classes = useStyles();
  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const lang = localStorage.getItem("lang")
  const questionsFr = [
    {
      key: 1,
      question: "Comment commencer sur Wind Pronostics ?",
      content:
        "Vous êtes une entreprise ? Remplissez rapidement le formulaire d'inscription et notre équipe vous contactera pour prendre plus de détails afin d'activer votre compte, cela vous permet d'ajouter vos employés et de commencer à faire des pronostics.",
    },
    {
      key: 2,
      question: "Combien d'employés je peux ajouter ?",
      content:
        "Vous pouvez ajouter une infinité d'employés sauf que vous devez entrer dès le début le nombre limite d'employés.",
    },
    {
      key: 3,
      question: "Quand je peux gagner les points double ?",
      content:
        "Il n'y a pas de règle les matchs qui avaient des points doubles sont choisis aléatoirement.",
    },
    {
      key: 4,
      question: "À quoi sert de calculer la différence ?",
      content:
        "La différence a un effet sur le classement, c'est-à-dire que si deux employés ont les mêmes points, l'employé a moins de différence a le classement le plus élevé.",
    },
  ];

  const questionsEng = [
    {
      key: 1,
      question: "How to start on Wind Pronostics ?",
      content:
        "Are you a company ? Quickly fill out the registration form and our team will contact you to take more details to activate your account, this allows you to add your employees and start making predictions.",
    },
    {
      key: 2,
      question: "How many employees can I add ?",
      content:
        "You can add an infinity of employees but you must enter from the beginning the limit number of employees.",
    },
    {
      key: 3,
      question: "When can I earn double points ?",
      content:
        "There is no rule the matches that had double points are chosen randomly",
    },
    {
      key: 4,
      question: "what is the use of calculating the difference ?",
      content:
        "The difference had an effect on the ranking, i.e. if two employees have the same points, the employee had less number of difference have the high ranking.",
    },
  ];

  return (
    <Container className={classes.pageRoot}>
      {lang === "fr" ? (
        <>
          {questionsFr.map((questionFr) => (
            <Accordion elevation={4}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{questionFr.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{questionFr.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      ) : (
        <>
          {questionsEng.map((questionEng) => (
            <Accordion elevation={4}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{questionEng.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{questionEng.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      )}
    </Container>
  );
};

export default Questions;
