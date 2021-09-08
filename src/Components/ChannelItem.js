import React from "react";
import { Button, Typography } from "@material-ui/core";
import { images, stylesMain } from "./MainStyle";

function ChannelItem({ isLive }) {
  const [locked, FB, GS, live] = [
    images.locked,
    images.FB,
    images.GS,
    images.live,
  ];

  return (
    <Button fullWidth={true} disabled={!isLive}>
      <div className="channelItem">
        {isLive ? (
          <div className="logo_container">
            {/* <div className="logo_live"></div> */}
            <object className="logo_live" type="image/svg+xml" data={live}>
              svg-animation
            </object>
            <Typography variant="subititle2" align="center">
              Canlı
            </Typography>
          </div>
        ) : (
          <>
            <div className="disabledScreen"></div>
            <div
              className="logo_container"
              style={stylesMain.channelItem.disabledScreen}>
              <img src={locked} alt="" />
            </div>
          </>
        )}
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
