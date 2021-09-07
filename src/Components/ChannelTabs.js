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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
        provident id obcaecati voluptate unde hic corrupti dolores aliquid
        itaque tempora explicabo quia nihil facere vero repellat, corporis,
        voluptates inventore! Voluptatum consequatur ut dolor perferendis quo
        assumenda qui, libero magnam consectetur maiores officia magni dolores
        error itaque, rem ea dolorum harum, et recusandae aperiam aliquam
        reprehenderit aliquid obcaecati pariatur. Animi magni aliquam repellat,
        dolorum impedit alias? Velit culpa, voluptas voluptatibus maiores
        aspernatur quisquam eaque labore? Pariatur delectus quod laudantium
        fugit dolore cupiditate molestiae consequuntur maxime officia rem
        officiis, illum magni mollitia ab amet, voluptatem vero ad maiores enim
        natus. Expedita ipsam quaerat quia reprehenderit sint ullam dolores
        ipsum cumque corporis nobis error iusto fugiat modi iure, vero
        voluptates. Voluptatibus quibusdam rem nulla asperiores ullam porro
        inventore placeat, dolores enim optio quo vel delectus architecto
        facilis eveniet modi totam alias earum. Numquam nulla debitis
        praesentium ratione voluptates unde animi corporis eos officia doloribus
        facere facilis sed esse itaque tempora accusamus, exercitationem est
        voluptatum. Nam, reprehenderit repellendus unde suscipit error expedita
        rem reiciendis fuga possimus dignissimos similique aliquid dolores eos
        cum ipsam quaerat explicabo sunt. Asperiores, delectus? Magnam beatae
        rerum nam nobis provident ducimus sit est alias? Quasi nisi nobis
        mollitia dolorum.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChannelItem />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
