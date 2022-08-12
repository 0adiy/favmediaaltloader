import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { MCard, VCard } from "./mcard";

export default function MasonryImageList(props) {
  const itemData = props.mediaData;

  return (
    <Box sx={{ width: 1, height: 1, mt: 0 }}>
      {itemData.length && (
        <ImageList variant="masonry" cols={4} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>{props.mediaType === "Image" ? <MCard url={item.url} name={item.name} /> : <VCard url={item.url} name={item.name} />}</ImageListItem>
          ))}
        </ImageList>
      )}
      {!itemData.length && <Box sx={{ textAlign: "center" }}>No results found</Box>}
    </Box>
  );
}
