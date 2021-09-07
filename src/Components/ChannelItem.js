import React from "react";

function ChannelItem() {
  return (
    <div className="channelItem">
      <div className="logo_container">
        <div className="logo_live"></div>
        <span>Canlı</span>
      </div>
      <div className="teamsBox">
        <div className="team-1">
          <div className="team-1-logo">
            <img src="" alt="" />
            <p>FB</p>
          </div>
        </div>
        <div className="team-status">
          <div className="score">
            <b>2 - 1</b>
          </div>
          <div className="start-time">
            <b>18:00</b>
          </div>
        </div>
        <div className="team-2">
          <div className="team-2-logo">
            <img src="" alt="" />
            <p>GS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelItem;
