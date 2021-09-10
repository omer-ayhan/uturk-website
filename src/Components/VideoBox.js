import React from "react";
import { Box, Card, CardMedia } from "@material-ui/core";
import MainStyle from "./MainStyle";

function VideoBox() {
  const [useStyles] = MainStyle();
  const classes = useStyles();
  return (
    <Card className={classes.papers}>
      <Box p="15px" height="500px">
        <CardMedia
          component="iframe"
          image="https://www.youtube.com/embed/8XqU6HmicCw"
          allowFullScreen="allowfullscreen"
          height="100%"
        />
      </Box>
    </Card>
  );
}
export default VideoBox;
