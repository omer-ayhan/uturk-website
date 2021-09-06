import { Card, CardMedia } from "@material-ui/core";
import React from "react";

function VideoBox() {
  return (
    <Card id="videoBox">
      <CardMedia
        component="iframe"
        image="http://153.92.209.109/"
        height="500"
        allowFullScreen="allowfullscreen"
      />
    </Card>
  );
}
export default VideoBox;
