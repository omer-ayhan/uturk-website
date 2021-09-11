import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeLink } from "../data/channelSlices";

function ChannelItem({ image, name, link, title, tags }) {
  const dispatch = useDispatch();

  return (
    <Button
      fullWidth={true}
      onClick={() =>
        dispatch(changeLink({ link: link, title: title, tags: tags }))
      }>
      <div className="channelItem" style={{ height: "40px", padding: "20px" }}>
        <div
          className="teamsBox"
          style={{
            paddingBottom: "7px",
            justifyContent: "flex-start",
            gap: "20px",
          }}>
          <div className="team-logo" style={{ width: "40px", height: "40px" }}>
            <img src={image} alt="channel logo" />
          </div>
          <Typography variant="subtitle2" align="center">
            <b>{name}</b>
          </Typography>
        </div>
      </div>
    </Button>
  );
}

export default ChannelItem;
