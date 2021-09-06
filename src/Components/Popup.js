import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Button } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  myClassName: {
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
}));
function Popup({ btn, out, isButton }) {
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
      return <Button onClick={handleClick}>{btn}</Button>;
    } else {
      return (
        <IconButton aria-label="cart" onClick={handleClick}>
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
