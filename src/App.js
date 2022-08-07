import Header from "./components/header.js";
import "./App.css";
import { useState } from "react";
import MasonryImageList from "./components/imagelist.js";

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
