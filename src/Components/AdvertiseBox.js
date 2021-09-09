import { Box } from "@material-ui/core";
import React from "react";

function AdvertiseBox({ top }) {
  return (
    <Box id={top} p="50px 0" color="white" textAlign="center">
      <h3>Advertisement</h3>
    </Box>
  );
}

export default AdvertiseBox;
