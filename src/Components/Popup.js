import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  myClassName: {
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
}));
function Popup({ btn, out, disableHover }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        className={disableHover ? classes.myClassName : undefined}
        disableRipple={disableHover ? true : false}
        aria-label="cart"
        onClick={handleClick}>
        {btn}
      </IconButton>
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
