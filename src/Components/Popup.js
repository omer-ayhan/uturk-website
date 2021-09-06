import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Button, makeStyles } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  myClassName: {
    "&:hover": {
      backgroundColor: "#8fcd5d66",
    },
  },
}));

function Popup({ btn, out, isButton, start }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButton = () => {
    if (isButton) {
      return (
        <Button
          className={classes.myClassName}
          onClick={handleClick}
          startIcon={start}>
          {btn}
        </Button>
      );
    } else {
      return (
        <IconButton
          className={classes.myClassName}
          aria-label="cart"
          onClick={handleClick}>
          {btn}
        </IconButton>
      );
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {handleButton()}
      <Popover
        id={id}
        open={open}
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
        {out}
      </Popover>
    </>
  );
}

export default Popup;
