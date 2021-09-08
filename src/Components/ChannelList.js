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
import "../css/ChannelList.css";
import hamburger from "../images/hamburger.png";
import chevron_down from "../images/chevron-down.png";
import filter from "../images/filter.png";
import ChannelTabs from "./ChannelTabs";

function ChannelList() {
  const [value, setValue] = useState("inactive");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <Card id="channelCard">
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
                        value="inactive"
                        control={<Radio />}
                        label="Başlayan Yayınlar"
                      />
                    </ListItem>
                    <ListItem button>
                      <FormControlLabel
                        value="active"
                        control={<Radio />}
                        label="Bekleyen Yayınlar"
                      />
                    </ListItem>
                  </RadioGroup>
                </List>
              }
              isButton={false}
            />
            <Popup
              btn={<img src={chevron_down} alt="" />}
              out={
                <List component="nav" aria-label="secondary mailbox folders">
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
      <ChannelTabs />
    </Card>
  );
}

export default ChannelList;
