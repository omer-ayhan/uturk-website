import React from "react";
import { Box, Card, CardMedia } from "@material-ui/core";
import MainStyle from "./MainStyle";
import { useSelector } from "react-redux";

function VideoBox() {
  const channel = useSelector((state) => state.channel);
  const [useStyles] = MainStyle();
  const classes = useStyles();
  return (
    <Card className={`${classes.papers}`}>
      <Box className={`${classes.papersVideo}`} p="10px" height="500px">
        <CardMedia
          aria-label="video"
          component="iframe"
          image={channel.iframe}
          allowFullScreen="allowfullscreen"
          height="100%"
        />
      </Box>
    </Card>
  );
}
export default VideoBox;
