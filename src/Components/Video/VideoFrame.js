import React from "react";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";

function VideoFrame({ channel }) {
  return (
    <CardMedia
      aria-label="video"
      component="iframe"
      image={channel.iframe}
      allowFullScreen="allowfullscreen"
      height="100%"
    />
  );
}

VideoFrame.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default React.memo(VideoFrame);
