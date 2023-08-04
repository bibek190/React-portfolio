import React from "react";
import "./style.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
