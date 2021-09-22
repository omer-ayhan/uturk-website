import React, { lazy, Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import EventItem from "./EventItem";
// import ChannelItem from "./ChannelItem";
import {
  Tabs,
  Tab,
  AppBar,
  Typography,
  Box,
  CardMedia,
  Grid,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import MainStyle from "../MainStyle";
import { useSelector } from "react-redux";
import { db } from "../../firebaseConf";
import { useTranslation } from "react-i18next";
const EventItem = lazy(() => import("./EventItem"));
const ChannelItem = lazy(() => import("./ChannelItem"));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box p="2px 8px">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export const LoadingChannel = ({ loadingEvent }) => {
  if (loadingEvent) {
    return (
      <div styles={{ width: "300px", marginTop: "10px" }}>
        <Grid
          role="grid"
          container
          spacing={0}
          alignItems="center"
          justifyContent="center">
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid role="gridcell" item xs={8}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              width="95%"
              height={75}
            />
          </Grid>
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid role="gridcell" item xs={8}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              width="95%"
              height={75}
            />
          </Grid>
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid role="gridcell" item xs={8}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              width="95%"
              height={75}
            />
          </Grid>
          <Grid role="gridcell" item xs={2}>
            <Skeleton
              aria-label="yükleniyor"
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div arial-label="loading" styles={{ width: "300px", marginTop: "10px" }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <Skeleton
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid item xs={10}>
            <Skeleton animation="wave" width={300} height={75} />
          </Grid>
          <Grid item xs={2}>
            <Skeleton
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid item xs={10}>
            <Skeleton animation="wave" width={300} height={75} />
          </Grid>
          <Grid item xs={2}>
            <Skeleton
              animation="wave"
              variant="circle"
              width={50}
              height={50}
            />
          </Grid>
          <Grid item xs={10}>
            <Skeleton animation="wave" width={300} height={75} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

function ChannelTabs({ filter, cat }) {
  let snapshot = db.collection(cat);
  const checked = useSelector((state) => state.nav.theme);
  const { t } = useTranslation();
  const [useStyles] = MainStyle();
  const [data, setData] = useState(null);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  useEffect(() => {
    const unsubscribe = snapshot
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let channels = [];
        setData(null);
        snapshot.docs.map((doc, index) =>
          channels.push({ ...doc.data(), id: doc.id })
        );
        setData([...channels]);
      });
    return () => {
      unsubscribe();
    };
  }, [cat]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterChannels = React.useCallback(() => {
    if (data?.length > 0 && data !== null) {
      if (cat !== "permanent") {
        if (filter === "live") {
          return data
            .filter((e) => e.isLive === true)
            .map((e) => (
              <EventItem
                key={e.id}
                isLive={e.isLive}
                image_team1={e.logo1}
                image_team2={e.logo2}
                name_team1={e.team_name1}
                name_team2={e.team_name2}
                start={e.start_time}
                link={e.stream_url}
                title={e.stream_title}
                tags={e.tags}
              />
            ));
        } else if (filter === "offline") {
          return data
            .filter((e) => e.isLive === false)
            .map((e) => (
              <EventItem
                key={e.id}
                isLive={e.isLive}
                image_team1={e.logo1}
                image_team2={e.logo2}
                name_team1={e.team_name1}
                name_team2={e.team_name2}
                start={e.start_time}
                link={e.stream_url}
                title={e.stream_title}
                tags={e.tags}
              />
            ));
        } else {
          return data.map((e) => (
            <EventItem
              key={e.id}
              isLive={e.isLive}
              image_team1={e.logo1}
              image_team2={e.logo2}
              name_team1={e.team_name1}
              name_team2={e.team_name2}
              start={e.start_time}
              link={e.stream_url}
              title={e.stream_title}
              tags={e.tags}
            />
          ));
        }
      }
    } else return <LoadingChannel loadingEvent />;
  }, [cat, filter, data]);

  return (
    <>
      <AppBar role="heading" className={classes.tabs} position="static">
        <Tabs
          TabIndicatorProps={{
            style: { background: "#90CD5D" },
          }}
          centered={true}
          value={value}
          onChange={handleChange}
          aria-label="menu tabs"
          variant="fullWidth">
          {t("channel_tabs").map((e, index) => (
            <Tab
              key={index}
              style={{
                minWidth: "100px",
                fontSize: ".95rem",
                fontWeight: "bold",
                color:
                  value === index ? "#90CD5D" : checked ? "#fff" : "#313131",
              }}
              label={e}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Suspense fallback={<LoadingChannel loadingEvent={false} />}>
          <ChannelItem cat={cat} />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Suspense fallback={<LoadingChannel loadingEvent />}>
          {filterChannels()}
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box width="100%" height="520px">
          <CardMedia
            aria-label="chat"
            src="https://www5.cbox.ws/box/?boxid=928574&boxtag=xClQ8a"
            width="100%"
            height="100%"
            allow="autoplay"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            component="iframe"
            allowFullScreen="allowfullscreen"
            title="ChannelChat"
          />
        </Box>
      </TabPanel>
    </>
  );
}
ChannelTabs.propTypes = {
  filter: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
};

export default React.memo(ChannelTabs);
