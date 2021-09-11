import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import MainStyle, { images, nav_links } from "./MainStyle";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const [useStyles, stylesMain] = MainStyle();

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
            {nav_links.main_links.slice(1).map(({ name, link }, index) => (
              <Link
                key={index}
                component={RouterLink}
                className={classes.textTheme}
                style={{ ...stylesMain.linkMain, margin: "0 10px" }}
                to={link}
                rel="noopener">
                <Typography key={index} variant="h6" component="span">
                  {name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Link component={RouterLink} to="/">
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
