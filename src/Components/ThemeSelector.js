import React from "react";
import { Switch } from "@material-ui/core";
import dark from "../images/dark.png";
import light from "../images/light.png";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiSwitch: {
      colorSecondary: {
        "&$checked": {
          // Controls checked color for the thumb
          color: "#90CD5D",
        },
      },
      track: {
        // Controls default (unchecked) color for the track
        "$checked$checked + &": {
          // Controls checked color for the track
          opacity: 0.7,
          backgroundColor: "#90CD5D",
        },
      },
    },
  },
});

function ThemeSelector() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <div id="darkMode">
        <img className="theme-img" src={checked ? light : dark} alt="" />
        <Switch size="small" checked={checked} onChange={toggleChecked} />
      </div>
    </ThemeProvider>
  );
}

export default ThemeSelector;
