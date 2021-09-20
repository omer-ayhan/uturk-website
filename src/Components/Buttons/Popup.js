import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, Tooltip, Typography } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";

export default function Popup({
  btn,
  out,
  isButton,
  start,
  isRadio,
  titleText,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = "simple-popover";
  const handleButton = () => {
    if (isButton) {
      return (
        <Tooltip title={<Typography variant="body2">{titleText}</Typography>}>
          <Button aria-describedby={id} onClick={handleClick} startIcon={start}>
            {btn}
          </Button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title={<Typography variant="body2">{titleText}</Typography>}>
          <IconButton
            aria-label="icon"
            aria-describedby={id}
            onClick={handleClick}>
            {btn}
          </IconButton>
        </Tooltip>
      );
    }
  };

  return (
    <>
      {handleButton()}
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <Box onClick={isRadio ? undefined : handleClose}>{out}</Box>
      </Popover>
    </>
  );
}

Popup.propTypes = {
  btn: PropTypes.element,
  out: PropTypes.node,
  isButton: PropTypes.bool,
  isRadio: PropTypes.bool,
  start: PropTypes.node,
  titleText: PropTypes.string,
};
