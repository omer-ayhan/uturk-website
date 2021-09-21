import React from "react";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  Link,
} from "@material-ui/core";
import Popup from "./Buttons/Popup";
import AdvertiseBox from "./Extra/AdvertiseBox";
import MainStyle from "./MainStyle";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Description() {
  const desc = useSelector((state) => state.channel);
  const [useStyles, , stylesMain, nav_links] = MainStyle();
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Grid container direction={"row"} spacing={2} alignItems="center">
        <Grid item xs={6} sm={6}>
          <Typography className={classes.textTheme} variant="h5">
            {desc.title}
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Box display="flex" flexDirection="row-reverse" alignItems="center">
            <Box ml="9px">
              <Popup
                btn={
                  <ion-icon
                    name="share-social"
                    size="large"
                    style={{ color: "#90CD5D" }}></ion-icon>
                }
                out={
                  <List aria-label="secondary mailbox folders">
                    <ListItem>
                      {nav_links.social_links
                        .slice(1)
                        .map(({ img_link, link, name }, index) => (
                          <IconButton key={index}>
                            <Link
                              role="link"
                              aria-labelledby={name}
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noreferrer"
                              underline="none">
                              <img
                                className="social-img"
                                src={img_link}
                                alt={name}
                              />
                            </Link>
                          </IconButton>
                        ))}
                    </ListItem>
                  </List>
                }
                isButton={false}
                titleText={t("Tooltips.5.name")}
              />
            </Box>
            <Box
              className={classes.footerLinkResp}
              p={0.6}
              fontWeight="fontWeightMedium"
              bgcolor="rgba(119, 190, 60, 1)"
              borderRadius="30px">
              <Typography variant="button" style={stylesMain.linkWhite}>
                {t("desc_extra.0.name")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={5}>
          {desc.tags.map((e, index) => (
            <Box
              key={index}
              m="0 9px 9px 0"
              display="inline-block"
              fontWeight="fontWeightBold">
              <Chip label={e} key={index} />
            </Box>
          ))}
        </Grid>
        <Grid
          container
          item
          direction={"column"}
          xs={6}
          sm={7}
          alignItems="flex-end">
          <Box>
            <Box
              className={classes.textTheme}
              mb="10px"
              fontWeight="fontWeightMedium">
              {t("desc_extra.1.name")}
            </Box>
            <Box fontWeight="fontWeightMedium">
              <ion-icon
                name="mail"
                style={{
                  ...stylesMain.textTheme,
                  fontSize: "1.7rem",
                  marginBottom: "-5px",
                }}></ion-icon>{" "}
              {"   "}
              <span aria-label="email" className={classes.textTheme}>
                uturknet@gmail.com
              </span>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12}>
          <AdvertiseBox />
        </Grid>
        <Grid item xs={12} sm={12}>
          <AdvertiseBox />
        </Grid>
      </Grid>
    </>
  );
}

export default Description;
