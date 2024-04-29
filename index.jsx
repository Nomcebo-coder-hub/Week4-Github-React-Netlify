import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        Sourced from:{" "}
        <a
          href="https://github.com/Nomcebo-coder-hub/Week4-Github-React-Netlify"
          target="_blank"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM(<App />, rootElement);
