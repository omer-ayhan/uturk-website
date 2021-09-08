import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import logo from "../images/uturk_logo.png";

function Footer() {
  return (
    <Box
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
                style={{
                  color: "rgba(69, 69, 69, 1)",
                  textAlign: "center",
                  margin: "0 10px",
                }}
                href="#"
                rel="noopener">
                {e}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={12}>
          <Box
            width="100%"
            p="0px"
            display="flex"
            direction="row-reverse"
            alignItems="flex-end">
            <Box pl="10px">
              <Typography
                gutterBottom
                variant="button"
                component="span"
                fontWeight="fontWeightBold"
                align="center">
                Copyright © Utürk 2021
              </Typography>
            </Box>
            <Box flexGrow={0.8}>
              <span id="logo">
                <Link href="#logo">
                  <img className="logo-img" src={logo} alt="logo" />
                </Link>
              </span>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
