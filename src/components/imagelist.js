import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../asset/data.json";

export default function MasonryImageList() {
  const itemData = data.images.medias;

  return (
    <Box sx={{ width: 1, height: 1, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.url}?w=248&fit=crop&auto=format`} srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.name} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
