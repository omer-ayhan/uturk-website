import { Box, Card, CardMedia } from "@material-ui/core";
import React from "react";

function VideoBox() {
  return (
    <Card>
      <Box p="15px">
        <CardMedia
          component="iframe"
          image="https://www.youtube.com/embed/LZgeIReY04c"
          height="500"
          allowFullScreen="allowfullscreen"
        />
      </Box>
    </Card>
  );
}
export default VideoBox;
