import React from "react";
import { Switch } from "@material-ui/core";
import dark from "../images/dark.png";
import light from "../images/light.png";

function ThemeSelector() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div id="darkMode">
      <img src={checked ? light : dark} alt="" />
      <Switch checked={checked} onChange={toggleChecked} />
    </div>
  );
}

export default ThemeSelector;
