import React from "react";
import { Box, Card, CardHeader, Typography } from "@material-ui/core";
import MainStyle, { images } from "./MainStyle";

function TwitterBox() {
  const [useStyles] = MainStyle();
  const classes = useStyles();
  const hamburger = images.hamburger;
  return (
    <Card className={classes.papers}>
      <CardHeader
        className={classes.twitterBox}
        avatar={<img src={hamburger} alt="" />}
        title={
          <Typography gutterBottom variant="h6" component="h6">
            Twitter Akışı
          </Typography>
        }
      />
      <Box height="400px" p="2px 10px"></Box>
    </Card>
  );
}

export default TwitterBox;
