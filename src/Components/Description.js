import React from "react";
import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Popup from "./Popup";
import share from "../images/share.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";

function Description() {
  return (
    <Card id="descriptionBox" style={{ boxShadow: "none" }}>
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
            <Box m={1}>
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
              <Typography variant="button" style={{ color: "#fff" }}>
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
        <Grid item xs={12} sm={5}></Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant="h6">
            <Box fontWeight="fontWeightMedium">
              {[
                "Canlı",
                "Bein Sport",
                "Maç Yayınları",
                "Canlı Maç",
                "Lig TV",
              ].map((e) => (
                <Box display="inline">
                  <Chip style={{ margin: "0 9px 9px 0" }} label={e} />
                </Box>
              ))}
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Description;
