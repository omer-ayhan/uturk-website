import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function Popup({ btn, out, isButton, start }) {
  const handleButton = (popupState) => {
    if (isButton) {
      return (
        <Button {...bindTrigger(popupState)} startIcon={start}>
          {btn}
        </Button>
      );
    } else {
      return (
        <IconButton aria-label="cart" {...bindTrigger(popupState)}>
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
            {out}
          </Popover>
        </>
      )}
    </PopupState>
  );
}

Popup.propTypes = {
  btn: PropTypes.element,
  out: PropTypes.node,
  isButton: PropTypes.bool,
  start: PropTypes.node,
};
