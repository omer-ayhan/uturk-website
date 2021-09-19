import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import MainStyle, { images } from "../MainStyle";
import { changeLink } from "../../data/channelSlices";

function NotificationBox() {
  const notify = useSelector((state) => state.notify);
  const dispatch = useDispatch();
  const [useStyles] = MainStyle();
  const classes = useStyles();
  console.log(notify);
  return (
    <Box
      p="12px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="350px"
      height="400px"
      style={{ gap: "20px", overflowX: "hidden", overflowY: "scroll" }}>
      {notify.notify_data !== null &&
        notify.notify_data?.map((item) => {
          if (item.cat === "permanent") {
            return (
              <Button
                key={item.id}
                fullWidth={true}
                onClick={() =>
                  dispatch(
                    changeLink({
                      link: item.stream_url,
                      title: item.stream_title,
                      tags: item.tags,
                    })
                  )
                }
                style={{
                  width: "100%",
                  height: "110px",
                  boxShadow: "0 4px 15px 3px rgba(110, 110, 110, 0.25)",
                }}>
                <Box
                  pl="30px"
                  width="100%"
                  height="100%"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  style={{ gap: "20px" }}>
                  <Box
                    width="60px"
                    height="60px"
                    className={classes.notifyImgBox}>
                    <img
                      style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.logo2}
                      alt=""
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="170px"
                    height="20px">
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.notifyText}>
                      {item.channel_name}
                    </Typography>
                  </Box>
                </Box>
              </Button>
            );
          } else {
            return (
              <Button
                key={item.id}
                onClick={() =>
                  dispatch(
                    changeLink({
                      link: item.stream_url,
                      title: item.stream_title,
                      tags: item.tags,
                    })
                  )
                }
                fullWidth={true}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "130px",
                  boxShadow: "0 4px 15px 3px rgba(110, 110, 110, 0.25)",
                }}>
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center">
                  <Box
                    width="60px"
                    height="60px"
                    className={classes.notifyImgBox}>
                    <img
                      style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.logo1}
                      alt=""
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100px"
                    height="20px">
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.notifyText}
                      style={{ width: "150px", fontSize: "1.35rem" }}>
                      {item.team_name1} - {item.team_name2}
                    </Typography>
                  </Box>
                  <Box
                    width="60px"
                    height="60px"
                    className={classes.notifyImgBox}>
                    <img
                      style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.logo2}
                      alt=""
                    />
                  </Box>
                </Box>
              </Button>
            );
          }
        })}
    </Box>
  );
}

export default NotificationBox;
