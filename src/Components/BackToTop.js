import React from "react";
import PropTypes from "prop-types";
import { Zoom, Fab, useScrollTrigger } from "@material-ui/core";
import { images, useStyles } from "./MainStyle";

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topBtn}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <ScrollTop {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <img src={images.arrow_down} alt="" />
      </Fab>
    </ScrollTop>
  );
}
