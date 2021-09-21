import React, { lazy, Suspense } from "react";
import { Box, Card } from "@material-ui/core";
import MainStyle from "./MainStyle";
import { useSelector } from "react-redux";
import { Skeleton } from "@material-ui/lab";
const VideoFrame = lazy(() => import("./VideoFrame"));

export const Loading = () => {
  return (
    <Box
      m="0"
      p="30px"
      width="90%"
      height="100%"
      display="flex"
      flexDirection="column"
      justify-content="center"
      alignItems="center"
      style={{ gap: 0 }}>
      <Skeleton style={{ marginTop: "40px" }} width="100%" height={50} />
      <Skeleton style={{ marginTop: "-40px" }} width="100%" height={400} />
    </Box>
  );
};

function VideoBox() {
  const channel = useSelector((state) => state.channel);
  const [useStyles] = MainStyle();
  const classes = useStyles();
  return (
    <Card className={`${classes.papers}`}>
      <Box className={`${classes.papersVideo}`} p="10px" height="500px">
        <Suspense fallback={<Loading />}>
          <VideoFrame channel={channel} />
        </Suspense>
      </Box>
    </Card>
  );
}
export default VideoBox;
