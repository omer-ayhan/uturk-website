import React from "react";
import { Box, Switch } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../data/navSlices";
import MainStyle, { images } from "./MainStyle";

function ThemeSelector() {
  const [useStyle] = MainStyle();
  const classes = useStyle();
  const checked = useSelector((state) => state.nav.theme);
  const dispatch = useDispatch();
  const [light, dark] = [images.light, images.dark];
  document.body.style.backgroundColor = checked ? "#313131" : "#fff";

  const toggleChecked = () => {
    dispatch(changeTheme());
  };
  return (
    <Box
      className={classes.darkMode}
      display="flex"
      alignItems="center"
      justifyContent="center">
      <img className="theme-img" src={checked ? light : dark} alt="" />
      <Switch size="small" checked={checked} onChange={toggleChecked} />
    </Box>
  );
}

export default ThemeSelector;
