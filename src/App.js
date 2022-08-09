import Header from "./components/header.js";
import "./App.css";
import { useState } from "react";
import MasonryImageList from "./components/imagelist.js";
import data from "./asset/data.json";

function App() {
  const [mediaData, setMediaData] = useState(data.images.medias);
  const [mediaType, setmediaType] = useState("Image");
  const search = (query) => {
    setMediaData(data.images.medias.filter((item) => item.name.includes(query)));
  };
  const changeMedia = (media) => {
    let newData = media === "Image" ? data.images.medias : data.videos.medias;
    setmediaType(media);
    setMediaData(newData);
  };
  return (
    <div>
      <Header search={search} changeMedia={changeMedia} />
      <MasonryImageList mediaData={mediaData} mediaType={mediaType} />
    </div>
  );
}

export default App;
