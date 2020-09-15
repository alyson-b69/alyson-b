import React from "react";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Portefolio from "./components/Portefolio";
import CV from "./components/CV";
import Contact from "./components/Contact";
import ScrollTopArrow from "./components/ScrollTopArrow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper" data-spy="scroll" data-target="#ab-nav">
      <NavBar />
      <Intro />
      <About />
      <Competences />
      <Experiences />
      <Education />
      <Portefolio />
      <CV />
      <Contact />
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}

export default App;
