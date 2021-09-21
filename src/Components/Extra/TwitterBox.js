import React from "react";
import { Box, Card, CardHeader, Typography } from "@material-ui/core";
import MainStyle, { images } from "../MainStyle";
import { useTranslation } from "react-i18next";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterBox() {
  const [useStyles] = MainStyle();
  const { t } = useTranslation();
  const classes = useStyles();
  const hamburger = images.hamburger;
  return (
    <Card className={classes.papers}>
      <CardHeader
        className={classes.twitterBox}
        avatar={<img src={hamburger} alt="" />}
        title={
          <Typography gutterBottom variant="h6" component="h6">
            {t("twitter")}
          </Typography>
        }
      />
      <Box height="400px" p="2px 10px">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="uturknet"
          options={{ height: 400 }}
        />
      </Box>
    </Card>
  );
}

export default TwitterBox;
