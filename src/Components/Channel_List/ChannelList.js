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
import { useTranslation } from "react-i18next";

function ChannelList() {
  const [useStyles, , stylesMain] = MainStyle();
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState("all");
  const [cat, setCat] = useState("football");
  const [title, setTitle] = useState(1);
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
                          label={t("filter.0.name")}
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
                          label={t("filter.1.name")}
                        />
                      </ListItem>
                      <ListItem button>
                        <FormControlLabel
                          style={{ width: "100%" }}
                          color="primary"
                          value="offline"
                          control={<Radio color="primary" />}
                          label={t("filter.2.name")}
                        />
                      </ListItem>
                    </RadioGroup>
                  </List>
                }
                isButton={false}
                isRadio={true}
                titleText={t("Tooltips.3.name")}
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
                        setTitle(1);
                      }}
                      button>
                      <Typography variant="h6" component="h6">
                        {t("categories.1.name")}
                      </Typography>
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        setCat("basketball");
                        setTitle(2);
                      }}
                      button>
                      <Typography variant="h6" component="h6">
                        {t("categories.2.name")}
                      </Typography>
                    </ListItem>
                  </List>
                }
                isButton={false}
                titleText={t("Tooltips.4.name")}
              />
            </div>
          }
          title={
            <Typography
              aria-label={title}
              gutterBottom
              variant="h6"
              component="h6">
              {t(`categories.${title}.name`)}
            </Typography>
          }
        />
        <ChannelTabs filter={value} cat={cat} setCat={setCat} />
      </div>
    </Card>
  );
}

export default ChannelList;
