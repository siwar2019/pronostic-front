import { Container, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./emptyDrawPageModalStyle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useTranslation } from "react-i18next";

function EmptyDraw() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 8 }}>
      <p className={classes.text}>
        <Typography className={classes.title}>
          {" "}
          {t("emptyPage.NoDraw")}
        </Typography>
        <ErrorOutlineOutlinedIcon
          className={classes.icon}
          sx={{ fontSize: 80 }}
        />
      </p>
    </Container>
  );
}

export default EmptyDraw;
