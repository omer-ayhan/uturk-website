import React from "react";
import {
  Zoom,
  Fab,
  useScrollTrigger,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MainStyle from "../MainStyle";
import { useTranslation } from "react-i18next";

function BackToTop() {
  const [useStyles] = MainStyle();
  const { t } = useTranslation();
  const classes = useStyles();
  const anchor = document.querySelector("#back-to-top-anchor");
  const handleClick = React.useCallback(
    (event) => {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    [anchor]
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topBtn}>
        <Tooltip
          title={
            <Typography variant="body2">{t("Tooltips.6.name")}</Typography>
          }>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ion-icon
              name="caret-up"
              size="large"
              style={{ color: "#fff", marginBottom: "5px" }}></ion-icon>
          </Fab>
        </Tooltip>
      </div>
    </Zoom>
  );
}

export default React.memo(BackToTop);
