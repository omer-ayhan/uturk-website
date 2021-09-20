import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import MainStyle, { nav_links } from "../MainStyle";
import AdvertiseBox from "./AdvertiseBox";

function IletisimPage() {
  const [, , stylesMain] = MainStyle();

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
              {index === 0 ? (
                <ion-icon
                  name="mail"
                  style={{
                    ...stylesMain.textTheme,
                    fontSize: "1.7rem",
                    marginBottom: "-5px",
                  }}></ion-icon>
              ) : (
                <img src={img_link} alt="contact" />
              )}
            </span>
            <Link
              role="link"
              aria-label={name}
              target="_blank"
              href={link}
              rel="noopener noreferrer"
              underline="none">
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
