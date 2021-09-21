import { Box, Typography } from "@material-ui/core";
import React from "react";
import AdvertiseBox from "./AdvertiseBox";
import MainStyle from "../MainStyle";
import { useTranslation } from "react-i18next";

function HakkımızdaPage() {
  const [useStyles, , stylesMain] = MainStyle();
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box className={classes.respMainWrap} px="80px" mb="40px" height="100%">
      <Typography
        aria-label="hakkımızda"
        variant="subtitle2"
        style={stylesMain.textTheme}>
        {t("about_us")}
      </Typography>
      <AdvertiseBox />
      <AdvertiseBox />
    </Box>
  );
}

export default HakkımızdaPage;
