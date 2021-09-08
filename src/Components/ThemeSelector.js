import React from "react";
import { Switch } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { themeMain, images } from "./MainStyle";

function ThemeSelector() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <ThemeProvider theme={themeMain}>
      <div id="darkMode">
        <img
          className="theme-img"
          src={checked ? images.light : images.dark}
          alt=""
        />
        <Switch size="small" checked={checked} onChange={toggleChecked} />
      </div>
    </ThemeProvider>
  );
}

export default ThemeSelector;
