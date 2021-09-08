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
import Popup from "./Popup";
import AdvertiseBox from "./AdvertiseBox";
import { images, stylesMain } from "./MainStyle";

function Description() {
  const [facebook, twitter, telegram, share, mail] = [
    images.facebook,
    images.twitter,
    images.telegram,
    images.share,
    images.mail,
  ];
  return (
    <Box>
      <Grid container direction={"row"} spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">
            <Box fontWeight="fontWeightMedium">
              Galatasaray - Fenerbahçe Maçı
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="row-reverse" alignItems="center">
            <Box ml="9px">
              <Popup
                btn={<img src={share} alt="" />}
                out={
                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                      {[facebook, twitter, telegram].map((e) => (
                        <IconButton>
                          <img src={e} alt="" />
                        </IconButton>
                      ))}
                    </ListItem>
                  </List>
                }
                isButton={false}
              />
            </Box>
            <Box
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
        <Grid item xs={13} sm={7}>
          <Typography variant="body1">
            <Box fontWeight="fontWeightMedium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              voluptates perspiciatis libero, ratione hic quasi accusantium
              molestias deleniti magni reprehenderit eius.
            </Box>
          </Typography>
        </Grid>
        <Grid container item direction={"row-reverse"} xs={12} sm={5}>
          <Box mb="8px" fontWeight="fontWeightMedium">
            Sponsorluk, Şikayet, İstek:
          </Box>
          <Box fontWeight="fontWeightMedium">
            <img src={mail} alt="mail" /> uturknet@gmail.com
          </Box>
        </Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant="h6">
            <Box fontWeight="fontWeightBold">
              {[
                "Canlı",
                "Bein Sport",
                "Maç Yayınları",
                "Canlı Maç",
                "Lig TV",
              ].map((e) => (
                <Box m="0 9px 9px 0" display="inline-block">
                  <Chip label={e} />
                </Box>
              ))}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={10} sm={5}></Grid>
        <Grid item xs={14} sm={12}>
          <AdvertiseBox />
        </Grid>
        <Grid item xs={14} sm={12}>
          <AdvertiseBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Description;
