import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import MainStyle from "../MainStyle";
import { changeLink } from "../../data/channelSlices";

function NotificationBox() {
  const notify = useSelector((state) => state.notify);
  const dispatch = useDispatch();
  const [useStyles] = MainStyle();
  const classes = useStyles();

  const setCatName = (cat) => {
    switch (cat) {
      case "permanent":
        return "7/24 kanal";
      case "football":
        return "Futbol";
      case "basketball":
        return "Basketbol";
      default:
        return "";
    }
  };
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
              <Box mb="3px" width="100%">
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    style={{ fontSize: ".95rem", opacity: ".85" }}
                    variant="subtitle2"
                    component="span">
                    {setCatName(item.cat)}
                  </Typography>
                  <Typography
                    style={{ fontSize: ".95rem", opacity: ".85" }}
                    variant="subtitle2"
                    component="span">
                    {`${item.timestamp
                      .toDate()
                      .toLocaleDateString("tr")} ${item.timestamp
                      .toDate()
                      .toLocaleTimeString("tr")} `}
                  </Typography>
                </Box>
                <Button
                  disableRipple
                  key={item.id}
                  fullWidth={true}
                  style={{
                    cursor: "auto",
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
              </Box>
            );
          } else {
            return (
              <Box width="100%">
                <Box mb="3px" display="flex" justifyContent="space-between">
                  <Typography
                    style={{ fontSize: ".95rem", opacity: ".85" }}
                    variant="subtitle2"
                    component="span">
                    {setCatName(item.cat)}
                  </Typography>
                  <Typography
                    style={{ fontSize: ".95rem", opacity: ".85" }}
                    variant="subtitle2"
                    component="span">
                    {`${item.timestamp
                      .toDate()
                      .toLocaleDateString("tr")} ${item.timestamp
                      .toDate()
                      .toLocaleTimeString("tr")} `}
                  </Typography>
                </Box>
                <Button
                  disableRipple
                  key={item.id}
                  fullWidth={true}
                  style={{
                    cursor: "auto",
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
              </Box>
            );
          }
        })}
    </Box>
  );
}

export default NotificationBox;
