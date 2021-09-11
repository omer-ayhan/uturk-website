import React from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";
import ChannelItem from "./ChannelItem";
import { Tabs, Tab, AppBar, Typography, Box } from "@material-ui/core";
import MainStyle from "./MainStyle";
import { useSelector } from "react-redux";
import { channels, events } from "../data/channelSlices";

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
  const checked = useSelector((state) => state.nav.theme);
  const [useStyles] = MainStyle();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterChannels = () => {
    let match;
    if (cat === "Futbol") {
      match = events.football;
    } else if (cat === "Basketbol") {
      match = events.basketball;
    }
    if (filter === "live") {
      return match
        .filter((e) => e.isLive === true)
        .map((e, index) => (
          <EventItem
            key={index}
            isLive={e.isLive}
            image_team1={e.team_logo1}
            image_team2={e.team_logo2}
            name_team1={e.team_name1}
            name_team2={e.team_name2}
            start={e.start}
            link={e.link}
            title={e.title}
            tags={e.tags}
          />
        ));
    } else if (filter === "offline") {
      return match
        .filter((e) => e.isLive === false)
        .map((e, index) => (
          <EventItem
            key={index}
            isLive={e.isLive}
            image_team1={e.team_logo1}
            image_team2={e.team_logo2}
            name_team1={e.team_name1}
            name_team2={e.team_name2}
            start={e.start}
            link={e.link}
            title={e.title}
            tags={e.tags}
          />
        ));
    } else {
      return match.map((e, index) => (
        <EventItem
          key={index}
          isLive={e.isLive}
          image_team1={e.team_logo1}
          image_team2={e.team_logo2}
          name_team1={e.team_name1}
          name_team2={e.team_name2}
          start={e.start}
          link={e.link}
          title={e.title}
          tags={e.tags}
        />
      ));
    }
  };
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
        {channels.map((e, index) => (
          <ChannelItem
            key={index}
            image={e.logo}
            name={e.name}
            link={e.link}
            title={e.title}
            tags={e.tags}
          />
        ))}
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
