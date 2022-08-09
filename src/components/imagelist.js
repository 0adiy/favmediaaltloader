import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryImageList(props) {
  const itemData = props.mediaData;

  return (
    <Box sx={{ width: 1, height: 1 }}>
      {itemData.length && (
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.url}?w=248&fit=crop&auto=format`} srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.name} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {!itemData.length && <Box sx={{ textAlign: "center" }}>No results found</Box>}
    </Box>
  );
}
