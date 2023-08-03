import React from "react";
import "./style.css";
import userImg from "./profile.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import Contacts from "./components/Contacts";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SocialMedia />
      <Contacts />
    </>
  );
}

export default App;
