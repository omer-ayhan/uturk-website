import { Box } from "@material-ui/core";
import React from "react";

function AdvertiseBox({ id }) {
  return (
    <Box p="50px 0" color="white" textAlign="center">
      <h3 id={id || undefined}>Advertisement</h3>
    </Box>
  );
}

export default AdvertiseBox;
