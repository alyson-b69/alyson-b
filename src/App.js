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
import { Fade } from "react-reveal";

function App() {
  return (
    <div className="wrapper" data-spy="scroll" data-target="#ab-nav">
      <NavBar />
      <Intro />
      <Fade left>
        <About />
      </Fade>
      <Fade>
        <Competences />
      </Fade>
      <Fade left>
        <Experiences />
      </Fade>
      <Fade>
        <Education />
      </Fade>
      <Fade left>
        <Portefolio />
      </Fade>
      <Fade>
        <CV />
      </Fade>
      <Fade left>
        <Contact />
      </Fade>
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}

export default App;
