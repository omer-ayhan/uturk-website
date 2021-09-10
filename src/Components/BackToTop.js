import React from "react";
import { Zoom, Fab, useScrollTrigger } from "@material-ui/core";
import MainStyle, { images } from "./MainStyle";

export default function BackToTop() {
  const [useStyles] = MainStyle();
  const classes = useStyles();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topBtn}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <img src={images.arrow_down} alt="" />
        </Fab>
      </div>
    </Zoom>
  );
}
