import { Container, Typography } from "@mui/material";
import { useStyles } from "./emptyPageModalStyle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useTranslation } from "react-i18next";

function emptyPageModal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 8 }}>
      <div className={classes.text}>
        <Typography className={classes.title}>
          {t("emptyPage.NoDataAvailable")} <br></br>{" "}
        </Typography>
        <ErrorOutlineOutlinedIcon
          className={classes.icon}
          sx={{ fontSize: 80 }}
        />
      </div>
    </Container>
  );
}

export default emptyPageModal;
