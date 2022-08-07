import Header from "./Components/header.js";
import "./App.css";
import { useState } from "react";
import MasonryImageList from "./Components/imagelist.js";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaType, setMediaType] = useState("all");
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} setMediaType={setMediaType} />
      <MasonryImageList />
    </div>
  );
}

export default App;
