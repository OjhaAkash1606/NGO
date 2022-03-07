import React from "react";
import { About_board_trustee } from "./component/js/About/Board_trustee/About_board_trustee.js";
import { About_leadership } from "./component/js/About/Leadership/About_leadership.js";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../src/component/js/Navbar.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="board_trustee" element={<About_board_trustee />} />
        <Route path="leadership" element={<About_leadership />} />
      </Routes>
    </div>
  );
}

export default App;
