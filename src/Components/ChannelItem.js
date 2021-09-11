import React from "react";
import { Button, Typography } from "@material-ui/core";
import { images } from "./MainStyle";

function ChannelItem() {
  const FB = images.FB;
  return (
    <Button fullWidth={true}>
      <div className="channelItem" style={{ height: "40px", padding: "20px" }}>
        <div
          className="teamsBox"
          style={{
            paddingBottom: "7px",
            justifyContent: "flex-start",
            gap: "20px",
          }}>
          <div className="team-logo" style={{ width: "40px", height: "40px" }}>
            <img src={FB} alt="channel logo" />
          </div>
          <Typography variant="subtitle2" align="center">
            <b>Bein Sports</b>
          </Typography>
        </div>
      </div>
    </Button>
  );
}

export default ChannelItem;
