import React from "react";
import PropTypes from "prop-types";
import ChannelItem from "./ChannelItem";
import { Tabs, Tab, AppBar, Typography, Box } from "@material-ui/core";
import MainStyle from "./MainStyle";
import { useSelector } from "react-redux";

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

export default function ChannelTabs() {
  const checked = useSelector((state) => state.theme.checkTheme.value);
  const [useStyles] = MainStyle();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    </>
  );
}
