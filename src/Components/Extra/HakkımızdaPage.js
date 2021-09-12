import { Box, Typography } from "@material-ui/core";
import React from "react";
import AdvertiseBox from "./AdvertiseBox";
import MainStyle from "../MainStyle";

function HakkımızdaPage() {
  const [, , stylesMain] = MainStyle();
  return (
    <Box px="80px" mb="40px" height="100%">
      <Typography variant="subtitle2" style={stylesMain.textTheme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur
        aperiam vitae maxime explicabo voluptates eveniet reiciendis veritatis?
        Quibusdam perferendis excepturi nemo quis reiciendis, pariatur, placeat
        culpa, illum dolorum id natus quod quos libero accusamus minima tempore
        nihil aut magnam. Officiis culpa tenetur nemo at dolorum sequi quidem
        amet. Quam modi illum harum dolor vel impedit ad vitae aliquid
        accusantium molestias eum quis, officia natus quo cum beatae libero
        dignissimos soluta sit tempora commodi. Illum officiis dignissimos porro
        doloremque. Esse nobis aliquid nostrum quae sapiente totam placeat nulla
        cumque accusamus dolorem at laboriosam officiis perspiciatis ipsa, eum
        velit praesentium numquam consequatur vel aliquam sit? Assumenda
        nesciunt repellendus provident minima similique, placeat distinctio
        ducimus, pariatur dolores aliquam, ut delectus fugiat eius maxime modi
        nulla ipsa voluptate accusantium deserunt voluptatibus veniam dolor vero
        quam. Illo minima voluptatem magnam facere maxime blanditiis debitis
        commodi eos totam? Reprehenderit architecto, unde id veniam adipisci
        praesentium?
      </Typography>
      <AdvertiseBox />
      <AdvertiseBox />
    </Box>
  );
}

export default HakkımızdaPage;
