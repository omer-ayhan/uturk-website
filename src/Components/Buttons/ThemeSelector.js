import React from "react";
import { Box, Switch } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../data/navSlices";
import MainStyle from "../MainStyle";

function ThemeSelector() {
  const [useStyle, , stylesMain] = MainStyle();
  const classes = useStyle();
  const checked = useSelector((state) => state.nav.theme);
  const dispatch = useDispatch();
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
      {checked ? (
        <ion-icon
          name="moon"
          style={{ ...stylesMain.textTheme, fontSize: "1.1rem" }}></ion-icon>
      ) : (
        <ion-icon
          name="sunny"
          style={{ color: "#ffd233", fontSize: "1.45rem" }}></ion-icon>
      )}
      <Switch
        role="switch"
        aria-checked={checked}
        color="primary"
        size="small"
        checked={checked}
        onChange={toggleChecked}
      />
    </Box>
  );
}

export default ThemeSelector;
