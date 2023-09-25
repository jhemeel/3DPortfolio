import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {About, Contact, Experience, Feedbacks, Hero,  Loader, Navbar, Tech, Works} from "./components"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repete bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <About />
      </div>
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </Router>
  );
};

export default App;
