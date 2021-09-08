import { Box, Card, CardMedia } from "@material-ui/core";
import React from "react";

function VideoBox() {
  return (
    <Card>
      <Box p="15px">
        <CardMedia
          component="iframe"
          image="http://git.player24.xyz/cloudbozguncu/god.html"
          height="500"
          allowFullScreen="allowfullscreen"
        />
      </Box>
    </Card>
  );
}
export default VideoBox;
