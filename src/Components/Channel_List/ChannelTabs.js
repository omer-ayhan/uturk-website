import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";
import ChannelItem from "./ChannelItem";
import { Tabs, Tab, AppBar, Typography, Box } from "@material-ui/core";
import MainStyle from "../MainStyle";
import { useSelector } from "react-redux";
import { db } from "../../firebaseConf";
import { channels } from "../../data/channelSlices";

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

export default function ChannelTabs({ filter, cat }) {
  let snapshot = db.collection(cat);
  let perm = db.collection("permanent");
  const checked = useSelector((state) => state.nav.theme);
  const [useStyles] = MainStyle();
  const [data, setData] = useState(null);
  const [changed, setChanged] = useState(false);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const unsubscribe = snapshot.onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === "modified") {
        setData(null);
        setChanged(true);
      }
    });
  });

  useEffect(() => {
    const getChannels = [];
    const preview = snapshot.onSnapshot((snapshot) => {
      if (snapshot.size < 1) {
        setData(null);
        return;
      }
      snapshot.forEach((doc) =>
        getChannels.push({ ...doc.data(), id: doc.id })
      );
      setData(getChannels);
    });
    return () => {
      unsubscribe();
      preview();
      setChanged(false);
    };
  }, [cat, changed]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterChannels = () => {
    if (data !== null) {
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
    } else
      return (
        <Box fontWeight="fontWeightBold" textAlign="center">
          <Typography variant="h5" component="div">
            No Data
          </Typography>
        </Box>
      );
  };

  const showPermanent = () => {};

  return (
    <>
      <AppBar className={classes.tabs} position="static">
        <Tabs
          TabIndicatorProps={{
            style: { background: "#90CD5D" },
          }}
          centered={true}
          value={value}
          onChange={handleChange}
          aria-label="menu tabs">
          {["7/24", "Canlı Maç", "Sohbet"].map((e, index) => (
            <Tab
              key={index}
              style={{
                minWidth: "126px",
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
        {showPermanent()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {filterChannels()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
}
