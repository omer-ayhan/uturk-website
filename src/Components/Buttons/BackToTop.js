import React from "react";
import {
  Zoom,
  Fab,
  useScrollTrigger,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MainStyle from "../MainStyle";

export default function BackToTop() {
  const [useStyles] = MainStyle();
  const classes = useStyles();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topBtn}>
        <Tooltip title={<Typography variant="body2">Yukarı Çık</Typography>}>
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
