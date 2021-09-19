import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeLink } from "../../data/channelSlices";
// import { removeNotify, updateNotify } from "../../data/navSlices";
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
        // snapshot.docChanges().forEach((change) => {
        //   if (change.type === "removed") {
        //     dispatch(removeNotify());
        //   }
        // });
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    data !== null &&
    data.map((item, index) => (
      <Button
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
  );
}

export default ChannelItem;
