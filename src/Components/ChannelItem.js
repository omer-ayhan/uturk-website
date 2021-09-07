import React from "react";
import FB from "../images/FB.png";
import GS from "../images/GS.png";

function ChannelItem() {
  return (
    <div className="channelItem">
      <div className="logo_container">
        <div className="logo_live"></div>
        <span>Canlı</span>
      </div>
      <div className="teamsBox">
        <div className="team-logo-box">
          <div className="team-logo">
            <img src={FB} alt="" />
          </div>
          <p>FB</p>
        </div>
        <div className="team-status">
          <div className="score">
            <b>2 - 1</b>
          </div>
          <div className="start-time">
            <b>18:00</b>
          </div>
        </div>
        <div className="team-logo-box">
          <div className="team-logo">
            <img src={GS} alt="" />
          </div>
          <p>GS</p>
        </div>
      </div>
    </div>
  );
}

export default ChannelItem;
