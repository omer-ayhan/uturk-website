import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Popup from "./Popup";
import ChannelTabs from "./ChannelTabs";
import MainStyle, { images } from "./MainStyle";
import "../css/ChannelList.css";

function ChannelList() {
  const [useStyles] = MainStyle();
  const classes = useStyles();
  const [value, setValue] = useState("all");
  const [chevron_down, hamburger, filter] = [
    images.chevron_down,
    images.hamburger,
    images.filter,
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Card id="channelCard" className={classes.papers}>
      <CardHeader
        avatar={<img src={hamburger} alt="" />}
        action={
          <div className="categoryMenu">
            <Popup
              btn={<img src={filter} alt="" />}
              out={
                <List component="nav" aria-label="Live category">
                  <RadioGroup
                    aria-label="options"
                    name="streamFilter"
                    value={value}
                    onChange={handleChange}>
                    <ListItem button>
                      <FormControlLabel
                        style={{ width: "100%" }}
                        color="primary"
                        value="all"
                        control={<Radio color="primary" />}
                        label="Hepsi"
                      />
                    </ListItem>
                    <ListItem button>
                      <FormControlLabel
                        style={{ width: "100%" }}
                        color="primary"
                        value="live"
                        control={<Radio color="primary" />}
                        label="Başlayan Yayınlar"
                      />
                    </ListItem>
                    <ListItem button>
                      <FormControlLabel
                        style={{ width: "100%" }}
                        color="primary"
                        value="offline"
                        control={<Radio color="primary" />}
                        label="Bekleyen Yayınlar"
                      />
                    </ListItem>
                  </RadioGroup>
                </List>
              }
              isButton={false}
              isRadio={true}
            />
            <Popup
              btn={<img src={chevron_down} alt="" />}
              out={
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Futbol" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Basketbol" />
                  </ListItem>
                </List>
              }
              isButton={false}
            />
          </div>
        }
        title={
          <Typography gutterBottom variant="h6" component="h6">
            Futbol
          </Typography>
        }
      />
      <ChannelTabs filter={value} />
    </Card>
  );
}

export default ChannelList;
