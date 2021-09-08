import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { useStyles, images, stylesMain } from "./MainStyle";

function Footer() {
  const classes = useStyles();
  const logo = images.logo;
  return (
    <Box
      className={classes.footerParent}
      p="16px 0 0px 0"
      width="100%"
      height="130px"
      bgcolor="#E8E8E8"
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
                variant="h6"
                style={{ ...stylesMain.linkDark, margin: "0 10px" }}
                href="#"
                rel="noopener">
                {e}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={8}>
          <span id="logo">
            <Link href="#logo">
              <img id="logo-img" src={logo} alt="logo" />
            </Link>
          </span>
        </Grid>
      </Grid>
      <Box className={classes.footerChild}>
        <Typography
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
