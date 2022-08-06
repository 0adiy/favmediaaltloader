import Header from "./Components/header.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaType, setMediaType] = useState("all");
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} setMediaType={setMediaType} />
    </div>
  );
}

export default App;
