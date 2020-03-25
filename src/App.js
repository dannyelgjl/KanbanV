import React from "react";
import GlobalStyle from "./styles/global.js";

import Board from "./components/Board";

import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Board />
    </>
  );
}

export default App;
