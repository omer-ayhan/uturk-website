import React from "react";
import { Button, Typography } from "@material-ui/core";
import FB from "../images/FB.png";
import GS from "../images/GS.png";

function ChannelItem({ isLive }) {
  return (
    <Button fullWidth={true}>
      <div className="channelItem">
        <div className="logo_container">
          <div className="logo_live"></div>
          <Typography variant="subititle2" align="center" color="white">
            Canlı
          </Typography>
        </div>
        <div className="teamsBox">
          <div className="team-logo-box">
            <div className="team-logo">
              <img src={FB} alt="right team" />
            </div>
            <p>
              <Typography variant="h6" align="center">
                <b>FB</b>
              </Typography>
            </p>
          </div>
          <div className="team-status">
            <div className="score">
              <Typography variant="h3" align="center">
                <b>-</b>
              </Typography>
            </div>
            <div className="start-time">
              <Typography variant="subtitle1" align="center" color="white">
                18:00
              </Typography>
            </div>
          </div>
          <div className="team-logo-box">
            <div className="team-logo">
              <img src={GS} alt="left team" />
            </div>
            <Typography variant="h6" align="center">
              <b>GS</b>
            </Typography>
          </div>
        </div>
      </div>
    </Button>
  );
}

export default ChannelItem;
