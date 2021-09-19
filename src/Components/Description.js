import React from "react";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Popup from "./Buttons/Popup";
import AdvertiseBox from "./Extra/AdvertiseBox";
import MainStyle, { images, nav_links } from "./MainStyle";
import { useSelector } from "react-redux";

function Description() {
  const desc = useSelector((state) => state.channel);
  const [useStyles, , stylesMain] = MainStyle();
  const classes = useStyles();
  const [share, mail] = [images.share, images.mail];
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
                btn={<img src={share} alt="" />}
                out={
                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                      {nav_links.social_links.slice(1).map((e, index) => (
                        <IconButton key={index}>
                          <img src={e.img_link} alt="" />
                        </IconButton>
                      ))}
                    </ListItem>
                  </List>
                }
                isButton={false}
              />
            </Box>
            <Box
              className={classes.footerLinkResp}
              p={0.6}
              fontWeight="fontWeightMedium"
              bgcolor="rgba(119, 190, 60, 1)"
              borderRadius="30px">
              <Typography variant="button" style={stylesMain.linkWhite}>
                Paylaş Bize Destek Ol
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
              Sponsorluk, Şikayet, İstek:
            </Box>
            <Box fontWeight="fontWeightMedium">
              <img src={mail} alt="mail" />{" "}
              <span className={classes.textTheme}>uturknet@gmail.com</span>
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
