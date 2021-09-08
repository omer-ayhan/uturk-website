import React from "react";
import { Box, Switch } from "@material-ui/core";
import { images } from "./MainStyle";

function ThemeSelector() {
  const [checked, setChecked] = React.useState(false);
  const [light, dark] = [images.light, images.dark];

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box
      id="darkMode"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <img className="theme-img" src={checked ? light : dark} alt="" />
      <Switch size="small" checked={checked} onChange={toggleChecked} />
    </Box>
  );
}

export default ThemeSelector;
