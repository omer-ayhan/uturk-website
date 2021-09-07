import React from "react";
import PropTypes from "prop-types";
import ChannelItem from "./ChannelItem";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={2}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    boxShadow: "none",
    borderTop: "3px solid #e5e5e5",
  },
}));

export default function ChannelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Tabs
          TabIndicatorProps={{
            style: { background: "#90CD5D" },
          }}
          centered={true}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example">
          {["7/24", "Canlı Maç", "Sohbet"].map((e, index) => (
            <Tab
              style={{
                minWidth: "120px",
                fontWeight: "bold",
                color: value === index ? "#90CD5D" : "#000",
              }}
              label={e}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ChannelItem isLive={true} />
        <ChannelItem isLive={false} />
        <ChannelItem isLive={false} />
        <ChannelItem isLive={false} />
        <ChannelItem isLive={false} />
        <ChannelItem isLive={false} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChannelItem isLive={true} />
        <ChannelItem isLive={false} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
