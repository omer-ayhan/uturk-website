import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { nav_links } from "./MainStyle";
import AdvertiseBox from "./AdvertiseBox";

function IletisimPage() {
  return (
    <>
      <Box
        px="80px"
        mb="40px"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ gap: "10px" }}>
        {nav_links.social_links.map(({ img_link, link, name }, index) => (
          <Box
            key={index}
            width="200px"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            style={{ gap: "10px" }}>
            <span>
              <img src={img_link} alt="contact" />
            </span>
            <Link href={link} rel="noopener noreferrer" underline="none">
              <Typography
                color="primary"
                variant="h6"
                align="center"
                component="p">
                {name}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
      <AdvertiseBox />
      <AdvertiseBox />
    </>
  );
}

export default IletisimPage;
