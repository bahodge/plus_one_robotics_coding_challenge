import React from "react";
import "./App.css";
import { searchByTitle } from "./services/request_service";

searchByTitle("cats");

function App() {
  return <div className="App">Hello there</div>;
}

export default App;
