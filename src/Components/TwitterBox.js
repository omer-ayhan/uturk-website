import React from "react";
import { Box, Card, CardHeader, Typography } from "@material-ui/core";
import { images } from "./MainStyle";

function TwitterBox() {
  const hamburger = images.hamburger;
  return (
    <Card>
      <CardHeader
        style={{ borderBottom: "3px solid #e5e5e5" }}
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
