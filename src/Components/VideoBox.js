import { Box, Card, CardMedia } from "@material-ui/core";
import React from "react";

function VideoBox() {
  return (
    <Card>
      <Box p="15px" height="500px">
        <CardMedia
          component="iframe"
          image="https://www.youtube.com/embed/xuwIbQZkvu0"
          allowFullScreen="allowfullscreen"
          height="100%"
        />
      </Box>
    </Card>
  );
}
export default VideoBox;
