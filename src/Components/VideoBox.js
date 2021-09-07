import { Card, CardMedia } from "@material-ui/core";
import React from "react";

function VideoBox() {
  return (
    <Card id="videoBox">
      <CardMedia
        component="iframe"
        image="http://git.player24.xyz/cloudbozguncu/god.html"
        height="500"
        allowFullScreen="allowfullscreen"
      />
    </Card>
  );
}
export default VideoBox;
