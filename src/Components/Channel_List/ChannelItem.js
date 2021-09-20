import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useDispatch } from "react-redux";
import { changeLink } from "../../data/channelSlices";
import { db } from "../../firebaseConf";

function ChannelItem() {
  let snapshot = db.collection("permanent");
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = snapshot
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let channels = [];
        setData(null);
        snapshot.docs.map((doc, index) =>
          channels.push({ ...doc.data(), id: doc.id })
        );
        setData([...channels]);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return data !== null ? (
    data.map((item, index) => (
      <Button
        aria-label="kanal butonu"
        key={index}
        fullWidth={true}
        onClick={() =>
          dispatch(
            changeLink({
              link: item.stream_url,
              title: item.stream_title,
              tags: item.tags,
            })
          )
        }>
        <div
          className="channelItem"
          style={{ height: "40px", padding: "20px" }}>
          <div
            className="teamsBox"
            style={{
              paddingBottom: "8px",
              justifyContent: "flex-start",
              gap: "20px",
            }}>
            <div
              aria-label="kanal logo"
              className="team-logo"
              style={{ width: "40px", height: "40px" }}>
              <img src={item.logo2} alt="channel logo" />
            </div>
            <Typography variant="subtitle2" align="center">
              <b>{item.channel_name}</b>
            </Typography>
          </div>
        </div>
      </Button>
    ))
  ) : (
    <div arial-label="loading" styles={{ width: "300px", marginTop: "10px" }}>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={2}>
          <Skeleton animation="wave" variant="circle" width={50} height={50} />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" width={300} height={75} />
        </Grid>
        <Grid item xs={2}>
          <Skeleton animation="wave" variant="circle" width={50} height={50} />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" width={300} height={75} />
        </Grid>
        <Grid item xs={2}>
          <Skeleton animation="wave" variant="circle" width={50} height={50} />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" width={300} height={75} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ChannelItem;
