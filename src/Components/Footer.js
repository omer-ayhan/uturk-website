import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import MainStyle, { images, stylesMain } from "./MainStyle";

function Footer() {
  const [useStyles] = MainStyle();

  const classes = useStyles();
  const logo = images.logo;
  return (
    <Box
      className={classes.footerParent}
      p="16px 0 0px 0"
      width="100%"
      height="130px"
      align="center">
      <Grid
        container
        direction={"row"}
        spacing={0}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={6} sm={8}>
          <Box mb="50px">
            {["Yardım", "Yasal Uyarı", "İletişim"].map((e) => (
              <Link
                className={classes.textTheme}
                style={{ ...stylesMain.linkMain, margin: "0 10px" }}
                href="#"
                rel="noopener">
                <Typography variant="h6" component="span">
                  {e}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Link href="#logo">
            <img id="logo-img" src={logo} alt="logo" />
          </Link>
        </Grid>
      </Grid>
      <Box className={classes.footerChild}>
        <Typography
          className={classes.textTheme}
          gutterBottom
          variant="button"
          component="span"
          fontWeight="fontWeightBold"
          align="center">
          Copyright © Utürk 2021
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
