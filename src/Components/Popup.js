import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, makeStyles } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles((theme) => ({
  myClassName: {
    "&:hover": {
      backgroundColor: "#8fcd5d66",
    },
  },
}));

export default function Popup({ btn, out, isButton, start }) {
  const classes = useStyles();

  const handleButton = (popupState) => {
    if (isButton) {
      return (
        <Button
          className={classes.myClassName}
          {...bindTrigger(popupState)}
          startIcon={start}>
          {btn}
        </Button>
      );
    } else {
      return (
        <IconButton
          variant="contained"
          className={classes.myClassName}
          aria-label="cart"
          {...bindTrigger(popupState)}>
          {btn}
        </IconButton>
      );
    }
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          {handleButton(popupState)}
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}>
            <Box>{out}</Box>
          </Popover>
        </>
      )}
    </PopupState>
  );
}

// Popup.propTypes={
//   btn:
// }
