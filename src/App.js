import React from "react";
import "./App.css";
import MovieSearchForm from "./components/forms/MovieSearchForm";
// import { searchByTitle } from "./services/request_service";

// searchByTitle("cats");

function App() {
  return (
    <div className="App">
      <div>
        <MovieSearchForm />
      </div>
    </div>
  );
}

export default App;
