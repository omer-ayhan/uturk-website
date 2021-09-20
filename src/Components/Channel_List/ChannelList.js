import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Popup from "../Buttons/Popup";
import ChannelTabs from "./ChannelTabs";
import MainStyle, { images } from "../MainStyle";
import "../../css/ChannelList.css";

function ChannelList() {
  const [useStyles, , stylesMain] = MainStyle();
  const classes = useStyles();
  const [value, setValue] = useState("all");
  const [cat, setCat] = useState("football");
  const [title, setTitle] = useState("Futbol");
  const [hamburger] = [images.hamburger];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Card className={`${classes.papers} ${classes.papersChannels}`}>
      <div style={{ display: "inline" }} id="channelCard">
        <CardHeader
          role="heading"
          avatar={<img src={hamburger} alt="" />}
          action={
            <div className="categoryMenu">
              <Popup
                btn={
                  <ion-icon
                    aria-labelledby="filter"
                    style={stylesMain.textTheme}
                    name="filter"></ion-icon>
                }
                out={
                  <List role="list" component="nav" aria-label="Live category">
                    <RadioGroup
                      role="radiogroup"
                      aria-label="options"
                      name="streamFilter"
                      value={value}
                      onChange={handleChange}>
                      <ListItem button>
                        <FormControlLabel
                          aria-label="tüm kanallar"
                          role="form"
                          style={{ width: "100%" }}
                          color="primary"
                          value="all"
                          control={<Radio role="radio" color="primary" />}
                          label="Hepsi"
                        />
                      </ListItem>
                      <ListItem button>
                        <FormControlLabel
                          aria-label="tüm kanallar"
                          role="form"
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
                titleText="Filtre"
              />
              <Popup
                btn={
                  <ion-icon
                    style={stylesMain.textTheme}
                    name="chevron-down"
                    size="large"></ion-icon>
                }
                out={
                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem
                      onClick={() => {
                        setCat("football");
                        setTitle("Futbol");
                      }}
                      button>
                      <Typography variant="h6" component="h6">
                        Futbol
                      </Typography>
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        setCat("basketball");
                        setTitle("Basketbol");
                      }}
                      button>
                      <Typography variant="h6" component="h6">
                        Basketbol
                      </Typography>
                    </ListItem>
                  </List>
                }
                isButton={false}
                titleText="Kategori"
              />
            </div>
          }
          title={
            <Typography
              aria-label={title}
              gutterBottom
              variant="h6"
              component="h6">
              {title}
            </Typography>
          }
        />
        <ChannelTabs filter={value} cat={cat} setCat={setCat} />
      </div>
    </Card>
  );
}

export default ChannelList;
