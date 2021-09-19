import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import MainStyle, { images } from "../MainStyle";
import { useDispatch } from "react-redux";
import { changeLink } from "../../data/channelSlices";

function EventItem({
  isLive,
  image_team1,
  image_team2,
  name_team1,
  name_team2,
  start,
  link,
  title,
  tags,
}) {
  const dispatch = useDispatch();
  const [, , stylesMain] = MainStyle();

  const [locked, live] = [images.locked, images.live];

  return (
    <Button
      fullWidth={true}
      disabled={!isLive}
      onClick={() =>
        dispatch(changeLink({ link: link, title: title, tags: tags }))
      }>
      <div className="channelItem">
        {isLive ? (
          <div className="logo_container">
            <object className="logo_live" type="image/svg+xml" data={live}>
              svg-animation
            </object>
            <Typography variant="button" align="center">
              Canlı
            </Typography>
          </div>
        ) : (
          <div className="disabledScreen">
            <img style={stylesMain.lockedBtn} src={locked} alt="" />
          </div>
        )}
        <div className="teamsBox">
          <div className="team-logo-box">
            <div className="team-logo">
              <img src={image_team1} alt="right team" />
            </div>
            <Typography variant="h6" align="center">
              <b>{name_team1}</b>
            </Typography>
          </div>
          <div className="team-status">
            <div className="score">
              <Typography variant="h3" align="center">
                <b>-</b>
              </Typography>
            </div>
            <div className="start-time">
              <Typography variant="body1" align="center">
                <b>{start}</b>
              </Typography>
            </div>
          </div>
          <div className="team-logo-box">
            <div className="team-logo">
              <img src={image_team2} alt="left team" />
            </div>
            <Typography variant="h6" align="center">
              <b>{name_team2}</b>
            </Typography>
          </div>
        </div>
      </div>
    </Button>
  );
}

EventItem.propTypes = {
  isLive: PropTypes.bool,
  image_team1: PropTypes.string.isRequired,
  image_team2: PropTypes.string.isRequired,
  name_team1: PropTypes.string,
  name_team2: PropTypes.string,
  start: PropTypes.string,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default EventItem;
