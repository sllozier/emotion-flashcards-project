import React from "react";
import AllCards from "./components/AllCards";
import SingleCard from "./components/SingleCard";
import DarkMode from "./components/DarkMode";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div id="header">
          <h1>Emotion Flashcards</h1>

          <DarkMode />
        </div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/cards" element={<AllCards />} />
        <Route path="/cards/:cardId/" element={<SingleCard />} />
        <Route path="/" element={<AllCards />} />
      </Routes>
    </div>
  );
}

export default App;

//
